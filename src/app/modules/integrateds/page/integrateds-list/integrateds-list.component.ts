import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '@app/http/fake-api.serive';
import { PageInfo } from '@shared/models/GenericPageableResponse';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  templateUrl: './integrateds-list.component.html',
  styleUrls: ['./integrateds-list.component.scss']
})
export class IntegratedListComponent implements OnInit {
  dataSource: any[];
  pageInfo: PageInfo;

  breadcrumb: BreadCrumb = {
    label: 'Voltar',
    url: ''
  };

  constructor(private _service: FakeApiService) {}

  ngOnInit(): void {
    this._service.getIntegratedOrganizations().subscribe(int => {
      this.pageInfo = int.pageInfo;
      this.dataSource = int.records;
    });
  }
}
