import React, {Component, StyleSheet} from 'react'
import './App.css'


class BurgerIngredient extends Component {

    render() {

        let ingredient = this.props.ingredient
        
        return (
           <div style={{backgroundColor: ingredient.color}}>{ingredient.name}</div>
        )
        }


}

export default BurgerIngredient