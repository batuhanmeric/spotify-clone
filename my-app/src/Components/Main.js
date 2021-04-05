import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <header className="main__header">
          <div className="main__header__left-group">
            <span className="main__header__left-group__arrow">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M9.17276 15.5999L0.273438 7.9999L9.17276 0.399902L9.72658 1.04744L1.58555 7.9999L9.72658 14.9524"
                  fill="white"
                />
              </svg>
            </span>
            <span className="main__header__left-group__arrow">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M0.827249 15.5999L0.273438 14.9524L8.41447 7.9999L0.273438 1.04744L0.827249 0.399902L9.72658 7.9999"
                  fill="white"
                />
              </svg>
            </span>
            <label for="" className="playlist__search --margin-zero">
              <span className="playlist__search__icon"></span>
              <input
                className="input input--large input-group__area"
                type="text"
                placeholder="Ara"
              />
            </label>
          </div>
          <a href="#" className="main__header__profile">
            <span className="main__header__profile__picture">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.005)" />
                  </pattern>
                  <image id="image0" width="200" height="200" />
                </defs>
              </svg>
            </span>
            <span className="main__header__profile__name">
              Arthur Guillermin Ha...
            </span>
          </a>
        </header>
        <div className="main__current-group">
          <section className="main__current">
            <h1 className="main__current__title">Yakında Çalanlar</h1>
            <div className="main__current__card-group">
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
            </div>
          </section>
          <section className="main__current">
            <h1 className="main__current__title">Tavsiye Edilenler</h1>
            <h2 className="main__current__subtitle">
              Sevdiğin her şeyden biraz dinle.
            </h2>
            <div className="main__current__card-group">
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
              <div className="card">
                <div className="card__img">
                  <img src="assets/i/test.png" alt="" />
                </div>
                <div className="card__title">
                  <a href="#">4-2</a>
                </div>
                <div className="card__description">
                  <p>Çalma Listesi Açıklaması</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Main;
