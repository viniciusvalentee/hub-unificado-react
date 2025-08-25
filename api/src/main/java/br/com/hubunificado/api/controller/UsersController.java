// api/src/main/java/br/com/hubunificado/api/controller/UsersController.java
package br.com.hubunificado.api.controller;

import br.com.hubunificado.api.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    // Lista estática para simular um banco de dados em memória
    private static final List<User> users = new ArrayList<>();

    // Bloco estático para inicializar a lista com alguns dados
    static {
        users.add(new User(1, "Aluno Dedicado", "aluno@curso.com"));
        users.add(new User(2, "Prof. Gemini", "gemini@google.com"));
    }

    @GetMapping
    public List<User> getAllUsers() {
        return users;
    }
}