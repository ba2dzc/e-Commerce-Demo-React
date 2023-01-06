import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"

class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepet Boş</NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown>
                <DropdownToggle nav caret>
                    Sepet
                </DropdownToggle>
                <DropdownMenu dark>
                    {this.props.cart.map(cartItem => (
                        
                        <DropdownItem key={cartItem.product.id}><Badge color='danger' onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>Sil</Badge> {cartItem.product.productName} <Badge color='dark'>{cartItem.quantity}</Badge></DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>Sepet Detayı</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

function maoStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(maoStateToProps, mapDispatchToProps)(CartSummary)