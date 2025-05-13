
const Search = ({ onInputChange }: any) => {
    return (
        <div>
            <input type="text" onChange={(e: any) => onInputChange(e.target.value)} />
        </div>
    )
}

export default Search
