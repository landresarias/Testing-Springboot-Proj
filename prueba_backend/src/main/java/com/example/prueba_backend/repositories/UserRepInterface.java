/*package com.example.prueba_backend.repositories;

import com.example.prueba_backend.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface UserRepInterface extends JpaRepository<User, String> {

    //Next Query annotation calls a database stored procedure
    @Query(value="{call sp_get_users()}",nativeQuery = true)
    List<User> getUserListUR();

    @Modifying
    @Query(value="{call sp_create_users(:fullName, :email)}",nativeQuery = true)
    @Transactional
    void addUserUR(String fullName, String email);

}*/




package com.example.prueba_backend.repositories;

import com.example.prueba_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import net.javaguides.springboot.model.Employee;

@Repository
public interface UserRepInterface extends JpaRepository<User, Long>{

}
