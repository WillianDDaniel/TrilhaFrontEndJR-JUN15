import './Style.css'

export default function Logo() {
    return (
        <div className='logo-container'>

            <img
                className='logo-img'
                src="willian-daniel-logo.svg" 
                alt="willian-daniel-apresentacao-logo" 
                title='Willian Daniel'
            />

            <div className='logo-text'>
                <span>Willian</span>
                <span>Daniel</span>
            </div>

        </div>
    )
}