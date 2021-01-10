import React from 'react'
import NavBar from "../components/NavBar";
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer'
import picture from '../components/img/love.jpg'
import face from '../components/img/facebook.png'
import inst from '../components/img/instagram.png'
import you from '../components/img/youtube.png'
import './style.css'
import pic from '../components/img/love.jpg'
import {motion} from 'framer-motion'
import arro from '../components/img/myarrow.png'
import {Link} from 'react-router-dom'

function Biography() {
  const fadeLeft = {
    hidden : {opacity : 0, x: -100},
    visible : {opacity : 1, x : 0}
  }
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

    <div className = 'bio_container'>
     
 
      < motion.div
        
      className = 'bio_imageback' style = {{display : 'flex', flexWrap : 'wrap'}}>
         <div >
           < motion.div
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
                        delay : .1
                      }
                    }
                  }}
           className = 'bio_background'>
             <img src= {picture}/>
              <Link to = '/'>
             <img src = {arro} style = {{backgroundColor : 'rgba(0, 0, 0, 1.606)', height : '20px', width : '20px', borderRadius : '30px', marginTop : '-950px', marginLeft : '40px', color : 'white', cursor : 'pointer' }}alt = 'image 000'/>
             </Link>
           </motion.div>
            

         </div>

         < motion.div className='BodyArrange1'
             variants = {fadeLeft}
                initial = "hidden"
                animate = "visible"
                transition = {{duration : 1}}

         
         
         >
      <div className='body1'>
        <div className='body_content1'>
          <div className  = 'styling' style = {{marginLeft : '100px'}}>ABOUT</div>
          <p className = 'contex' style = {{marginLeft : '100px'}}>
            Utiva offers a wide variety of programs and courses and led by
            leading industry experts.Utiva offers a wide variety of programs and courses and led by leading industry experts
            Utiva offers a wide variety of programs and courses and led by leading industry experts
            Utiva offers a wide variety of programs and courses and led by leading industry experts
          </p>
        </div>

        <img className = 'imaging' style = {{marginLeft : '300px'}} src={pic} />
      

         </div>
         </motion.div>

      </motion.div>











    
      
    </div>
   
      </>
  )
}

export default Biography
