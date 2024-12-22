import React,{ Component, Fragment } from "react";
import "../css/App.css"
export default class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.state = {
            isTrue: false,
        };
    }
    toggleTrue = () =>{
        if (this.state.isTrue){
            this.setState({
                isTrue: false,
            });
            return
        }
        this.setState({
            isTrue: true,
        })
    }
    render(){
        return(
            <>
            // <h1 className="h1-red">HelloWorld...</h1>
            <h1 className="h1-red">{this.props.msg}</h1>
            
            {this.state.isTrue &&
                <Fragment>
                    <p1>current value is true</p1>
                </Fragment>
            }
            {
                this.state.isTrue
                ? <p>is true</p>
                : <p>is false</p>
            }
            <a href="#!" className="btn btn-outline-secondary" onClick={this.toggleTrue}>Toggle-to-true</a>
            </>
            
        );
    }
}