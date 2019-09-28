import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
   selector: 'app-welcome',
   templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage: string
 name =''
  constructor(private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {

    // console.log(this.route.snapshot.params['name']);
    this.name= this.route.snapshot.params['name'];
  }

  // getWelcomeMessage(){
  //   console.log(this.service.executeHelloWorldBeanService());
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );
  // }

  getWelcomeMessageWithPathVariable(){
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    console.log(response);
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessage= error.error.message;
  }
}
