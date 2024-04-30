import { Container, Row, Col } from "react-bootstrap";
import { semuaBudaya } from "../data/index";
import FaqCompenent from "../components/FaqCompenent";

const BudayaPage = () => {
  return (
    <div className="budaya-page">
      <div className="budaya min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s ">
                Semua Budaya
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                semua budaya jawa yang anda cari pasti ada disini! silahkan
                dicek!
              </p>
            </Col>
          </Row>
          <Row>
            {semuaBudaya.map((budaya) => {
              return (
                <Col
                  key={budaya.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={budaya.delay}
                >
                  <img
                    src={budaya.image}
                    alt="unsplash.com"
                    className="mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-4">
                    <i className={budaya.star1}></i>
                    <i className={budaya.star2}></i>
                    <i className={budaya.star3}></i>
                    <i className={budaya.star4}></i>
                    <i className={budaya.star5}></i>
                  </div>
                  <h5 className="mb-5 px-4">{budaya.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-4 pb-3">
                    <p className="m-0 text-primary fw-bold">{budaya.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {budaya.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqCompenent />
    </div>
  );
};

export default BudayaPage;
