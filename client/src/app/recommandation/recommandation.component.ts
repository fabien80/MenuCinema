import {Component, Input, OnInit} from '@angular/core';
import {DBProductType} from "../enum/DBProductType";
import {ApiService} from "../services/api.service";
import {TmdbService} from "../services/tmdb.service";

@Component({
    selector: 'app-recommandation',
    templateUrl: './recommandation.component.html',
    styleUrls: ['./recommandation.component.scss']
})
export class RecommandationComponent implements OnInit {
    @Input() productId: number;
    @Input() searchType: DBProductType;
    @Input() givenType: DBProductType;
    private ids: string[];

    constructor(private apiService: ApiService,
                private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.getRecommandations();
    }

    getRecommandations() {
        this.apiService.getRecommandations(this.productId.toString(), this.givenType, this.searchType)
            .then((value: string[]) => {
                console.log(value);
                this.ids = value;
            })
            .catch(reason => {
                console.log(reason);
            });
    }


    searchingMovie() {
        return this.searchType == DBProductType.Film;
    }
}
