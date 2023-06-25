package kidchai.employees.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kidchai.employees.api.model.Employee;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
}
