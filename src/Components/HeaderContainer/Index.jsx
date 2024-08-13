import Button from '../Button/Index'
import './Style.css'

export default function HeaderContainer() {
    return (
        <div className='header-container'>


            <div className='header-content'>

                <div className='header-content-01'>
                    <img className='tech-imgs'
                        src="tech-imgs.svg" alt=""
                    />
                </div>

                <div className='header-content-02'>

                    <h2>Seja bem vindo(a)!</h2>

                    <h1>Projeto de apresetanção Front-End Jr</h1>

                    <div className='author-container'>

                        <div className='author-img'>

                            <img src="willian-daniel.png" alt="" />

                        </div>

                        <div className='author-info'>

                            <div>Willian Deiviti Daniel</div>
                            <div><strong>Desenvolvedor Fullstack Javascript</strong></div>

                            <Button
                                label={"Saiba mais"}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}