package com.nestin.interior.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.nestin.interior.dto.ContactForm;
import com.nestin.interior.dto.DesignForm;

@Service
public class FormService {

     @Autowired
    private JavaMailSender mailSender;

    public ResponseEntity<String> sendEmail(@RequestBody ContactForm form) {
        // TODO: send email
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("rakeshgopidi19@gmail.com");
            message.setSubject("New request from : " + form.getName());
            message.setText(
                       "Name: " + form.getName() + "\n" +
                       "Phone: " + form.getPhoneNum() + "\n" +// ← Add this line
                       "Email: " + form.getEmail() + "\n" +
                       "Location: " + form.getLocation()
                 );
            mailSender.send(message);
            return ResponseEntity.ok("Request sent successfully");
        }
        catch(Exception e){
               return ResponseEntity.status(500).body("Failed to send message.");
        }
    }

    public ResponseEntity<String> DesignForm(@RequestBody DesignForm form){
           try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("rakeshgopidi19@gmail.com");
            message.setSubject("3D Design request from : " + form.getName());
            message.setText(
                       "Name: " + form.getName() + "\n" +
                       "Phone: " + form.getPhone() + "\n" +// ← Add this line
                       "Email: " + form.getEmail() 
                 );
            mailSender.send(message);
            return ResponseEntity.ok("3D design Request sent successfully");
        }
        catch(Exception e){
               return ResponseEntity.status(500).body("Failed to send message.");
        }
    }
    
}
