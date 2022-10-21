import React, {Component} from 'react'


class ClearBurger extends Component {

    render() {
        
        return (
           <button onClick={(e) => this.props.clearBurger()}> CLEAR BURGER </button>
        )
        }


}

export default ClearBurger