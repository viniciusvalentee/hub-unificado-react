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

    [HttpPost] // Este método responde a requisições POST
    public IActionResult CreateUser([FromBody] UserCreateDto userDto)
    {
        // Cria um novo objeto User a partir dos dados recebidos (DTO)
        var newUser = new User
        {
            // O ID deve ser gerado de forma segura. Por agora, vamos usar um simples +1
            Id = _users.Any() ? _users.Max(u => u.Id) + 1 : 1,
            Name = userDto.Name,
            Email = userDto.Email,
            // AQUI virá a lógica para criar o HASH da senha. Por enquanto, deixamos vazio.
            PasswordHash = "hashed_password_placeholder", // NUNCA FAÇA ISSO EM PRODUÇÃO
            CreatedAt = DateTime.UtcNow
        };

        _users.Add(newUser);

        // CreatedAtAction retorna um status 201 (Created) e um cabeçalho 'Location'
        // com a URL para acessar o novo recurso criado. É a melhor prática.
        return CreatedAtAction(nameof(GetUsers), new { id = newUser.Id }, newUser);
    }
}