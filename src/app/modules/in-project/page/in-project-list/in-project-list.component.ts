import { Component, OnInit } from '@angular/core';

import { SearchOption } from '@shared/components/search/models/SearchOption';
import { HackingRule } from '@shared/components/search/models/HackingRule';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { InProjectService } from '@shared/services/in-project.service';
import { PageInfo } from '@shared/models/GenericPageableResponse';
import { ToastService } from '@app/services/toast.service';
import { Filterable } from '@shared/models/Filterable';
import { Integracao } from '@shared/models/Integracao';

@Component({
  templateUrl: './in-project-list.component.html',
  styleUrls: ['in-project-list.component.scss']
})
export class InProjectListComponent implements OnInit, Filterable<Integracao> {
  dataSource: Integracao[] = [];
  pageInfo: PageInfo;

  filters: SearchOption[] = [];
  defaultRule = SearchRule.builder()
    .id('default')
    .value({ name: '' })
    .description('Nome da empresa: "{0}"')
    .build();

  sortInfo: any = null;

  constructor(private service: InProjectService, private toast: ToastService) {}

  ngOnInit(): void {
    this.nextPage();
  }

  nextPage() {
    const pageIndex = this.pageInfo ? this.pageInfo.pageIndex + 1 : 0;
    const hasNext = this.pageInfo?.hasNext ?? true;

    const pageCriteria = { pageIndex, pageSize: 30 };

    let filters = {};
    this.filters.forEach(filter => (filters = Object.assign(filters, filter.value)));

    const searchCriteria = Object.assign(filters, pageCriteria);

    if (hasNext) {
      this.toast.waitingResponse();
      this.service.getCompanys(searchCriteria).subscribe(results => {
        if (pageIndex === 0) {
          this.dataSource = [];
        }
        this.dataSource = this.dataSource.concat(
          results.records.map(company => new Integracao(company))
        );
        this.pageInfo = results.pageInfo;
        this.toast.hideSnack();
      });
    }
  }

  filterApply(event: SearchOption) {
    const filters = this.filters.map(filter => filter.id);
    if (filters.includes(event.id)) {
      this.filters.splice(filters.indexOf(event.id), 1);
    }
    this.filters.push(event);
    this.fetch();
  }

  hackings() {
    const builder = (id: string, regex: RegExp, description: string, value: any) => {
      return HackingRule.builder()
        .id(id)
        .regex(regex)
        .description(`${description}: "{0}"`)
        .value(value)
        .build();
    };

    return [
      builder('codigo_empresa_erp__c', /(erp)\:\s(?<value>.+)/gi, 'Código ERP', {
        codigo_empresa_erp__c: ''
      }),
      builder('id', /(id)\:\s(?<value>.+)/gi, 'Id', { id: '' }),
      builder('name', /(integracao)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('name', /(integracão)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('name', /(integraçao)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('name', /(integração)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('name', /(empresa)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('name', /(nome)\:\s(?<value>.+)/gi, 'Nome da empresa', { name: '' }),
      builder('status_resumido__c', /(status)\:\s(?<value>.+)/gi, 'Status do projeto', {
        status_resumido__c: ''
      }),
      builder('o_que_foi_feito_hoje__c', /(ultima)\:\s(?<value>.+)/gi, 'Última ação', {
        o_que_foi_feito_hoje__c: ''
      }),
      builder('o_que_foi_feito_hoje__c', /(última)\:\s(?<value>.+)/gi, 'Última ação', {
        o_que_foi_feito_hoje__c: ''
      }),
      builder('envolvidos__c', /(responsável)\:\s(?<value>.+)/gi, 'Responsáveis', {
        envolvidos__c: ''
      }),
      builder('envolvidos__c', /(responsavel)\:\s(?<value>.+)/gi, 'Responsáveis', {
        envolvidos__c: ''
      }),
      builder('envolvidos__c', /(responsáveis)\:\s(?<value>.+)/gi, 'Responsáveis', {
        envolvidos__c: ''
      }),
      builder('envolvidos__c', /(responsaveis)\:\s(?<value>.+)/gi, 'Responsáveis', {
        envolvidos__c: ''
      })
    ];
  }

  removeFilter(chip: SearchOption) {
    this.filters.splice(this.filters.indexOf(chip), 1);
    this.fetch();
  }

  fetch() {
    this.pageInfo = null;
    this.nextPage();
  }
}
