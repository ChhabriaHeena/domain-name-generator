import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ResultContainer from './components/ResultContainer'
import Search from './components/Search'
import startupNameGenerator from '@rstacruz/startup-name-generator'
import { useDebounce } from 'use-debounce'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debounceSearchTerm] = useDebounce(searchTerm, 500)
  const [domain, setDomain] = useState<any>({
    headerTitle: "Just Name it!",
    suggestedNames: []
  });

  const name = startupNameGenerator()
  useEffect(() => {
    setDomain((prev: any) => ({
      ...prev,
      suggestedNames:
        debounceSearchTerm.length > 0 ? name(debounceSearchTerm) : [],
    }));
  }, [debounceSearchTerm]);

  const handleInputChange = (inputText: any) => {
    setSearchTerm(inputText)
  }

  return (
    <>
      <Header headerTitle={domain?.headerTitle} />
      <Search onInputChange={handleInputChange} />
      <ResultContainer suggestedNames={domain?.suggestedNames} />
    </>
  )
}

export default App
