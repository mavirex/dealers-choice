import React from "react"
//import any sub-components
const Axios = require ('axios');

export default class App extends React.Component {
	//constructor to initialize state
	constructor() {
        super()
        this.state = {
		  meals: [],
		  dishes: [],
          selectedMeal: ''
		}
	}
	//any lifecycle methods
	async componentDidMount () {
		this.setState({ meals: (await Axios.get('api/meals')).data })
		const showDishes = async () => {
			const selectedMeal = window.location.hash.slice(1) * 1;
			const dishes = (await Axios.get(`/api/meals/${ selectedMeal }/dishes`)).data;
			this.setState({ dishes, selectedMeal });
		}
		window.addEventListener('hashchange', async()=> {
			showDishes();
		  });
		  if(window.location.hash.slice(1)){
			showDishes();
		  }
		}	
	//any custom methods
	//render
	render() {
		const { meals, dishes, selectedMeal } = this.state;
		return( 
			<div className= 'container'>
				<h1>Welcome to Southwestaurant</h1>
				<img src='https://photos.smugmug.com/Galleries/Monument-Valley/i-KrDJqdF/0/b32aa2cb/L/2703-THE%20AMERICAN%20SOUTHWEST-L.jpg'></img>
				<h3 id = 'slogan'>The best Southwestern restaurant</h3>
				<h2>Which menu do you want to see?</h2>
				{
                    meals.map(meal=> {
                        return (
							<div key = {meal.id}>
                            <h3> 
								<a className= 'meal' href={`#${meal.id}`}>{meal.name}</a>
							</h3>
								
							{
							dishes.map(dish => {
								if (dish.mealId === meal.id) {
								return (
									<div key = {dish.id}>
									<h4>Spicy Southwestern {dish.name}</h4>
									</div>
								)
							}
							})
							}
                            </div>
                        )
                        })
                }
			</div>
		)}
}