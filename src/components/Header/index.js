import './index.css'

import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = props => {
  const {restaurantName, cartItems} = props
  const renderCartIcon = () => (
    <div className="cart-icon-link">
      <button type="button" className="cart-icon-button" data-testid="cart">
        <AiOutlineShoppingCart className="cart-icon" />
      </button>

      <div className="cart-count-badge">
        <p className="m-0 cart-count">{cartItems.length}</p>
      </div>
    </div>
  )

  return (
    <div className="nav-header">
      <h1 className="m-0 logo-heading">{restaurantName}</h1>
      <div className="nav-items">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </div>
  )
}

export default Header
