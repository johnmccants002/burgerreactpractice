import React, {Component} from 'react'
import BurgerIngredient from './BurgerIngredient'



class BurgerStack extends Component {

    render() {
        const allBurgerItems = this.props.burgerItems.map((item, index) => {
            if (index === 0) {
                return <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}><BurgerIngredient key={index} ingredient={item} /><button onClick={this.props.undoItem}>Undo</button></div>
            } else {
                return <BurgerIngredient key={index} ingredient={item} />
            }
           
        })
        return (
        <div flexDirection='row'>
            {allBurgerItems}
        </div>
        )
    }


}

export default BurgerStack