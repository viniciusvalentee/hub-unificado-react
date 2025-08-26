// api/src/main/java/br/com/hubunificado/api/model/User.java
package br.com.hubunificado.api.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity // 1. Anotação que marca esta classe como uma entidade JPA
@Table(name = "users") // 2. Especifica o nome da tabela no banco (boa prática)
public class User {

    @Id // 3. Marca este campo como a chave primária (Primary Key)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 4. Diz ao banco para gerar o valor do ID automaticamente
    private Integer id;

    private String name;
    private String email;
    private String passwordHash;
    private LocalDateTime createdAt;

    // 5. JPA requer um construtor vazio para criar os objetos
    public User() {
    }

    // Construtor para facilitar a criação de novos usuários
    public User(Integer id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = ""; // Placeholder por enquanto
        this.createdAt = LocalDateTime.now();
    }

    // Getters e Setters são necessários para que o Spring possa ler as propriedades
    // e convertê-las para JSON. Use o atalho Alt + Insert -> "Getter and Setter"
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}