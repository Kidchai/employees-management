package kidchai.employees.api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeDTO {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}

