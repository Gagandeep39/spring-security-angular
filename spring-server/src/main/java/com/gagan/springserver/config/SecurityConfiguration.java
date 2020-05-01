/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-05-01 22:59:05
 * @modify date 2020-05-01 22:59:05
 * @desc [description]
 */
package com.gagan.springserver.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .cors() // Fixes CORS error in angular requests
        .and()
        .httpBasic()  
        .and()
        .authorizeRequests()
        .antMatchers("/index.html", "/", "/home", "/login").permitAll() // Permit all requests to these pathd
        .anyRequest().authenticated();    // All other reuests requires an authenticated user
    }
    
}