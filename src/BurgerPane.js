import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


class BurgerPane extends Component {

    state = {
        burgerItems: []
    }

    addItem = (item) => {
        console.log(item)
        this.setState(prevState => ({
            burgerItems: [...prevState.burgerItems, item]
        }))


    }

    clearBurger = () => {
        this.setState({burgerItems: []})

    }

    render() {
        
        return (
        
        <div flexDirection='column'>
        <div flexDirection='row'>
        <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
        <BurgerStack burgerItems={this.state.burgerItems}/>
        </div>
        <div>
            <ClearBurger clearBurger={this.clearBurger}/>
        </div>
        </div>

        )
    }


}

export default BurgerPane