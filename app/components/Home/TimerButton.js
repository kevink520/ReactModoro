import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PressableIcon } from '~/components'

TimerButton.propTypes = {
  countdownRunning: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default function TimerButton (props) {
  return (
    <View style={styles.container}>
      {props.countdownRunning === true
        ? <PressableIcon name="ios-pause-outline" onPress={props.onToggle} />
        : <PressableIcon name="ios-play-outline" onPress={props.onToggle} />}
      <PressableIcon name="ios-refresh-outline" onPress={props.onReset} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})