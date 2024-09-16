import React from 'react'

export const Home = () => {

    const posts = [
        {id : 1, title:"Posts 1" , description:"This is post 1"},
        {id : 2, title:"Posts 2" , description:"This is post 2"},
    ]

  return (
    <div>
    
    <h1>Blog Posts</h1>
    <ul>
        {posts.map((post) => (
            <li key = {post.id}>
             <link to ={`/posts/${post.id}`}></link>
             <h2>{post.title}</h2>
              <p>{post.description}</p>
            </li>
        ))}
    </ul>

    </div>
  )
}
