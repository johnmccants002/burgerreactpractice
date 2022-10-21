import React, {Component} from 'react'
import Ingredient from './Ingredient'


class IngredientList extends Component {

    render() {
        const allItems = this.props.ingredients.map((item, index) => {
            return <Ingredient ingredient={item} key={index} addItem={this.props.addItem} isBurger={false}/>
        })
        
        return (
           <div>
            {allItems}
           </div> 
        
        )
    }


}

export default IngredientList