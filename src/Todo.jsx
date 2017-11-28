import React, { Component } from 'react'
import { Input, List, Checkbox, Button } from 'semantic-ui-react'
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tmp: '',
            lists: [],
            flag: {}
        }
    }
    onKeyup = (e) => {
        
        e.keyCode === 13  && this.handler(e) 
       
    }
    handler = (e) => {
        // 你的逻辑
        const { lists } = this.state
        lists.push(this.state.tmp)
        this.setState({
            lists
        })
        e.target.value = ''
                                                                                                                                                                                                                                       
    }
    changeValue = (e) => {
        this.setState({
            tmp: e.target.value
        })
    }
    checkboxValue = (e, d) => {
        const index = d['data-index']
        let { flag } = this.state
        d.checked ? flag[index] = true : flag[index] = false
        this.setState({
            flag
        })
    }
    handleTotalNum = () => {
        const { flag } = this.state
        const value = Object.values(flag);
        let i = 0;
        for (let f of value) {
            f && i ++
        }
        return i
    }
    handleClick = (e,d) => {
        const { lists } = this.state
        console.log(e,d,)
        this.setState({
            lists: [
                ...lists.splice(0, d['data-index']),
                ...lists.splice(d['data-index'] + 1)
            ]
        })
    }
    render () {
        const { tmp, lists, flag } = this.state
        return (
            <div className='app-todo'>
                <Input placeholder='输入任务，Enter键确认' onChange={this.changeValue}  onKeyUp={this.onKeyup}/>
                <List className='app-list'>
                    {
                        lists.map((li, index) => {
                            return (
                                <List.Item key={index} className={'li-hover ' + (flag[index] ? 'checkbox-active' : '')}>
                                    <Checkbox label={li} data-index={index} onChange={this.checkboxValue} className='checkbox-label'/>
                                    <Button color='red' data-index={index} compact size='tiny' floated='right' onClick={this.handleClick} className='hiden'>
                                        删除
                                    </Button>
                                </List.Item>
                            )
                        })
                    }
                    <List.Item className='app-total'>
                        已完成
                        <span>{this.handleTotalNum()}</span>
                        /全部
                        <span>{lists.length}</span>
                    </List.Item>
                </List>
            </div>
        )
    }
}