import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import RecipeItem from '../RecipeItem'
import Timer from '../Timer'
// import css from './Recipe.css'

class Recipe extends Component {
	componentWillMount () {
		this.setState({slides: []})
	}
	calculateSlideHeight (slide) {
		// { height, index } = slide
		let tmpSlides = this.state.slides
		slide.height = Math.floor(slide.height)
		tmpSlides.push(slide)
		this.setState({slides: tmpSlides})
		// the last slide callback is here
		if (this.props.data.stages.length >= slide.index) {
			this.props.pushCardsHeights(this.state.slides)
		}
	}

	render () {
		const { data } = this.props
		let recipeItems = null
		if (data.stages) {
			recipeItems = data.stages.map((stage, index) => {
				return (
					<RecipeItem
						key={index}
						stage={stage}
						numberOfStage={index + 1}
						image={stage.image}
						calculateSlideHeight={this.calculateSlideHeight.bind(this)}
					/>
				)
			})
		}
		return (
			<View>
				{recipeItems}
			</View>
		)
		// <Text style={css.recipe__note}>Мы напомним когда нужно будет проверить или помешать</Text>
	}
}

Recipe.propTypes = {
	data: PropTypes.object.isRequired,
	pushCardsHeights: PropTypes.func.isRequired
}

export default Recipe
