import React,{ Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import ResetPassword from './Resetpassword'
import './Sendotp.css'

class Sendotp extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
        }

    } 
    handleotpModal(){
        this.setState({show:!this.state.show})
    }
    render(){
    
        // console.log(this.props)
        return(
            <>
            <Button className="btn-lg btn-dark btn-block mt-3 mb-3" onClick={() =>{this.handleotpModal()}}>
                SEND OTP
                </Button>
                <Modal show={this.state.show} onHide={() => this.handleotpModal()}>
                    
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                    We accept your request for changing the password
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button className="button">OK</Button> */}
                        <ResetPassword closeButton={this.props.closeforgot} />
                    </Modal.Footer>
                   
                  
                </Modal>
    
            </>
        )
    }
}
export default Sendotp
