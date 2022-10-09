package com.code.repartis.Controller;

public class Movie {
	
	  private int id;
	  private String genre;
	  private String title;
	  private String description;
	  private String src;

	  
	  public Movie(int id, String genre, String title,  String description,String src) {
		super();
		this.id = id;
		this.genre = genre;
		this.title = title;
		this.description = description;
		this.src = src;

	 
	}
	  
	public Movie ()
		{}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	  
	  
}
