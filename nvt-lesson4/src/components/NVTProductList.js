import React, { Component } from 'react'

class NVT_ProductList  extends Component {
  render() {
    let{renderProducts}=this.props;
    console.log("Product:", renderProducts);

    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <> 
            <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'></table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {elementProduct}
        </tbody>
      </div>
    )
  }
}

export default NVT_ProductList;