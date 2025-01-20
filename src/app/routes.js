import React from 'react';
import './App.css';

const PopupPage = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo" style={{ fontSize: 'larger' }}>William George</a>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list grid">
                <li className="nav__item">
                  <a href="#home" className="nav__link">
                    <i className="uil uil-estate nav__icon"></i>Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    <i className="uil uil-user nav__icon"></i>About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#portfolio" className="nav__link">
                    <i className="uil uil-scenery nav__icon"></i>Portfolio</a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    <i className="uil uil-message nav__icon"></i>Contact</a>
                </li>
                <li>
                  <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </li>
              </ul>
              <i className="uil uil-times nav__close" id="nav-close" onClick={onClose}></i>
            </div>
            <div className="nav__btns">
              <i className="uil uil-moon change-theme" id="theme-button"></i>
              <div className="nav__toggle" id="nav-toggle">
                <i className="uil uil-apps"></i>
              </div>
            </div>
          </nav>
        </header>

        <main className="main">
          {/* Home Section */}
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div className="home__content grid">
                <div className="home__social">
                  <a href="https://www.linkedin.com/in/saurav-kumar-582bba26a" target="_blank" rel="noreferrer" className="home__social-icon">
                    <i className="uil uil-linkedin-alt"></i></a>
                  <a href="https://github.com/Sauravkr1806" target="_blank" rel="noreferrer" className="home__social-icon">
                    <i className="uil uil-github-alt"></i></a>
                </div>
                <div className="home__data" style={{ marginTop: '5%' }}>
                  <h1 className="home__title">Hi, I'am Saurav</h1>
                  <h3 className="home__subtitle">Web Developer</h3>
                  <p className="home__description" style={{ fontSize: '20px' }}>Intermediate level experience in the Web applications knowledge and Some other Skills with quality work.</p>
                  <a href="#contact" className="button button--flex home__button">
                    Contact Me<i className="uil uil-message button__icon"></i>
                  </a>
                </div>
              </div>
              <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                  <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                  <span className="home__scroll-name">Scroll Down</span>
                  <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <h3 className="section__subtitle" style={{ textAlign: 'center' }}>My Introduction</h3>
            <div className="about__container container grid">
              <img src="packages/images/pras-2.jpeg" alt="" className="about__img" />
              <div className="about__data">
                <p className="about__description" style={{ fontSize: '20px' }}>
                  I develop the Web applications,which typically uses HTML, CSS,Bootstrap and JavaScript in the client,
                  and any general-purpose programming language in the server.HTTP is used
                  for communications between client and server.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <h3 className="" style={{ textAlign: 'center' }}>My technical level</h3>
            <div className="skills__container container grid">
              <div>
                <div className="skills__content skills__open">
                  <div className="skills__header">
                    <i className="uil uil-analytics skills__icon"></i>
                    <div>
                      <h1 className="skills__title">Web Developer</h1>
                      <span className="skills__subtitle">More than 1 year</span>
                    </div>
                    <i className="uil uil-angle-down skills__arrow"></i>
                  </div>
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__number">40%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__python"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Dart</h3>
                        <span className="skills__number">50%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__Dart"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__number">40%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__sql"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__number">50%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__java"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__number">80%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__html"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__number">70%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__css"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__js"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__csharp"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__cpp"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__typescript"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__php"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Swift</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__swift"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Kotlin</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__kotlin"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Ruby</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__ruby"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Go</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__go"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Rust</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__rust"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">R</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__r"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Shell</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__shell"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Perl</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__perl"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Scala</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__scala"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Haskell</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__haskell"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Objective-C</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__objectivec"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">MATLAB</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__matlab"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Groovy</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__groovy"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">PowerShell</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__powershell"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Lua</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__lua"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">VBA</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__vba"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">F#</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__fsharp"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Elixir</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__elixir"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Clojure</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__clojure"></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Erlang</h3>
                        <span className="skills__number">60%</span>
                      </div>
                      <div className="skills__bar">
                        <span className="skills__percentage skills__erlang"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PopupPage;
