// api/src/main/java/br/com/hubunificado/api/dto/UserCreateDto.java
package br.com.hubunificado.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

// Usaremos Records do Java 17+, que são perfeitos para DTOs imutáveis.
// Eles já criam construtores, getters, toString, equals e hashCode para nós!
public record UserCreateDto(
        @NotBlank(message = "O nome não pode estar em branco")
        String name,

        @NotBlank(message = "O email não pode estar em branco")
        @Email(message = "Formato de email inválido")
        String email,

        @NotBlank(message = "A senha não pode estar em branco")
        @Size(min = 6, message = "A senha deve ter no mínimo 6 caracteres")
        String password
) {
}