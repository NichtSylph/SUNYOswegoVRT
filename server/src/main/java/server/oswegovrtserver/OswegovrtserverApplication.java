package server.oswegovrtserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = { "server.oswegovrtserver" })
@ComponentScan(basePackages = { "server.oswegovrtserver" })
public class OswegovrtserverApplication {
    public static void main(String[] args) {
        SpringApplication.run(OswegovrtserverApplication.class, args);
    }
}
