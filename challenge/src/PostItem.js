import React from "react";
import trash from "./trash.svg";

export default function PostItem(props){
    const onDeletePost = () => {
        alert("el post it fue eliminado ");
    }

    return(
        <section className=" grid w-1/4 m-11 p-4 border-4 border-greenie rounded-md " >
            <p className=" h-56"> {props.text} </p>
            <img className="place-self-end cursor-pointer" onClick={onDeletePost} src={trash} alt="Trash bin"></img>             
           
        </section>
    );
}