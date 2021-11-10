package com.ethanedmond.outreachtracker.services;

import java.util.List;

import com.ethanedmond.outreachtracker.models.User;

public interface UserService {
    List<User> findAllUsers();
    User registerUser(User newUser);
}
