package it.objectmethod.world.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import it.objectmethod.world.model.Nazione;
import it.objectmethod.world.repository.CittaRepository;
import it.objectmethod.world.repository.NazioneRepository;

@Controller
public class NationController {
	
	@Autowired
	CittaRepository cittaRepo;
	
	@Autowired
	NazioneRepository nazioneRepo;
	
	@GetMapping("runContinenti")
	public String allcontinents(ModelMap model) {
		List<String> allContinents = nazioneRepo.findContinents();
		model.addAttribute("allContinents", allContinents);
		return "continenti";
	}
	
	@GetMapping("runNazioni/{continente}")
	public String runNazioni(@PathVariable("continente") String continent, ModelMap model) {
		List<Nazione> list = nazioneRepo.findByContinent(continent);
		model.addAttribute("nationsByContinent", list);
		return "listaNazioni";
	}

}
