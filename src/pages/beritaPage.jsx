import { Container, Row, Col } from "react-bootstrap";
import { berita } from "../data/index";

import FaqCompenent from "../components/FaqCompenent";

const beritaPage = () => {
  return (
    <div className="berita-page">
      <div className="berita">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Semua Berita
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                semua berita terbaru tentang budaya di daerah jawa tersedia
                disini, silahkan dicek!
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {berita.map((data) => {
              return (
                <Col key={data.id} className=" mb-5 shadow ">
                  <p className="desc shadow-sm">{data.desc}</p>
                  <div className="people">
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <div className="lengkk">
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
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

export default beritaPage;
