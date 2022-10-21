import React, {Component} from 'react'
import Ingredient from './Ingredient'


class IngredientList extends Component {

    render() {
        const allItems = this.props.ingredients.map((item, index) => {
            return <div style={{display: 'flex', flexDirection: 'row'}}><Ingredient ingredient={item} key={index} addItem={this.props.addItem} /></div>
        })
        
        return (
           <div>
            {allItems}
           </div> 
        
        )
    }


}

export default IngredientList