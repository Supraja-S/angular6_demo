import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmailCheckService {
  constructor(private http: Http) {}

  checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/users.json');
  }
}
