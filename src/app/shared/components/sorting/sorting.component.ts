import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export class SortingOption {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-sort',
  templateUrl: './sorting.component.html'
})
export class SortingComponent implements OnInit {
  @Input() options: SortingOption[];
  @Output() sort: EventEmitter<{ sortBy: string }> = new EventEmitter();
  selected: string;

  ngOnInit(): void {
    this.selected = this.options[0].id;
  }

  devolve(id: string) {
    this.sort.emit({ sortBy: id });
    this.selected = id;
  }
}
