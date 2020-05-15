import React from 'react'
  

export default class Test extends React.Component {
  state = {
    list:['eggs', 'milk', 'bread'],
    counter:1,
    text:'',
  }
  handleButtonClick = () => {
    this.setState({counter: this.state.counter + 1
    
    });
    this.handleAddList();
    //console.log('click')
  }
  handleInputChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleAddList = () => {
    let currentList = this.state.list;
    //currentList.push(this.state.text);
    const newList = currentList.concat(this.state.text)
    this.setState({list: newList,
    text: '',
    counter: newList.length
    }) 
  }
  handleAddEnter = (e) => {
    if(e.key === 'Enter') {
      this.handleAddList()
    }
  }
  handleRemove = (key) => {
    const currentList = this.state.list
    const newList = currentList.filter((item, index) => index !== key)
    this.setState({
      list: newList,
      counter: newList.length
    })
  
  }


  render() {
    return (
      <div>
        <div>
          Count:{this.state.counter}
        </div>
        <div>
          Text: {this.state.text} 
        </div>
          <h3 style={{color: 'green'}}>{this.props.title}</h3>
        
        <ul>
          {this.state.list.map((item,key) => (
            <li key={item}>{item}
            <button 
            style={{marginLeft:10, backgroundColor:'red'}}
            onClick={() => this.handleRemove(key)}
            >x</button>
            </li>
          ))}
        </ul>
        <input 
        value={this.state.text}
        onChange={this.handleInputChange}
        onKeyPress={this.handleAddEnter}
        />
        <button onClick={this.handleAddList} >
        Add
        </button>
      </div>
    );
  }
}