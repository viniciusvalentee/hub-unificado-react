package br.com.hubunificado.api.controller;

import br.com.hubunificado.api.dto.LoginRequestDto;
import br.com.hubunificado.api.model.User;
import br.com.hubunificado.api.repository.UserRepository;
import jakarta.validation.Valid;
import org.antlr.v4.runtime.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.hubunificado.api.dto.LoginResponseDto;
import br.com.hubunificado.api.service.TokenService;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenService tokenService; // 1. Injeta o TokenService

    @PostMapping("/login")
    // 2. Altera o tipo de retorno para LoginResponseDto
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDto loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.email());

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(401).body("Email ou senha inválidos.");
        }

        User user = userOptional.get();

        if (passwordEncoder.matches(loginRequest.password(), user.getPasswordHash())) {
            // 3. Gera o token se a senha estiver correta
            String token = tokenService.generateToken(user);
            // 4. Retorna o token em um objeto JSON
            return ResponseEntity.ok(new LoginResponseDto(token));
        } else {
            return ResponseEntity.status(401).body("Email ou senha inválidos.");
        }
    }
}
