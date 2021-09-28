using Receptacle.Server.Context;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Receptacle.Server.Repositories
{
    public class IngredientsRepository : RepositoryBase<Ingredient>, IIngredientsRepository
    {
        public IngredientsRepository(ReceptacleContext dbContext) : base(dbContext)
        {
        }
    }
}
