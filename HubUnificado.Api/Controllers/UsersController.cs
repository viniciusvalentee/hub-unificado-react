// HubUnificado.Api/Controllers/UsersController.cs
using HubUnificado.Api.Models; // Precisamos "enxergar" a pasta Models
using Microsoft.AspNetCore.Mvc;

namespace HubUnificado.Api.Controllers;

[ApiController]
[Route("api/[controller]")] // Define a URL base como "api/users"
public class UsersController : ControllerBase
{
    // Lista estática para simular um banco de dados em memória
    private static readonly List<User> _users = new List<User>
    {
        new User { Id = 1, Name = "Aluno Dedicado", Email = "aluno@curso.com" },
        new User { Id = 2, Name = "Prof. Gemini", Email = "gemini@google.com" }
    };

    // Nosso primeiro endpoint!
    [HttpGet] // Este método responde a requisições GET
    public IActionResult GetUsers()
    {
        // Ok() retorna um status 200 (Sucesso) com os dados no corpo da resposta
        return Ok(_users);
    }
}