import './Stats.scss';
import React from 'react';

function Stats({appData}) {

  const [reclassifications, setReclassications] = React.useState([]);
  const [myRecipes, setMyRecipes] = React.useState([]);
  const [allRecipes, setAllRecipes] = React.useState([]);

  React.useEffect(() => {
    if (appData.classroom) {
      setReclassications(appData.classroom.reclassifications);
      setMyRecipes(appData.classroom.recipes.filter(recipe => {
        return recipe.userId === appData.userId;
      }));
      setAllRecipes(appData.classroom.recipes);
    }
  }, [appData]);

  return (
    <div className="Stats">
      <div className="Stats-container">
        <h2>Reclassified Recipes</h2>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Original Classification</th>
              <th>Reclassification</th>
            </tr>
          </thead>
          <tbody>
            {reclassifications.map(reclassification => (
              <tr>
                <td>{reclassification.recipe}</td>
                <td>{reclassification.original_classification}</td>
                <td>{reclassification.reclassification}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>My Saved Recipes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Original Classification</th>
              <th>Reclassification</th>
            </tr>
          </thead>
          <tbody>
            {myRecipes.map(recipe => (
              <tr>
                <td>{recipe.name}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.classification}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>All Saved Recipes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Original Classification</th>
              <th>Reclassification</th>
            </tr>
          </thead>
          <tbody>
            {allRecipes.map(recipe => (
              <tr>
                <td>{recipe.name}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.classification}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;
