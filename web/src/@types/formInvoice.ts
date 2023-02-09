interface IInvoice {
  noteNumber: string;
  dateOfIssue: string;
  dueDate: string;
  value: string;
}

interface ITaxes {
  issqn: string;
  irrf: string;
  csll: string;
  cofins: string;
  inss: string;
  pis: string;
}

interface ITechnical {
  value: string;
  percentage: string;
}

export interface IFormData {
  invoice: IInvoice;
  taxes: ITaxes;
  technical: ITechnical;
}
