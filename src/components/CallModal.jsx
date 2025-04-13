import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function CallModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправлена форма:", formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Заказать обратный звонок</h2>
          <button className="close-btn" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <button type="submit" className="submit-btn">
            Заказать звонок
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallModal;
