using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Config
{
    public class PorfConfig : IEntityTypeConfiguration<Porf>
    {
        public void Configure(EntityTypeBuilder<Porf> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            //builder.Property(p => p.Name).IsRequired().HasMaxLength(255);
            builder.HasOne(t => t.PorfType).WithMany()
                .HasForeignKey(p => p.PorfTypeId);
        }
    }
}
