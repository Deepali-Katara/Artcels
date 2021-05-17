import React from 'react'
// import {Container} from 'react-bootstrap'
import '../App.css'
import Banner from './Banner.js'
import Footer from './Footer.js'
import Video from './Video.js'
import Videos from './Videos.js'
import Backgroundone from './Backgroundone.js'
import Backgroundtwo from './Backgroundtwo.js'
import Figureone from './Figureone'
// import Figuretwo from './Figuretwo'
// import Figurethree from './Figurethree'
import Backgroundthree from './Backgroundthree.js'



 

const Home = () => {

    return(
      <>
<Banner/>
<Videos/>
<Backgroundone/>
<Backgroundtwo/>
<Backgroundthree/>
<Figureone/>
{/* <Figuretwo/> */}
{/* <Figurethree/> */}
<Video/>

<Footer/>

          </>
    )
}
export default Home