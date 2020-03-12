import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';
import { FakeApiService } from '@app/http/fake-api.serive';
import { ActionButton } from '@shared/components/action-buttons/action-buttons.component';

@Component({
  templateUrl: './in-project-company.component.html',
  styleUrls: ['./in-project-company.component.scss']
})
export class InProjectCompanyComponent implements OnInit {
  project: any;

  breadcrumb: BreadCrumb = {
    label: '',
    url: '/content/projetos/empresa/101'
  };

  buttons: ActionButton[] = [
    {
      icon: 'far fa-lightbulb-on',
      id: 'comment',
      label: 'Registrar Comentário'
    }
  ];

  constructor(private _fake: FakeApiService) {}

  ngOnInit(): void {
    this._fake.getInProjectOrganizations().subscribe(result => {
      this.project = result.records[0];
      this.breadcrumb.label = result.records[0].integration;
    });
  }

  onActionClicked(id: string) {
    switch (id) {
      case 'comment':
        alert('abc');
        break;
    }
  }
}
