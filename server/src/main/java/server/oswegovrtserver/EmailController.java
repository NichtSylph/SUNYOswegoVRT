package server.oswegovrtserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public ResponseEntity<?> sendEmail(@RequestBody UserInformation userInfo) {
        try {
            String subject = userInfo.getFirstName() + " is interested in attending SUNY Oswego!";
            String content = "Possible Student " + userInfo.getFirstName() + " " + userInfo.getLastName()
                    + " information\n\n" +
                    "Email: " + userInfo.getEmail() + "\n" +
                    "Phone: " + userInfo.getPhone() + "\n" +
                    "Date of Birth: " + userInfo.getDob() + "\n" +
                    "Location: " + userInfo.getLocation() + "\n" +
                    "Education Level: " + userInfo.getEducationLevel() + "\n\n" +
                    "Automated SUNY Virtual Tour Oswego System";

            emailService.sendSimpleMessage(userInfo.getEmail(), subject, content);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
            // Respond with a generic error message
            return ResponseEntity.status(500).body("Error occurred while sending email");
        }
    }
}
