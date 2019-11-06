import React, { Component } from 'react'
import imgURL from '../images/start.jpg'

export default class Start extends Component {
    render() {
        return (
            <div>
                <img src={imgURL} style={{width:'900px'}}/>
            </div>
        )
    }
}
