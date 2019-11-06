import React, { Component } from 'react'
import $ from 'jquery'
import '../index.css'

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let pt = this.props.history.location.pathname.split('/')[2]
        console.log(this.props.history)
        fetch('https://cnodejs.org/api/v1/topic/'+pt)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
            console.log(res.data.content)
            // console.log(this.state.data)
            $(".detailDiv").html(res.data.content)
        })
    }
    render() {
        return (
            <div className="detailDiv">
                
            </div>
        )
    }
}
