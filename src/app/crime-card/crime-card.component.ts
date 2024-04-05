import { Component, Input, OnInit } from '@angular/core';
import { CrimeInfoServiceService } from '../crime-info-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crime-card',
  templateUrl: './crime-card.component.html',
  styleUrls: ['./crime-card.component.scss'],
})
export class CrimeCardComponent implements OnInit {
  activeCrimeInfoSubscription: Subscription;


  image?: string = '';
  name?: string = 'nicole kierpiec';
  date?: string = '07/09/2023';
  crimesNumber?: number = 4;
  crimesJoke?:string='';
  crimesJokeDescriptions?:string='';

  constructor(private crimeInfoService: CrimeInfoServiceService) {
    this.activeCrimeInfoSubscription =
      this.crimeInfoService.activeCrimeInfo$.subscribe((data) => {
        this.image = data?.image;
        this.name=data?.name;
        this.date = data?.date;
        this.crimesNumber = data?.active;
        this.crimesJoke = data?.jokeName;
        this.crimesJokeDescriptions=data?.jokeDescriptions;

      });



  }



  ngOnDestroy(): void {
    this.activeCrimeInfoSubscription.unsubscribe();
  }








  ngOnInit(): void {


  }


}
