package com.example.prueba_backend.services;

import com.example.prueba_backend.model.User;
import com.example.prueba_backend.repositories.UserRepInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public User findById;
    @Autowired
    private UserRepInterface UserRI;

    /*public List<User> getUserListUS(){
        return UserRI.getUserListUR();
    }

    public boolean addUsersUS(String fullName,String email){
        try{
            UserRI.addUserUR(fullName,email);
            return true;
        }
        catch (Exception e){ }
        return false;
    }*/
}
