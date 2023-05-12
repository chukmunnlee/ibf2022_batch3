package ibf2022.batch3.csf.day35.server.services;

import java.security.SecureRandom;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class RandomService {

   private Random rand = new SecureRandom();
   
   public List<Integer> getRandomNumbers(int count) {
      return getRandomNumbers(0, 10, count);
   }
   public List<Integer> getRandomNumbers(int min, int max, int count) {
      List<Integer> result = new LinkedList<>();
      for (int i = 0; i < count; i++)
         result.add(rand.nextInt(max) + min + 1);
      return result;
   }
}
