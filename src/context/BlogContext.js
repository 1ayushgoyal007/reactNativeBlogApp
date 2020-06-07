import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch(action.type){

        case 'edit_blogpost':
            return state.map((blogPost)=>{
                if(blogPost.id === action.payload.id){
                    return action.payload;
                }else{
                    return blogPost;
                }
            })
        case 'delete_blogpost':
            return state.filter( blogPost=> blogPost.id !== action.payload);

        case 'add_blogpost':
            return [...state,{ id:  Math.floor(Math.random() * 9999999) ,
                  title:action.payload.title,
                  content: action.payload.content }];

        default:
            return state;
    }

}

const addBLogPost = (dispatch) =>{
    return (title,content, callback) => {
        dispatch(  { type: 'add_blogpost',payload:{title, content} } );
        callback();
    }
}

const deleteBlogPost = (dispatch) =>{
    return (id) =>{
        dispatch( {type: 'delete_blogpost', payload: id } );
    }
}

const editBLogPost= (dispatch) =>{
    return (id ,title, content, callback) =>{
        dispatch({ type:'edit_blogpost',payload:{id, title, content}} );
        callback();
    }
}

export const {Context, Provider } = createDataContext(
    blogReducer,
    {addBLogPost, deleteBlogPost, editBLogPost}, 
    [{title:'Test Post', content:'Test Content', id:1}]
);