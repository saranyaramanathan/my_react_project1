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
        {/* <button className="w-full mt-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  text-white font-medium py-3 rounded-lg transition-colors" */}
        <div class=" pb-4 pt-0 mt-auto">
          <button class="rounded-md bg-blue-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
            onClick={() => {

              if (isDisabled == true) {
                alert('Item already added to the cart');

              }
              else {
                addItem(product)
                //alert('Item added..Click cart to view the Item');
              }
            }}

          >
            Add to Cart
          </button>
        </div>
      </div>

    </div>
) 




 
}
export default ProductCard;