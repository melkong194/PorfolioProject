using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.DTOs;
using webapi.Errors;
using webapi.Helpers;

namespace webapi.Controllers
{

    public class PorfController : BaseApiController
    {
        private readonly IGenericRepo<Porf> _porfsRepo;
        private readonly IGenericRepo<PorfType> _porfTypeRepo;
        private readonly IMapper _mapper;

        public PorfController(IGenericRepo<Porf> porfsRepo,
            IGenericRepo<PorfType> porfTypeRepo, IMapper mapper)
        {
            _porfsRepo = porfsRepo;
            _porfTypeRepo = porfTypeRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<PorfToReturnDto>>> GetPorfs
            ([FromQuery] PorfSpecParams porfParams)
        {
            var spec = new PorfWithTypesSpecification(porfParams);

            var countSpec = new PorfWithFilterForCountSpecification(porfParams);

            var totalItems = await _porfsRepo.CountAsync(countSpec);

            var porfs = await _porfsRepo.ListAsync(spec);

            var data = _mapper
                .Map<IReadOnlyList<Porf>, IReadOnlyList<PorfToReturnDto>>(porfs);

            return Ok(new Pagination<PorfToReturnDto>(porfParams.PageIndex,
                porfParams.PageSize, totalItems, data));

            //return porfs.Select(porf => new PorfToReturnDto
            //{
            //    Id = porf.Id,
            //    Name = porf.Name,
            //    Article = porf.Article,
            //    Imageurl = porf.Imageurl,
            //    Videourl = porf.Videourl,
            //    PorfType = porf.PorfType.Name
            //}).ToList();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PorfToReturnDto>> GetPorf(int id)
        {
            var spec = new PorfWithTypesSpecification(id);
            var porf = await _porfsRepo.GetEntityWithSpec(spec);
            if (porf == null) return NotFound(new ApiResponse(404));
            //return new PorfToReturnDto
            //{
            //    Id = porf.Id,
            //    Name = porf.Name,
            //    Article = porf.Article,
            //    Imageurl = porf.Imageurl,
            //    Videourl = porf.Videourl,
            //    PorfType = porf.PorfType.Name
            //};
            return _mapper.Map<Porf, PorfToReturnDto>(porf);
        }

        [HttpGet("{types}")]
        public async Task<ActionResult<IReadOnlyList<PorfType>>> GetPorfTypes()
        {
            return Ok(await _porfTypeRepo.ListAllAsync());
        }

        [HttpPost("Add")]
        public async Task Add(int porfTypeId, string name, string article, string imageurl, string videourl)
        {
            PorfType pt = await _porfTypeRepo.GetByIdAsync(porfTypeId);
            Porf p = new Porf
            {
                Name = name,
                Article = article,
                Imageurl = imageurl,
                Videourl = videourl,
                PorfType = pt,
                PorfTypeId = porfTypeId
            };
            await _porfsRepo.AddAsync(p);
        }

        //public string Name { get; set; }
        //public string Article { get; set; }
        //public string Imageurl { get; set; }
        //public string Videourl { get; set; }
        //public PorfType PorfType { get; set; }
        //public int PorfTypeId { get; set; }

        [HttpDelete("Delete")]
        public async Task Remove(int id)
        {
            Porf p = await _porfsRepo.GetByIdAsync(id);

            await _porfsRepo.Remove(p);
        }

        [HttpPut("Update")]
        public async Task Update(int porfId, int porfTypeId, string name, string article, string imageurl, string videourl)
        {
            PorfType pt = await _porfTypeRepo.GetByIdAsync(porfTypeId);
            Porf p = new Porf
            {
                Id = porfId,
                Name = name,
                Article = article,
                Imageurl = imageurl,
                Videourl = videourl,
                PorfType = pt,
                PorfTypeId = porfTypeId
            };
            await _porfsRepo.UpdateAsync(p);
        }
    }
}
