using AutoMapper;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.DTOs;

namespace webapi.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles() 
        {
            CreateMap<Post, PostToReturnDto>()
                .ForMember(desMem => desMem.Type, o => o.MapFrom(s => s.PostTypeId))
                .ForMember(d => d.Imageurl, o => o.MapFrom<PostUrlResolver>());
                ;

            CreateMap<Porf, PorfToReturnDto>()
                .ForMember(desMem => desMem.Type, o => o.MapFrom(s => s.PorfTypeId))
                .ForMember(d => d.Imageurl, o => o.MapFrom<PorfUrlResolver>());
            ;
        }
    }
}
