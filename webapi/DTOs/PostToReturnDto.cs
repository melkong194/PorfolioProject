using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.DTOs
{
    public class PostToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Article { get; set; }
        public string Imageurl { get; set; }
        public string Videourl { get; set; }
        public string Type { get; set; }

    }
}
