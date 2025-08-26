package br.com.hubunificado.api.repository;

import br.com.hubunificado.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// A interface estende JpaRepository<TipoDaEntidade, TipoDoId>
public interface UserRepository extends JpaRepository<User, Integer> {
    // Ao estender JpaRepository<User, Integer>, nossa interface UserRepository
    // herda instantaneamente métodos como findAll(), findById(), save(), delete() e muitos outros

    // O Spring Data JPA vai entender o nome da função e gerar a query "SELECT * FROM users WHERE email = ?"
    Optional<User> findByEmail(String email);
}
