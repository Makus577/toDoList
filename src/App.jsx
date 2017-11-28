import React, { Component } from 'react'
import Todo from './Todo'
import 'semantic-ui-css/semantic.min.css'
import './app.css'

export default class  App extends Component{
    constructor() {
        super()
    }
    render() {
        return (
            <div className='app-demo'>
                <div className='app-title'>{this.props.title}</div>
                <Todo />
            </div>
        )
    }
}