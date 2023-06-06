import React from "react";
import WhiteTooltip from "./whiteTooltip";

const ItemA = (props) => {
    return (
        <div className="container">
            {/* <button>Tooltip</button>
            {
                props.action.showTooltip && <div>{props.action.content}</div>
            } */}
            {/* <WhiteTooltip
                render={({showToolTip,content})=>{
                    <div>
                        <button>Tooltip</button>
                        {
                            showToolTip && <div>{content}</div>
                        }
                    </div>
                }}
            ></WhiteTooltip> */}
            <WhiteTooltip>
                {({showToolTip,content}) => (
                    <div>
                        <button>Tooltip</button>
                        {
                            showToolTip && <div>{content}</div>
                        }
                    </div>
                )}
            </WhiteTooltip>
        </div>
    )
}

export default ItemA