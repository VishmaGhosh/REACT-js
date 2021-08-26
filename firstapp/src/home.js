//class componet
import React from 'react'
import './custome.css'//here we add some global style on h6 tag 

export default class Home extends React.Component{
    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
    
    componentDidMount()//life cycle method
    {
        console.warn('constructor')
    }
    render()
    {
        return(
            <div>
                {/*<h3>Home Component</h3>
                <h5>first Component added</h5>*/}
                {
                    this.state.show ?
                    <h6 className="header">{/*{this.props.data.name}*/}vishma is a good boy</h6>//here we recive object data from app.js
                    :null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle text</button>
                {/*hide and toggle the text/button/anything*/}
            </div>
        )
    }
}

//export default Home