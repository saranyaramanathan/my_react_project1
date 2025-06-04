function CartItem({item,removeItem,}){
    console.log("cartITEM...",item)
    return <div className="w-96 m-2 flex flex-col rounded flex-wrap ">
    <div className="flex justify-between flex-wrap p-4 mb-2 bg-gray-50 " >
                       
                        <h1 className="text-wrap">{item.title}</h1>
                        <h2>${item.price}</h2>
                        <button className=" text-white text-center bg-red-500 p-2 rounded cursor-pointer hover:bg-red-700" onClick={() => {
                            removeItem(item)
                        }}>X</button>
                    </div>
              </div>     
            
       

}
export default CartItem