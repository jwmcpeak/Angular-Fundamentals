import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  @Input() wishes : WishItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  

}
