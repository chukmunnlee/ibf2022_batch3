package ibf2022.ssf.day15.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ibf2022.ssf.day15.models.Order;
import jakarta.validation.Valid;

@Controller
@RequestMapping(path="/order")
public class OrderController {

    @GetMapping
    public String getWithRequestParam(Model model,
        @RequestParam String item, @RequestParam int quantity) {
        model.addAttribute("item", item);
        model.addAttribute("quantity", quantity);
        return "done";
    }

    @GetMapping("/map")
    public String getWithMultiValueMap(Model model,
        @RequestParam MultiValueMap<String, String> form) {
        String item = form.getFirst("item");
        int quantity = Integer.parseInt(form.getFirst("quantity"));
        model.addAttribute("item", item);
        model.addAttribute("quantity", quantity);
        return "done";
    }

    @GetMapping("/model")
    public String getWithModel(Model model, @ModelAttribute Order order) {

        System.out.printf(">>> order: %s\n", order);
        String item = order.getItem();
        int quantity = order.getQuantity();
        model.addAttribute("item", item);
        model.addAttribute("quantity", quantity);
        return "done";
    }

    @PostMapping
    public String postWithMultiValueMap(Model model,
        @RequestBody MultiValueMap<String, String> form) {
        System.out.printf(">>>> POST map: %s\n", form);
        String item = form.getFirst("item");
        int quantity = Integer.parseInt(form.getFirst("quantity"));
        model.addAttribute("item", item);
        model.addAttribute("quantity", quantity);
        return "done";
    }


    @PostMapping("/model")
    public String postWithModel(Model model, 
            @ModelAttribute @Valid Order order, BindingResult bindings) {

        System.out.printf(">>> POST order: %s\n", order);

        // Syntactic validation
        if (bindings.hasErrors()) {
            System.out.println(">>> has error");
            order.setQuantity(1);
            return "order";
        }

        // Semantic validation
        if (order.getDelivery().equals("rush") && (order.getQuantity() < 10)) {
            FieldError error = new FieldError("order", "delivery"
                , "Cannot select rush if quantity is < 10");
            bindings.addError(error);
            return "order";
        }

        // String item = order.getItem();
        // int quantity = order.getQuantity();
        // model.addAttribute("item", item);
        // model.addAttribute("quantity", quantity);
        return "object-done";
    }

    @PostMapping("/string")
    public String postWithModel(Model model, @RequestBody String payload) {
        System.out.printf(">>> POST string: %s\n", payload);
        String item = payload;
        int quantity = -1;
        model.addAttribute("item", item);
        model.addAttribute("quantity", quantity);
        return "done";
    }

    @GetMapping("/order.html")
    public String getOrderHTML(Model model) {

        Order order = new Order();
        order.setItem("apple");
        order.setQuantity(100);

        model.addAttribute("order", order);

        return "order";
    }
    
}
