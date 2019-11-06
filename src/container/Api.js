import React, { Component } from 'react'
import ApiURL from '../images/api.jpg'

export default class Api extends Component {
    render() {
        return (
            <div>
                <img src={ApiURL} style={{width:'900px'}}/>
            </div>
        )
    }
}
