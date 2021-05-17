// import React from 'react'
// import '../App.css'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Figureone =() => {
//     return(
//         <section _ngcontent-mkm-c50 className="gallery bg-white"> 
//             <Row>
//                 <Col sm={8}>
//      <div class="col-lg-8 pl-4 mt-5">
//      <div class="mainImg">
//          <a href="http://artcels.sourcesoftsolutions.com/artist">
//              <figure >
//                  <img src="http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridartists.webp "  className="img-fluid" height="350px" width="1000px">
//                  </img>
         
//              </figure>
             
//              <figcaption className="figcaption">SELL WITH US</figcaption>
//              </a>
//              </div>
//              </div>
             
//              </Col>
//              <Col sm={4}>
//              <div class="col-lg-4 pl-4 mt-5">
//      <div class="mainImg">
//          <a href="http://artcels.sourcesoftsolutions.com/artist">
//              <figure>
//                  <img src="http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridabout.webp "  className="img-fluid" height="650px" width="800px">
//                  </img>
         
//              </figure>
             
//              <figcaption className="figcaptiontwo">ABOUT</figcaption>
//              </a>
//              </div>
//              </div></Col>
            
//              </Row>
//              </section>
        
        
         
//     )
// }
// export default Figureone


  
import React from 'react'
import './Figureone.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Figureone = () => (
    <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ padding: ' 0px 16px',paddingTop:'70px' }}>
        
            <section className="custom-section">
                <Row>
                <Col><div className="flexone" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridartists.webp')`}}><div className='my-box'><h1 className='custom-h1'>ARTISTS</h1></div></div></Col>
                <Col><div className="flextwo" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridabout.webp')`}}><div className='my-box'><h1 className='custom-h1'>ABOUT</h1></div></div></Col>
                </Row></section>
            <section>
                <Row>
                <Col><div className="flextwo" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridevents.webp')`}}>
                    <div className='my-box'><h1 className='custom-h1'>SELL WITH US</h1></div>
                    </div></Col>
               <Col><div className="flexone" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridportfolio.webp')`}}><div className='my-box'><h1 className='custom-h1'>PORTFOLIO</h1></div></div></Col>
            </Row></section>
            <section className="custom-section">
                
            <Row><Col><div className="flexone" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridinvest.jpg')`}}><div className='my-box'><h1 className='custom-h1'>INVEST</h1></div></div></Col>
                <Col><div className="flextwo" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)) ,url('http://artcels.sourcesoftsolutions.com/assets/images/gallary/gridcontact.webp')`}}><div className='my-box'><h1 className='custom-h1'>CONTACT</h1></div></div></Col>
                </Row></section>
        </div>
    </div>
)
export default Figureone




