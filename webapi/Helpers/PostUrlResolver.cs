using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapi.DTOs;

namespace webapi.Helpers
{
    public class PostUrlResolver : IValueResolver<Post, PostToReturnDto, string> 
    {
        private readonly IConfiguration _config;

        public PostUrlResolver(IConfiguration config)
    {
            _config = config;
        }
        public string Resolve(Post source, PostToReturnDto destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.Imageurl))
            {
                return _config["ApiUrl"] + source.Imageurl;
            }
            return null;
        }
    }
}
