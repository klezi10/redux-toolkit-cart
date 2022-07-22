import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


// import { cartActions } from "../../store/index";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const show = useSelector((state) => state.showCart);

  return (
    <Card className={classes.cart}>
      {show && (
        <Fragment>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: "Test Item", quantity: quantity, total: 18, price: 6 }}
              dispatch={dispatch}
            />
          </ul>
        </Fragment>
      )}
    </Card>
  );
};

export default Cart;
