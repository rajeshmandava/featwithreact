import React, {Component} from 'react';


class SimpleEvents extends Component{

    handleClick(){
        console.log("Test")
    }

    handleChange(){
        console.log("User changed the input!!")
    }

    handleSubmit(event){
        console.log("Form submitted!")
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                <button onClick={this.handleClick} className="btn">Click Me!</button>
                </form>
            </div>
        )
    }
}

export default SimpleEvents;