// HubUnificado.Api/Models/User.cs
namespace HubUnificado.Api.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty; // Nunca guardamos a senha em texto puro!
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}