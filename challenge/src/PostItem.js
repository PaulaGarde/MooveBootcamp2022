import React from "react";

export default function PostItem(props){
    return(
        <li>
            <p className="w-50 border-purple-900">{props.text}</p>
            <span>Delete</span>
        </li>
    );
}

