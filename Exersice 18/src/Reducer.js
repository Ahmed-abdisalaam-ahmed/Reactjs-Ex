export const initialState = []
export const reducer = (state , action)=>{
    switch(action.type){
        case 'Add' :
            return [...state ,action.payload];
        case 'Delete' :
            return state.filter((contact)=> contact.id !== action.payload);
        case 'Edit':
            return state.map( contact=> contact.id === action.payload.id ? {...contact , ...action.payload}: contact)
        case 'ToggleFavorite':
            return state.map((contact)=> contact.id === action.payload ? {...contact ,favorite: !contact.favorite} : contact);
        default :
            return state
    }
}