import './intro.css'

const Intro = ()=>{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello,My Name is </h2>
                    <h2 className='i-name'>Anandhu Reji</h2>
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
                </div>
            </div>
            <div className="i-right">right</div>
            

        </div>
    )
}

export default Intro