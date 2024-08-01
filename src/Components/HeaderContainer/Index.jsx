import './Style.css'

export default function HeaderContainer() {
    return (
        <div className='header-container'>

                <div className='header-content'>

                    <h2 className='header-welcome'>-+ Seja bem vindo! +-</h2>

                    <p>Projeto de aprensentação Front-End!</p>

                    <img src="willian-daniel.png" alt="willian-daniel-foto"
                        title='Foto de Willian D. Daniel' 
                        className='author-img'
                    />

                    <h1 className='header-title'>Willian D. Daniel</h1>

                    <p>Desenvolvedor Fullstack Javascript</p>

                </div>

                <div className='header-img'>

                    <img src="tech-imgs.svg" alt="" className='tech-imgs'/>

                </div>

            </div>
    )
}