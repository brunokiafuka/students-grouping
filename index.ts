import Student from "./lib/students";
import data from "./lib/mock.json";

interface ClassList {
  name: string;
  mark: number;
}

function groupStudents(data: Array<ClassList>): void {
  const avg = Student.calculateAvg(data);
  const studentsPerGroup = 2;
  const numOfGroups = Math.floor(data.length / studentsPerGroup);

  console.log("Avg: ", avg);
  console.log("Num of groups: ", numOfGroups);
}

groupStudents(data);
