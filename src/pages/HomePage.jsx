import { Container, Row, Col } from "react-bootstrap";
import DalangImage from "../assets/img/dalang.png";
import { budayaTerbaru, dataSwiper, semuaBudaya } from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqCompenent from "../components/FaqCompenent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Temukan <br /> <span />
                Budaya Jawa
                <span /> <br />
                yang Anda Cari Disini!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Sugeng rawuh, para tamu! Njeroning kéné, temen-temen bisa
                nemokake informasi apik saka budaya lan tradisi Jawa. Mari
                guyup, nikmati kabar-kabar apik kang ana ing kéné. Gunakake
                tautan kang ana ing papan inggil kanggo manunggal marang
                pitakonan kang dibutuhake. Selamat nyawiji ing watesan kéné! Aja
                wedi, matur nuwun.
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-1 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/budaya")}
              >
                Lihat Budaya
              </button>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-1 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/berita")}
              >
                Lihat Berita
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={DalangImage}
                alt="dalang-img"
                className="animate__animated animate__fadeInUp "
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="budaya w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Budaya Jawa</h1>
              <p className="text-center">
                semua budaya jawa yang anda cari pasti ada disini! silahkan
                dicek!
              </p>
            </Col>
          </Row>
          <Row>
            {budayaTerbaru.map((budaya) => {
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
                    <button className="btn btn-danger rounded-1">
                      {budaya.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
            <Col></Col>
          </Row>
          <Row>
            <Col
              className="text-center "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/budaya")}
              >
                Lihat Semua Budaya
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="berita ppy-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Berita Terbaru</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <div className="people">
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="desc">{data.desc}</p>
                        <div className="lengk">
                          <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* section faq */}
      <FaqCompenent />
    </div>
  );
};

export default HomePage;
