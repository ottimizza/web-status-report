import { Component } from '@angular/core';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';
import { HackingRule } from '@shared/components/search/models/HackingRule';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { SearchOption } from '@shared/components/search/models/SearchOption';
import { Filterable } from '@shared/models/Filterable';

@Component({
  templateUrl: './in-project-list.component.html',
  styleUrls: ['in-project-list.component.scss']
})
export class InProjectListComponent implements Filterable<any> {
  dataSource: any[];

  breadcrumb: BreadCrumb = {
    label: 'Voltar',
    url: ''
  };

  filters: SearchOption[] = [];
  defaultRule = SearchRule.builder()
    .id('default')
    .value({ company: '' })
    .description('Procurar por: "{0}"')
    .build();

  filterApply(event: SearchOption) {
    this.filters.push(event);
    this.fetch();
  }

  hackings() {
    const builder = (id: string, regex: RegExp, description: string) => {
      return HackingRule.builder()
        .id(id)
        .regex(regex)
        .description(`${description}: "{0}"`)
        .build();
    };

    return [
      builder('erp', /(erp)\:\s(?<value>.+)/gi, 'Código ERP'),
      builder('organization', /(integracao)\:\s(?<value>.+)/gi, 'Integração'),
      builder('organization', /(integracão)\:\s(?<value>.+)/gi, 'Integração'),
      builder('organization', /(integraçao)\:\s(?<value>.+)/gi, 'Integração'),
      builder('organization', /(integração)\:\s(?<value>.+)/gi, 'Integração'),
      builder('organization', /(empresa)\:\s(?<value>.+)/gi, 'Integração'),
      builder('status', /(status)\:\s(?<value>.+)/gi, 'Status do projeto'),
      builder('last', /(ultima)\:\s(?<value>.+)/gi, 'Última ação'),
      builder('last', /(última)\:\s(?<value>.+)/gi, 'Última ação'),
      builder('pending', /(pendente)\:\s(?<value>.+)/gi, 'Ação pendente'),
      builder('responsables', /(responsável)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('responsables', /(responsavel)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('responsables', /(responsáveis)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('responsables', /(responsaveis)\:\s(?<value>.+)/gi, 'Responsáveis')
    ];
  }

  removeFilter(chip: SearchOption) {
    this.filters.splice(this.filters.indexOf(chip), 1);
    this.fetch();
  }

  fetch() {}
}
