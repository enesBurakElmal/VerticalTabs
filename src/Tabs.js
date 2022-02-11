import { useState } from 'react'
import './App.css'
import HeaderLogo from './assets/topguy.png'
import Kuba from './assets/kuba.PNG'

function Tabs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="container">
      <div className="tab-container">
        <aside className="side-nav">
          <div className="side-nav-header">
            <h1 className="side-nav-title">UPDATES</h1>
            <p className="side-nav-slash">//</p>
            <img className="side-nav-image" src={HeaderLogo} alt="header" />
          </div>
          <div
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            <img
              className="imgs"
              alt="imgs"
              src="https://pbs.twimg.com/profile_images/1470368071625887746/_rntcqO9.jpg"
            ></img>
            <div className="side-nav-info">
              <p className="side-nav-job">Engineer</p>
              <p className="side-nav-birth">01/02/1993</p>
              <h2 className="side-nav-name">Canberk Elmal</h2>
            </div>
          </div>
          <div
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            <img
              className="imgs"
              alt="imgs"
              src="https://pbs.twimg.com/profile_images/1460924555107647488/4JQOjYE4.jpg"
            ></img>
            <div className="side-nav-info">
              <p className="side-nav-job">Developer</p>
              <p className="side-nav-birth">18/08/1994</p>
              <h2 className="side-nav-name">Enes B. Elmal</h2>
            </div>
          </div>

          <div
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(3)}
          >
            <img className="imgs" src={Kuba} alt="imgs"></img>

            <div className="side-nav-info">
              <p className="side-nav-job">Lazy</p>
              <p className="side-nav-birth">23/04/2018</p>
              <h2 className="side-nav-name">Sir Kuba</h2>
            </div>
          </div>
        </aside>
        <div className="tab-content">
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  )
}

export default Tabs
