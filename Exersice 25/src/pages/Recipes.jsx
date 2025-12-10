import React from 'react'
import { Link } from 'react-router';

export const recipesindex = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts',
    ingredients: [
      '2 cups flour',
      '1 cup sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients',
      'Bake at 350°F for 25 minutes'
    ]
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner',
    ingredients: [
      'Spaghetti',
      'Eggs',
      'Pecorino cheese',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Mix eggs and cheese',
      'Combine while hot'
    ]
  },
  {
    id: 3,
    title: 'Fresh Garden Salad',
    description: 'Crisp vegetables tossed with a light vinaigrette',
    category: 'lunch',
    ingredients: [
      'Lettuce',
      'Tomatoes',
      'Cucumbers',
      'Olive oil',
      'Lemon juice'
    ],
    instructions: [
      'Chop vegetables',
      'Mix dressing',
      'Toss together and serve'
    ]
  },
  {
    id: 4,
    title: 'Grilled Chicken Tacos',
    description: 'Flavorful tacos filled with seasoned grilled chicken',
    category: 'dinner',
    ingredients: [
      'Chicken breast',
      'Taco seasoning',
      'Tortillas',
      'Lime',
      'Onions'
    ],
    instructions: [
      'Season and grill chicken',
      'Slice chicken',
      'Fill tortillas and serve'
    ]
  }
];
const Recipes = () => {
   const reciped = [
  {
    id: 1,
    title: 'Classic Chocolate Cake',
    description: 'Rich and moist chocolate cake perfect for any occasion',
    category: 'desserts'
  },
  {
    id: 2,
    title: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy egg sauce',
    category: 'dinner'
  },
  {
    id: 3,
    title: 'Greek Salad',
    description: 'Fresh Mediterranean salad with feta cheese',
    category: 'lunch'
  },
  {
    id: 4,
    title: 'Breakfast Smoothie Bowl',
    description: 'Healthy and colorful breakfast bowl',
    category: 'breakfast'
  }
];
  return (
      <div className='p-8 bg-gray-100 min-h-screen'>
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reciped.map(recipe => (
          <Link
            key={recipe.id}
            to={`/Recipes/${recipe.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <span className="inline-block bg-rose-100 text-rose-800 text-sm px-2 py-1 rounded">
                {recipe.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Recipes