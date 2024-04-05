import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { CrimeInfoServiceService } from '../crime-info-service.service';

@Component({
  selector: 'app-crime-info',
  templateUrl: './crime-info.component.html',
  styleUrls: ['./crime-info.component.scss'],
})
export class CrimeInfoComponent implements OnInit {
  activeCrimeInfoSubscription: Subscription;


  crimes?: number=0;

  close() {
    this.userServices.toggleActiveCrimeInfo();
  }

  constructor(
    private userServices: UsersService,
    private crimeInfoService: CrimeInfoServiceService
  ) {
    this.activeCrimeInfoSubscription =
      this.crimeInfoService.activeCrimeInfo$.subscribe((data) => {
        this.crimes = data?.active;



      });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.activeCrimeInfoSubscription.unsubscribe();
  }
}
