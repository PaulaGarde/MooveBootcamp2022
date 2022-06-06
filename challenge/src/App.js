import React from "react";
import DeletePost from "./DeletePost";
import PostItem from "./PostItem";
import PostList from "./PostList";
import AddPost from "./AddPost";




const notes = [
  { text: 'lorem lHacer tarea'},
  { text: 'Tidy Up'},
  { text: 'Reading book'},
  { text: 'Cook dinner'},

]

export default function App() {

  // const eliminatePost =notes.filter(note =>!!note.deleted).length;
  // const totalNotes = notes.length;

  return (

    
    <React.Fragment className="grid">
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
