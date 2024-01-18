import { useEffect, useState } from 'react'

function Blog() {


  interface User {
    id: number,
    firstName: string,
    lastName: string,
    age: number
  }

  const [posts, setPosts] = useState([] as User[])



  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setPosts(data.users))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center m-2">
      <h1 className="col-span-3 text-3xl font-bold">Blog</h1>

      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">{post.firstName}</h2>
            <p className="text-gray-600">{post.age}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
