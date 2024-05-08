import { Component } from '@angular/core';
import { JokesserviceService } from '../../services/jokesservice.service';

@Component({
  selector: 'app-jokescomponent',
  templateUrl: './jokescomponent.component.html',
  styleUrl: './jokescomponent.component.css'
})
export class JokescomponentComponent {

  joke: string = '';

  constructor(private jokesservice: JokesserviceService) {}

  getRandomJoke() {
    this.jokesservice.getRandomJoke().subscribe(
      (data: any) => {
        this.joke = data.value;
      },
      (error: any) => {
        console.log('Error fetching Chuck Norris joke:', error);
      }
    );
  }
}
