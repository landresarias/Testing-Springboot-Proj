package com.example.prueba_backend.controllers;

import com.example.prueba_backend.exception.ResourceNotFoundException;
import com.example.prueba_backend.model.User;
import com.example.prueba_backend.repositories.UserRepInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(user);
    }

    //Next update a register into the DB
    @PutMapping("update/{id}")
    public ResponseEntity < User > updateUserById(@PathVariable Long id, @RequestBody User parUser) {
        User user = userRI.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        user.setFullname(parUser.getFullname());
        user.setEmail(parUser.getEmail());

        userRI.save(user);
        return ResponseEntity.ok(user);
    }

    // delete employee rest api
    @DeleteMapping("delete/{id}")
    public ResponseEntity <Map< String, Boolean >> deleteEmployee(@PathVariable Long id) {
        User user = userRI.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        userRI.delete(user);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PatchMapping("upd/{id}/{name}")
    public ResponseEntity<User> updateCustomerName(@PathVariable Long id, @PathVariable String name) {
        try {
            User user = userRI.findById(id).get();
            user.setFullname(name);
            return new ResponseEntity<User>(userRI.save(user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
