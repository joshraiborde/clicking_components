import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "No Name"
        }
    }

    componentDidMount() {
        setInterval(() =>{
            this.setState({
                name: "No Name"
            });
        }, 3000);
    }
    
    render() {
        return (
            <div>
                Parent Comp
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
