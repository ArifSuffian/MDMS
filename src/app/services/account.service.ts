import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Constants, DataStorage} from '../helper/';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public url: string;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(DataStorage.getCurrentUser()!));
    this.currentUser = this.currentUserSubject.asObservable();

    this.url = Constants.API_URL + 'account/';
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {

    return this.http.post<any>(this.url + 'signin', {email, password })
      .pipe(map(data => {
        console.log(data);
        let account = data.data.user;
        let user: User = {};
        user.Id = account.Id;
        user.Email = account.Email;
        user.Matricno = account.MatricNo; 
        user.Name = account.Name;
        user.AccessLevel = account.AccessLevel;
        user.AuthToken = account.AuthToken;

        // login successful if there's a jwt token in the response
        if (user && user.AuthToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          DataStorage.setCurrentUser(JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return account; 
      }),
        catchError(Constants.handleError)
      );
  }

  logout() {
    // remove user from local storage to log user out
    DataStorage.deleteCurrentUser();
    this.currentUserSubject.next(null!);
  }

  getAllEmployees() {
    return this.http.get<any>(this.url)
      .pipe(
        catchError(Constants.handleError)
      );
  }

  getEmployeeById(id: number) {
    return this.http.get<any>(this.url + id)
      .pipe(
        catchError(Constants.handleError)
      );
  }

}
