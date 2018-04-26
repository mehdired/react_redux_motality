import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getCountries, getMortality} from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {selectedCountry: this.props.defaultCountry}
  }

  componentWillMount () {
    this.props.getCountries()
  }

  selectBox () {
    const {countries} = this.props

    if (countries) {
      return (
        <select value={this.state.selectedCountry} onChange={(e) => this.search(e)} className='col-lg-12 input-group'>
          {
            countries.map((country) => {
              return <option key={country} value={country}>{country}</option>
            })
          }
        </select>
      )
    } else {
      <div>No country found</div>
    }

  }

  search (e) {
    this.setState({selectedCountry: e.target.value}, () => {
      this.props.getMortality(this.state.selectedCountry)
    })
  }

  render () {
    return (
      <div className='search-bar'>
       { this.selectBox() }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}

const mapDispatchToPros = (dispatch) => {
  return bindActionCreators({getCountries, getMortality}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToPros)(SearchBar)