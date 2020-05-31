interface ClassList {
  name: string;
  mark: number;
}

interface Student {
  calculateAvg(classList: Array<ClassList>): number;
}

class Students implements Student {
  calculateAvg(classList: Array<ClassList>): number {
    let count: number = 0;
    let total: number = 0;

    classList.forEach((i) => {
      total += i.mark;
      count++;
    });

    return total / count;
  }

  genGroups(classList: Array<ClassList>, avg: number) {}
}

export default new Students();
