import React from 'react'
import {UserContext,SalaryContext} from '../App'

//This initialy use for Context Hook
//in this component we do not use useContext Hook
// we just use context
// context hook use in component E


function ComponentF() {
    return (
        <div>
            Component F
            <UserContext.Consumer>
                {
                    user =>{
                        return(
                            <SalaryContext.Consumer>
                                {salary =>{
                                    return(
                                        <div>
                                            User context value {user}, Salay context value {salary}
                                        </div>
                                    )
                                }}
                            </SalaryContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
