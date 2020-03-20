import { Component, OnInit } from '@angular/core';
import { HackingRule } from '@shared/components/search/models/HackingRule';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { SearchOption } from '@shared/components/search/models/SearchOption';
import { Filterable } from '@shared/models/Filterable';
import { FakeApiService } from '@app/http/fake-api.serive';
import { InProjectCompany } from '@shared/models/InProject';
import { InProjectService } from '@shared/services/in-project.service';
import { PageInfo } from '@shared/models/GenericPageableResponse';
import { ToastService } from '@app/services/toast.service';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './in-project-list.component.html',
  styleUrls: ['in-project-list.component.scss']
})
export class InProjectListComponent implements OnInit, Filterable<any> {
  dataSource: InProjectCompany[] = [];
  pageInfo: PageInfo;

  filters: SearchOption[] = [];
  defaultRule = SearchRule.builder()
    .id('default')
    .value({ company: '' })
    .description('Procurar por: "{0}"')
    .build();

  constructor(private service: InProjectService) {}

  ngOnInit(): void {
    this.nextPage();
  }

  nextPage() {
    const hasNext = this.pageInfo ? this.pageInfo.hasNext : true;
    const pageIndex = this.pageInfo ? this.pageInfo.pageIndex + 1 : 0;
    if (hasNext) {
      this.service.getCompanys(30, pageIndex).subscribe(results => {
        this.dataSource = this.dataSource.concat(
          results.records.map(company => new InProjectCompany(company))
        );
        this.pageInfo = results.pageInfo;
      });
    }
  }

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
      builder('codigo_empresa_erp__c', /(erp)\:\s(?<value>.+)/gi, 'Código ERP'),
      builder('name', /(integracao)\:\s(?<value>.+)/gi, 'Integração'),
      builder('name', /(integracão)\:\s(?<value>.+)/gi, 'Integração'),
      builder('name', /(integraçao)\:\s(?<value>.+)/gi, 'Integração'),
      builder('name', /(integração)\:\s(?<value>.+)/gi, 'Integração'),
      builder('name', /(empresa)\:\s(?<value>.+)/gi, 'Integração'),
      builder('status_resumido__c', /(status)\:\s(?<value>.+)/gi, 'Status do projeto'),
      builder('o_que_foi_feito_hoje__c', /(ultima)\:\s(?<value>.+)/gi, 'Última ação'),
      builder('o_que_foi_feito_hoje__c', /(última)\:\s(?<value>.+)/gi, 'Última ação'),
      builder('proximo_passo__c', /(pendente)\:\s(?<value>.+)/gi, 'Ação pendente'),
      builder('envolvidos__c', /(responsável)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('envolvidos__c', /(responsavel)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('envolvidos__c', /(responsáveis)\:\s(?<value>.+)/gi, 'Responsáveis'),
      builder('envolvidos__c', /(responsaveis)\:\s(?<value>.+)/gi, 'Responsáveis')
    ];
  }

  removeFilter(chip: SearchOption) {
    this.filters.splice(this.filters.indexOf(chip), 1);
    this.fetch();
  }

  fetch() {}
}
