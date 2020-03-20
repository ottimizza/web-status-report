export class InProjectSalesForce {
  codigo_empresa_erp__c: string;
  envolvidos__c: unknown;
  id: number;
  name: string;
  nome_contabilidade__c: string;
  nome_resumido__c: string;
  o_que_foi_feito_hoje__c: unknown;
  proximo_passo__c: unknown;
  resumo_prox_passo__c: unknown;
  status_report_data__c: unknown;
  status_resumido__c: string;
}

export class InProjectCompany {
  constructor(salesForceObj?: InProjectSalesForce) {
    this.codigoErp = salesForceObj.codigo_empresa_erp__c;
    this.envolvidos = salesForceObj.envolvidos__c;
    this.id = salesForceObj.id;
    this.name = salesForceObj.name;
    this.nomeContabilidade = salesForceObj.nome_contabilidade__c;
    this.nomeResumido = salesForceObj.nome_resumido__c;
    this.feitoHoje = salesForceObj.o_que_foi_feito_hoje__c;
    this.proximoPasso = salesForceObj.proximo_passo__c;
    this.resumoProximoPasso = salesForceObj.resumo_prox_passo__c;
    this.statusReportData = salesForceObj.status_report_data__c;
    this.statusReportData = salesForceObj.status_resumido__c;
  }

  public codigoErp: string;
  public envolvidos: unknown;
  public id: number;
  public name: string;
  public nomeContabilidade: string;
  public nomeResumido: string;
  public feitoHoje: unknown;
  public proximoPasso: unknown;
  public resumoProximoPasso: unknown;
  public statusReportData: unknown;
  public statusResumido: string;
}
