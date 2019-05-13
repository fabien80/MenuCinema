package dto;

/**
 * Classe qui permet de formalisé ce que le back va renvoyé au front pour les reviews
 */
public class ReviewDTO {
	private Double note;
	private String review;

	public ReviewDTO (Double note, String review) {
		this.note = note;
		this.review = review;
	}

	public Double getNote () {
		return note;
	}

	public void setNote (Double note) {
		this.note = note;
	}

	public String getReview () {
		return review;
	}

	public void setReview (String review) {
		this.review = review;
	}
}
