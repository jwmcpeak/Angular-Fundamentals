import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  constructor() {
    events.listen('removeWish', (wish : any) => {
      // todo remove wish from items

      console.log(wish);
    })
  }

  
  filter: any; 
}
