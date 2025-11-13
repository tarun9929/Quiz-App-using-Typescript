export interface Options {
  _id: string;
  option: string;
}

export interface Problem {
  _id: string;
  statement: string;
  options: Options[];
}