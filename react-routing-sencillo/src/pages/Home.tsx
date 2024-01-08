import { Image } from "react-bootstrap"
import react from "../assets/react.svg"

function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Image src={react} alt="" width="72" height="57" />
      <h1 className="display-5 fw-bold">Actividad 4 - React Routing</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil asperiores, animi excepturi quod voluptate numquam dolore incidunt laboriosam est blanditiis. Quas, deleniti hic. Qui atque nisi dolorem reiciendis quaerat ipsa.
        </p>
      </div>
    </div>
  )
}
export default Home