import Student from "./lib/students";
import data from "./lib/mock.json";
import { ClassList, Group } from "./lib/interfaces";

function groupStudents(data: Array<ClassList>, stdPerGroup: number) {
  const avg = Student.calculateAvg(data);
  const numOfGroups = Math.ceil(data.length / stdPerGroup);
  let groups: Array<Group> = [];

  console.log("Avg: ", avg);
  console.log("Num of groups: ", numOfGroups);

  for (let i = 0; i < numOfGroups; i++) {
    const newGroup = Student.genGroup(data, stdPerGroup, avg);
    groups.push(newGroup);
  }
  return groups;
}

const groups = groupStudents(data, 2);

console.log(groups);
