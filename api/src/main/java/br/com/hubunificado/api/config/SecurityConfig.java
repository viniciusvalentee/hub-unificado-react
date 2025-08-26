package br.com.hubunificado.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Desabilitar CSRF, pois não usaremos sessões baseadas em cookies
                .csrf(csrf -> csrf.disable())
                // Definir as regras de autorização
                .authorizeHttpRequests(auth -> auth
                        // Permite acesso público ao console do H2
                        .requestMatchers("/h2-console/**").permitAll()
                        // Permite acesso público aos endpoints de criação de usuário e login
                        .requestMatchers("/api/users", "/api/auth/login").permitAll()
                        // Qualquer outra requisição precisa de autenticação
                        .anyRequest().authenticated()
                );

        // Permite que o console H2 seja exibido em um frame (necessário)
        http.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()));

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // Usa o BCrypt, que é o algoritmo padrão e recomendado
        return new BCryptPasswordEncoder();
    }
}
