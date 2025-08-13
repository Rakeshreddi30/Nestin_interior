package com.nestin.interior.dto;

import lombok.Data;

@Data
public class ContactForm {
    
    private String name;
    private long phoneNum;
    private String email;
    private String location;
}
