package it.objectmethod.world.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.objectmethod.world.model.Citta;
import it.objectmethod.world.repository.CittaRepository;

@RestController
@RequestMapping("/api")
public class CityRestController {

	@Autowired
	CittaRepository cittaRepo;

	@DeleteMapping("citta/{id}/elimina")
	public ResponseEntity<?> eliminaCitta(@PathVariable("id") Integer id){
		Citta cittaDaEliminare = cittaRepo.findOne(id);
		if(cittaDaEliminare != null) {
		cittaRepo.delete(cittaDaEliminare);
		return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@GetMapping("citta/find-by-partofname")
	public List<Citta> cittaCercate(@RequestParam("cittaCercata") String cittaCercata) {
		return cittaRepo.findCityByPartOfName(cittaCercata);
	}

	@GetMapping("citta/{countryCode}/find-by-countrycode")
	public ResponseEntity<List<Citta>> listaCittaDacountryCode(@PathVariable("countryCode") String countryCode){

		List<Citta> list = cittaRepo.findByCountryCode(countryCode);
		if(list!=null) {
			return new ResponseEntity<List<Citta>>(list, HttpStatus.OK);
		}

		return new ResponseEntity<List<Citta>>(list, HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("citta/inserisci-modifica")
	public Citta inserisciModifica(@RequestBody Citta citta){
		return cittaRepo.save(citta);
		
	}
	
	@GetMapping("citta/{id}/find-by-id")
	public ResponseEntity<Citta> findOne(@PathVariable("id") Integer id){
		Citta citta = cittaRepo.findOne(id);
		if(citta==null) {
			return new ResponseEntity<Citta>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Citta>(citta, HttpStatus.OK);
	}

}
