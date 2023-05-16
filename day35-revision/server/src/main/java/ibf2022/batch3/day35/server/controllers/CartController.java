package ibf2022.batch3.day35.server.controllers;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpSession;


@Controller
@RequestMapping
public class CartController {

   @PostMapping(path="/cart")
   public ModelAndView postCart(@RequestBody MultiValueMap<String, String> form, HttpSession sess) {

      List<String> cart = (List<String>)sess.getAttribute("cart");
      if (null ==  cart) {
         cart = new LinkedList<>();
         sess.setAttribute("cart", cart);
      }

      System.out.printf(">>> session id: %s\n", sess.getId());

      String item = form.getFirst("item");
      cart.add(item);

      ModelAndView mv = new ModelAndView();
      mv.setViewName("cart");
      mv.addObject("contents", cart);
      mv.setStatus(HttpStatusCode.valueOf(200));
      
      return mv;
   }

   @PostMapping(path="/cart-hidden")
   public ModelAndView postCartHidden(@RequestBody MultiValueMap<String, String> form) {

      List<String> cart;

      //cart-contents
      String cartContents = form.getFirst("cart-contents");
      if ((null == cartContents) || (cartContents.trim().length() <= 0)) {
         cart = new LinkedList<>();
      } else {
         String[] items = cartContents.split(",");
         cart = new LinkedList<>(Arrays.asList(items));
      }

      String item = form.getFirst("item");
      cart.add(item);

      String cartContent = cart.stream().collect(Collectors.joining(","));
      System.out.printf(">>>> cartContents: %s\n", cartContents);

      ModelAndView mv = new ModelAndView();
      mv.setViewName("cart-hidden");
      mv.addObject("contents", cart);
      mv.addObject("cartContents", cartContent);
      mv.setStatus(HttpStatusCode.valueOf(200));
      
      return mv;
   }
   
   
}
