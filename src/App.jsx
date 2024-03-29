import React, { useEffect, useState } from "react";
import "./App.scss";
import { Catalog } from "./components/catalog";
import { getBooks } from "./clients/books.api";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BookDetails } from "./components/details";
import { Header } from "./components/common/header";
import { Footer } from "./components/common/footer";
import { CartPreview } from "./components/cart";

function App() {
  const emptyBooks = [];
  const emptyCart = [];
  const [books, setBooks] = useState(emptyBooks);
  const [cart, setCart] = useState(emptyCart);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <Router>
      <div className="App">
          <CartPreview isVisible={isCartVisible} onCartCloseClick={hideCart} items={cart}/>
          <Header onCartClick={showCart} />
          <Routes>
            <Route path="/books/:isbn" element={<BookDetails onAddToCart={addBookToCart} />}></Route>
            <Route path="/books" element={<Catalog items={books}></Catalog>}></Route>
            <Route path="*" element={<Navigate to="/books" replace />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );

  function addBookToCart(book) {
    setCart([...cart, book]);
  }

  function showCart() {
    setIsCartVisible(true);
  }
  function hideCart() {
    setIsCartVisible(false);
  }
}

export default App;
