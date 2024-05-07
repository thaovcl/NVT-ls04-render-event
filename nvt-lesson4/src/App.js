import React, { Component } from 'react'
import NVT_ProductList from './components/NVT_ProductList';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
        { title: 'Samsung', id: 4 },
      ]
    }
  }
  render(){
    return(
      <div className='container border mt-5'>
          <h1>Nguyễn Văn Thạo - Render Data - Event Form</h1>
          <hr/>
          <NVT_ProductList renderProducts={this.state.products}/>
      </div>

    )
  }
}

export default App;