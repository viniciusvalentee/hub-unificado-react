// api/src/main/java/br/com/hubunificado/api/controller/HelloController.java
package br.com.hubunificado.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello") // Define a URL base para este controller
public class HelloController {

    @GetMapping // Responde a requisições GET para a URL base
    public String sayHello() {
        return "Bem-vindo(a) ao backend com Java Spring!";
    }
}