import { useState, useEffect } from 'react';
import { readValidators } from './utils';
import './App.css';

function App() {
  const [validator, setValidator] = useState<string>('');
  
  useEffect(() => {
    try {
      const validatorData = readValidators().nfcChip;
      setValidator(validatorData);
    } catch (error) {
      console.error('Error loading validator:', error);
    }
  }, []);

  return (
    <>
      <div className="mx-auto mb-10 mt-20 max-w-2xl">
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900">Make a one shot minting and lock contract</h2>
          
          <h3 className="mb-2 mt-4">NFC Chip Template</h3>
          <pre className="overflow-x-scroll rounded bg-gray-200 p-2">{validator}</pre>
        </div>
      
        <div>IdaMint</div>
      </div>
    </>
  );
}

export default App;