import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { User } from '../models/user';

@Injectable()

export class UserService {
  private usersUrl: string = 'https://reqres.in/api/users';
	
	constructor(private http: Http) {}
	//grab all users
	getUsers(): Observable<User[]>{
    return this.http.get(this.usersUrl)
      .map(res => res.json().data)
      .catch(this.handleError);
	}

  //get a single user
  getUser() {
    return this.http.get('http://example.com')
      .map(res => res.json())
      .catch(this.handleError);
  }

  //create a user

  //update a user

  //delete a user

  /*
  Handle error
  */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || '' ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);

    //return Observable.throw(err.json().data || 'Server error.');
  }

}