import ListItem from "./ListItem";
import PropTypes from 'prop-types';
function List(props){
    //let tempItems=props.items || [];
    let items=props.items.map(item=><ListItem item={item}/>); //array li element

    let css=`bg-${props.background}`;
    return(
         <>
            <h3>{props.title}</h3>
            <ul>
                { items}
            </ul>
         </>
    );
}

List.defaultProps={
    items:[],
    background:"primary"
};
List.propTypes={
    title:PropTypes.string.isRequired,
    background:PropTypes.oneOf([
        'primary',
        'secondary'
    ]),
    
    specialProp:PropTypes.shape({
        name:PropTypes.string,
        age:PropTypes.number
    })
};
export default List;
