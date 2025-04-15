import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CallModal from "./CallModal";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

const NavWrapper = styled.nav`
  .wrapper {
    margin-bottom: 65px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px auto 20px auto;
    padding: 0 20px;

    .left {
      display: flex;
      gap: 27px;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: #33333350;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 24px;

      a {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: #333333;
      }

      button {
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        color: #33333350;
        cursor: pointer;
        background-color: transparent;
        border: none;
      }
    }
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 0 20px;

    img {
      width: 210px;
      height: 35px;
    }

    .search {
      flex: 1;
      display: flex;
      gap: 12px;
      position: relative;

      input {
        width: 100%;
        padding: 12px 20px;
        border: 1px solid #e0e0e0;
        border-radius: 100px;
        font-size: 14px;

        &::placeholder {
          color: #33333350;
        }
      }

      button {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: #333333;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: none;
      cursor: pointer;
      color: #333333;
      font-size: 14px;
      font-weight: 600;

      svg {
        font-size: 20px;
      }

      &.catalog-btn {
        background-color: #454545;
        color: white;
        border-radius: 100px;
        padding: 12px 20px;
      }
    }
  }
`;

const MobileNav = styled.div`
  display: none;
  padding: 10px 16px;

  @media (max-width: 768px) {
    display: block;
  }

  .mobile-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .left-side {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        background: none;
        border: none;
        font-size: 24px;
        color: #333;
      }

      img {
        height: 30px;
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 26px;

      a {
        color: #333;
        font-size: 20px;
      }
    }
  }

  .mobile-search {
    position: relative;

    input {
      width: 100%;
      padding: 12px 20px;
      border: 1px solid #e0e0e0;
      border-radius: 100px;
      font-size: 14px;

      &::placeholder {
        color: #33333350;
      }
    }

    button {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: #333333;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .menu-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;

    button {
      background: none;
      border: none;
      font-size: 24px;
      color: #333;
      padding: 8px;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      padding: 20px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #333333;
    }
  }

  .catalog-button {
    margin: 20px;
    background: #454545;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 16px;
    width: calc(100% - 40px);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      font-size: 20px;
    }
  }

  .contact-section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .phone {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      font-weight: 600;
    }

    .call-button {
      background: none;
      border: none;
      color: #33333380;
      font-size: 14px;
      font-weight: 500;
      padding: 8px;
      cursor: pointer;
    }
  }
`;

function Navbar() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseCallModal = () => {
    setIsCallModalOpen(false);
  };

  return (
    <NavWrapper>
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
          <Link to="/">
            <img src="/logo-extend.svg" alt="logo" />
          </Link>
          <button className="catalog-btn">
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

      <MobileNav>
        <div className="mobile-content">
          <div className="left-side">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <HiOutlineBars3CenterLeft />
            </button>
            <Link to="/">
              <img src="/logo-extend.svg" alt="logo" />
            </Link>
          </div>
          <div className="right-side">
            <Link to="/favorites">
              <CiHeart />
            </Link>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
        <div className="mobile-search">
          <input type="text" placeholder="Поиск по товарам" />
          <button>
            <IoIosSearch />
          </button>
        </div>
      </MobileNav>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <div className="menu-header">
          <button onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        </div>
        <div className="menu-items">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            О компании
          </Link>
          <Link to="/delivery" onClick={() => setIsMobileMenuOpen(false)}>
            Доставка и оплата
          </Link>
          <Link to="/return" onClick={() => setIsMobileMenuOpen(false)}>
            Возврат
          </Link>
          <Link to="/guarantee" onClick={() => setIsMobileMenuOpen(false)}>
            Гарантии
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Контакты
          </Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
            Блог
          </Link>
        </div>
        <button className="catalog-button">
          <HiOutlineBars3CenterLeft />
          Каталог
        </button>
        <div className="contact-section">
          <a href="tel:+8 (800) 890-46-56" className="phone">
            8 (800) 890-46-56
          </a>
          <button className="call-button" onClick={handleOpenCallModal}>
            Заказать звонок
          </button>
        </div>
      </MobileMenu>

      {isCallModalOpen && <CallModal onClose={handleCloseCallModal} />}
    </NavWrapper>
  );
}

export default Navbar;
