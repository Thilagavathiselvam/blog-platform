package com.blog.platform.controller;

import com.blog.platform.entity.Comment;
import com.blog.platform.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public Comment addComment(
            @RequestBody Comment comment) {

        return commentService.addComment(comment);
    }

    @GetMapping("/{postId}")
    public List<Comment> getComments(
            @PathVariable Long postId) {

        return commentService.getCommentsByPostId(postId);
    }

    @DeleteMapping("/{id}")
    public String deleteComment(
            @PathVariable Long id) {

        commentService.deleteComment(id);

        return "Comment Deleted Successfully";
    }
}