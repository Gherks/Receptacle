using Receptacle.Server.Services.Interfaces;
using Receptacle.Shared.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Receptacle.Server.Controllers
{
    [ApiController]
    [Route("api/ingredients")]
    public class IngredientsController : ControllerBase
    {
        private readonly ILogger<IngredientsController> _logger;

        private readonly IIngredientsService _service;

        // The Web API will only accept tokens 1) for users, and 2) having the "API.Access" scope for this API
        //static readonly string[] scopeRequiredByApi = new string[] { "API.Access" };

        public IngredientsController(ILogger<IngredientsController> logger, IIngredientsService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public async Task<IReadOnlyList<IngredientDto>> Get()
        {
            //HttpContext.VerifyUserHasAnyAcceptedScope(scopeRequiredByApi);

            return await _service.GetAllAsync();
        }

        [HttpGet("{ingredientIdentifier}")]
        public async Task<ActionResult<IngredientDto>> Get(string ingredientIdentifier)
        {
            //HttpContext.VerifyUserHasAnyAcceptedScope(scopeRequiredByApi);

            if (Guid.TryParse(ingredientIdentifier, out Guid id))
            {
                IngredientDto ingredientDto = await _service.GetByIdAsync(id);

                if (ingredientDto != null)
                {
                    return Ok(ingredientDto);
                }
            }

            return NoContent();
        }
    }
}
