import './Style.css'

export default function Button({label}) {
    return (
        <button className='button'>
            {label}
        </button>
    )
}