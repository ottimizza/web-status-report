import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '@app/http/fake-api.serive';
import { PageInfo } from '@shared/models/GenericPageableResponse';
import { BreadCrumb } from '@shared/components/breadcrumb/breadcrumb.component';
import { HackingRule } from '@shared/components/search/models/HackingRule';
import { SearchRule } from '@shared/components/search/models/SearchRule';
import { SearchOption } from '@shared/components/search/models/SearchOption';

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

  filters: SearchOption[] = [];
  defaultRule = SearchRule.builder()
    .id('default')
    .value({ organization: '' })
    .description('Buscar por: "{0}"')
    .build();

  constructor(private _service: FakeApiService) {}

  ngOnInit(): void {
    this._service.getIntegratedOrganizations().subscribe(int => {
      this.pageInfo = int.pageInfo;
      this.dataSource = int.records;
    });
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
      builder('lastLotDate', /(lote)\:\s(?<value>.+)/gi, 'Último lote processado'),
      builder('lastLotDate', /(data)\:\s(?<value>.+)/gi, 'Último lote processado'),
      builder('total', /(total)\:\s(?<value>.+)/gi, 'Total de lançamentos processados'),
      builder('total', /(lancamentos)\:\s(?<value>.+)/gi, 'Total de lançamentos processados'),
      builder('total', /(lançamentos)\:\s(?<value>.+)/gi, 'Total de lançamentos processados')
    ];
  }

  filterApply(event: SearchOption) {
    this.filters.push(event);
    this._fetch();
  }

  removeFilter(filter: SearchOption) {
    this.filters.splice(this.filters.indexOf(filter), 1);
    this._fetch();
  }

  private _fetch() {}

  onScroll(event: boolean) {
    if (this.pageInfo && this.pageInfo.hasNext) {
      this.nextPage();
    }
  }

  nextPage() {}
}
