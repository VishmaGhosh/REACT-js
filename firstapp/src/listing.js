import React from 'react'

class Listing extends React.Component{
    constructor()
    {
        super();
        this.state={
            list:[
                {name:'anil',phone:"1234",email:"anil@test.com"},
                {name:'zak',phone:"1235",email:"zak@test.com"},
                {name:'jhone',phone:"1236",email:"jhone@test.com"},
            ]
        }
    }
    render(){
        return(
            <div className="Listing">
                <h1>
                    Listing with map
                </h1>
                {
                    this.state.list.map((item)=>
                    <div style={{color:"cyan"}}>
                        <span>Name: {item.name}    Email: {item.email}</span>
                    </div>
                    )
                }
            </div>
        )
    };
};
export default Listing
//here we make list of items using map