package com.blog.platform.controller;

import com.blog.platform.entity.ContactMessage;
import com.blog.platform.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ContactMessage sendMessage(
            @RequestBody ContactMessage message) {

        return contactService.saveMessage(message);
    }

    @GetMapping
    public List<ContactMessage> getAllMessages() {

        return contactService.getAllMessages();
    }
}