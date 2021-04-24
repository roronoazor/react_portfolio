import { useContext, useState } from 'react'
import picture from '../misc/developer_cover_photo.jpg'
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si'
import { ViewContext } from '../ViewContext'

function Menu() {
  const [zoom, setZoom] = useState('')

  const { name, dispatch } = useContext(ViewContext)

  const onClickHandler = (e) => {
    switch (e.target.id) {
      case 'about':
        dispatch({ type: 'SET_ABOUT' })
        break
      case 'works':
        dispatch({ type: 'SET_WORKS' })
        break
      case 'mern':
        dispatch({ type: 'SET_MERN' })
        break
      case 'django':
        dispatch({ type: 'SET_DJANGO' })
        break
      case 'dialogflow':
        dispatch({ type: 'SET_DIALOGFLOW' })
        break
      case 'snatchbot':
        dispatch({ type: 'SET_SNATCHBOT' })
        break
      case 'python':
        dispatch({ type: 'SET_PYTHON' })
        break
      case 'webcontent':
        dispatch({ type: 'SET_WEBCONTENT' })
        break
      case 'article':
        dispatch({ type: 'SET_ARTICLE' })
        break
      default:
        dispatch({ type: 'SET_MAIN' })
    }
  }

  return (
    <aside className="menu">
      <div className="bio-section">
        <img onClick={() => (zoom === '') ? setZoom('zoom') : setZoom('')} src={picture} alt="" className={`picture ${zoom}`} />
        <div className="bio">
          <p className="name">Odumegwu Ugochukwu</p>
          <p className="about">
          I am an experienced Software Developer. With a Bachelor’s degree in Computer Science and hands-on experience using 
          Python(Django, Machine Learning and A.I), ReactJS, ReactNative, Java, Golang languages to create and implement software applications,
          I am confident I will be an asset to your organization. I enjoy being challenged and engaging with projects
          that require me to work outside my comfort and knowledge set, as continuing to learn new languages
          and development techniques are important to me.
          </p>
        </div>
      </div>

      <div className="about-buttons">
        <button className={`about-me ${(name === "about") ? "active" : ""}`} id="about" onClick={onClickHandler}>About me</button>
        <button className={`about-me ${(name === "works") ? "active" : ""}`} id="works" onClick={onClickHandler}>My works</button>
        {/* <button className="about-me" id="download-profile" onClick={onClickHandler}>Download my profile</button> */}
      </div>

      <section className="skills-menu">
        <h3>Web development</h3>
        <ul className="skills-link">
          <li className={(name === "mern") ? "active" : ""} id="mern" onClick={onClickHandler}>MERN Stack</li>
          <li className={(name === "django") ? "active" : ""} id="django" onClick={onClickHandler}>Django framework</li>
        </ul><br /><br />

        <h3>Chatbot development</h3>
        <ul className="skills-link">
          <li className={(name === "dialogflow") ? "active" : ""} id="dialogflow" onClick={onClickHandler}>Dialogflow</li>
          <li className={(name === "snatchbot") ? "active" : ""} id="snatchbot" onClick={onClickHandler}>Snatchbot</li>
          <li className={(name === "python") ? "active" : ""} id="python" onClick={onClickHandler}>Python</li>
        </ul><br /><br />

        <h3>Copywriting</h3>
        <ul className="skills-links">
          <li className={(name === "webcontent") ? "active" : ""} id="webcontent" onClick={onClickHandler}>Web content</li>
          <li className={(name === "article") ? "active" : ""} id="article" onClick={onClickHandler}>Article writing</li>
        </ul>
      </section>

      <ul className="social-links">
        <li><a href="https://github.com/roronoazor" target="_blank" rel="noreferrer"><SiGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/ugochukwu-odumegwu-4b202119a/" target="_blank" rel="noreferrer"><SiLinkedin /></a></li>
        <li><a href="https://twitter.com/UgochukwuOdumegwu" target="_blank" rel="noreferrer"><SiTwitter /></a></li>
        <li><a href="https://instagram.com/UgochukwuOdumegwu" target="_blank" rel="noreferrer"><SiInstagram /></a></li>
      </ul>
    </aside >
  )
}

export default Menu