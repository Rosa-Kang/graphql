export const people = [{
  id: "1",
  name: "Nicolas",
  age: 18,
  gender: "female"
},
{
  id: "2",
  name: "Malan",
  age: 28,
  gender: "male"
},
{
  id: "3",
  name: "Lian",
  age: 27,
  gender: "male"
}
]

export const getById = id => {
    const filteredPeople = people.filter(person=> person.id === String(id));
    return filteredPeople[0];
}