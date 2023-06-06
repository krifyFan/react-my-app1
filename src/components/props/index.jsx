import { Component } from "react";

export default class Props extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conunt: 1
        }
    }

    handleClick(id) {
        console.log('id', id);
    }

    render() {
        return (
            <div className="prop">
                {/* 方法一 */}
                <span onClick={()=>{this.props.onDelete(this.state.conunt)}}>
                    count: {this.state.conunt}
                </span>
            </div>
        )
    }
}