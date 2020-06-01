import { Student, ClassList, Group } from "./interfaces";

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

  genGroup(
    classList: Array<ClassList>,
    stdPerGroup: number,
    avg: number
  ): Group {
    let group: Array<ClassList> = [];
    let done: boolean = false;
    let groupAvg: number;

    while (classList.length > 0 && !done) {
      let rndGroup = [];
      for (let index = 0; index < stdPerGroup; index++) {
        const rnd = Math.floor(Math.random() * classList.length + 0);
        rndGroup.push(classList[rnd]);
        classList.splice(rnd, 1);
      }

      if (rndGroup.indexOf(undefined) !== -1) {
        rndGroup.splice(rndGroup.indexOf(undefined), 1);
      }

      groupAvg = this.calculateAvg(rndGroup);

      if (groupAvg <= avg + 15 && groupAvg >= avg - 15) {
        group = rndGroup;
        done = true;
      }
    }

    return {
      group,
      groupAvg,
    };
  }
}

export default new Students();
