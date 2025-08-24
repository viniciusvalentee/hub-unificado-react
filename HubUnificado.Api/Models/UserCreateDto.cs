// HubUnificado.Api/Models/UserCreateDto.cs
namespace HubUnificado.Api.Models;

public class UserCreateDto
{
    // Usamos atributos para validação!
    [System.ComponentModel.DataAnnotations.Required]
    public string Name { get; set; } = string.Empty;

    [System.ComponentModel.DataAnnotations.Required]
    [System.ComponentModel.DataAnnotations.EmailAddress]
    public string Email { get; set; } = string.Empty;

    [System.ComponentModel.DataAnnotations.Required]
    [System.ComponentModel.DataAnnotations.MinLength(6)]
    public string Password { get; set; } = string.Empty;
}