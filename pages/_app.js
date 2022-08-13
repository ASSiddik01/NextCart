import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router, { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {
  // 9
  const router = useRouter();
  // 1
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  // 7
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  // 11
  const [progress, setProgress] = useState(0)

  // 6
  useEffect(() => {
    // 11
    Router.events.on('routeChangeStart', () => {
      setProgress(100);
    })

    const myCart = localStorage.getItem("cart");
    try {
      if (myCart) {
        setCart(JSON.parse(myCart));
        saveCart(JSON.parse(myCart));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    // 8
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }
  }, [router.query]);

  //3
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    let subTotal = 0;
    const keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subTotal += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setSubTotal(subTotal);
  };

  // 2
  const addToCart = (_id, qty, price, name) => {
    let newCart = cart;
    if (_id in cart) {
      newCart[_id].qty = cart[_id].qty + qty;
    } else {
      newCart[_id] = { qty: 1, price, name };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // 4
  const removeFromCart = (_id, qty, price, name) => {
    let newCart = cart;
    if (_id in cart) {
      newCart[_id].qty = cart[_id].qty - qty;
    }
    if (newCart[_id]["qty"] <= 0) {
      delete newCart[_id];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  // 5
  const clearCart = () => {
    setCart({});
    saveCart({});
    toast("Cart is clear");
  };

  // 10
  const logout = () => {
    localStorage.removeItem('token');
    setUser({ value: null })
    setKey(Math.random());
  }



  return (
    <>
      <LoadingBar
        color='#fa4d21'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header
        logout={logout}
        user={user}
        key={key}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default MyApp;
