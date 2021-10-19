package com.ethanedmond.outreachtracker.repositories;

import com.ethanedmond.outreachtracker.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
