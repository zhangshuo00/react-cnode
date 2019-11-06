import React, { Component } from 'react'

export default class Pages extends Component {
    render() {
        return (
            <div style={{marginBottom:"30px",marginLeft:"80px"}}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((idx)=>(
                        <button key={idx} onClick={()=>this.props.getPages(idx)} className="pages">{idx}</button>
                    ))
                }
            </div>
        )
    }
}
