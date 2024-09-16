import React from 'react'
import { useParams } from 'react-router-dom'

export const Posts = () => {

    const {id} = useParams();

  return (
        <div>
          <h1>Post Details</h1>
          <p>You are viewing the post with ID: {id}</p>
        </div>

  )
}

