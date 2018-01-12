import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Poll } from './poll'; 
import { Choice } from './choice';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
console.log("HttpClient:",HttpClient);

@Injectable()
export class PollService {

  private pollsUrl = 'https://api.open-agora.com/polls';
  private apiKey = "UUbUXKk0c7lyxTqmj76NvRO1bcrj7ik0";
  constructor(private http: HttpClient)  { 
  }

  getPolls(): Observable<Poll[]> {
    const api_token=this.apiKey;
    let url = `${this.pollsUrl}/?api_token=${api_token}`;
    return this.http.get<Poll[]>(url);
  }
  getChoices(api_token=this.apiKey, poll_id): Observable<Choice[]> {
    let url = `${this.pollsUrl}/${poll_id}?api_token=${api_token}`;
    return this.http.get<Choice[]>(url);
  }
}
