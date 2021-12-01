package elte.meetonefriender;

import elte.meetonefriender.person.Person;
import elte.meetonefriender.person.PersonService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/registration")
public class RegistrationController {

    private PersonService personService;

    public RegistrationController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public String showRegistrationForm(Model model) {
        model.addAttribute("person", new Person());
        return "registration";
    }

    @ModelAttribute("person")
    public PersonService personService(){
        return personService;
    }

    @PostMapping
    public String registerUserAccount(@ModelAttribute("user") Person person){
        personService.addPerson(person);
        return "redirect:/registration?success";
    }


}
