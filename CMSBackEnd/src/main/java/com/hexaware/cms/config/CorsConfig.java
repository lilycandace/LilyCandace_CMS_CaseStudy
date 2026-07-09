package com.hexaware.cms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    WebMvcConfigurer corsConfigurer() {

        return new WebMvcConfigurer() {

            @Override
            public void addCorsMappings(CorsRegistry registry) {

                registry.addMapping("/**")
//                        .allowedOrigins("http://localhost:5173")
                .allowedOrigins("http://cms-react-frontend-lily-2026.s3-website.ap-south-1.amazonaws.com")
                        .allowedMethods("*")
                        .allowedHeaders("*");

            }

        };

    }

}