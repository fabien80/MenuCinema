package dto;

import models.Client;

import java.util.List;

public class UserReviewDTO {
	Client client;
	List<ReviewDTO> reviews;

	public UserReviewDTO (Client client, List<ReviewDTO> reviews) {
		this.client = client;
		this.reviews = reviews;
	}

	public Client getClient () {
		return client;
	}

	public void setClient (Client client) {
		this.client = client;
	}

	public List<ReviewDTO> getReviews () {
		return reviews;
	}

	public void setReviews (List<ReviewDTO> reviews) {
		this.reviews = reviews;
	}
}
