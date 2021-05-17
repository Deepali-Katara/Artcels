import React, { Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import Sendotp from './Sendotp'
import './Model.css'
import './Login.js'
class  ForgotModal extends Component {
    constructor(){
        super()
        this.state={
            email:null,
            // show:false

        }
    }

   


otp=(e)=>{
        e.preventDefault();
         console.warn(this.state)
         fetch('http://148.76.75.204:8057/api/userForgotpassword',{
             method:"POST",
             headers:{
                 'Content-Type':'application/json'
 
             },
             body:JSON.stringify(this.state)
         }).then((result)=>{
             result.json().then((resp)=>{
                 console.warn("myResp--->>>",resp)
             })
         })
 
     }
     handleModal(){
         this.setState({show:true})
     }
     
     render(){
    return(
        <>
        <Button variant="primary" onClick={() =>{this.handleModal()}}>
            Forgot Password
            </Button>
            <Modal show={this.state.show}>
                <div>

                <div  className="modal-header">
                <h5   className="p-0 m-0 mr-auto">Forgot Password?</h5>
                  <a href="/login" className="btn btn-dark">CANCEL</a>
                 </div>
                    
                 <Modal.Title><h1 align="center">MY WEB</h1></Modal.Title>
                <Modal.Body>
                <form className="login-form" onSubmit={this.otp}>
                
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/envelop.jpg" alt="" className="icons"/>
                 <div className="col p-0 mb-0">
                    <input  onChange={(event) => {this.setState({email: event.target.value})}}  className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder="Email Id"/>
                    </div>
                    </div>
                  <div  className="row mt-3 ">
                <div  className=" form-group col p-0 ">
                <button className="btn-lg btn-dark btn-block mt-3 mb-3">
                   <Sendotp closeforgot={this.state.email}/>
                    </button>
                    
                </div>
                </div>
                </form>
                </Modal.Body>
                </div>

            </Modal>

        </>
    )

}}
export default ForgotModal