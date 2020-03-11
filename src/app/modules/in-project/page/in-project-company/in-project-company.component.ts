import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';
import { FakeApiService } from '@app/http/fake-api.serive';

@Component({
  templateUrl: './in-project-company.component.html',
  styleUrls: ['./in-project-company.component.scss']
})
export class InProjectCompanyComponent implements OnInit {
  project: any;

  breadcrumb: BreadCrumb = {
    label: '',
    url: '/dashboard/projetos/empresa/101'
  };

  constructor(private _fake: FakeApiService) {}

  ngOnInit(): void {
    this._fake.getInProjectOrganizations().subscribe(result => {
      this.project = result.records[0];
      this.breadcrumb.label = result.records[0].integration;
    });
  }
}
