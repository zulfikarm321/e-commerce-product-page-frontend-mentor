import { useState, useEffect } from 'react';
import './navbar.scss';

const Navbar = ({ cartvalue, setCartvalue }) => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia('(min-width: 768px)');
    matchQueryList.addEventListener('change', () => {
      setMenu(false);
    });
  }, []);

  function handleMenu() {
    setMenu((prev) => !prev);
  }

  function handleCart() {
    setCart((prev) => !prev);
  }

  function decrementCartValue() {
    setCartvalue((prev) => prev - 1);
  }

  return (
    <nav>
      <div className="nav_container">
        <div className="nav_left">
          <div
            className="overlay"
            onClick={handleMenu}
            style={{ display: menu ? 'flex' : 'none' }}
          ></div>
          <ul className="menu_dropdown" style={{ left: menu ? '0' : '-100vw' }}>
            <li className="menu_dropdown_link">
              <a href="#">Collections</a>
            </li>
            <li className="menu_dropdown_link">
              <a href="#">Men</a>
            </li>
            <li className="menu_dropdown_link">
              <a href="#">Women</a>
            </li>
            <li className="menu_dropdown_link">
              <a href="#">About</a>
            </li>
            <li className="menu_dropdown_link">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="menu_icon" onClick={handleMenu}>
            {menu ? (
              <img src="images/icon-close.svg" />
            ) : (
              <img src="images/icon-menu.svg" />
            )}
          </div>
          <div className="nav_logo">
            <img src="images/logo.svg" alt="logo" />
          </div>
          <ul className="nav_links">
            <li className="nav_link">
              <a href="#">Collections</a>
            </li>
            <li className="nav_link">
              <a href="#">Men</a>
            </li>
            <li className="nav_link">
              <a href="#">Women</a>
            </li>
            <li className="nav_link">
              <a href="#">About</a>
            </li>
            <li className="nav_link">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav_right">
          <div className="cart_icon" onClick={handleCart}>
            <img src="images/icon-cart.svg" alt="cart icon" />
            {cartvalue > 0 ? <span>{cartvalue}</span> : ''}
          </div>
          <div
            className="cart_detail"
            style={{ display: cart ? 'flex' : 'none' }}
          >
            <h3 className="cart_detail_title">Cart</h3>
            <hr />

            {cartvalue === 0 ? (
              <div className="cart_detail_items">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <>
                <div className="cart_detail_items">
                  <div className="cart_detail_image">
                    <img
                      src="images/image-product-1-thumbnail.jpg"
                      alt="product image"
                    />
                  </div>

                  <div className="cart_detail_info">
                    <div className="cart_detail_info_top">
                      <p>Fall Limited Edition Sneakers</p>
                    </div>
                    <div className="cart_detail_info_bottom">
                      <p>
                        $125.00 x {cartvalue} <span>${cartvalue * 125}.00</span>
                      </p>
                    </div>
                  </div>
                  <div className="btn_delete" onClick={decrementCartValue}>
                    <img src="images/icon-delete.svg" alt="delete icon" />
                  </div>
                </div>
                <button className="btn_checkout">Checkout</button>
              </>
            )}
          </div>
          <div className="avatar_icon">
            <img src="images/image-avatar.png" alt="avatar icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
