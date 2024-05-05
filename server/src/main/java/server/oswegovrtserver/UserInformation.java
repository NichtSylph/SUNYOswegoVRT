package server.oswegovrtserver;

import lombok.Data;

@Data
public class UserInformation {

    private String email;
    private String phone;
    private String firstName;
    private String lastName;
    private String dob;
    private String location;
    private String educationLevel;
}
