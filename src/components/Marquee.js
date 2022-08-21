import React from "react";
import marq1 from "../images/marq1.jpg";
import marq2 from "../images/marq2.jpg";
import marq3 from "../images/marq3.jpg";
import marq4 from "../images/marq4.jpg";
import marq5 from "../images/marq5.jpg";
import marq6 from "../images/marq6.jpg";
import marq7 from '../images/marq7.jpg';
import marq8 from '../images/marq8.jpg';
import marq9 from '../images/marq9.jpg';
import marq10 from '../images/marq10.jpg';
import marq11 from '../images/marq11.jpg';
import marq12 from '../images/marq12.jpg';
import boat from '../images/boat.jpg';
import beach from '../images/beach.jpg';
import komodo from '../images/komodo.jpg';
const Marquee = () => {
    return(
       <div class="marquee">
       <div class="marquee-content" >
           <img src={boat} alt="Natural"  class="boat"/>
           <img src={marq1} alt="Natural"  class="marq1"/>
           <img src={marq4} alt="Natural"  class="marq4"/>
           <img src={beach}  alt="Natural" class="marqBeach"/>
           <img src={marq3} alt="Natural"  class="marq3"/>
           <img src={marq8} alt="Natural"  class="marq8"/>
           <img src={marq10} alt="Natural"  class="marq10"/>
           <img src={marq12} alt="Natural"  class="marq12"/>
           <img src={komodo}  alt="Natural" />
           <img src={marq2} alt="Natural"  class="marq2"/>
           <img src={marq5} alt="Natural"  class="marq5"/>
           <img src={marq6} alt="Natural"  class="marq6"/>
           <img src={marq7} alt="Natural"  class="marq7"/>
           <img src={marq9} alt="Natural"  class="marq9"/>
           <img src={marq11} alt="Natural"  class="marq11"/>
       </div>
       <div class= "marquee-content" aria-hidden="true" >
       <img src={boat} alt="Natural"  class="boat"/>
           <img src={marq1} alt="Natural"  class="marq1"/>
           <img src={marq4} alt="Natural"  class="marq4"/>
           <img src={beach}  alt="Natural" class="marqBeach"/>
           <img src={marq3} alt="Natural"  class="marq3"/>
           <img src={marq8} alt="Natural"  class="marq8"/>
           <img src={marq10} alt="Natural"  class="marq10"/>
           <img src={marq12} alt="Natural"  class="marq12"/>
           <img src={komodo}  alt="Natural" />
           <img src={marq2} alt="Natural"  class="marq2"/>
           <img src={marq5} alt="Natural"  class="marq5"/>
           <img src={marq6} alt="Natural"  class="marq6"/>
           <img src={marq7} alt="Natural"  class="marq7"/>
           <img src={marq9} alt="Natural"  class="marq9"/>
           <img src={marq11} alt="Natural"  class="marq11"/>
       </div>
   </div>    
    )
};
export default Marquee;