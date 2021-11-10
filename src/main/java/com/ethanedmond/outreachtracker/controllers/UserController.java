package com.ethanedmond.outreachtracker.controllers;

import java.net.URI;

import javax.validation.Valid;

import com.ethanedmond.outreachtracker.models.User;
import com.ethanedmond.outreachtracker.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class UserController {
  @Autowired
  private UserService userService;
  
  @GetMapping(value = "/users", produces = {"application/json"})
  public ResponseEntity<?> findAllUsers() {
    return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
  }
  
  @PostMapping(value = "/register", consumes = {"application/json"}, produces = {"application/json"})
  public ResponseEntity<?> registerUser(
    @Valid
    @RequestBody
    User newUser
  ) {
    // TODO set newUser's password to a bcrypt hash
    newUser.setUserid(0);
    newUser = userService.registerUser(newUser);

    HttpHeaders responseHeaders = new HttpHeaders();
    URI newUserUri = ServletUriComponentsBuilder.fromCurrentRequest()
      .path("/{userId}")
      .buildAndExpand(newUser.getUserid())
      .toUri();
    responseHeaders.setLocation(newUserUri);

    return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
  }
}
