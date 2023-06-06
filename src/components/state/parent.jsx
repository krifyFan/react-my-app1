import { Component } from "react";
import ListItem from "./sholudComponentUpdate";

class Stated extends Component {
    state = { 
        listData: [
            {
              id: 1,
              name: "Sony 65寸高清液晶电视",
              price: 7000,
              stock: 1
            },
            {
              id: 2,
              name: "华为 Meta30",
              price: 6000,
              stock: 2
            },
            {
              id: 3,
              name: "华硕画家国度笔记本电脑",
              price: 10000,
              stock: 3
            }
        ]
    }

    renderList(){
        return this.state.listData.map(item => {
            return <ListItem key={item.id} data={item} onDelete={this.handleDelete}/>
        })
    }

    handleDelete=(id)=>{
        let listData=this.state.listData.filter(item => item.id !== id)
        this.setState({
            listData
        })
    }

    render() {
        return(
            <div>
                { this.state.listData.length <= 0 && <div>购物车已空</div>}
                { this.renderList() }
            </div>
        )
    }
}

export default Stated