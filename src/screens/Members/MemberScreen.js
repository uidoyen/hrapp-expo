import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import {
  getAllProfiles,
  getUserProfilesById,
  getUserProfile
} from "./../../actions/profileAction";

export class MemberScreen extends Component {
  componentDidMount = () => {
    this.props.getAllProfiles()
  }
  render() {
    // console.log(this.props)
    return (
      <View>
        <Text>Helloo</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, { getAllProfiles })(MemberScreen)
