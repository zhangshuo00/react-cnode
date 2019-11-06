import React, { Component } from 'react'
import '../index.css'
export default class TopicTab extends Component {

    render() {
        return (
            <div style={{backgroundColor:'#f6f6f6',height:'40px'}}>
                {
                    ['全部','精华','分享','问答','招聘'].map((item)=>(
                        <button onClick={()=>this.props.getTab(item)} className="topic_tab" key={item}>{item}</button>
                    ))
                }
            </div>
        )
    }
}
