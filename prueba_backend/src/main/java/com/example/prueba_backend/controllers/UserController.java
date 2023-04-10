package com.example.prueba_backend.controllers;

import com.example.prueba_backend.model.User;
import com.example.prueba_backend.repositories.UserRepInterface;
import com.example.prueba_backend.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepInterface userRI;

    // get all employees
    @GetMapping("list")
    public List < User > getUsersListUC() {
        return userRI.findAll();
    }

    // create employee rest api
    @PostMapping("add")
    public User addUsersUC(@RequestBody User parUser) {
        return userRI.save(parUser);
    }

    // get employee by id rest api
    @GetMapping("view/{id}")
    public ResponseEntity < User > viewUserById(@PathVariable Long id) {
        User user = userRI.findById(id)
                .orElseThrow();
        return ResponseEntity.ok(user);
    }








    @PutMapping(("update/{parId}"))
    public ResponseEntity<String> updateUser(@PathVariable String parId){
        return ResponseEntity.ok("udpate: "+ parId);
    }

    @DeleteMapping("delete")
    public ResponseEntity<Integer> deleteUser(){
        return ResponseEntity.ok(4004);
    }
}
