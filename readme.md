<div align="center" style="display:flex;flex-direction:column;">
    <h1>
       Grouping Generator 👥
    </h1>
</div>

## Background 📜

The current project represents a typescript solution which attempts to group students based on their marks and generating even/balanced groups.

> I.e: You have teach a programming class and you want to give exercises to your students, you've performed a small assessment and you are able now to differentiate the students based on their marks. Now you can use this program to help you group them properly. 

## State 📶

This project is currently under develompent.


## Example

Students List:
```json
[
  {
    "id": 1,
    "name": "Bruno",
    "mark": 18
  },
  {
    "id": 2,
    "name": "Fausto",
    "mark": 13
  },
  {
    "id": 3,
    "name": "Antonio",
    "mark": 5
  },
  {
    "id": 4,
    "name": "Doe",
    "mark": 10
  },
  {
    "id": 5,
    "name": "Mary",
    "mark": 15
  }
]
```

Groups generated: 
```js
[{
  group: [
    { id: 5, name: 'Mary', mark: 15 },
    { id: 3, name: 'Antonio', mark: 5 }
  ],
  groupAvg: 10
},
{
  group: [
    { id: 4, name: 'Doe', mark: 10 },
    { id: 2, name: 'Fausto', mark: 13 }
  ],
  groupAvg: 11.5
},
{ group: [ 
    { id: 1, name: 'Bruno', mark: 18 } 
    ],
  groupAvg: 18
}
]
```


## Roadmap

- [ ] Ensure the program generates fairly balanced groups; 
- [ ] Generate reusable lib
- [ ] Publish it no npm 

> *PRs are welcomed* 🚀


