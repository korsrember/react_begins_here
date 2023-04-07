import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component{

    constructor(props){
        super(props);

        this.state={
            newGuitar:'',
            items:[ ...props.items],
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

   


    handleClick(e){
        e.preventDefault();
        let newGuitar=this.state.newGuitar;
        console.log(newGuitar);
        
        this.setState({items: [ ...this.state.items, newGuitar],newGuitar:''})
        console.log(this.state.items);
        // Add Text to the Array
    }

    handleChange(e){
        this.setState({ newGuitar:e.target.value});
    }
    render(){
        let items=this.state.items.map(item=><ListItem text={item}/>); //array li element
        return(
            <>

                <div className="pt-3 pb-2">
                    <form>
                        <input type="text" 
                        className="form-control-inline" 
                        value={this.state.newGuitar}
                        onChange={this.handleChange}
                        >

                        </input>
                        <button className="btn btn-primary mt-2" onClick={this.handleClick}>Add Guitars</button>
                    </form>
                </div>
               <h3>{this.props.title}</h3>
               <ul>
                   { items}
               </ul>
            </>
       );
    }
}

export default List;