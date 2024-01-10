import { useEffect, useState } from 'react'

function Blog() {
  interface Post {
    userId: number,
    id: number,
    title: string
    completed: boolean
  }

  const [posts, setPosts] = useState([] as Post[])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center m-2">
      <h1 className="col-span-3 text-3xl font-bold">Blog</h1>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.completed ? <p>Completed</p> : <p>Not completed</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
