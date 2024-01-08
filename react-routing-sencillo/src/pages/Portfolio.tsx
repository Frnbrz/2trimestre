import { Col, Image, Row } from "react-bootstrap"
import snow from "../assets/snow.svg"
import star from "../assets/star.svg"
import tree from "../assets/tree.svg"


function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <Row>
        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </Col>

        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </Col>

        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <Image
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

        </Col>
        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src={snow}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <Image
            src={star}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

        </Col>
        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src={tree}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <Image
            src={snow}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

        </Col>
        <Col lg={4} xs={6} md={12} mb={0}>
          <Image
            src={tree}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <Image
            src={snow}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

        </Col>
      </Row>
    </>
  )
}
export default Portfolio