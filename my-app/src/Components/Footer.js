import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__song">
          <div className="footer__song__pic">
            <img src="assets/i/pic.svg" alt="" />
          </div>
          <div className="footer__song__info">
            <span className="footer__song__info__name">One step Beyond</span>
            <span className="footer__song__info__artist">Madness</span>
          </div>
          <div className="footer__song__icon-group">
            <span className="footer__song__icon-group__icon">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M6.6335 2.12072L7 2.51564L7.3665 2.12072L7.91212 1.53278C9.15644 0.191948 11.2047 0.151853 12.4966 1.44081C13.7985 2.7398 13.8392 4.89535 12.5853 6.24649L7.3665 11.87C7.16866 12.0832 6.83134 12.0832 6.6335 11.87L1.4147 6.24649C0.16081 4.89536 0.20146 2.7398 1.50339 1.44081C2.79527 0.151854 4.84356 0.191949 6.08788 1.53278L6.6335 2.12072Z"
                  stroke="white"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <span className="footer__song__icon-group__icon">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M1.35002 1.25005V9.80005H14.65V1.25005H1.35002ZM1.35002 0.300049H14.65C14.902 0.300049 15.1436 0.400138 15.3218 0.578297C15.4999 0.756457 15.6 0.998093 15.6 1.25005V10.75C15.6 11.002 15.4999 11.2436 15.3218 11.4218C15.1436 11.6 14.902 11.7 14.65 11.7H1.35002C1.09807 11.7 0.856433 11.6 0.678273 11.4218C0.500113 11.2436 0.400024 11.002 0.400024 10.75V1.25005C0.400024 0.998093 0.500113 0.756457 0.678273 0.578297C0.856433 0.400138 1.09807 0.300049 1.35002 0.300049Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="music-player footer__player">
          <div className="music-player__icon-group">
            <span className="music-player__icon-group__icon">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M2.15179 6.50005L12.8483 12.675L12.8483 0.325048L2.15179 6.50005Z"
                    fill="white"
                  />
                  <rect
                    x="2"
                    y="12"
                    width="2"
                    height="11"
                    transform="rotate(180 2 12)"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <span className="music-player__icon-group__icon music-player__icon-group__icon--margin">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="18" cy="18" r="17.5" stroke="white" />
                  <path
                    d="M24.8482 18.5L14.1517 12.325V24.675L24.8482 18.5Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <span className="music-player__icon-group__icon">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M11.8482 6.49995L1.15173 0.324951V12.675L11.8482 6.49995Z"
                    fill="white"
                  />
                  <rect x="12" y="1" width="2" height="11" fill="white" />
                </g>
              </svg>
            </span>
          </div>
          <div className="music-player__timer">
            <span className="music-player__timer__start">00:00</span>
            <span className="music-player__timer__line"></span>
            <span className="music-player__timer__finish">02:18</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
