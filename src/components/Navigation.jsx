import { useState, useContext } from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { ImShare2 } from 'react-icons/im'
import { ViewContext } from '../ViewContext'
import Share from './Share'

function Navigation() {

  const [share, setShare] = useState(false)

  const { dispatch } = useContext(ViewContext)

  const mail = {
    subject: encodeURI("Client from ugo website"),
    body: encodeURI("Dear Ugo,")
  }

  const mailURI = `mailto:ugoodumegwu@gmail.com?subject=${mail.subject}&body=${mail.body}`

  return (
    <nav className="navigation">
      <BiLeftArrow className="back-arrow" onClick={() => dispatch({ type: 'SET_MAIN' })} />

      <div className="actions">
        <BsChat onClick={() => window.open("https://wa.me/2348106439619")} title="Talk about this on WhatsApp" />
        <AiOutlineMail onClick={() => window.open(mailURI)} title="Send me a mail about this" />
        <ImShare2 onClick={() => setShare(true)} title="Tell your friends about me" />
        <Share share={share} setShare={setShare} />
      </div>
    </nav>
  )
}

export default Navigation
