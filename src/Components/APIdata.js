import React,{Component} from 'react';
import 'F:/React/localstorageapp/src/App.css';
class APIdata extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            country:[],
            isLoading:'false',
            isError:'false'
        }
    }
    // The get request
    async componentDidMount()
    {
        this.setState({isLoading:true})
        const response= await fetch("https://restcountries.eu/rest/v2/all")
        if(response.ok)
        {
            const country=await response.json();
            console.log(country)
            this.setState({country,isLoading:false})
        }
        // else{
        //     this.setState({isError:true},{isLoading:false})
        // }
    }
    renderTableHeader=()=>{
        return (<tr>
            <th className='tableheader'> Country Name</th>
            <th className='tableheader'>Capital</th>
            <th className='tableheader'>Currency</th>
            </tr>)

    }
    renderTableRows=()=>{
        return this.state.country.map(country=>{
            return(
                <tr className='tablerow' key={country.name}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.currencies[0].name}</td>
                </tr>
            )
        })

    }
    render()
    {
        const{country,isLoading,isError}=this.state
        if(isLoading)
        {
            return(<div>Loading...</div>)
        }
        if(isError===true)
        {
            return(<div>Some Error has occured....</div>)
        }
        return(
            country.length>0?(
                <table className="tbldesign">
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.renderTableRows()}
                        </tr>
                    </tbody>
                </table>

            ):(
                <div> No countries </div>
            )
            
            
        )
    }
}
export default APIdata;