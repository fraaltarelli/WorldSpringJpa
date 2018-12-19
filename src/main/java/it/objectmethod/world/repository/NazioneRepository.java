package it.objectmethod.world.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import it.objectmethod.world.model.Nazione;

@Repository
public interface NazioneRepository extends JpaRepository<Nazione, String>{
	
	@Query("select distinct n.continent from Nazione n")
	public List<String> findContinents();
	
	public List<Nazione> findByContinent(String continent);
	
}
