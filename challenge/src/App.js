import React from "react";
import DeletePost from "./DeletePost";
import PostItem from "./PostItem";
import PostList from "./PostList";
import AddPost from "./AddPost";




const notes = [
  { text: 'Hacer tarea'},
  { text: 'Reading book'},
  { text: 'Cook dinner'},

]

export default function App() {
  return (

    
    <React.Fragment>
      <h1 className="text-amber-600 text-4xl"> My Posts It</h1>

      <AddPost />

      <PostItem />
          
      <PostList />
        { notes.map (note =>(
          <PostItem key={note.text} text={note.text} />
        ))}
    
      <DeletePost />
            
    </React.Fragment>
    )
}
