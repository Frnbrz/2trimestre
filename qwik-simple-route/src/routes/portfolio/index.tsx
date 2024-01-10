import {
  component$,
  useStylesScoped$
} from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import styles from "./portfolio.css?inline"

export default component$(() => {
  useStylesScoped$(styles)

  const projects = [
    {
      id: 1,
      title: "Projecto 1",
      description: "A flower shop website built with Qwik.",
      image: "https://i.ytimg.com/vi/tNsveb6RRGA/maxresdefault.jpg",
      url: "https://qwik-flower.netlify.app/"
    },
    {
      id: 2,
      title: "Projecto 2",
      description: "A flower shop website built with Qwik.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nDKAralOGnLii118H74K-7JdhNGFGjFYQAFcRiweSpgzWeBwxbbcqeCP64zgC5NQeaI&usqp=CAU",
      url: "https://qwik-flower.netlify.app/"
    },
    {
      id: 3,
      title: "Projecto 3",
      description: "A flower shop website built with Qwik.",
      image: "https://keenthemes.ams3.digitaloceanspaces.com/products/products/17/4tkCz51Gnc6VxS0YsM7BICQwv7OE3kIj3kYtRuFD.jpg",
      url: "https://qwik-flower.netlify.app/"
    }
  ]


  return (
    <div class="container container-center">
      <div role="presentation" class="ellipsis"></div>
      <h1>
        <span class="highlight">Portfolio</span>
      </h1>

      <div class="portfolio">
        {projects.map((project) => (
          <div class="project">
            <div class="project-image">
              <img src={project.image} width="500" />
            </div>
            <div class="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank">Visit</a>
            </div>
          </div>
        ))}





      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: "Qwik Portfolio",
}
