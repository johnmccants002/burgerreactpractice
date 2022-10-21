import React, {Component} from 'react'
import BurgerIngredient from './BurgerIngredient'



class BurgerStack extends Component {

    render() {
        const allBurgerItems = this.props.burgerItems.map((item, index) => {
            return <BurgerIngredient key={index} ingredient={item} />
        })
        return (
        <div flexDirection='row'>
            {allBurgerItems}
        </div>
        )
    }


}

export default BurgerStack