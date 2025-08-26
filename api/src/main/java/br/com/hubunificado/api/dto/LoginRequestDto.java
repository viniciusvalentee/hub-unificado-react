package br.com.hubunificado.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestDto(
        @NotBlank @Email String email,
        @NotBlank String password
) {
}
