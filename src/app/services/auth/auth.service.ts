import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from './auth.request';
import { AuthenticationResponse } from './authentication.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(request: AuthenticationRequest): Observable<AuthenticationResponse | null> {
    return this.http
          .post<AuthenticationResponse>(environment.endpoints.authentication,
            request, { ...environment.options, observe: 'response' })
            .pipe(map((response: HttpResponse<AuthenticationResponse>) => response.body));
  }

}
