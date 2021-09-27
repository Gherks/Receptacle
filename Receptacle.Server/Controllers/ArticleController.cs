using Receptacle.Server.Services.Interfaces;
using Receptacle.Shared.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Receptacle.Server.Controllers
{
    [ApiController]
    [Route("api/article")]
    public class ArticleController : ControllerBase
    {
        private readonly ILogger<ArticleController> _logger;

        private readonly IArticleService _service;

        // The Web API will only accept tokens 1) for users, and 2) having the "API.Access" scope for this API
        static readonly string[] scopeRequiredByApi = new string[] { "API.Access" };

        public ArticleController(ILogger<ArticleController> logger, IArticleService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet("{articleIdentifier}")]
        public async Task<ActionResult<ArticleDto>> Get(string articleIdentifier)
        {
            //HttpContext.VerifyUserHasAnyAcceptedScope(scopeRequiredByApi);

            if (Guid.TryParse(articleIdentifier, out Guid id))
            {
                ArticleDto articleDto = await _service.GetByIdAsync(id);

                if (articleDto != null)
                {
                    return Ok(articleDto);
                }
            }
            else
            {
                ArticleDto articleDto = await _service.GetByNumberAsync(articleIdentifier);

                if (articleDto != null)
                {
                    return Ok(articleDto);
                }
            }

            return NoContent();
        }
    }
}
