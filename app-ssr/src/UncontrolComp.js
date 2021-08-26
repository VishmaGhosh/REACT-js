import React from "react";
class UncontrolComp extends React.Component{
    constructor(){
        super();
        this.name=React.createRef();
        this.password=React.createRef();

    }
    submitHandle(event){
        event.preventDefault();
        console.warn(this.name.current.value,this.password.current.placeholder);
    }
    render(){
        return(
            <div className="UncontrolComp">
                <h3>Uncontrol Component</h3>
                <form onSubmit={(event)=>{this.submitHandle(event)}}>
                    <input type="text" placeholder="enter name" ref={this.name} /><br/><br />
                    <input type="password" placeholder="enter password" ref={this.password} /><br /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        )
    }
}
export default UncontrolComp