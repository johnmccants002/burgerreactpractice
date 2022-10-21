import React, {Component} from 'react'


class Ingredient extends Component {

    render() {

        let ingredient = this.props.ingredient
        
        return (
           <button onClick={(e) => this.props.addItem(this.props.ingredient)}>{ingredient.name}</button>
        )
        }


}

export default Ingredient