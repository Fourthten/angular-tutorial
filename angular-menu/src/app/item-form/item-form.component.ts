import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from '../item';
import { ItemForm } from '../item-form';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: [ './item-form.component.css' ]
})
export class ItemFormComponent implements OnInit {
  item = new ItemForm(0, '', 0, '');

  constructor(
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.item) {
      this.itemService.addItem(this.item)
        .subscribe(() => this.goBack());
    }
  }
}
