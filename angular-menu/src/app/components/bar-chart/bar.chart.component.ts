import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-bar',
  templateUrl: 'chart.component.html'
})
export class BarChartComponent implements OnInit {
  items: Item[] = [];
  barChartData: {}[] = [];
  chartOptions = { }

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = items.slice(1, 5)
        this.items.forEach(item => {
          var obj = { label: item.name, y: item.price }
          this.barChartData.push(obj)
        });
        this.chartOptions = this.getChartOptions();
      });
  }

  getChartOptions(){
    return {
      title:{
        text: "Total Price"
      },
      animationEnabled: true,
      axisY: {
        includeZero: true,
        suffix: "K"
      },
      data: [{
        type: "bar",
        indexLabel: "{y}",
        yValueFormatString: "#,###K",
        dataPoints: this.barChartData
      }]
    };
  }


}
