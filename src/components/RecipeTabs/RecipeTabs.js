import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import Tab from '../Tab'
import IngredientList from '../IngredientList'
import StageList from '../StageList'
import css from './RecipeTabs.css'
import Swiper from 'react-native-swiper'
import { LOADING, SUCCESS, ERROR } from '../../constants/actionTypes'
import Preloader from '../Preloader'

class RecipeTabs extends Component {
	constructor (props) {
		super(props)
		this.state = {
			activeTab: 0,
			swiperHeight: 0
		}
	}

	changeTo (index) {
		if (this.state.activeTab === index) return false
		this.setState({
			activeTab: index
		})
		switch (index) {
			case 0: return this.swiper.scrollBy(-1)
			case 1: return this.swiper.scrollBy(1)
		}
	}

	handleSwipe (index) {
		this.setState({
			activeTab: index
		})
	}

	onLayout (e) {
		var {x, y, width, height} = e.nativeEvent.layout;
		console.log(height)
		this.setState({
			swiperHeight: height
		})
	}

	renderContent () {
		const { status } = this.props.recipe
		switch (status) {
			case LOADING: return (
				<Preloader margin={80} />
			)
			case SUCCESS: return (
				<View>
					<Swiper
						loop={false}
						showsPagination={false}
						height={this.state.swiperHeight}
						ref={(r) => this.swiper = r}
						onMomentumScrollEnd={(e, state) => this.handleSwipe(state.index)}>
						<StageList
							tabLabel='Этапы'
							recipe={this.props.recipe}
						/>
						<View onLayout={this.onLayout.bind(this)} >
							<IngredientList
								tabLabel='Продукты'
								onDecrement={this.props.onDecrement}
								onIncrement={this.props.onIncrement}
								recipe={this.props.recipe}
							/>
						</View>
					</Swiper>
				</View>
			)
			case ERROR: return 'Сломалось или нет Интернета'
		}
	}

	render () {
		let { activeTab } = this.state
		return (
			<View>
				<View style={css.tabs}>
					<Tab style={[css.tabs__item, activeTab === 0
							? css.tabs__item_active
							: '']}
						onPress={() => this.changeTo(0)}
						textStyle={css.tabs__itemText}
						tabTitle={'ЭТАПЫ'}
					/>
					<Tab style={[css.tabs__item, activeTab === 1
							? css.tabs__item_active
							: '']}
						onPress={() => this.changeTo(1)}
						textStyle={css.tabs__itemText}
						tabTitle={'ПРОДУКТЫ'}
					/>
				</View>
				{this.renderContent()}
			</View>
		)
	}
}

RecipeTabs.propTypes = {
	recipe: PropTypes.object.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrement: PropTypes.func.isRequired
}

export default RecipeTabs
