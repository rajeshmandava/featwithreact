import React, {Component} from 'react';


class EventAndState extends Component{

    constructor(){
        super();
        this.state={
            inputText :""
        }
        // this.handleChange=this.handleChange.bind(this);
    }
    handleClick =()=>{
        // console.log("Test")
        this.setState({
            inputText:""
        })
    }

    handleChange=(event)=>{
        // console.dir(event.target.value)
        this.setState({
            inputText:event.target.value
        })
        console.log(this.state.inputText);

    }

    handleSubmit=(event)=>{
        console.log("Form submitted!")
        this.setState({
            inputText:"State is cool"
        })
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                <button onClick={this.handleClick} className="btn">Click Me!</button>
                </form>
            </div>
        )
    }
}

export default EventAndState;