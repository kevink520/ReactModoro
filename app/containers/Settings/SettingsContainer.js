import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'
import { showFlashNotification } from '~/redux/modules/flashNotification'
import { handleAndUpdateTimer, handleAndUpdateRest } from '~/redux/modules/settings'

class SettingsContainer extends Component {
  static PropTypes = {
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
    navigator: PropTypes.object.isRequired,
  }
  state = {
    timerDuration: this.props.timerDuration,
    restDuration: this.props.restDuration,
  }
  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }
  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }
  handleTimerComplete = () => {
    this.props.dispatch(handleAndUpdateTimer(this.state.timerDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Timer duration saved!'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error updating timer duration'})))
  }
  handleRestComplete = () => {
    this.props.dispatch(handleAndUpdateRest(this.state.restDuration))
      .then(() => this.props.dispatch(showFlashNotification({text: 'Rest duration saved!'})))
      .catch(() => this.props.dispatch(showFlashNotification({text: 'Error updating rest duration'})))
  }
  handleLogout = () => {
    this.props.dispatch(handleUnauth())
  }
  render () {
    return (
      <Settings 
        onBack={this.props.navigator.pop}
        onLogout={this.handleLogout}
        onTimerComplete={this.handleTimerComplete}
        onRestComplete={this.handleRestComplete}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration} />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration,
    restDuration: settings.restDuration,
  }
}

export default connect(
  mapStateToProps
)(SettingsContainer)
