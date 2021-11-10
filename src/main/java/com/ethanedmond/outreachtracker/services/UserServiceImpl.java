package com.ethanedmond.outreachtracker.services;

import java.util.ArrayList;
import java.util.List;

import com.ethanedmond.outreachtracker.models.User;
import com.ethanedmond.outreachtracker.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
  @Autowired
  private UserRepository userRepos;

  @Override
  public List<User> findAllUsers() {
    List<User> list = new ArrayList<>();
    userRepos.findAll()
      .iterator()
      .forEachRemaining(list::add);
    return list;
  }

  @Transactional
  @Override
  public User registerUser(User argUser) {
    User newUser = new User();
    newUser.setUsername(argUser.getUsername());
    newUser.setPassword(argUser.getPassword());
    return userRepos.save(newUser);
  }
}
