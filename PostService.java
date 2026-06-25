package com.blog.platform.service;

import com.blog.platform.entity.Post;
import com.blog.platform.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {

        Optional<Post> post = postRepository.findById(id);

        return post.orElse(null);
    }

    public Post updatePost(Long id, Post updatedPost) {

        Optional<Post> optionalPost = postRepository.findById(id);

        if (optionalPost.isPresent()) {

            Post post = optionalPost.get();

            post.setTitle(updatedPost.getTitle());
            post.setContent(updatedPost.getContent());
            post.setAuthor(updatedPost.getAuthor());

            return postRepository.save(post);
        }

        return null;
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}