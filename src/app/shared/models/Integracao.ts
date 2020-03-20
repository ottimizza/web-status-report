export class IntegracaoSalesForce {
  codigo_empresa_erp__c: string;
  envolvidos__c: unknown;
  id: number;
  name: string;
  nome_contabilidade__c: string;
  nome_resumido__c: string;
  o_que_foi_feito_hoje__c: unknown;
  proximo_passo__c: string;
  resumo_prox_passo__c: unknown;
  status_report_data__c: string;
  status_resumido__c: string;
}

export class Integracao {
  constructor(salesForceObj?: IntegracaoSalesForce) {
    this.codigoErp = salesForceObj.codigo_empresa_erp__c;
    this.envolvidos = salesForceObj.envolvidos__c;
    this.id = salesForceObj.id;
    this.name = salesForceObj.name;
    this.nomeContabilidade = salesForceObj.nome_contabilidade__c;
    this.nomeResumido = salesForceObj.nome_resumido__c;
    this.feitoHoje = salesForceObj.o_que_foi_feito_hoje__c;
    this.proximoPasso = new Date(salesForceObj.proximo_passo__c);
    this.resumoProximoPasso = salesForceObj.resumo_prox_passo__c;
    this.statusReportData = new Date(salesForceObj.status_report_data__c);
    this.statusResumido = salesForceObj.status_resumido__c;
  }

  public codigoErp: string;
  public envolvidos: unknown;
  public id: number;
  public name: string;
  public nomeContabilidade: string;
  public nomeResumido: string;
  public feitoHoje: unknown;
  public proximoPasso: Date;
  public resumoProximoPasso: unknown;
  public statusReportData: Date;
  public statusResumido: string;
}
