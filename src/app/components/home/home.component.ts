import { Component } from '@angular/core';
import { AppService } from '../../services/app.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  postsArray = [];

  constructor(public service: AppService) {

  }

  getData() {
    this.service.getApiData().subscribe((res: any) => {
      this.postsArray = res;
    })
  }

  postData() {
    this.service.postDataTOAPI().subscribe(res=> {
      console.log(res)
    })
  }

  
  updateData() {
    this.service.updateAPIdata().subscribe(res=> {
      console.log(res)
    })
  }

  delete() {
    this.service.deleteData().subscribe(res=> {
      console.log(res)
    })
  }


  getChildData(event: any) {
    console.log('Parent Compoent: ', event)
  }
}
