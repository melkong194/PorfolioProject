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
    
    public class PostController : BaseApiController
    {
        private readonly IGenericRepo<Post> _postsRepo;
        private readonly IGenericRepo<PostType> _postTypeRepo;
        private readonly IMapper _mapper;

        public PostController(IGenericRepo<Post> postsRepo,
            IGenericRepo<PostType> postTypeRepo, IMapper mapper)
        {
            _postsRepo = postsRepo;
            _postTypeRepo = postTypeRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<PostToReturnDto>>> GetPosts
            ([FromQuery]PostSpecParams postParams)
        {
            var spec = new PostWithTypesSpecification(postParams);
           
            var countSpec = new PostWithFilterForCountSpecification(postParams);
            
            var totalItems = await _postsRepo.CountAsync(countSpec);

            var posts = await _postsRepo.ListAsync(spec);

            var data= _mapper
                .Map<IReadOnlyList<Post>, IReadOnlyList<PostToReturnDto>>(posts);
            
            return Ok(new Pagination<PostToReturnDto>(postParams.PageIndex, 
                postParams.PageSize, totalItems, data));

            //return posts.Select(post => new PostToReturnDto
            //{
            //    Id = post.Id,
            //    Name = post.Name,
            //    Article = post.Article,
            //    Imageurl = post.Imageurl,
            //    Videourl = post.Videourl,
            //    PostType = post.PostType.Name
            //}).ToList();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PostToReturnDto>> GetPost(int id)
        {
            var spec = new PostWithTypesSpecification(id);
            var post = await _postsRepo.GetEntityWithSpec(spec);
            if (post == null) return NotFound(new ApiResponse(404));
            //return new PostToReturnDto
            //{
            //    Id = post.Id,
            //    Name = post.Name,
            //    Article = post.Article,
            //    Imageurl = post.Imageurl,
            //    Videourl = post.Videourl,
            //    PostType = post.PostType.Name
            //};
            return _mapper.Map<Post, PostToReturnDto>(post);
        }

        [HttpGet("{types}")]
        public async Task<ActionResult<IReadOnlyList<PostType>>> GetPostTypes()
        {
            return Ok(await _postTypeRepo.ListAllAsync());
        }

        [HttpPost("Add")]
        public async Task Add(int postTypeId, string name, string article, string imageurl, string videourl )
        {
            PostType pt = await _postTypeRepo.GetByIdAsync(postTypeId);
            Post p = new Post
            {
                Name = name,
                Article = article,
                Imageurl = imageurl,
                Videourl = videourl,
                PostType = pt,
                PostTypeId = postTypeId
            };
            await _postsRepo.AddAsync(p);
        }

        //public string Name { get; set; }
        //public string Article { get; set; }
        //public string Imageurl { get; set; }
        //public string Videourl { get; set; }
        //public PostType PostType { get; set; }
        //public int PostTypeId { get; set; }

        [HttpDelete("Delete")]
        public async Task Remove(int id)
        {
            Post p = await _postsRepo.GetByIdAsync(id);

            await _postsRepo.Remove(p);
        }

        [HttpPut("Update")]
        public async Task Update(int postId, int postTypeId, string name, string article, string imageurl, string videourl)
        {
            PostType pt = await _postTypeRepo.GetByIdAsync(postTypeId);
            Post p = new Post
            {
                Id = postId,
                Name = name,
                Article = article,
                Imageurl = imageurl,
                Videourl = videourl,
                PostType = pt,
                PostTypeId = postTypeId
            };
            await _postsRepo.UpdateAsync(p);
        }
    }
}
