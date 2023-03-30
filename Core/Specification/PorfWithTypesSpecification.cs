using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class PorfWithTypesSpecification : BaseSpecification<Porf>
    {
        public PorfWithTypesSpecification(PorfSpecParams PorfParams)
            : base(x =>
                (string.IsNullOrEmpty(PorfParams.Search) || x.Name.ToLower().Contains(PorfParams.Search)) &&
                (!PorfParams.TypeId.HasValue || x.PorfTypeId == PorfParams.TypeId)
            )
        {
            AddInclude(x => x.PorfType);
            AddOrderBy(x => x.Name);
            ApplyPaging(PorfParams.PageSize * (PorfParams.PageIndex - 1), PorfParams.PageSize);

            if (!string.IsNullOrEmpty(PorfParams.Sort))
            {
                switch (PorfParams.Sort)
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

        public PorfWithTypesSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.PorfType);
        }
    }
}
