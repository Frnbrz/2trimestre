import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import TutorialDataService from "../api/services/tutorials"
import { TutorialModel } from "../models/tutorials"

const Tutorial = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  }

  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState as TutorialModel)
  const [message, setMessage] = useState("" as string)

  const getTutorial = (id: number) => {
    TutorialDataService.get(id)
      .then((response) => {
        setCurrentTutorial(response.data)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (id)
      getTutorial(parseInt(id))
  }, [id])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setCurrentTutorial({ ...currentTutorial, [name]: value })
  }

  const updatePublished = (status: boolean) => {
    const data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    } as TutorialModel
    if (currentTutorial.id === null) return
    TutorialDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status })
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const updateTutorial = () => {
    if (currentTutorial.id === null) return
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data)
        setMessage("The tutorial was updated successfully!")
      })
      .catch(e => {
        console.log(e)
      })
  }

  const deleteTutorial = () => {
    if (currentTutorial.id === null) return
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data)
        navigate("/tutorials")
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  )
}

export default Tutorial