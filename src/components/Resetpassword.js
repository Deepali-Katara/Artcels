import React,{Component} from 'react'
import {Modal,Button} from 'react-bootstrap'


class ResetPassword extends Component{
    constructor(props){
        super(props)

        this.state={
            email:null,
            password:null,
            otp:null,
            close:this.props
        }
    }
    reset=(e)=>{
        e.preventDefault();
         console.warn(this.state)
         fetch('http://148.76.75.204:8057/api/resetPassword',{
             method:"POST",
             headers:{
                 'Content-Type':'application/json'
 
             },
             body:JSON.stringify({
                 "email":this.state.email,
                 "newPassword":this.state.password,
                 "otp":this.state.otp
             })
         }).then((result)=>{
             result.json().then((resp)=>{
                 console.warn("myResp--->>>",resp)
             })
         })
 
     }
    



    handleokModal(){
        this.setState({show:!this.state.show})
        this.setState({close:false})
        
    }
    render(){
        console.log(this.props)
        return(
            <>
            <Button  className="btn-lg btn-dark btn-block mt-3 mb-3" onClick={() =>{this.handleokModal()}}>
           OK
            </Button>
            <Modal show={this.state.show}   onHide={() => this.handleokModal()}>
                <div>

                <div   className="modal-header">
                <h5   className="p-0 m-0 mr-auto">Forgot Password?</h5>
                  <a href="/login" className="btn btn-dark"    >CANCEL</a>
                 </div>
                    
                 <Modal.Title><h1 align="center">MY WEB</h1></Modal.Title>
                <Modal.Body >
                <form className="login-form" onSubmit={this.reset}>
                
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/envelop.jpg" alt="" className="icons"/>
                 <div className="col p-0 mb-0">
                    <input  onChange={(event) => {this.setState({email: event.target.value})}}  className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder="Email Id"/>
                    </div>
                    </div>
                    <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/lock.jpg"  alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({password: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="password" id="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/lock.jpg"  alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({otp: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" id="otp" minLength="6" maxLength="6" placeholder="OTP"/>
                    </div>
                </div>






                  <div  className="row mt-3 ">
                <div  className=" form-group col p-0 ">
                <button className="btn-lg btn-dark btn-block mt-3 mb-3">RESET PASSWORD</button>
              
                </div>
                </div>
                </form>
                </Modal.Body>
                </div>

            </Modal>

        </>

       
                    
                    
                    
        

        )
    }
}
export default ResetPassword