using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class PostWithTypesSpecification : BaseSpecification<Post>
    {
        public PostWithTypesSpecification(PostSpecParams postParams)
            : base(x =>
                (string.IsNullOrEmpty(postParams.Search) || x.Name.ToLower().Contains(postParams.Search)) &&
                (!postParams.TypeId.HasValue || x.PostTypeId == postParams.TypeId)
            )
        {
            AddInclude(x => x.PostType);
            AddOrderBy(x => x.Name);
            ApplyPaging(postParams.PageSize * (postParams.PageIndex - 1), postParams.PageSize);
            
            if(!string.IsNullOrEmpty(postParams.Sort))
            {
                switch(postParams.Sort)
                {
                    case "nameAsc":
                        AddOrderBy(p => p.Name.ToLower());
                        break;
                    case "nameDesc":
                        AddOrderByDescending(p => p.Name.ToLower());
                        break;
                    case "idAsc":
                        AddOrderBy(p => p.Id);
                        break;
                    case "idDesc":
                        AddOrderByDescending(p => p.Id);
                        break;
                    default:
                        AddOrderByDescending(p => p.Id);
                        break;
                }
            }
        }

        public PostWithTypesSpecification(int id)
            :base(x => x.Id == id)
        {
            AddInclude(x => x.PostType);
        }
    }
}
