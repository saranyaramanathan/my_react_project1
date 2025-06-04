
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

         <svg xmlns="http://www.w3.org/2000/svg" id="logo-85" width="36"  viewBox="0 0 40 40" fill="none"><path class="ccustom" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z" fill="#1447e6"/></svg>
          <h1 className="text-4xl text-blue-700">Friendly Store</h1>
          <div className="relative py-2 ">
            <div className="t-0 absolute left-4">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartitems.length}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"   fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-8 w-8" onClick={()=>{setVisible(true)}}>
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
