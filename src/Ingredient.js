import React, {Component} from 'react'


class Ingredient extends Component {

    render() {

        let ingredient = this.props.ingredient
        
        return (
           <button onClick={(e) => this.props.addItem(e.target.value)}value={ingredient.name}>{ingredient.name}</button>
        )
        }


}

export default Ingredient