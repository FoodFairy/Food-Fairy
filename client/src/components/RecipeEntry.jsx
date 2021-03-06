// RecipeEntry receives each recipe from the RecipeList (array) component and renders a small (image + description + likes) or a large card (instructions)
class RecipeEntry extends React.Component {
  //props: recipe - the recipe data to be shown; taken from the API
  constructor(props){
    super(props);
    this.state = {
      smallCard: true
    }
  }

  //a function that triggers on click - it toggles between the small and large recipe cards
  toggleCard (){
    this.setState({
      smallCard: !this.state.smallCard
    })
  }

  render(){
    return (
      <div className="recipe-list-entry" onClick={this.toggleCard.bind(this)}>
        {/* an if statement in render must be written inside of a function - so
          this is an ES6 function that is called immediantly. */}
        {(()=>{
          if(this.state.smallCard){
            return <SmallRecipeCard recipe={this.props.recipe} searchSummary={window.searchSummary} />
          }else{
            {/* if smallCard state is false, a LargeRecipeCard will appear and make a new query to the API
              to grab the instructions that will be loaded */}
            return <LargeRecipeCard recipe={this.props.recipe} searchInstructions={window.searchInstructions} searchSummary={window.searchSummary} searchIngredients={window.searchIngredients}/>
          }
        })()}
      </div>
    )
  }
}

window.RecipeEntry = RecipeEntry
