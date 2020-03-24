import { Component, OnInit } from '@angular/core';
import { InProjectService } from '@shared/services/in-project.service';
import { IntegratedService } from '@shared/services/integrated.service';
import { LoteService } from '@shared/services/lote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inProjectCount = 0;
  integratedCount = 0;
  reportCount = 0;

  constructor(
    public inProjectService: InProjectService,
    public integratedService: IntegratedService,
    public loteService: LoteService
  ) {}

  ngOnInit(): void {
    this.inProjectService
      .getCount()
      .subscribe(result => (this.inProjectCount = result.record ?? 0));
    this.integratedService
      .getCount()
      .subscribe(result => (this.integratedCount = result.record ?? 0));
    this.loteService.getCount().subscribe(result => (this.reportCount = result.record ?? 0));
  }

  toValue(num: number) {
    return num.toFixed(2).replace(/\./g, ',');
  }

  formatter(num: string) {
    const nums = `${num}`.split('.');

    const invert = (value: string) => {
      let val = '';
      value.split('').forEach(char => {
        val = char + val;
      });
      return val;
    };

    const text = invert(nums[0]);

    const array: string[] = [];
    for (let start = 0; start < text.length; start = start + 3) {
      array.push(text.substring(start, start + 3));
    }

    let newText = '';
    array.forEach((arr, id) => {
      newText += arr;
      if (id < array.length - 1) {
        newText += '.';
      }
    });

    if (!nums[1]) {
      return invert(newText);
    }
    return `${invert(newText)},${nums[1]}`;
  }
}
