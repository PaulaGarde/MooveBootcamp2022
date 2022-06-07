import React from "react";
import DeletePost from "./DeletePost";
import PostItem from "./PostItem";
import PostList from "./PostList";
import AddPost from "./AddPost";




const notes = [
  { text: 'Studing React JS'},
  { text: 'Tidy Up'},
  { text: 'Reading book'},
  { text: 'Cook dinner'},
]

export default function App() {


  return (

    
    <React.Fragment className="bg-slate-800">
      <h1 className="text-5xl text-blueie place-self-center p-8 "> My Posts It</h1>

      <AddPost className="grid" />

      <PostItem />
          
      <PostList  />
        { notes.map (note =>(
          <PostItem key={note.text} text={note.text} />
        ))}
    
      <DeletePost />
            
    </React.Fragment>
    )
}
