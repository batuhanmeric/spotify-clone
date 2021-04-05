import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <header className="header">
            <a href="#" className="header__logo"></a>
          </header>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list__item nav__list__item--active">
                <span className="nav__list__item__icon">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8319 15.5999H8.51823V10.1999H5.48182V15.5999H0.168152V4.37613L7.00003 0.399902L13.8319 4.34901V15.5999Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <a href="#" className="nav__list__item__link">
                  Giriş
                </a>
              </li>
              <li className="nav__list__item">
                <span className="nav__list__item__icon">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7203 11.2772L13.9888 15.1127L13.4219 15.5999L10.1445 11.7645C9.01661 12.6207 7.74698 13.0488 6.33563 13.0488C5.47936 13.0488 4.66001 12.882 3.87759 12.5484C3.09517 12.2147 2.42198 11.7659 1.85801 11.202C1.29404 10.638 0.845244 9.96484 0.511628 9.18239C0.178012 8.39995 0.0111927 7.5806 0.0111694 6.72436C0.0111462 5.86811 0.177966 5.04877 0.511628 4.26633C0.84529 3.48388 1.29408 2.81069 1.85801 2.24674C2.42193 1.68279 3.09513 1.234 3.87759 0.900361C4.66006 0.566722 5.47941 0.399902 6.33563 0.399902C7.19185 0.399902 8.01119 0.566722 8.79366 0.900361C9.57613 1.234 10.2493 1.68279 10.8132 2.24674C11.3772 2.81069 11.826 3.48388 12.1596 4.26633C12.4933 5.04877 12.6601 5.86811 12.6601 6.72436C12.6601 7.60423 12.4888 8.43686 12.1463 9.22226C11.8038 10.0077 11.3285 10.6927 10.7202 11.2773L10.7203 11.2772ZM6.3357 12.3047C7.34547 12.3047 8.27849 12.0552 9.13476 11.5562C9.99103 11.0572 10.6687 10.3796 11.1676 9.52336C11.6666 8.66711 11.9161 7.73409 11.9161 6.72429C11.9162 5.71449 11.6667 4.78147 11.1676 3.92522C10.6686 3.06898 9.99098 2.39137 9.13476 1.89238C8.27854 1.3934 7.34552 1.14391 6.3357 1.14391C5.32587 1.14391 4.39285 1.3934 3.53663 1.89238C2.68041 2.39137 2.0028 3.06898 1.50379 3.92522C1.00479 4.78147 0.755294 5.71449 0.755318 6.72429C0.755341 7.73409 1.00483 8.66711 1.50379 9.52336C2.00275 10.3796 2.68036 11.0572 3.53663 11.5562C4.3929 12.0552 5.32592 12.3047 6.3357 12.3047Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <a href="#" className="nav__list__item__link">
                  Gözat
                </a>
              </li>
              <li className="nav__list__item">
                <span className="nav__list__item__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.17679 0.65976L15.6 15.0851L14.8548 15.4185L8.43153 0.993184L9.17679 0.65976ZM0.400024 15.4087V0.581299H1.22379V15.4087H0.400024ZM5.34249 15.4087V0.581299H6.16626V15.4087H5.34249Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <a href="#" className="nav__list__item__link">
                  Kitaplık
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="playlist">
          <h3 className="playlist__title">ÇALMA LİSTELERİN</h3>
          <label for="" className="playlist__search">
            <span className="playlist__search__icon"></span>
            <input
              className="input input-group__area"
              type="text"
              placeholder="Ara"
            />
            <span className="playlist__search__filter"></span>
          </label>
          <div className="playlist__list">
            <ul className="playlist__list__group">
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
              <li className="playlist__list__group__item">
                <a href="#" className="playlist__list__group__item__link">
                  Rock Save the Queen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
