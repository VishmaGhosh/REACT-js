import React, { useState,useCallback } from 'react'
import Age from './Age'
import Title from './Title'
import Salary from './Salary'
import Button from './Button'

//for learn usecallback

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(20000)

    const IncrementAge = useCallback(() => {
        setAge(age + 1)
    },[age]
) 
    const IncrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary]
) 
    return (
        <div>
            <Title />
            <Age text="age" age={age} />
            <Button handleClick={IncrementAge} >Increment age</Button>
            <Salary text="Salary" salary={salary} />
            <Button handleClick={IncrementSalary}>Increment Salary</Button>

        </div>
    )
}

export default ParentComponent
