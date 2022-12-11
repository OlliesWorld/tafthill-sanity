import * as React from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const HeroCarousel = ()  => { 
  
  return (
    
   <div className="  h-full w-full md:h-3/4 md:w-3/4 m-auto">
     <AliceCarousel autoPlay autoPlayInterval="3400" infinite animationType="fadeout" animationDuration={800}>
     
     
     <img className="object-cover max-h-80 w-3/4 m-auto" src="https://images.unsplash.com/photo-1670685067634-33e331493206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="PeterHerrmann"  width={600} height={300} />
     <img className="object-cover max-h-80 w-3/4 m-auto" src="https://images.unsplash.com/photo-1670680342823-4fe90ffb0d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="HongFeng"  width={600} height={300} />
     <img className="object-cover max-h-80 w-3/4 m-auto" src="https://images.unsplash.com/photo-1670611554943-e5a2f3e89800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="AndrewMeehan"  width={600} height={300} />
     <img className="object-cover max-h-80 w-3/4 m-auto" src="https://images.unsplash.com/photo-1670668684069-b1932f70f89f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80" alt="RucgardDeng"  width={600} height={300} />

   
      </AliceCarousel>
   </div>
    
  )
}


export default  HeroCarousel
