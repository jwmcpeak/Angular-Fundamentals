import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import {EventService} from './../shared/services/EventService';
import {WishService} from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items! : WishItem[];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data : any) => {
      this.items = data;
    })
  }

  
  filter: any; 
}
