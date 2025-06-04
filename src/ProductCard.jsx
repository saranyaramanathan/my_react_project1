import {useState } from "react";
function ProductCard({product,addItem,cartitems}){
  {console.log("productdetails....",product.title)}
    const [isExpanded, setIsExpanded] = useState(false);
     
  const maxLength=100;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const isDisabled = cartitems.some(obj => obj.title == product.title)?true:false;
  return(    

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
       <img
        src={product.image}
        className="p-4 w-full h-52 object-contain"
        alt=""
      />
    </a>
    <div class="flex flex-col p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
         <p className=" mb-3 block cursor-pointer flex-grow">  {isExpanded ? product.description : product.description.slice(0, maxLength)}
       {product.description.length > maxLength && (
         <span class="text-blue-700 mx-2" onClick={toggleReadMore}>
           {isExpanded ? 'show less' : '...read more'}
         </span>
       )}</p>
       <p className="text-2xl flex-grow">Price: ${product.price}</p>
        <button className="w-full mt-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-white font-medium py-3 rounded-lg transition-colors"
          
          onClick={() => {
            
            if (isDisabled == true) {
              alert('Item already added to the cart');
              
            }
            else{
              addItem(product)
               //alert('Item added..Click cart to view the Item');
            }
          }}
          
        >
          Add to Cart
        </button>
    </div>
    
</div>
) 
  // <div class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
  //         <div className=" realative overflow-hidden">
  //     <img
  //       src={product.image}
  //       className="p-4 w-full h-52 object-contain"
  //       alt=""
  //     />
  //     </div>
  //     <div className="p-4 flex flex-col items-end">
  //       <div className="flex flex-col justify-center p-2 ">
  //       <p className="text-xl text-bold mb-3">{product.title}</p>
        
  //       <p className=" mb-3 block cursor-pointer">  {isExpanded ? product.description : product.description.slice(0, maxLength)}
  //     {product.description.length > maxLength && (
  //       <span class="text-blue-700 mx-2" onClick={toggleReadMore}>
  //         {isExpanded ? 'show less' : '...read more'}
  //       </span>
  //     )}</p>
  //       <h1 className="text-2xl">Price: ${product.price}</h1>
  //     </div>
      
  //      <button class="w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-white font-medium py-3 rounded-lg transition-colors"
  //         disabled={cartitems.some(obj => obj.title == product.title)}
  //         onClick={() => {
  //           addItem(product)
  //         }}
  //       >
  //         Add to Cart
  //       </button>
  //     </div>
  //   </div>)
}
export default ProductCard;