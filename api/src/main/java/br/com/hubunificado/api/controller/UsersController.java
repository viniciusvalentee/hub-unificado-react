// api/src/main/java/br/com/hubunificado/api/controller/UsersController.java
package br.com.hubunificado.api.controller;

import br.com.hubunificado.api.dto.UserCreateDto;
import br.com.hubunificado.api.model.User;
import br.com.hubunificado.api.repository.UserRepository;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired // 2. Injeção de dependência: O Spring nos dará uma instância do UserRepository
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public List<User> getAllUsers() {
        // 3. Usa a função findAll() herdado do JpaRepository
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody UserCreateDto userDto) {
        // 4. Cria o novo usuário sem se preocupar com o ID
        User user = new User();
        user.setName(userDto.name());
        user.setEmail(userDto.email());
        user.setCreatedAt(LocalDateTime.now());
        // ... lógica de hash da senha ...
        user.setPasswordHash(passwordEncoder.encode(userDto.password()));

        // 5. Usa a função save() para persistir o usuário no banco
        User savedUser = userRepository.save(user);

        // A lógica para construir a URI continua a mesma
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getId())
                .toUri();

        return ResponseEntity.created(location).body(savedUser);
    }
}