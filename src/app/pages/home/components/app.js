import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../../../../redux/actions'
import '../home.scss';
import Card from '../../../../components/card'


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
   // dispatch(fetchSwapiIfNeeded())
    console.log("las props son",this.props)
  }


  render() {
    const { isFetching, apps } = this.props
    let totalapps = apps.length;

    return (
       <div>
         {isFetching && apps.length === 0 && <h2>Loading...</h2>}
         {!isFetching && apps.length === 0 && <h2>Empty.</h2>}
         <Card apps={apps} totalapps={totalapps} />
       </div>
    );
  }
}
 
function mapStateToProps(state) {
  const { isFetching, apps, swapiData } = state
 
  return {
    isFetching,
    apps,
    swapiData
  }
}
 
export default connect(mapStateToProps)(App)
