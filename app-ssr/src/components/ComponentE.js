import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,SalaryContext} from '../App'

//This initialy use for Context Hook

function ComponentE() {
    const user = useContext(UserContext)
    const salary = useContext(SalaryContext)
    return (
        <div>
            Component E - {user} {salary}
            <ComponentF />
        </div>
    )
}

export default ComponentE
