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
    public class PostConfig : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            //builder.Property(p => p.Name).IsRequired().HasMaxLength(255);
            builder.HasOne(t => t.PostType).WithMany()
                .HasForeignKey(p => p.PostTypeId);
        }
    }
}
