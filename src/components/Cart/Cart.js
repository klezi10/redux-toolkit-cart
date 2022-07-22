import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { cartActions } from "../../store/index";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: quantity, total: 18, price: 6 }}
          dispatch={dispatch}
        />
      </ul>
    </Card>
  );
};

export default Cart;
