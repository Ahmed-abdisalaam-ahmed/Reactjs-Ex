import React from 'react'
import { Link, useParams } from 'react-router'
import { recipesindex } from './Recipes';
const RecipesDetails = () => {

  const {recipesId} = useParams();

  const recipedInfo = recipesindex.filter((recipe) => recipe.id == recipesId)[0]
  console.log(recipedInfo)

  return (
    <div className='p-8 bg-gray-100 min-h-screen'>
      <div className='bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl'>
        <Link
        to="/recipes" 
        className="text-rose-600 hover:text-rose-700 mb-4 inline-block text-2xl"
      >
        ← Back to Recipes
      </Link>
        <h2 className='text-3xl font-bold mb-4'>{recipedInfo.title}</h2>
        <p className='text-gray-700 mb-6'>{recipedInfo.description}</p>
        <h3 className='text-2xl font-semibold mb-2'>Ingredients</h3>
        <ul className='list-disc list-inside mb-6'>
          {recipedInfo.ingredients.map((ingredient,index) => (
            <li key={index} className='text-gray-700'>{ingredient}</li>
          ))}
        </ul>
        <h3 className='text-2xl font-semibold mb-2'>Instructions</h3>
        <ol className='list-decimal list-inside'>
          {recipedInfo.instructions.map((instruction, index) => (
            <li key={index} className='text-gray-700 mb-2'>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipesDetails