export class BrowserNote {
  id?: number;
  title: string = '';
  text: string = '';
  userId?: number;
  createdDate!: Date;
  updatedDate!: Date;

  /**
   *
   */
  constructor() {
    console.log('BN ctor called');
  }

  static createFromText(text: string, title?: string): BrowserNote {
    const note = new BrowserNote();
    note.title = title ?? new Date().toDateString();
    note.text = text;
    note.createdDate = new Date();
    note.updatedDate = new Date();
    note.userId = 3;

    return note;
  }
}
