import { Component, OnInit } from '@angular/core';
import { InProjectService } from '@shared/services/in-project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inProjectCount: number;

  constructor(public inProjectService: InProjectService) {}

  ngOnInit(): void {
    this.inProjectService.getCount().subscribe(result => (this.inProjectCount = result.record));
  }
}
