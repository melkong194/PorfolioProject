using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class PostWithFilterForCountSpecification : BaseSpecification<Post>
    {
        public PostWithFilterForCountSpecification(PostSpecParams postParams)
            : base(x =>
                    (string.IsNullOrEmpty(postParams.Search) || x.Name.ToLower().Contains(postParams.Search)) &&
                    (!postParams.TypeId.HasValue || x.PostTypeId == postParams.TypeId)
             )
        {


        }
    }
}
