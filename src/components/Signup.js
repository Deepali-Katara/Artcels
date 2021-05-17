import React,{Component} from 'react'
import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login'
import './Signup.css'
import './Login.css'
import TCModel from './TCModel'





class  Signup extends Component {
    constructor(){
        super();
        this.state={
            firstname:null,
            lastname:null,
            phone:null,
            email:null,
            password:null,
            
         }
        }
    
   signingup=(e)=>{
       e.preventDefault();
        console.warn(this.state)
        fetch('http://148.76.75.204:8057/api/signup',{
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
    render(){

    
    return(
        <div>
        <div  className="card-body">
        <h2 align="center">Signup</h2>
        <form className="login-form" onSubmit={this.signingup}>

        <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/login-user.jpg" alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({firstname: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder=" First Name"/>
                    </div>
                
                </div>
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/login-user.jpg" alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({lastname: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder="Last Name"/>
                    </div>
                </div>


                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/phone.jpg"  alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({phone: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" minLength="10" maxLength="12" type="text" placeholder="Phone"/>
                    </div>
                </div>
                

            <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/envelop.jpg" alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({email: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder="Email Id"/>
                    </div>
                </div>
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/lock.jpg"  alt="" className="icons"/>
                <div className="col p-0 mb-0">
                    <input onChange={(event) => {this.setState({password: event.target.value})}} className="form-control border-0 ng-invalid ng-touched ng-dirty" type="password" id="password" placeholder="Password"/>
                    </div>
                </div>

                <div className="row mt-2 mx-0">
                    <div className="form-check pl-1">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label">
                            
                            <TCModel/>
                        </label>
                    </div>
                </div>





               
                <div>
                    <div  className="form-group col p-0">
                        <button className="btn-lg btn-dark btn-block mt-3 mb-3">SIGN UP</button>
                        
                    </div>
                </div>
                </form>

                <div  className="text-center" height="10px" >
                    <span  className="px-3">
                    Or Sign-In With
                    </span>
                </div><br/>
                <div   className=" text-center" >
                           <div width="180px"><GoogleLogin
                           clientId="479859715963-nm70l14rauoug88t9mtguk26o48hmues.apps.googleusercontent.com"
                           buttonText="Login"
                           onSuccess={this.responseGoogle}
                           onFailure={this.responseGoogle}
                           cookiePolicy={'single_host_origin'}
                           /></div><br/>



                           {/* <div width="180px">
                               <FacebookLogin
                               appId="887619145133227"
                               autoLoad={true}
                               textButton="Facebook"
                               fields="name,email,picture"
                               callback={this.responseFacebook}
                               />
                           </div> */}
                           </div><br/>
<div  className=" text-center">
                    <span    className="col text-center mx-auto mt-4">
                       Have an account ? 
                        <div><a  href="/login" >SIGN IN</a></div>
                    </span>
                </div>
                </div>
                </div>
    )
}
}
export default Signup