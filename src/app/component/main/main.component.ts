import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { DataStorage } from 'src/app/helper';
import { AccountService } from 'src/app/services';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentDate: Date;
  currentRoute: number = 0;
  user_Id: string;
  user_FullName: string;
  user_Username: string;
  user_AccessLevel: string;
  sidebarOpen: boolean = true;


  constructor(
    private router: Router,
    private accountService: AccountService
  ) {
    this.currentDate = new Date();
    this.user_Id = DataStorage.getUserId()!;
    this.user_FullName = DataStorage.getName()!;
    this.user_Username = DataStorage.getEmail()!;
    this.user_AccessLevel = DataStorage.getAccessLevel()!;

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          // this.currentRoute = this.getCurrentRoute(event.urlAfterRedirects)
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });

   }

  ngOnInit() {
  }

  logout(): void {
    DataStorage.clearDataStorage();

    this.accountService.logout();
    this.router.navigate(['/login']);
  }

}
