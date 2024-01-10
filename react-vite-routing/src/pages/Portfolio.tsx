const projects = [
  {
    name: 'Project 1',
    description: 'Description 1',
    img: 'https://i.ytimg.com/vi/HfJjzmSaLuQ/maxresdefault.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description 2',
    img: 'https://repository-images.githubusercontent.com/587272706/d6f74c74-bd1d-44dd-a601-1c4d73b6e29a',
  },
  {
    name: 'Project 3',
    description: 'Description 3',
    img: 'https://b1694534.smushcdn.com/1694534/wp-content/uploads/2022/03/Step-1-1024x909.png?lossy=1&strip=1&webp=1',
  },
]

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="col-span-3 text-3xl font-bold">Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-4 shadow-md">
          <img src={project.img} alt={project.name} className="w-full h-64 object-cover mb-4" />
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-500">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
