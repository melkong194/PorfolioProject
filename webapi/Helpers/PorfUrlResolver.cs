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
    public class PorfUrlResolver : IValueResolver<Porf, PorfToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public PorfUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Porf source, PorfToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.Imageurl))
            {
                return _config["ApiUrl"] + source.Imageurl;
            }
            return null;
        }
    }
}
