package com.code.repartis.Controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;






@RestController
/*@CrossOrigin(origins = "*", allowedHeaders = "*")*/
public class ActionMovieController {
	

    @GetMapping("/")
    public List<Movie> listMovies(){
		System.out.println("I am in");
    	 List<Movie> actionMovies = new ArrayList<Movie>();
    	 actionMovies.add( new Movie( 1 ,"action","Collateral","A contract killer named Vincent (Tom Cruise) hires a cab driver for a journey into a physical and psychological netherworld. 'Collateral' opens with Tom Cruise exchanging briefcases with a stranger in an airport.","https://fr.web.img6.acsta.net/medias/nmedia/18/35/24/27/18388163.jpg"));
    	 actionMovies.add( new Movie( 2 ,"action","Extractionnnn","After a day at school, Ovi Mahajan – son of an incarcerated Indian drug lord – sneaks out of his house to visit a club, where he is kidnapped by police officers working for rival drug lord Amir Asif. Saju Rav, a former Para (SF) operator and Ovi's protector, visits Ovi’s father in prison. Unwilling to pay the ransom as it will hurt his prestige, Ovi Mahajan Sr. orders Saju to retrieve his son, threatening Saju's own family.","https://fr.web.img6.acsta.net/pictures/20/03/31/09/22/0259222.jpg"));
    	 actionMovies.add(new Movie( 3 ,"action","Team A","John 'Hannibal' Smith is held captive in Mexico by two Federal Police officers working for renegade General Javier Tuco. Hannibal escapes and sets out to rescue his friend Templeton 'Face' Peck, who is held captive at Tuco's ranch. Hannibal saves Face after enlisting his teammate Ranger, B.A. Baracus, driving to the rescue in BA's modified GMC Vandura. Pursued by Tuco, they stop at a nearby Army Hospital to recruit the services of their pilot Howling Mad Murdock. They flee in a medical helicopter, chased by Tuco, in a dogfight that leaves BA with a phobia of flying. The battle ends when they lure Tuco's helicopter into American airspace, where it is shot down by an F-22 Raptor for trespassing, killing Tuco and his men.","https://m.media-amazon.com/images/M/MV5BMTc4ODc4NTQ1N15BMl5BanBnXkFtZTcwNDUxODUyMw@@._V1_.jpg"));
	 return actionMovies;
    
    }
}
