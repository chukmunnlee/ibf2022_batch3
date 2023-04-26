package ibf2022.batch3.paf.day25.controllers;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import ibf2022.batch3.paf.day25.models.Registration;
import ibf2022.batch3.paf.day25.models.RegistrationException;

@Controller
@RequestMapping
public class RegistrationController {

    @PostMapping("/register")
    public ModelAndView postRegister(@ModelAttribute Registration registration, Model model) 
            throws RegistrationException {

        ModelAndView mv = new ModelAndView();

        System.out.printf(">>> registration: %s\n", registration);

        if (registration.getName().equals("barney")) {
            //throw new RegistrationException("Error: %s".formatted(registration.getName()));
            mv.setViewName("application_error");
            mv.addObject("message", "Blacklisted user: %s".formatted(registration.getName()));
            mv.setStatus(HttpStatusCode.valueOf(400));
            return mv;
        }

        model.addAttribute("name", registration.getName());
        mv.setViewName("registered");

        return mv;
    }

}
