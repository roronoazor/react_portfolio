import { useContext } from 'react'
import { ViewContext } from '../ViewContext'
import { SiWhatsapp, SiLinkedin, SiTwitter, SiFacebook } from 'react-icons/si'
import { FaTimes } from 'react-icons/fa'

function Share({ share, setShare }) {

  const { mobile } = useContext(ViewContext)

  const message = encodeURI(`Hello! Meet Ugo, an elegant programmer who uses Python and Javascript to develop web apps, chatbots, automation APIs and each astounding software that his mind, or yours in fact, creates!
  
  View his portfolio at https://odumegwu-portfolio.herokuapp.com/
  or chat with him directly via https://wa.me/2348106439619
  `)

  const twitterMessage = encodeURI(`Meet Ugo, an elegant programmer who uses Python and Javascript to develop web apps, chatbots, automation APIs and each astounding software that his mind, or yours in fact, creates! 😍❤️
`)

  const links = {
    twitter: `https://twitter.com/share?text=${twitterMessage}&url=https://odumegwu-portfolio.herokuapp.com/`,

    linkedin: mobile ? `https://www.linkedin.com/in/ugochukwu-odumegwu-4b202119a/` : `https://www.linkedin.com/in/ugochukwu-odumegwu-4b202119a/`,

    facebook: `https://facebook.com/sharer.php?u=https://michael-peter.github.io`,

    whatsapp: `https://api.whatsapp.com/send?text=${message}`
  }

  return (
    <div className={`share-container ${share ? "" : "no-share"}`}>

      <div className="share">

        <h3><span>Tell your friends about me!</span><span onClick={() => setShare(false)}><FaTimes /></span></h3>

        <ul className="share-platforms">
          <li onClick={() => window.open(links.twitter)} className="share-tweet">
            <SiTwitter />
          </li>

          <li onClick={() => window.open(links.linkedin)} className="share-linkedin">
            <SiLinkedin />
          </li>

          <li onClick={() => window.open(links.facebook)} className="share-facebook">
            <SiFacebook />
          </li>

          <li onClick={() => window.open(links.whatsapp)} className="share-whatsapp">
            <SiWhatsapp />
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Share