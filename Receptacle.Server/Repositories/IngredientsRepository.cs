﻿using Receptacle.Server.Context;
using Receptacle.Server.Entities;
using Receptacle.Server.Repositories.Interfaces;

namespace Receptacle.Server.Repositories
{
    public class IngredientsRepository : RepositoryBase<Ingredient>, IIngredientsRepository
    {
        public IngredientsRepository(ReceptacleContext dbContext) : base(dbContext)
        {
        }
    }
}
