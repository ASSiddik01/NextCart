import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  // 1
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  // 6
  useEffect(() => {
    const myCart = localStorage.getItem("cart");
    try {
      if (myCart) {
        setCart(JSON.parse(myCart));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  //3
  const saveCart = (newCart) => {
    localStorage.setItem("cart", newCart);
    let subtotal = 0;
    const keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subtotal = newCart[keys[i]].price * newCart[key[i]].qty;
    }
    setSubTotal(subtotal);
  };

  // 2
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // 4
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] < 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // 5
  const cleatCart = () => {
    setCart({});
    saveCart({});
    toast("Cart is now empty");
  };
  return (
    <>
      <Header
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cleatCart={cleatCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cleatCart={cleatCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default MyApp;
