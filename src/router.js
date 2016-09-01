import React from 'react'
import Home from './containers/Home'
import RecipeView from './containers/RecipeView'
import Category from './containers/Category'
import Recipe from './containers/Recipe'
import Search from './containers/Search'
import History from './containers/History'

export default function router (app) {
	const { route } = app.scene

	switch (route.key) {
		case 'Home':
			return <Home />
		case 'RecipeView':
			return <RecipeView />
		case 'Category':
			return <Category />
		case 'Recipe':
			return <Recipe />
		case 'Search':
			return <Search />
		case 'History':
			return <History />
	}
}
