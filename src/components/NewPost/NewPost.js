import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        id: '',
        title: '',
        content: '',
        author: 'Dean',
        confirmation: ""
    }

    addPost() {
        const headers = { "Access-Control-Allow-Origin": "*" };
        axios({
            method: 'post',
            url: 'http://localhost:8080/posts',
            data: { ...this.state },
            headers: headers
        })
            .then(response => {
                alert("post added")
                this.setState({ confirmation: "Post is successfuly added" })
            }).catch(err => console.log(err));
    }
    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Id</label>
                <input type="text" value={this.state.id} onChange={(event) => this.setState({ id: event.target.value })} />
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Dean">Dean</option>
                    <option value="Zaineh">Zaineh</option>
                    <option value="Yasmeen">Yasmeen</option>
                </select>
                <button onClick={() => this.addPost()}>Add Post</button> <label className="confirmation">{this.state.confirmation}</label>
            </div>
        );
    }
}

export default NewPost;