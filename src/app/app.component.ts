import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Task';
  
  apiData:any;
  searchVal:string='';

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(){
    this.apiService.getApiMethod().subscribe(res=>{
      console.log(res);
      this.apiData=res;
      
    })
  }
}
