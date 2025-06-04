
import './App.css'
import ProductCard from './ProductCard';
import CartItem from './CartItem';
 import Modal from './Modal';
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
function App() {


const [itemCounter, setCounter] = useState(0);

  const [allProducts, setAllProducts] = useState([]);
  const [cartitems, setCartItems] = useState([]);
  const [isVisible,setVisible] = useState(false);
    const [total, setTotal] = useState(0);
  const getAllProducts = async () => {
    try {
          const productData = await fetch('https://fakestoreapi.com/products');
      const productRes = await  productData.json()
     // const productDetails= await productRes.data
      setAllProducts(productRes)

      console.log(productRes)
    } catch (error) {
      console.log(error);
    }
  };  
    const addItem = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    let index = cartitems.findIndex((obj) => obj.title == item.title);
    console.log(index);
    cartitems.splice(index, 1);
    setCartItems([...cartitems]);
    if(cartitems.length == 0){
      setVisible(false)
    }
    setTotal(total - item.price)
  };
  useEffect(() => {
    getAllProducts();
    
  }, []);

  return (
  <div >
       <Helmet>
                <meta charSet="utf-8" />
                <title>Friendly Store</title>
               
            </Helmet>
      <nav className='sticky bg-gray-50 shadow-md'>
        <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">

          <img
            width="50"
            src="/src/assets/shop-icon.png"
            alt=""
          />
          <h1 className="text-4xl text-blue-700">Friendly Store</h1>
          <div className="relative py-2 ">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartitems.length}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6" onClick={()=>{setVisible(true)}}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"  />
            </svg>
          </div>
        </div>
        
      </nav>

      {/* <div class="relative">
  <img src="/src/assets/my_banner.png" class="w-full h-[300px] object-cover rounded-lg shadow-lg transition-all hover:opacity-80" alt="Banner Image"/>
  
</div> */}

 {isVisible && 
 <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white cartitems.lenght!=0?outline-none focus:outline-none">
  {cartitems.map((item) => {
   
              return   <CartItem isOpen={isVisible} removeItem={removeItem} item={item} />})}
              <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setVisible(false)}
                  >
                    Close
                  </button>
                 </div>
                 </div>
        </div>}         
       <h1 className="text-4xl text-center text-black m-4">Products</h1>
        <div className="flex flex-wrap gap-2 items-stretch justify-center">
         {allProducts.map((product) => {
              return <ProductCard product={product} addItem={addItem} cartitems={cartitems} />;
            })}
         
      </div>
     
  </div>
  )
}

export default App
