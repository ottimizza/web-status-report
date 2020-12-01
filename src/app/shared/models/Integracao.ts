export class IntegracaoSalesForce {
  Codigo_Empresa_ERP__c: string;
  Envolvidos__c: string;
  Id: number;
  Lotes_Processados__c: number;
  Name: string;
  Nome_Contabilidade__c: string;
  Nome_Resumido__c: string;
  O_que_foi_feito_hoje__c: string;
  Proximo_Passo__c: string;
  Resumo_Prox_Passo__c: string;
  Status_Report_Data__c: string;
  Status_Resumido__c: string;
  Ultimo_Lote_Processado__c: string;
}

export class Integracao {
  constructor(salesForceObj?: IntegracaoSalesForce) {
    this.codigoErp = salesForceObj.Codigo_Empresa_ERP__c;
    this.envolvidos = salesForceObj.Envolvidos__c;
    this.id = salesForceObj.Id;
    this.name = salesForceObj.Name;
    this.nomeContabilidade = salesForceObj.Nome_Contabilidade__c;
    this.nomeResumido = salesForceObj.Nome_Resumido__c;
    this.feitoHoje = salesForceObj.O_que_foi_feito_hoje__c;
    this.proximoPasso = new Date(salesForceObj.Proximo_Passo__c);
    this.resumoProximoPasso = salesForceObj.Resumo_Prox_Passo__c;
    this.statusReportData = new Date(salesForceObj.Status_Report_Data__c);
    this.statusResumido = salesForceObj.Status_Resumido__c;
    this.lotesProcessados = salesForceObj.Lotes_Processados__c;
    this.ultimoLoteProcessados = new Date(salesForceObj.Ultimo_Lote_Processado__c);
  }

  public codigoErp: string;
  public envolvidos: string;
  public id: number;
  public name: string;
  public nomeContabilidade: string;
  public nomeResumido: string;
  public feitoHoje: string;
  public proximoPasso: Date;
  public resumoProximoPasso: string;
  public statusReportData: Date;
  public statusResumido: string;
  public lotesProcessados: number;
  public ultimoLoteProcessados: Date;
}
