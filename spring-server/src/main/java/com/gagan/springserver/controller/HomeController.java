/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-05-01 22:59:02
 * @modify date 2020-05-01 22:59:02
 * @desc [description]
 */
package com.gagan.springserver.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Enables Requests from all URLs at normal kevel 
 * Doesn't file cross origins alone
 */
@CrossOrigin(origins = "*")
@RestController
public class HomeController {

    /**
     * Returns a unique and a hello world string
     */
    @RequestMapping("/resource")
    public Map<String, Object> home() {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

    /**
     * 
     * @param user User credential provided by dependency injection
     * @return Logged In user's details
     */
    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

}