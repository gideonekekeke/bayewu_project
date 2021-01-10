import React from 'react'
import Footer from '../components/Footer';
import achie from '../components/img/achieve.png'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar/SideBar"
import pic from '../../src/components/img/const.jpg'
import pics from '../../src/components/img/work1.jpg'
import './style.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';


function WorksPage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const work = [
    {
     title  : "2014 AJIF SCHOOOL CONSTRUCTION",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    },
    {
     title  : "2014 AJIF SCHOOOL CONSTRUCTION",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    },
    {
     title  : "2014 AJIF SCHOOOL CONSTRUCTION",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    }
  ]

  return (
    

    <>
    <div style = {{marginTop : '80px'}}>
      <div style = {{marginTop : '-30px'}} >
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      </div>

      <motion.div 
                  initial = "hidden"
                  animate = "visible"
                  variants = {{
                    hidden : {
                      scale : .3,
                      opacity : 0
                    },
                    visible :{
                      scale : 1,
                      opacity : 1,
                      transition :{
                        delay : .3
                      }
                    }
                  }} style = {{display : 'flex', flexWrap : 'wrap', width : '100vw', justifyContent : 'center', alignItems :'center', marginTop : 'px'}}>
           <div style = {{height : '400px', width : '100vw'}}>
             <img style = {{height : '100%', width : '100%', objectFit : 'cover'}} src = {pic}/>
           </div>
             </motion.div>
         <div style ={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}><h3 style ={{marginTop :'100px'}}>    RECENT WORKS</h3>
        </div>
        <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', width : '100vw'}}>



          <p style = {{width : '1000px', height : '200px', padding : '50px', textAlign : 'center', marginTop : '-130px'}}>   Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.
          
          
          
          </p>
        </div>


        <div className = 'general_card6' >
          {work.map(({title, text, view})=>(
              
              
            <div  className = 'carding1'>
            <div className = 'get_container4'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'contain', opacity : '0.2', overflow : 'hidden'}} src= {pic} />
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>2014 AJIF SCHOOOL CONSTRUCTION</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>


                <div className = 'border' style = {{height : '50px', width : '100px', borderRadius : '2px solid white', display : 'flex', justifyContent : 'center', alignItems : 'center', color : 'white',  marginTop : '-150px'}}>View Image</div>
      </div>

           ))}



          

 
         </div> 


                  <div style ={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '40PX'}}>

                   <h3 className ="project">PROJECTS DONE</h3>

                </div>


                <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', width : '100vw'}}>



<p style = {{width : '1000px', height : '200px', padding : '50px', textAlign : 'center', marginTop : '-130px'}}>   Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.Utiva offers a wide variety of program
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.Utiva offers a wide variety of program
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.Utiva offers a wide variety of program
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.Utiva offers a wide variety of program
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.Utiva offers a wide variety of program
Bayewu kamal offers a wide variety of programs and courses and led by
leading industry experts.



</p>
</div>

<div className = 'general_card9' >
          {work.map(({title, text, view})=>(
              
              
            <div  className = 'carding9'>
            <div className = 'get_container9'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'contain', opacity : '0.2', overflow : 'hidden'}} src= {pics} />
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>2014 AJIF SCHOOOL CONSTRUCTION</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>

              
                <div className = 'border' style = {{height : '50px', width : '100px', borderRadius : '2px solid white', display : 'flex', justifyContent : 'center', alignItems : 'center', color : 'white',  marginTop : '-150px'}}>View Image</div>
          
      </div>

           ))}



          

 
   </div> 


















      </div>
     
        
     <div className = 'footing' style = {{marginTop : 'px'}}>
       <Footer />
       </div>
      </>
  )
}

export default WorksPage
