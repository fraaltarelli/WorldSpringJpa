package it.objectmethod.world.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.objectmethod.world.model.Citta;

@Repository
public interface CittaRepository extends JpaRepository<Citta, Integer>{
	
	public List<Citta> findByCountryCode(String countryCode);
	
	@Query("SELECT c from Citta c where c.name LIKE CONCAT('%',:cittaCercata,'%')")
	public List<Citta> findCityByPartOfName(@Param("cittaCercata") String cittaCercata);
	
	

}
