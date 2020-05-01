# Spring + Angular Security demo

## Spring 
- Create a project with Web, Security dependency 
- Create a class and extend WebSecurityConfigurerAdapter
- Add anotation @EnableWebSecurity
- Add below code tow fix cors error, enable support for http, provide access to some paths without auth
```
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
```
- Checked logged in user details from 

## Angular 
- Create a new angular project