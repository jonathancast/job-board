package jonathanccast.jobboard;

import java.util.HashMap;
import java.util.Map;
import java.security.Principal;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
@RestController
public class JobBoardApplication {
    public static void main(String[] args) {
        SpringApplication.run(JobBoardApplication.class, args);
    }

    final static String id = "bc6703d1-900d-4000-8353-a6aca02a63fe";

    @RequestMapping("/resource")
    public Map<String,Object> resource() {
        Map<String,Object> model = new HashMap<String,Object>();

        model.put("id", id);
        model.put("content", "Hello, world");

        return model;
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

    // Send anything without an extension to Angular
    @RequestMapping(value = "/**/{path:[^.]*}")
    public ModelAndView redirect() {
        return new ModelAndView("forward:/");
    }
}
