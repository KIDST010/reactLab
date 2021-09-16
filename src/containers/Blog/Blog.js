import React, { useState, useEffect, useContext } from 'react';
import { PostAPI } from '../../App';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

const Blog = () => {

    const headers = { "Access-Control-Allow-Origin": "*" };

    const [posts, setPosts] = useState([]);

    const [selectedId, setSelectedId] = useState(null);

    const API_URL = useContext(PostAPI);

    useEffect(() => {
        //axios.get(API_URL,{headers})       
        axios.get('http://localhost:8080/posts', { headers })
            .then(response => {
                setPosts([...response.data])
            }).catch(err => console.log("Error::" + err));
    }, []);

    const postSelectedHandler = (id) => {
        setSelectedId(id);
    }

    // We can do this rather than this :: <Post title={{...posts[1]}.title} />
    const rposts = posts.map(post => {
        return <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => { postSelectedHandler(post.id) }} />
    });

    // 
    return (

        <div>
            <section className="Posts">
                {rposts}
            </section>
            <section>
                <FullPost
                    id={selectedId}
                    title={{ ...posts[selectedId - 1] }.title}
                    content={{ ...posts[selectedId - 1] }.content}
                />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}


export default Blog;