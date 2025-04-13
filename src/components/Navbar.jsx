import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallModal from "./CallModal";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseCallModal = () => {
    setIsCallModalOpen(false);
  };

  return (
    <>
      <nav className="wrapper">
        <div className="nav-links">
          <div className="left">
            <Link to="/">О компании</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/return">Возврат</Link>
            <Link to="/guarantee">Гарантии</Link>
            <Link to="/contact">Контакты</Link>
            <Link to="/blog">Блог</Link>
          </div>
          <div className="right">
            <a href="tel:+8 (800) 890-46-56">8 (800) 890-46-56</a>
            <button onClick={handleOpenCallModal}>Заказать звонок</button>
          </div>
        </div>
        <div className="nav-content">
          <img src="/logo-extend.svg" alt="logo" />
          <button
            style={{
              backgroundColor: "#454545",
              borderRadius: "100px",
              flexDirection: "row",
              maxWidth: "150px",
              padding: "5px 20px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            <HiOutlineBars3CenterLeft />
            Каталог
          </button>
          <div className="search">
            <input type="text" placeholder="Поиск по товарам" />
            <button>
              <IoIosSearch />
            </button>
          </div>
          <button>
            <CiHeart />
            Избранное
          </button>
          <button>
            <TbAntennaBars5 />
            Сравнение
          </button>
          <button>
            <FiShoppingCart />
            Корзина
          </button>
        </div>
      </nav>
      {isCallModalOpen && <CallModal onClose={handleCloseCallModal} />}
    </>
  );
}

export default Navbar;
