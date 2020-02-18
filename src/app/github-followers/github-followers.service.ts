import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubFollowersService {
  private readonly URL = 'https://api.github.com/users/Adidi/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() {
    return this.http.get(this.URL);
  }
}
