import React, { Component } from 'react'
import AboutURL from '../images/about.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <img src={AboutURL} style={{width:'900px'}}/>
            </div>
        )
    }
}
