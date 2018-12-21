package it.objectmethod.world.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.world.model.Nazione;
import it.objectmethod.world.repository.NazioneRepository;

@RestController
@RequestMapping("/api")
public class NationRestController {
	
	@Autowired
	NazioneRepository nazioneRepo;
	
	@GetMapping("continenti/lista")
	List<String> allcontinents(){
		return nazioneRepo.findContinents();
	}
	
	@GetMapping("nazioni/{continente}/by-continent")
	List<Nazione> nazioniDaContinente(@PathVariable("continente") String continente){
	  return nazioneRepo.findByContinent(continente);
	}
	
	@GetMapping("nazioni/find-all")
	List<Nazione> allNations(){
		return nazioneRepo.findAll();
	}
	

}
