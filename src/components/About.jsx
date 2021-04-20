import Navigation from './Navigation'
import Contact from './Contact'
import aboutMePhoto from '../misc/aboutmephoto.png'

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <Navigation />
        <div className="content">
          <h1>About me</h1><hr />
          <div className="essay">
            <p>I have written epistles all over the world but it feels difficult to write about myself. However, I designed a summary about me below and I hope you get thrilled. Also, I want you to know that I'm a wonderful person.</p><br/>
          </div>
          <div className="about-container">
            <div className="about-me-texts">
              <div className="info-class">
                <h3>Personal stuff</h3>
                <p><strong>First name: </strong>Odumegwu</p>
                <p><strong>Last name: </strong>Ugochukwu</p>
                <p><strong>Other name: </strong>Pascal</p>
                <p><strong>Whatsapp Contact: </strong>08106439619</p>
                <p><strong>Email: </strong>ugoodumegwu@gmail.com</p>
                <p><strong>Location: </strong>Abuja, Nigeria</p>
              </div>

              <div className="info-class">
                <h3>The academia</h3>
                <p><strong>Education: </strong>Graduate</p>
                <p><strong>School: </strong>Nnamdi Azikwe University, Nigeria</p>
                <p><strong>Programme: </strong>B.Sc Electronics and Computer Engineering</p>
                <p><strong>Graduated: </strong>2019</p>
                <em>apart from coding, i also love reading, football, chess and drawing. (Yes, i know am an all-rounder)</em>
              </div>
            </div>

            <div className="about-me-photo">

              <div className="how-i-work">
                <p><strong>Freelance: </strong>True</p>
                <p><strong>Contract: </strong>True</p>
                <p><strong>Open-source: </strong>True</p>
                <p><strong>Full-time employment: </strong>If I like the pay</p>
              </div>
              <img src={aboutMePhoto} alt="" />
            </div>
          </div>

          <div className="talk-business">

            <div className="info-class">
              <h3>Skills I've acquired</h3>

              <article className="skill-box">
                <h4>Python</h4>
                <p><strong>Locale: </strong>Web Development &amp; Machine Learning</p>
                <p><strong>Since: </strong>2018</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-python"></span>&nbsp;90%</p>
                <p><strong>Personal note: </strong>
                    Python is my primary programming language of choice, have been building applications in python for over 
                    5 years, have built desktop applications with python (PyQt and Tkinter), as well as web applications with 
                    django and django rest framework that integrated with payment gateways, amazon s3, postgres database.
                    with regards to machine learning, Libraries like Pandas, Numpy, Scikit-Learn, Nltk, Tensorflow, are added
                    to this list. Python is my pot if the project is artificial intelligence, or if it uses artificial intelligence.
                </p>
              </article>

              <article className="skill-box">
                <h4>ReactJS &amp; ReactNative JS </h4>
                <p><strong>Locale: </strong>Web &amp; Mobile App Development</p>
                <p><strong>Since: </strong>2019</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-js"></span>&nbsp;85%</p>
                <p><strong>Personal note: </strong>As a Full Stack Developer ReactJS is my frontend language of choice because of its simplicity of use and
                strong community support, as well as the fact that it allows developlment of mobile applications using react native. 
                building react and react native applications for close to 4 years have had a lot of experience in building a fully native solution,
                and also knowing when to use JavaScript to maximize code reuse and understandability. over the years have developed a great blend
                of JavaScript and native platform skills making me a useful resource for any team that needs to diversify its product across multiple platforms.
                </p>
              </article>

              <article className="skill-box">
                <h4>Basic Web Development Stack</h4>
                <p><strong>Locale: </strong>Static Web Development</p>
                <p><strong>Since: </strong>2018</p>
                <p><strong>HTML:&nbsp;&nbsp;</strong><span className="meter meter-html"></span>&nbsp;85%</p>
                <p><strong>CSS:&nbsp;&nbsp;</strong><span className="meter meter-css"></span>&nbsp;69%</p>
                <p><strong>DOM Javascript:&nbsp;&nbsp;</strong><span className="meter meter-domjs"></span>&nbsp;88%</p>
                <p><strong>Personal note: </strong>Of course, we all started with HTML/CSS/Js. However, for me, I spent quite a length of time coding in pure HTML/CSS/Js, and this really helped me to grasp the big frameworks with full decisiveness.</p>
              </article>

              <article className="skill-box">
                <h4>Web Frameworks</h4>
                <p><strong>Locale: </strong>Full-stack Web Development</p>
                <p><strong>Since: </strong>2020</p>
                <p><strong>Reactjs:&nbsp;&nbsp;</strong><span className="meter meter-reactjs"></span>&nbsp;90%</p>
                <p><strong>ReactNative:&nbsp;&nbsp;</strong><span className="meter meter-expressjs"></span>&nbsp;80%</p>
                <p><strong>MongoDB:&nbsp;&nbsp;</strong><span className="meter meter-mongodb"></span>&nbsp;80%</p>
                <p><strong>Postgresql:&nbsp;&nbsp;</strong><span className="meter meter-flask"></span>&nbsp;85%</p>
                <p><strong>Django:&nbsp;&nbsp;</strong><span className="meter meter-django"></span>&nbsp;95%</p>
                <p><strong>Personal note: </strong>a brief display of my stacks</p>
              </article>

              <article className="skill-box">
                <h4>Artificial Intelligence</h4>
                <p><strong>Locale: </strong>Machine Learning &amp; Deep Learning</p>
                <p><strong>Since: </strong>2019</p>
                <p><strong>Machine Learning&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;80%</p>
                <p><strong>Deep Learning&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;80%</p>
                {/* <p><strong>Snatchbot:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Chatfuel:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Python NLP:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p> */}
                <p><strong>Personal note: </strong>
                  Am a passionate student of machine learning and A.I, am currently working on my masters in this domain, i strongly believe
                  that machine learning and a.i will play a vital role in our future, and i intend to be at the fore front of this change.
                </p>
              </article>

              {/* <article className="skill-box">
                <h4>Copywriting</h4>
                <p><strong>Locale: </strong>Content/technical writing, documentation, web copies</p>
                <p><strong>Since: </strong>2016</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Personal note: </strong>I admit that I'm a technical writer. Even still, my humor allows me to write simple and irresistible web content.</p>
              </article> */}

              {/* <article className="skill-box">
                <h4>Education</h4>
                <p><strong>Locale: </strong>Tutor &amp; speaker</p>
                <p><strong>Since: </strong>2012</p>
                <p><strong>Mastery:&nbsp;&nbsp;</strong><span className="meter meter-bot"></span>&nbsp;99%</p>
                <p><strong>Personal note: </strong>For topics I'm eloquent in, as represented by my skills above, perhaps, I'm the best educator you can ever find in the world. I can teach angels!</p>
              </article> */}
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About