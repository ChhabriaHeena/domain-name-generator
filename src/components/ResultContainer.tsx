import NameCard from './NameCard'
import './ResultContainer.css'

const ResultContainer = ({ suggestedNames }: any) => {
    const suggestedNamesTsx = suggestedNames.map((names: any) => {
        return <NameCard key={names} names={names} />
    })
    return (
        <div className='result-container'>
            {suggestedNamesTsx}
        </div>
    )
}

export default ResultContainer
