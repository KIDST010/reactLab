import React, { useState } from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = (props) => {
    const { id, title, content } = { ...props };
    const [confirmation, setConfirmation] = useState("");

    function deletePost() {
        const headers = { "Access-Control-Allow-Origin": "*" };
        axios.delete(`http://localhost:8080/posts/${id}`, { headers })
            .then(response => setConfirmation("Post is successfuly DELETED"))
            .catch(err => console.log(err));
    }
    function updatePost() {
        const headers = { "Access-Control-Allow-Origin": "*" };
        const data = { title: "C++", author: "Dean", content: "It is good prog language" };//for testing the update
        axios.put(`http://localhost:8080/posts/${id}`, { ...data }, { headers })
            .then(response => setConfirmation("Post is successfuly UPDATED"))
            .catch(err => console.log(err));
    }

    let post = <p>Please select a Post!</p>;

    if (props.id != null) {
        post = (
            <div className="FullPost">
                <h1>{title}</h1>
                <p>{content}</p>
                <div className="Edit">
                    <button className="Delete" onClick={deletePost}>Delete</button>
                    <button id="Update" onClick={updatePost}>Update</button>
                    <label className="confirmation">{confirmation}</label>
                </div>
            </div>
        );
    }


    return post;
}

export default FullPost;