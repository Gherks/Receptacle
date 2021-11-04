using Microsoft.EntityFrameworkCore;
using Receptacle.Server.Context;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories
{
    public class IngredientCategoryRepository : RepositoryBase<IngredientCategory>, IIngredientCategoryRepository
    {
        public IngredientCategoryRepository(ReceptacleContext dbContext) : base(dbContext)
        {
        }
    }
}
