import { StyleSheet, Dimensions } from 'react-native'
import ui from '../../constants/css'

export default StyleSheet.create({
	slider: {},
	slider__title: {
		fontSize: ui.fontS,
		color: 'rgba(0,0,0,.56)',
		marginLeft: 24,
		marginBottom: 16,
		marginTop: 24
	},
	slider__item: {
		width: Dimensions.get('window').width * 0.9,
		marginLeft: 8,
		marginRight: 5,
		marginBottom: 10
	}
})
