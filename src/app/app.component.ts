import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  activeCrimeInfo: boolean = false;
  activeCrimeInfoSubscription: Subscription | undefined;
  constructor(private userSrvices: UsersService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeCrimeInfoSubscription =
      this.userSrvices.activeCrimeInfo$.subscribe((active) => {
        this.activeCrimeInfo = active;
        console.log(this.activeCrimeInfo);
      });
  }

  ngOnDestroy(): void {
    this.activeCrimeInfoSubscription?.unsubscribe();
  }
}
