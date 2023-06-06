import { Component } from "react";

export default class StateClass extends Component {
    constructor(props){
        super(props)
        this.state = { //定义一个state
            count:1 
        }
    }

    addCount(){
        console.log('修改前', this.state.count);
        this.setState({
            count: this.state.count+1
        }, ()=>{
            console.log('step3',this.state.count) // 可以拿到修改后的值
        })
        console.log('修改后', this.state.count);
    }

    render() {
        return (
            <div onClick={()=>this.addCount()} >{ this.state.count }</div>
        )
    }
}