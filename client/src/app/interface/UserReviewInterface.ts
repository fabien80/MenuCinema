import {ClientInterface} from "./ClientInterface";
import {ReviewInterface} from "./ReviewInterface";

export interface UserReviewInterface {
    client: ClientInterface;
    reviews: ReviewInterface[];
}
