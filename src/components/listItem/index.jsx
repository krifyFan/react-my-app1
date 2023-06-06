import { Component } from "react";
import './index.css'
import style from './index.module.css'
import classnames from 'classnames/bind'
const cls = classnames.bind(style)
// import cn from 'classnames'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        // this指向问题--方法一
        this.handleClick1 = this.handleClick1.bind(this)
    }

    doSomething() {
        console.log(123)
    }

    handleClick1() {
        this.doSomething()
    }

    handleClick2() {
        this.doSomething()
    }

    // 方法3，推荐使用，箭头函数的this总是指向定义时的对象，而不是运行时
    handleClick3 = (e) => {
        console.log('e', e);
        this.doSomething()
    }

    renderList(){
        if(this.props.data.name === 'react') {
            return <div style={{fontSize:28,color:'red'}}>
                <span className={style.bg}>jsx</span>
            </div>
        } else {
            return <div>template</div>
        }
    }

    render() {
        return (
            // <div>
            //     { this.props.data.name }
            // </div>
            <div className="listItem">
                {/* 使用三目运算 */}
                <div className={`thend-grid${this.props.data.name === 'react' ? '-blue' : '-green'}`}>
                    {this.props.data.name === 'react' ? 'jsx':'template'}
                </div>
                {/* 使用函数做条件判断 */}
                {this.renderList.call(this)}
                {/* 使用运算符 && 判断 */}
                {this.props.data.name === 'react' ? <div className="title">jsx</div> : <div>template</div>}

                {/* css Module+classnames/bind */}
                {/* css module 结合 classnames 可以添加2个类名 */}
                <span className={cls('title', 'themd')}>header23</span>

                {/* onClick */}
                <span onClick={this.handleClick3}>onClick1/3</span>
                {/* 方法一 */}
                <span onClick={this.handleClick2.bind(this)}>onClick2</span>
            </div>
        )
    }
}
