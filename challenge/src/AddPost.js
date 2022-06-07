import React from "react";


export default function AddPost(props){
    const addButton = (msn) => {
        alert(msn);
    };

    return(
        <button className= "mx-16 bg-purpleie hover:bg-yellowie text-white text-center py-2 px-4 rounded"
        onClick={() => addButton("Here,  It should be  add a post it  🥸") }
        >Add Post It
        </button>
    );
}