export class VocEntry {
  word: string;
  definition: string;
  author: string;
  nature: string;
  language: string;
  theme: string;
  example: string;
  importance: number;

  constructor(word, definition,author, nature, language, theme, example, importance){
    this.word = word;
    this.definition = definition;
    this.author = author;
    this.nature = nature;
    this.language = language;
    this.theme = theme;
    this.example = example;
    this.importance = importance;
  }


}
