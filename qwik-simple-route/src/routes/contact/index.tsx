import {
  component$,
  useStylesScoped$
} from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import styles from "./contact.css?inline"

export default component$(() => {
  useStylesScoped$(styles)




  return (
    <div class="container container-center">
      <div role="presentation" class="ellipsis"></div>
      <h1>
        <span class="highlight">Blog</span>
      </h1>
      <div class="login-box">

        <form>
          <div class="user-box">
            <label>Usuario</label>
            <input type="text" name="" required />
          </div>
          <div class="user-box">
            <label>Comentario</label>
            <input type="text" name="" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}
)






export const head: DocumentHead = {
  title: "Qwik Contacto",
}
