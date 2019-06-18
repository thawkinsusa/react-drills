import React, {Component} from 'react'
class Todo extends Component {
    constructor(){
        super()
        this.state = {
            list: [],
            item: ''
        };
        this.orderListUpdate = this.orderListUpdate.bind(this);
    }

    todoInputUpdater(input){
        this.setState({item:input})
    }

    orderListUpdate(){
        this.setState({
            list: [...this.state.list, this.state.item],
            item: ''
        });
    }

    render(){
        let list = this.state.list.map((val, i)=>{
            return <li key={i}>{val}</li>;
        })
        return(
            <div>Todo List
                <div>
                 <input value={this.setState.item} placeholder="Start your list" onChange={e => this.todoInputUpdater(e.target.value)} />
                 <button placeholder="Submit to list" onClick={this.orderListUpdate}>Submit</button>    
                </div>
                <br></br>
                {list}
            </div>
        )
    }
}

export default Todo