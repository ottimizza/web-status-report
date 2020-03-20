import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';
import { ActionButton } from '@shared/components/action-buttons/action-buttons.component';
import { InProjectService } from '@shared/services/in-project.service';
import { ActivatedRoute } from '@angular/router';
import { Integracao } from '@shared/models/Integracao';

@Component({
  templateUrl: './in-project-company.component.html',
  styleUrls: ['./in-project-company.component.scss']
})
export class InProjectCompanyComponent implements OnInit {
  project: Integracao;

  breadcrumb: BreadCrumb = {
    label: '',
    url: ''
  };

  buttons: ActionButton[] = [
    {
      icon: 'far fa-lightbulb-on',
      id: 'comment',
      label: 'Registrar Comentário'
    }
  ];

  constructor(private _service: InProjectService, private _routes: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this._routes.snapshot.params.companyId;
    this._service.getById(id).subscribe(imports => {
      const company = new Integracao(imports.records[0]);
      this.breadcrumb.label = company.name;
      this.breadcrumb.url = `/content/projetos/empresa/${company.codigoErp}`;
      this.project = company;
    });
    // this._fake.getInProjectOrganizations().subscribe(result => {
    //   this.project = result.records[0];
    //   this.breadcrumb.label = result.records[0].integration;
    // });
  }

  format(date: Date) {
    const format = (value: number) => {
      let val = `${value}`;
      if (value < 10) {
        val = '0' + value;
      }
      return val;
    };

    return `${format(date.getDate())}/${format(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  onActionClicked(id: string) {
    switch (id) {
      case 'comment':
        alert('Comentário registrado');
        break;
    }
  }
}
