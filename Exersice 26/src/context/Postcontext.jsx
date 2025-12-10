import {createContext} from "react";

export const Postcontext = createContext();

export const postProvider = ({children}) => {

    const [posts, setPosts] = useState([
    { id: 1, title: 'Introduction to React', content: 'Content of post 1' },
    { id: 2, title: 'Understanding React Router', content: 'Content of post 2' },
    { id: 3, title: 'React Hooks in Depth', content: 'Content of post 3' },
  ]);
     const PostAdd = (newPost) =>{
        setPosts((prev)=> [...prev, {...newPost, id : prev.length + 1}]);
     };

     return (
        <Postcontext.Provider value={{posts, PostAdd}}>
            {children}
        </Postcontext.Provider>
     )
}