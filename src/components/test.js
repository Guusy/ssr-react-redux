import React, {Component} from 'react'
import { connect } from 'react-redux'

class Test extends Component {

  componentDidMount() {
    console.log("las props son",this.props)
  }


  render() {
    return (
       <div>
         Hola soy test !
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { swapiData } = state

  return {
    swapiData
  }
}
 
export default connect(mapStateToProps)(Test)
