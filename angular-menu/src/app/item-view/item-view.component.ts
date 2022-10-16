import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: [ './item-view.component.css' ]
})
export class ItemViewComponent implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }
}
