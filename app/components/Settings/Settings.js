import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native'
import Slider from 'react-native-slider'
import { ReactModoroNavbar, Close } from '~/components'
import { colors, fontSizes } from '~/styles'

Settings.propTypes = {
  onBack: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onTimerComplete: PropTypes.func.isRequired,
  onRestComplete: PropTypes.func.isRequired,
  onTimerChange: PropTypes.func.isRequired,
  onRestChange: PropTypes.func.isRequired,
  timerDuration: PropTypes.number.isRequired,
  restDuration: PropTypes.number.isRequired,
}

export default function Settings (props) {
  return (
    <View style={styles.container}>
      <ReactModoroNavbar
        title="Settings"
        leftButton={<Close onPress={props.onBack} />} />
      <View style={styles.sliderContainer}>
        <Text style={styles.titleText}>Timer Duration</Text>
        <Text style={styles.valueText}>{props.timerDuration}</Text>
        <Text style={styles.minutes}>{props.timerDuration === 1 ? 'Minute' : 'Minutes'}</Text>
        <Slider
          value={props.timerDuration}
          minimumValue={1}
          maximumValue={60}
          step={1}
          minimumTrackTintColor={colors.blue}
          thumbTintColor={colors.border}
          onValueChange={props.onTimerChange}
          onSlidingComplete={props.onTimerComplete} />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.titleText}>Rest Duration</Text>
        <Text style={styles.valueText}>{props.restDuration}</Text>
        <Text style={styles.minutes}>{props.restDuration === 1 ? 'Minute' : 'Minutes'}</Text>
        <Slider
          value={props.restDuration}
          minimumValue={1}
          maximumValue={60}
          step={1}
          minimumTrackTintColor={colors.blue}
          thumbTintColor={colors.border}
          onValueChange={props.onRestChange}
          onSlidingComplete={props.onRestComplete} />
      </View>
      <TouchableOpacity onPress={props.onLogout} style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 50,
    color: colors.blue,
    textAlign: 'center',
    padding: 15,
  },
  minutes: {
    color: colors.secondary,
    textAlign: 'center',
  },
  logout: {
    backgroundColor: colors.blue,
    alignItems: 'stretch',
    borderRadius: 25,
    margin: 25,
    padding: 10,
  },
  logoutText: {
    color: colors.white,
    fontSize: fontSizes.secondary,
    textAlign: 'center',
  },
})
