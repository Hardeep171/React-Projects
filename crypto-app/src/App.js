
import './App.css';
import Crypto from './components/Crypto';

function App() {

  return (
    <>
    <div className='main-app App'>
        <Crypto />
    </div>
    
    </>
  );
}

export default App;

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false
