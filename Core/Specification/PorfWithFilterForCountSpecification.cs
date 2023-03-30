using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class PorfWithFilterForCountSpecification : BaseSpecification<Porf>
    {
        public PorfWithFilterForCountSpecification(PorfSpecParams PorfParams)
            : base(x =>
                    (string.IsNullOrEmpty(PorfParams.Search) || x.Name.ToLower().Contains(PorfParams.Search)) &&
                    (!PorfParams.TypeId.HasValue || x.PorfTypeId == PorfParams.TypeId)
             )
        {


        }
    }
}
