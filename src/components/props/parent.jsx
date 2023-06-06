import { Component } from "react";
import Child from './index'

export default class Parent extends Component{
    handDelete(id) {
        console.log('id', id);
    }

    render(){
        return <Child onDelete={this.handDelete}></Child>
    }
}