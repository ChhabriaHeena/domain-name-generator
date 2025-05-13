import './NameCard.css'

const NameCard = ({ names }: any) => {
    const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain="
    return (
        <a className='name-tag' href={`${nameCheapUrl}${names}`} target='_blank' rel='noreferrer'>
            <div>
                <p>{names}</p>
            </div>
        </a>
    )
}

export default NameCard
