import React, {Component} from 'react'
import Ingredient from './Ingredient'


class BurgerStack extends Component {

    render() {
        const allBurgerItems = this.props.burgerItems.map((item, index) => {
            return <div><h1>{item}</h1></div>
        })
        return (
        <div flexDirection='row'>
            {allBurgerItems}
        </div>
        )
    }


}

export default BurgerStack