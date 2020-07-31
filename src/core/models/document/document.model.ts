export class Document {
  id: number;
  documentNumber: string;
  date: string;
  department: string;
  title: string;
  url: string;
}

export class DocumentSection {
  title: string;
  documents: Document[];
}



