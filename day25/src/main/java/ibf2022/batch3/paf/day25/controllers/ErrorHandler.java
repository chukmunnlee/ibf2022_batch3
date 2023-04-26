package ibf2022.batch3.paf.day25.controllers;

import org.springframework.http.HttpStatusCode;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import ibf2022.batch3.paf.day25.models.RegistrationException;

@ControllerAdvice
public class ErrorHandler {

    @ExceptionHandler({ Exception.class })
    public String handleError(Exception ex, Model model) {
        return "application_error";
    }

    @ExceptionHandler({ RegistrationException.class })
    public ModelAndView handleRegistrationError(RegistrationException ex) {
        ModelAndView mv = new ModelAndView();

        mv.setViewName("application_error");
        mv.addObject("message", ">>> %s".formatted(ex.getMessage()));
        mv.setStatus(HttpStatusCode.valueOf(400));

        return mv;
    }

    // @ExceptionHandler({ RegistrationException.class })
    // public String handleRegistrationError(RegistrationException ex, Model model) {
    //     model.addAttribute("message", ex.getMessage());
    //     return "application_error";
    // }
    
}
