import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-pie',
  templateUrl: 'chart.component.html',
})
export class PieChartComponent implements OnInit {
  items: Item[] = [];
  pieChartData: {}[] = [];
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
          var obj = { name: item.name, y: item.price }
          this.pieChartData.push(obj)
        });
        this.chartOptions = this.getChartOptions();
      });
  }

  getChartOptions(){
    return {
      animationEnabled: true,
      title: {
        text: "Total Price"
      },
      data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.pieChartData
      }]
    };
  }
}
