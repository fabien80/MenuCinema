package dto;

import models.Menu;
import models.Nourriture;

import java.util.List;

public class NourrituresMenusDTO {
	private List<Menu> menus;
	private List<Nourriture> foods;

	public NourrituresMenusDTO (List<Menu> menus, List<Nourriture> foods) {
		this.menus = menus;
		this.foods = foods;
	}

	public List<Menu> getMenus () {
		return menus;
	}

	public void setMenus (List<Menu> menus) {
		this.menus = menus;
	}

	public List<Nourriture> getFoods () {
		return foods;
	}

	public void setFoods (List<Nourriture> foods) {
		this.foods = foods;
	}
}
