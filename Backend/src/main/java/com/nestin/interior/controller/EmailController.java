package com.nestin.interior.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nestin.interior.dto.ContactForm;
import com.nestin.interior.dto.DesignForm;
import com.nestin.interior.services.FormService;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/contact")
public class EmailController {
   
    @Autowired
    private FormService formService;

    // @Value("${EMAIL_PASSWORD}")
    // private final String emailPassword = Dotenv.load().get("EMAIL_PASSWORD");
    
    @PostMapping("/postContact")
    public ResponseEntity<String> sendEmail(@RequestBody ContactForm form) {
        // TODO: send email
       return formService.sendEmail(form);
    }
     @PostMapping("/postDesign")
    public ResponseEntity<String> sendDesignForm(@RequestBody DesignForm designfrom){
     return formService.DesignForm(designfrom);
    }
    @GetMapping("/get")
    public String name(){
        System.out.println("EMAIL_PASSWORD from env: ");
        return "Hi  Rakesh";
    }
    
}
