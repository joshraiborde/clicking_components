import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default ParentComp
