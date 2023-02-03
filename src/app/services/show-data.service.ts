import { Injectable } from '@angular/core';
import { Show } from '../namensmodel/show';

@Injectable()
export class ShowDataService {
  shows: Show[] = [];
  
  constructor() {
    this.shows.push(new Show(1, 'Paw Patrol'))
    this.shows.push(new Show(2, 'Seinfeld'))
    this.shows.push(new Show(3, 'Ninjago'))
   }

   saveShow(show: Show) {

    this.shows.push(show);
    
    }

    


}