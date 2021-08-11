//import 'F:/React/localstorageapp/src/Components/App.css'
import 'F:/React/localstorageapp/src/App.css';
import React,{Component} from "react";
class Signup extends Component {
    User;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            password:'',
            confirmpassword:'',
            message:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit=()=> {
    //e.preventDefault();
    if(this.state.password!==this.state.confirmpassword)
    {   
        this.setState({message:'Passwords not match'})
    }
    else
    {
        
        localStorage.setItem('user',JSON.stringify(this.state));
        this.props.history.push("/signin",this.state);        
    }   
}
render() {
    return (
        <div className="mainbody">
            <div className="formbody">
            <form onSubmit={this.handleFormSubmit} >
                <div className="inputfeild">
                    
                    <input type="text" className="firstname" required='required' name="firstname" placeholder="First Name"  onChange={this.handleChange} /> 
                    <input type="text" className="firstname" name="lastname" required='required' placeholder="Last Name"  onChange={this.handleChange} />             
                    
                </div>
                <div className="inputfeild">
                    
                    <input type="email" name="email" required='required' placeholder="Email"  onChange={this.handleChange} />
                </div>
                <div className="inputfeild">
                    
                    <input type="password" name="password" required='required'  onChange={this.handleChange} placeholder='password' />
                </div>
                <div className="inputfeild">
                    
                    <input type="password" name="confirmpassword" required='required' onChange={this.handleChange} placeholder='re-type password'/>
                    </div>
                <button type="submit" className="button">Submit</button>
                <div className="inputfeild">
                    <label>{this.state.message}</label>
                    </div>

            </form>
            </div>
        </div>
    )
}
}
export default Signup