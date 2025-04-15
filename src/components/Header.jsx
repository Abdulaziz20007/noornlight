import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeaderImage =
  "https://s3-alpha-sig.figma.com/img/9a18/730b/8aea519853fb3f396a82d65251806668?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ef5iR-hZN6rebnVAxnrzvqMjoPnAe4zPfPbdnBnDtkiWmvxXCQXZ4yDtVVulbNr8Luy9wkjLMqfxrfV6K3Y4WH3ijwR7w8Gb8BMabr8YHKnz70LSwKsKPO4cLxJemYfw3EP16f3V0jbojoDUmqO7oIH6XM75uWIjZ4AcXO9oEel2EtyoiL53IUiCt026x64ZL0thyoUbzUYmrPiN3XsC4LkQMnrHrkb6PkuN7-NVThHJr04LB1Cwwww57JJpM0d82Do-QAdnkCYbjb1ll2RIvVx3JGH9aVmCf3AbtpXSmbyD7UGgecUBW0YgEN~LKnsrVyZZ9CKjFYxPJ7JXwYRd6A__";

const HeaderContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 400px;
  padding: 0 150px;

  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: 300px;
  }

  .swiper-pagination {
    right: 100px !important;
    left: auto;
    bottom: 40px !important;
    width: fit-content;

    @media (max-width: 768px) {
      right: 20px !important;
      bottom: 20px !important;
    }
  }

  .my-bullet {
    background-color: red;
  }
`;

const BannerContent = styled.div`
  background-color: #f5f5f5;
  border-radius: 50px;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
    border-radius: 25px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 20px 0;
    }

    .swiper-main-title {
      max-width: 500px;
      font-size: 64px;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 0%;
      color: #333;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (max-width: 768px) {
        font-size: 32px;
        text-align: center;
        margin-bottom: 30px;
      }

      span {
        background-color: #333;
        color: white;
        border: none;
        border-radius: 30px;
        padding: 8px 15px;
        font-family: Manrope;
        font-weight: 700;
        font-size: 64px;
        line-height: 100%;
        letter-spacing: 0%;
        cursor: pointer;
        width: fit-content;

        @media (max-width: 768px) {
          font-size: 32px;
          margin: 0 auto;
        }

        &:hover {
          background-color: #000;
        }
      }
    }

    img {
      @media (max-width: 768px) {
        width: 100% !important;
        height: auto !important;
        max-width: 300px;
        position: static !important;
      }
    }
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, bulletActiveClass: "my-bullet" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <BannerContent>
            <div className="container flex">
              <div>
                <h1 className="swiper-main-title">
                  Скидка 15% на все подвесные светильники{" "}
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <div>
                <img
                  src={HeaderImage}
                  alt="Подвесные светильники"
                  style={{
                    width: "500px",
                    height: "500px",
                    objectFit: "contain",
                    position: "relative",
                    top: "-100px",
                  }}
                />
              </div>
            </div>
          </BannerContent>
        </CustomSwiperSlide>
      </Swiper>
    </HeaderContainer>
  );
}

export default Header;
