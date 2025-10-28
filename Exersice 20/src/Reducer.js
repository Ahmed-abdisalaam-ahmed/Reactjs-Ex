export const initialState = []

export const reducer = (state ,action)=>{

    switch (action.type){
     case 'Add' :
        return [...state , action.payload];
     case 'Toggle' : 
        return state.map((todo)=> todo.id === action.payload ? {...todo , completed: !todo.completed}: todo)
     case 'Delete' :
        return state.filter((todo)=> todo.id !== action .payload)
     case 'default' :
        return state
    }
}
