import React,{Component} from 'react'


class Counter extends Component {
    render(){
        return(
            <span>{this.props.value}</span>
        )
    }
}

export default Counter
