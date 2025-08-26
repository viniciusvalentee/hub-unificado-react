package br.com.hubunificado.api.controller;

import br.com.hubunificado.api.dto.LoginRequestDto;
import br.com.hubunificado.api.model.User;
import br.com.hubunificado.api.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDto loginRequest) {
        // 1. Busca o usuário pelo email
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.email());

        if (userOptional.isEmpty()) {
            // Não encontrou o usuário
            return ResponseEntity.status(401).body("Email ou senha inválidos.");
        }

        User user = userOptional.get();

        // 2. Compara a senha enviada com o hash salvo no banco
        if (passwordEncoder.matches(loginRequest.password(), user.getPasswordHash())) {
            // Senha correta!
            // Em aulas futuras, aqui retornaremos um token JWT.
            return ResponseEntity.ok("Login bem-sucedido!");
        } else {
            // Senha incorreta
            return ResponseEntity.status(401).body("Email ou senha inválidos.");
        }
    }
}
