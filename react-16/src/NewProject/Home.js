import React from "react";
import ItemCard from "./ItemCard";
import Data from "./Data"
const Home = () =>{
    //console.warn(Data.productData)     
    return(
        <>
        <h1 className="text-center">All items</h1>
        <section className="py-4 container">
        <div className ="row justify-content-centre"> 
    
            {Data.productData.map((item,index) =>{
                return(
            
             <ItemCard 
             img={item.img}  
             title={item.title}
              desc={item.desc} 
              price={item.price} 
              item={item} 
              key={index}
              />
             )
          })}

                        

        </div>
        </section>
        
        </>
    )
}
export default Home;