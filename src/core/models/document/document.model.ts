export class Document {
  id: number;
  documentNumber: string;
  date: string;
  department: string;
  title: string;
  url: string;
}

export class DocumentSection {
  documentType: string;
  title: string;
  documents: Document[];
}

export class Documents {
  name: string;
  topic: string;
  documentTopics: DocumentSection[];
}

export class DocumentType {
  name: string;
  documents: Documents[];
}

