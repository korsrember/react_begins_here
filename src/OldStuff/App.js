import Navbar from "./Navbar";
import List from "./List";
import AddItem from "./AddItem";
import { useState } from "react";
import styles from './Navbar.module.css';
function App(){

    const [guitars,setGuitars]=useState([{title:'Strat'},{title:'Les Paul'},{title:'Explorer'}]);
    //let stuff=List({title:'Guitars',items:guitars})

    function updateGuitars(newGuitars){

        setGuitars([...guitars,newGuitars]);
    }
    return (
        <>
            <Navbar title="Using Css Modules" />
        
        <div className="container">

            {/* <Counter /> */}
            <AddItem buttonText="Add Guitars" onSubmit={updateGuitars} />
            <List
            title="Guitars"
            items={guitars}

            />
        </div>
        </>
    )
}

export default App;