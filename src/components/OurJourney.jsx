/* eslint-disable jsx-a11y/iframe-has-title */

import img from '../assets/img/18 png.png';
import OurProc from './OurProc';
function OurJourney(params) {
    return(
        <div class="max-w-6xl mx-auto font-[sans-serif]">
      

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class=" flex text-white max-sm:px-8 px-12 w-full rounded">
        <img src={img} class="h-auto   rounded" alt="..." />

        </div>

        <div class="quote1 max-sm:px-8 px-12 py-8 w-full rounded items-center">
          <h2 class="text-gray-800 text-2xl font-bold">Our journey into A2 ghee marking
            began when we noticed a 
            decline in the quality of milk from our cows
          </h2>
          <div class="mt-4">
            <p class="text-sm leading-relaxed">We soon discovered that majority of dairy cows today are bred for 
                high milk production,resulting in milk that in A1 protein,which 
                can cause digestive issues for same people.Determinted to find a 
                solution,we turned to our ancestors'teachings and learned about the 
                benefits of A2 milk from the indigenous Gir cows.
            </p>
          </div>
        </div>
      </div> 

      <div class="sm:grid sm:grid-cols-3 gap-4">
        <div class="text-center py-16 mb-4 p-4">
          <h1 class="text-4xl font-extrabold text-gray-800">Our Process</h1>
          <div class="mt-4">
            <p class=" text-sm text-gray-800 leading-relaxed">We Soon discoverer that the majority of dairy cows today are bred for 
              high milk production,resulting in milk that is high in A1 protein,which
              can cause digestive issues for some people Determined to find a 
              solution. we turned to our ancestors teachings and learned about the 
              benefits of A2 milk from the indigenous Gir cows
            </p>
          </div>
        </div>

        <div class="col-span-2 mb-4">
            <OurProc></OurProc>
        </div>
      </div>
    </div>
    )
}
export default OurJourney