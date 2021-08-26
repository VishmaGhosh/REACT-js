import React from 'react'
import Person from './Person'

function NameList() {
    const name = ["ram", "sam", "jam"]
    const nameList = name.map((name,index) => <h1 key={index}> {index}-{name}</h1>)
    const person = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id:2,
            name: "Clark",
            age: 32,
            skill: "Anguler"
        },
        {
            id:3,
            name: "Diana",
            age : 25,
            skill: "Vue"
        }
    ]

    // const personlist = person.map(person => <h1>{person.name}-{person.age}-{person.skill}</h1>)
    // const personlist = person.map(person => <Person key={person.id} person={person} />) 

    return (
        <div>
            {
                //    name.map(name => <h2>{name}</h2>)
                nameList
                // personlist
            }
        </div>
    )
}

export default NameList
