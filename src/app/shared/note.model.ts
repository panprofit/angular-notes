export interface INote {
  created: number;
  text: string;
  tags: Set<string>;

  getTags?(): Array<string>;
}

export class Note implements INote {
  public created: number;
  public tags: Set<string>;
  public text: string;

  constructor(data?: INote) {
    if (data) {
      const {created, tags, text} = data;
      this.created = created;
      this.tags = new Set(tags);
      this.text = text;
    } else {
      this.created = Date.now();
      this.tags = new Set();
      this.text = '';
    }
  }

  getTags(): Array<string> {
    return Array.from(new Set((this.text.match(/\s?#\w+\s?/g) || [])
      .map((item) => item.replace(/\s|#|\n/g, ''))));
  }

}
