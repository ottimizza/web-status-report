import { Component, OnInit } from '@angular/core';
import { PageInfo } from '@shared/models/GenericPageableResponse';
import { HackingRule } from '@shared/components/search/models/HackingRule';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { SearchOption } from '@shared/components/search/models/SearchOption';
import { Filterable } from '@shared/models/Filterable';
import { IntegratedService } from '@shared/services/integrated.service';
import { Integracao } from '@shared/models/Integracao';
import { ToastService } from '@app/services/toast.service';

@Component({
  templateUrl: './integrateds-list.component.html',
  styleUrls: ['./integrateds-list.component.scss']
})
export class IntegratedListComponent implements OnInit, Filterable<Integracao> {
  dataSource: Integracao[] = [];
  pageInfo: PageInfo;

  filters: SearchOption[] = [];
  defaultRule = SearchRule.builder()
    .id('default')
    .value({ name: '' })
    .description('Nome da empresa: "{0}"')
    .build();

  constructor(private _service: IntegratedService, private _toast: ToastService) {}

  ngOnInit(): void {
    this.nextPage();
  }

  nextPage() {
    const pageIndex = this.pageInfo ? this.pageInfo.pageIndex + 1 : 0;
    const hasNext = this.pageInfo?.hasNext ?? true;

    const pageCriteria = { pageSize: 30, pageIndex };

    let filters = {};
    this.filters.forEach(filter => (filters = Object.assign(filters, filter.value)));

    const searchCriteria = Object.assign(filters, pageCriteria);

    if (hasNext) {
      this._toast.waitingResponse();
      this._service.getPaginated(searchCriteria).subscribe(results => {
        this.pageInfo = results.pageInfo;
        if (pageIndex === 0) {
          this.dataSource = [];
        }
        this.dataSource = this.dataSource.concat(results.records.map(int => new Integracao(int)));
        this._toast.hideSnack();
      });
    }
  }

  hackings() {
    const builder = (id: string, regex: RegExp, description: string, value: any) => {
      return HackingRule.builder()
        .id(id)
        .regex(regex)
        .value(value)
        .description(`${description}: "{0}"`)
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

  filterApply(event: SearchOption) {
    const filters = this.filters.map(filter => filter.id);
    if (filters.includes(event.id)) {
      this.filters.splice(filters.indexOf(event.id), 1);
    }
    this.filters.push(event);
    this.fetch();
  }

  removeFilter(filter: SearchOption) {
    this.filters.splice(this.filters.indexOf(filter), 1);
    this.fetch();
  }

  fetch() {
    this.pageInfo = null;
    this.nextPage();
  }

  onScroll(event: boolean) {
    if (this.pageInfo && this.pageInfo.hasNext) {
      this.nextPage();
    }
  }
}
