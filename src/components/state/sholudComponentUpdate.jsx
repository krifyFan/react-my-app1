import { Component } from "react";

class ListItem extends Component{
    state = {}

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps.data.id', nextProps.data.id);
        console.log('this.props.data.id', this.props.data.id);
        if(nextProps.data.id === this.props.data.id) return false
        return true
    }

    render() {
        return (
            <div>
                <span>{ this.props.data.name }</span>
                <button onClick={()=>this.props.onDelete(this.props.data.id)}>
                    删除
                </button>
            </div>
        )
    }
}

export default ListItem