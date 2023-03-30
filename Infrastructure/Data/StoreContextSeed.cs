using Core.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                //var path = "../Infrastructure";
                if (!context.PorfTypes.Any())
                {
                    var pfTypesData = File.ReadAllText(path + @"/Data/SeedData/porfTypes.json");
                    var porfTypes = JsonSerializer.Deserialize<List<PorfType>>(pfTypesData);

                    foreach (var item in porfTypes)
                    {
                        context.PorfTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.PostTypes.Any())
                {
                    var ptTypesData = File.ReadAllText(path + @"/Data/SeedData/postTypes.json");
                    var postTypes = JsonSerializer.Deserialize<List<PostType>>(ptTypesData);

                    foreach (var item in postTypes)
                    {
                        context.PostTypes.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Porfs.Any())
                {
                    var pfsData = File.ReadAllText(path + @"/Data/SeedData/porfs.json");
                    var porfs = JsonSerializer.Deserialize<List<Porf>>(pfsData);

                    foreach (var item in porfs)
                    {
                        context.Porfs.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Posts.Any())
                {
                    var ptsData = File.ReadAllText(path + @"/Data/SeedData/posts.json");
                    var pts = JsonSerializer.Deserialize<List<Post>>(ptsData);

                    foreach (var item in pts)
                    {
                        context.Posts.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}
