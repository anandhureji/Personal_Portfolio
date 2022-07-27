import './intro.css'
import me from '../../img/me.png'

const Intro = ()=>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,My Name is </h2>
                    <h1 className="i-name">Anandhu Reji</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Full Stack Java Developer
                            </div>
                           
                            <div className="i-title-item">
                                Freelancer
                            </div>
                            <div className="i-title-item">
                                React Js Developer
                            </div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        I am Full Stack Java Developer . I develop web apps and web sites. I am also a front end developer.Actively taking freelance jobs
                    </div>
                </div>
            </div>
            <div className="i-right">

<div className='i-bg'></div>
                <img src={me} alt='' className='i-img' />
            </div>
            

        </div>
    )
}

export default Intro