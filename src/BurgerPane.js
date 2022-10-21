import React, {Component, useEffect} from 'react'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


class BurgerPane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            burgerItems: [],
            value: ""
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    generateColor = () => {
        let randomColorString = "#";
        const arrayOfColorFunctions = "0123456789abcdef";
        for (let x = 0; x < 6; x++) {
          let index = Math.floor(Math.random() * 16);
          let value = arrayOfColorFunctions[index];
      
          randomColorString += value;
        }
        return randomColorString;
      };


    addItem = (item) => {
        console.log(item)
        this.setState(prevState => ({
            burgerItems: [item, ...prevState.burgerItems]
        }))
    }

    undoItem = () => {
        if (this.state.burgerItems.length >= 1) {
            console.log('Undo Item called')
        let newIngredients = [...this.state.burgerItems]
        newIngredients.shift()
        this.setState({
           burgerItems: newIngredients
        })
        }   
    }

    clearBurger = () => {
        this.setState({burgerItems: []})
    }

    handleChange(event) {
       this.setState({value: event.target.value})

    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value.length > 0) {
        console.log("This is the event.target.value", event.target.value)
        this.props.setIngredients(ingredients => [...ingredients, {name: this.state.value, color: this.generateColor()}])
        }

    }

    render() {
        
console.log("this.state.burgerItems.length", this.state.burgerItems.length)
        return (
        
        <div style={{display: 'flex', flexDirection: 'column'}}>
        
        
        <div style={{display: 'flex', flexDirection: 'row'}}>
        
        <div>
        <IngredientList ingredients={this.props.ingredients} addItem={this.addItem}/>
        </div>

        <div>
        <BurgerStack burgerItems={this.state.burgerItems}/>
        </div>

        </div>

         <div>
         <ClearBurger clearBurger={this.clearBurger}/>
         <div height={40}></div>
            {this.state.burgerItems.length > 0 ? 
        <button onClick={() => this.undoItem()} style={{width: '140px'}}>Undo</button>: <></>
            }
        </div>

        <form onSubmit={this.handleSubmit}>
  <label>
    New Ingredient:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>

        


        </div>

        )
    }


}

export default BurgerPane