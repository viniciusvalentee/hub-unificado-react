package br.com.hubunificado.api.repository;

import br.com.hubunificado.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

// A interface estende JpaRepository<TipoDaEntidade, TipoDoId>
public interface UserRepository extends JpaRepository<User, Integer> {
    // Ao estender JpaRepository<User, Integer>, nossa interface UserRepository
    // herda instantaneamente métodos como findAll(), findById(), save(), delete() e muitos outros

    // Nenhum código a mais é necessário por enquanto.
}
