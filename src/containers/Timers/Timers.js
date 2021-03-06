import React, { Component, PropTypes } from 'react'
import {
	View,
	Text
} from 'react-native'
import ui from '../../constants/css'
import TimerLabel from '../../components/TimerLabel'

export default class Timers extends Component {
	componentWillReceiveProps () {

	}
	renderTimers () {
		const { timers } = this.props
		return (
			timers.map(timer => {
				if (!timer) return null
				const { actionLabel, timeout } = timer
				return (
					<TimerLabel
						key={actionLabel}
						withTimeline
						actionLabel={actionLabel}
						timeout={timeout}
					/>
				)
			})
		)
	}
	render () {
		return (
			<View style={ui.page}>
				<View style={{marginTop: 20}}>
					{this.renderTimers()}
				</View>
			</View>
		)
	}
}

Timers.propTypes = {
	timers: PropTypes.array.isRequired
}
