import React from "react";

class WhiteTooltip extends React.Component {
    state={
        showTooltip: true,
        content: ''
    }

    handleOver=(e)=>{
        this.setState({showTooltip: true, content: e.target.innerText})
    }

    handleOut=(e)=>{
        this.setState({showTooltip: true, content: ''})
    }

    render(){
        return(
            <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                {this.props.children(this.state)}
            </div>
        )
    }
}
export default WhiteTooltip