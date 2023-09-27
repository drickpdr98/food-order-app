import { useState } from "react";

import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
import Cart from "./components/CART/Cart";
import CartProvider from "./store/Cart-Provider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = function () {
    setShowCart((prevValue) => !prevValue);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
