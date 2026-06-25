package com.blog.platform.service;

import com.blog.platform.entity.User;
import com.blog.platform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {

        User existingUser = userRepository.findByEmail(email);

        if (existingUser != null &&
                existingUser.getPassword().equals(password)) {

            return existingUser;
        }

        return null;
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}