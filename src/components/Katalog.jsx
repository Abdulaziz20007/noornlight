import React from "react";
import { Link } from "react-router-dom";

function Katalog() {
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

  return (
    <div className="catalog-section">
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

      <div className="catalog-grid">
        {categories.map((category) => (
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
        ))}
      </div>
    </div>
  );
}

export default Katalog;
