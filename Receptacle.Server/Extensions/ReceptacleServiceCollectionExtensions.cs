using Receptacle.Server.Context;
using Receptacle.Server.Repositories;
using Receptacle.Server.Repositories.Interfaces;
using Receptacle.Server.Services;
using Receptacle.Server.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Receptacle.Server.Extensions
{
    public static class ReceptacleServiceCollectionExtensions
    {
        public static IServiceCollection AddReceptacleServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Context
            services.AddDbContext<ReceptacleContext>(options => options.UseSqlServer(configuration.GetConnectionString("ReceptacleLocal")));

            // Repositories
            services.AddScoped(typeof(IAsyncRepository<>), typeof(RepositoryBase<>));
            services.AddScoped<IArticleRepository, ArticleRepository>();
            services.AddScoped<IIngredientsRepository, IngredientsRepository>();

            // Services
            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped<IIngredientsService, IngredientsService>();

            return services;
        }
    }
}