package it.objectmethod.world.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


import it.objectmethod.world.model.Citta;
import it.objectmethod.world.model.Nazione;
import it.objectmethod.world.repository.CittaRepository;
import it.objectmethod.world.repository.NazioneRepository;

@Controller
public class CityController {

	@Autowired
	CittaRepository cittaRepo;

	@Autowired
	NazioneRepository nazioneRepo;

	@GetMapping("runCitta/{countryCode}")
	String listaCitta(@PathVariable("countryCode") String countryCode, ModelMap model) {
		return "forward:/listaCittaStep/"+countryCode;
	}

	@GetMapping("runEliminaCitta/{id}/{countryCode}")
	String eliminaCitta(@PathVariable("id") Integer id, @PathVariable("countryCode") String countryCode, ModelMap model) {
		cittaRepo.delete(id);
		model.addAttribute("messaggio", "eliminazione riuscita");
		return "forward:/listaCittaStep/"+countryCode;
	}

	@GetMapping("listaCittaCercate")
	public String cittaCercate(@RequestParam("cittaCercata") String cittaCercata, ModelMap model) {
		List<Citta> listaCitta = cittaRepo.findCityByPartOfName(cittaCercata);
		model.addAttribute("listaCitta", listaCitta);
		return "listaCitta";
	}

	@GetMapping("listaCittaStep/{countryCode}")
	public String listaCittaStep(@PathVariable("countryCode") String countryCode, ModelMap model) {
		List<Citta> listaCitta= cittaRepo.findByCountryCode(countryCode);
		model.addAttribute("listaCitta", listaCitta);
		return "listaCitta";
	}


	@GetMapping("runAggiornamentoForm/{id}")
	public String aggiornamentoForm(@PathVariable("id") Integer idCitta, ModelMap model) {
		Citta cittaDaModificare = new Citta();
		if (idCitta != 0) {
			cittaDaModificare = cittaRepo.findOneById(idCitta);
		}
		List<Nazione> list = nazioneRepo.findAll();
		model.addAttribute("allNations", list);
		model.addAttribute("cittaDaModificare", cittaDaModificare);
		return "salvaCitta";
	}

	@GetMapping("runSalvaCitta")
	public String salvataggioCitta(@RequestParam("countryCode") String countryCode,
			@RequestParam("nomeCittaInserito") String nome, 
			@RequestParam("nomeDistrettoInserito") String distretto,
			@RequestParam("popolazioneInserita") Integer popolazione, 
			@RequestParam("id") Integer id, ModelMap model) {
		boolean errors=false;
		String messaggio="Salvataggio riuscito";
		String ritorno="forward:/listaCittaStep/"+countryCode;

		if(id== null) {
			id=0;
		}
		if(nome.equals("")) {
			errors=true;
			messaggio="inserire il nome della citta";
			ritorno="forward:/runAggiornamentoForm/"+id;
		}
		if(distretto.equals("")) {
			errors=true;
			messaggio="inserire il distretto";
			ritorno="forward:/runAggiornamentoForm/"+id;
		}

		if(popolazione==null) {
			errors=true;
			messaggio="inserire il numero di abitanti";
			ritorno="forward:/runAggiornamentoForm/"+id;
		}
		if(!errors) {
			try{
				Citta cittaDaSalvare= new Citta();
				cittaDaSalvare.setId(id);
				cittaDaSalvare.setName(nome);
				cittaDaSalvare.setDistrict(distretto);
				cittaDaSalvare.setPopulation(popolazione);
				cittaDaSalvare.setCountryCode(countryCode);
				cittaRepo.save(cittaDaSalvare);
			} catch(Exception e) {
				messaggio="Salvataggio non riuscito";
			}
		}
		model.addAttribute("messaggio", messaggio);

		return ritorno;
	}


}
