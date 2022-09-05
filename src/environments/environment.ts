import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,

  endpoints: {
    authentication: '/api/authenticate'

  },

  options: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

}
