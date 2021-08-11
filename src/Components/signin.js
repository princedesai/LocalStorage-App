import React,{Component} from 'react';
import 'F:/React/localstorageapp/src/App.css';
class signin extends Component{
User;
constructor(props)
{
    super(props)
    this.handleChange=this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state={
        email:'',
        password:'',
        message:''
    }
}
    handleChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit=()=>
    {
        var user=[];
        
        user=JSON.parse(localStorage.getItem("user"));
        // for(var i=0;i<user.length;i++)
        // {
            if(user.email===this.state.email && user.password===this.state.password)
            {
                this.props.history.push("/APIdata",this.state);
            }
            
            else if(user.email!==this.state.email)
            {
                alert("Please signup.... User not registered")
                this.props.history.push("/",null);
            }
            else{
                alert("Invalid Password... Please enter a valid password to login")
                this.props.history.push("/signin",{isauth:false})
            }
        // }
        
    }
    render() {
        return (
            <div className="mainbody">
                <form onSubmit={this.handleFormSubmit} className="formbody">
                    <div className="inputfeild">
                        
                        <input type="email" name="email" className="inputfeild" required='required'  onChange={this.handleChange} placeholder='Email' />
                    </div>
                    <div className="inputfeild">                        
                        <input type="password" name="password" className="inputfeild" required='required' onChange={this.handleChange} placeholder='password' />
                    </div>
                    <button type="submit" className="button">Submit</button>
                    <div className="form-group">
                        <label>{this.state.message}</label>
                        </div>
                </form>
            </div>
        )
    }
}
export default signin