import { useState } from "react"
import TutorialDataService from "../api/services/tutorials"
import { ProductModel } from "../models/tutorials"

const AddProduct = () => {
  const initialTutorialState = {
    id: null,
    unidades: 0,
    precio: 0,
    fechaCaducidad: "",
  }

  const [product, setProduct] = useState(initialTutorialState)
  const [submitted, setSubmitted] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    console.log(name, value)
    setProduct({ ...product, [name]: value })
  }

  const saveTutorial = () => {
    const data = {
      unidades: product.unidades,
      precio: product.precio,
      fechaCaducidad: product.fechaCaducidad
    } as ProductModel

    TutorialDataService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          unidades: response.data.unidades,
          precio: response.data.precio,
          fechaCaducidad: response.data.fechaCaducidad
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const newTutorial = () => {
    setProduct(initialTutorialState)
    setSubmitted(false)
  }

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Unidades</label>
            <input
              type="number"
              className="form-control"
              id="unidades"
              required
              value={product.unidades}
              onChange={handleInputChange}
              name="unidades"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              required
              value={product.precio}
              onChange={handleInputChange}
              name="precio"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Fecha Caducidad</label>
            <input
              type="date"
              className="form-control"
              id="fechaCaducidad"
              required
              value={product.fechaCaducidad}
              onChange={handleInputChange}
              name="fechaCaducidad"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default AddProduct