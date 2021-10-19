package com.ethanedmond.outreachtracker.controllers;

import com.ethanedmond.outreachtracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepos;

    @GetMapping(value = "/users", produces = {"application/json"})
    public ResponseEntity<?> findAllUsers() {
        return new ResponseEntity<>(userRepos.findAll(), HttpStatus.OK);
    }
}
