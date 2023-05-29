import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  public username: string = 'Venkat'

  constructor(public http: HttpClient) { }

  login() {
    return false;
  }


  getApiData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  postDataTOAPI() {
    const requestBody = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    return this.http.post('https://jsonplaceholder.typicode.com/posts', requestBody)

  }


  updateAPIdata() {
    const requestBody = {
      id: 1,
      title: 'Venkat',
      body: 'Testing',
      userId: 1,
    }
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', requestBody)
  }
  

  deleteData() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

}
