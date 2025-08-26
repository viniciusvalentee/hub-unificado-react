// api/src/main/java/br/com/hubunificado/api/controller/UsersController.java
package br.com.hubunificado.api.controller;

import br.com.hubunificado.api.dto.UserCreateDto;
import br.com.hubunificado.api.model.User;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    // Lista estática para simular um banco de dados em memória
    private static final List<User> users = new ArrayList<>();

    // Vamos usar um AtomicInteger para gerar IDs de forma segura
    private static final AtomicInteger idCounter = new AtomicInteger(2);

    // Bloco estático para inicializar a lista com alguns dados
    static {
        users.add(new User(1, "Aluno Dedicado", "aluno@curso.com"));
        users.add(new User(2, "Prof. Gemini", "gemini@google.com"));
    }

    @GetMapping
    public List<User> getAllUsers() {
        return users;
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody UserCreateDto userDto) {
        // Cria um novo User a partir do DTO
        User newUser = new User(
                idCounter.incrementAndGet(), // Gera um novo ID
                userDto.name(),
                userDto.email());
        // Futuramente, aqui virá a lógica de hash da senha
        // newUser.setPasswordHash(passwordEncoder.encode(userDto.password()));

        users.add(newUser);

        // Constrói a URI para o novo recurso criado (ex: /api/users/3)
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newUser.getId())
                .toUri();

        // Retorna a resposta 201 Created com a localização e o objeto criado
        return ResponseEntity.created(location).body(newUser);
    }
}