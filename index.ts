import Student from "./lib/students";
import data from "./lib/mock.json";

interface ClassList {
  name: string;
  mark: number;
}

function groupStudents(data: Array<ClassList>, stdPerGroup: number): void {
  const avg = Student.calculateAvg(data);
  const numOfGroups = Math.floor(data.length / stdPerGroup);

  console.log("Avg: ", avg);
  console.log("Num of groups: ", numOfGroups);
}

groupStudents(data, 2);
