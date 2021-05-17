import React,{ Component } from 'react'

import GoogleLogin from 'react-google-login'
// import FacebookLogin from 'react-facebook-login'
import Dashboard from './Dashboard.js'
import ForgotModal from './ForgotModal'



import './Login.css'
// import OpenModal from './OpenModal.js'





class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null,
         }
        }
    
   create=(e)=>{
       e.preventDefault();
        console.warn(this.state)
        fetch('http://148.76.75.204:8057/api/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'

            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                //console.warn("myResp--->>>",resp)
                if(resp.message==="user login successfully"){
                    console.warn("myResp--->>>",resp)
                    console.log(this.props.history.push('/dashboard'))
                }
                else{
                    alert('invalid credentials')
                }
                
            })
        })
        

    }

    

responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj)
}
responseFacebook=(response)=>{
    console.log(response);

}


    render(){
        return(
        <>
        <div  className="card-body">
        <h1 align="center">Login</h1>
        <form className="login-form" onSubmit={this.create}>
            <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/envelop.jpg" alt = "" className="icons"/>
                <div className="col p-0 mb-0">


                    <input  onChange={(event) => {this.setState({email: event.target.value})}}    className="form-control border-0 ng-invalid ng-touched ng-dirty" type="text" placeholder="Email Id"/>
                    </div>
                </div>
                <div className="row mt-4 border-bottom">
                <img src="http://artcels.sourcesoftsolutions.com/assets/images/login/lock.jpg"  alt = "" className="icons"/>
                <div className="col p-0 mb-0">


                    <input  onChange={(event) => {this.setState({password: event.target.value})}}   className="form-control border-0 ng-invalid ng-touched ng-dirty" type="password" id="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-right p-0">

                       
            
                        
                    </div>
                </div>



                <div>
                    <div  className="form-group col p-0">
                        <button onClick={Dashboard} className="btn-lg btn-dark btn-block mt-3 mb-3">Log in </button>
                        <ForgotModal/>
                    </div>
                   
                    
                </div>
                </form>

                <div  className="text-center" height="10px" >
                    <span className="px-3">
                    Or Sign-In With
                    </span>
                </div><br/>

{/*                
                    <div  _ngcontent-euf-c62 className=" text-center">
                    <div><button className="loginBtn loginBtn--facebook   mt-3 mb-3">
                         Login with Facebook
                           </button></div>
                           <div><button className="loginBtn loginBtn--google mt-3 mb-3">
                               Login with Google
                                 </button></div>
                                 </div> */}
                        <div   className=" text-center" >

                           <div ><GoogleLogin
                           clientId="479859715963-nm70l14rauoug88t9mtguk26o48hmues.apps.googleusercontent.com"
                           buttonText="Login "
                           onSuccess={this.responseGoogle}
                           onFailure={this.responseGoogle}
                           cookiePolicy={'single_host_origin'}
                           /></div><br/>


{/* 
                           <div>
                               <FacebookLogin
                               appId="887619145133227"
                                 textButton="Facebook"
                              autoLoad={true}
                               fields="name,email,picture"
                               callback={this.responseFacebook}
                               />
                           </div> */}
                           </div><br/>

<div  className=" text-center">
                    <span   className="col text-center mx-auto mt-4">
                        Don't have an account ? 
                        <div><a  href="/signup" >SIGN UP</a></div>
                    </span>
                </div>
                
                </div>
                </>
              
    )
 }
}
export default Login