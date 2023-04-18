package com.example.prueba_backend.repositories;

import com.example.prueba_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepInterface extends JpaRepository<User, Long>{

}
