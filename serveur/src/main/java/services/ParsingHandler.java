package services;

import enums.Ingredient;
import enums.TypeDeProduit;
import models.FoodGroups;
import models.Menu;
import models.Nourriture;
import models.Produit;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import java.util.ArrayList;


public class ParsingHandler extends DefaultHandler
{
    private String currentValue;
    private Menu currentMenu;
    private Nourriture currentNourriture;
    private FoodGroups currentFoodGroups;
    private ArrayList<Produit> produitList;

    /**
     * Fonction du parser qui va être appelé à l'ouverture du document.
     * @throws SAXException
     */
    @Override
    public void startDocument() throws SAXException
    {
        System.out.println("Parsing started");
        produitList = new ArrayList<>();
        currentValue = "";
    }

    /**
     * Fonction du parseur qui va être appelé au début d'un élément dans le XML et qui va dans le switch
     * appelé les fonctions qu'il faut pour remplir la liste des produits.
     * @param uri
     * @param localName
     * @param qName
     * @param attributes
     * @throws SAXException
     */
    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException
    {
        String id;

        switch (qName)
        {
            case "prod1:product":
            case "foodGroups:product":
                currentNourriture = new Nourriture();
                id = attributes.getValue("id");
                currentNourriture.setId(id);
                break;
            case "prod1:menu":
                currentMenu = new Menu();
                id = attributes.getValue("id");
                currentMenu.setId(id);
                break;
            case "menu:foodGroups":
                currentFoodGroups = new FoodGroups();
                break;
            default:
                break;
        }
    }

    /**
     * Fonction du parser qui est appelé lorsqu'on arrive à une balise fermante d'élément.
     * @param uri
     * @param localName
     * @param qName
     * @throws SAXException
     */
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException
    {
        Produit produit;
        String str;
        TypeDeProduit type;
        switch (qName)
        {
            case "prod1:product":
                produit = new Produit();
                produit.setProduct(currentNourriture);
                produitList.add(produit);
                break;
            case "nour:type":
                str = currentValue;
                type = TypeDeProduit.fromValue(str);
                currentNourriture.setType(type);
                break;
            case "nour:nom":
                currentNourriture.setNom(currentValue);
                break;
            case "nour:description":
                currentNourriture.setDescription(currentValue);
                break;
            case "nour:prix":
                currentNourriture.setPrix(Double.parseDouble(currentValue));
                break;
            case "nour:ingredients":
                currentNourriture.getIngredients().add(Ingredient.fromValue(currentValue));
                break;
            case "menu:foodGroups":
                currentMenu.setFoodGroups(currentFoodGroups);
                break;
            case "foodGroups:product":
                currentFoodGroups.getProduct().add(currentNourriture);
                break;
            case "menu:nom":
                currentMenu.setNom(currentValue);
                break;
            case "menu:type":
                str = currentValue;
                type = TypeDeProduit.fromValue(str);
                currentMenu.setType(type);
                break;
            case "menu:prix":
                currentMenu.setPrix(Double.parseDouble(currentValue));
                break;
            case "prod1:menu":
                produit = new Produit();
                produit.setMenu(currentMenu);
                produitList.add(produit);
                break;
            default:
                break;

        }
    }

    public void characters(char ch[], int start, int length)
            throws SAXException
    {
        StringBuilder sb = new StringBuilder();
        for (int i = start; i < start+length; i++)
        {
            sb.append(ch[i]);
        }
        currentValue = sb.toString().trim();
    }

    public ArrayList<Produit> getProduitList()
    {
        return produitList;
    }
}
