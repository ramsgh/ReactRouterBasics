import { useState } from 'react';

export default function SearchBar() {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setIsLoading(true);

    setTimeout(() => {
      setResults(value);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {isLoading ? <p>Loading...</p> : <p>Search results for: {results}</p>}
    </div>
  );
}
