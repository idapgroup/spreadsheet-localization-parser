export interface ParserOptions {
  languages: string[];
  keyColumnName: string;
  keepEmpty?: boolean;
  normalizeValue?: (value: string) => string;
}

export interface ParsedTranslations {
  [key: string]: Record<string, string>;
}
