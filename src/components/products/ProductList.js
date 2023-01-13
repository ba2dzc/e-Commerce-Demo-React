import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

addToCart(product){
  this.props.actions.addToCart({quantity:1, product})
  alertify.success(product.productName+" sepete eklendi.")
}

  render() {
    return (
      <div>
        <h3>
          <Badge className='mt-2' color="dark">Ürünler</Badge>
          <Badge color="success">{this.props.currentCategory.categoryName}</Badge></h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Adet Sayısı</th>
              <th>Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (<tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td><Button size="sm" color='dark' onClick={()=>this.addToCart(product)}>Sepete Ekle</Button></td>
            </tr>))}

          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart,dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
