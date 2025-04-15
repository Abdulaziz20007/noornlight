import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const StyledCatalogSection = styled.div`
  margin-bottom: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  .catalog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 16px;

    .catalog-title {
      font-size: 24px;
      font-weight: 700;
      color: #333;
    }

    .view-all-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333;
      font-weight: 600;
      font-size: 14px;
      gap: 5px;
    }
  }

  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 25px;
    padding: 0 16px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: auto;
    }
  }

  .catalog-swiper {
    padding: 0 16px;

    .swiper-pagination {
      bottom: 0px !important;
    }

    .mobile-category-swiper {
      padding-bottom: 30px;

      .swiper-pagination-bullet {
        background: #ccc;
        opacity: 0.5;

        &.swiper-pagination-bullet-active {
          background: #333;
          opacity: 1;
        }
      }
    }
  }

  .category-card {
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    transition: all 0.2s ease;
    height: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .category-image {
      margin-bottom: 12px;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;

        @media (max-width: 1200px) {
          height: 180px;
        }
      }
    }

    .category-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 6px;

      @media (max-width: 1200px) {
        font-size: 16px;
      }
    }

    .category-price {
      font-size: 16px;
      color: #666;
      margin-top: auto;
      margin-bottom: 5px;

      @media (max-width: 1200px) {
        font-size: 14px;
      }
    }

    .category-arrow {
      position: absolute;
      right: 15px;
      bottom: 15px;
      color: #333;
    }
  }

  @media (max-width: 768px) {
    .category-card {
      padding: 12px;

      .category-image img {
        height: 120px;
      }

      .category-name {
        font-size: 14px;
      }

      .category-price {
        font-size: 12px;
      }
    }
  }
`;

function Katalog() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const categories = [
    {
      id: 1,
      name: "Люстры",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/chandelier",
    },
    {
      id: 2,
      name: "Светильники",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/lamps",
    },
    {
      id: 3,
      name: "Бра",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/sconce",
    },
    {
      id: 4,
      name: "Торшеры",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/floor-lamp",
    },
    {
      id: 5,
      name: "Настольные лампы",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/table-lamp",
    },
    {
      id: 6,
      name: "Споты",
      image:
        "https://s3-alpha-sig.figma.com/img/c5a6/779d/869fb070a76b68182bfeac47b1b8278c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jx125jU4RmiQf~ODagkLnXigOog2O4ZW6gzk8uV9gYwP-6p~z-RE7cuu-XTn5LM40Sfeg2uK8eEW5tUwMCyJda80vN-TdgeszORBf6GilOEM~E~LQs9B7ZqqjhuD4I9Y~yxfye1DxiY4Ns72DnwVBXrE48c4hwzmL0RYt4LLEes2plvTUZFYrHVdN9N6r6eY4IuN5~YQsfhROU5htdHcLp~~y8LO50uW2aaTFfIEeaVBCKURPM6BPQxeKfwuq3con7SRzojsWeOKcHLKF3Ly2bWSko4RoitNNfPRO5G1Q5w1VqqtUCqcVzCqx4sCZm0JxI8N0ln~GvvsYJQQ~8HS0Q__",
      price: "От 540₽",
      path: "/category/spots",
    },
  ];

  const renderCategoryCard = (category) => (
    <Link to={category.path} key={category.id} className="category-card">
      <div className="category-image">
        <img
          src={category.image}
          alt={category.name}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/200x200?text=${category.name}`;
          }}
        />
      </div>
      <h3 className="category-name">{category.name}</h3>
      <span className="category-price">{category.price}</span>
      <span className="category-arrow">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </Link>
  );

  return (
    <StyledCatalogSection className="catalog-section">
      <div className="catalog-header">
        <h2 className="catalog-title">Каталог</h2>
        <Link to="/catalog" className="view-all-link">
          Весь каталог
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>

      {isMobile ? (
        <div className="catalog-swiper">
          <Swiper
            modules={[Pagination, FreeMode]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            freeMode={{
              enabled: true,
              momentumBounce: false,
              minimumVelocity: 0.02,
              sticky: false,
            }}
            spaceBetween={15}
            slidesPerView="auto"
            centeredSlides={false}
            grabCursor={true}
            className="mobile-category-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id} style={{ width: "auto" }}>
                {renderCategoryCard(category)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="catalog-grid">
          {categories.map((category) => renderCategoryCard(category))}
        </div>
      )}
    </StyledCatalogSection>
  );
}

export default Katalog;
