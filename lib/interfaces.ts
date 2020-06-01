export interface ClassList {
  id: number;
  name: string;
  mark: number;
}

export interface Group {
  group: Array<ClassList>;
  groupAvg: number;
}

export interface Student {
  calculateAvg(classList: Array<ClassList>): number;
}
