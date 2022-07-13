import React from 'react';
import './Crypto.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Crypto = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchCoinDetailsFromApi = async () => {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
                setCoins(res.data);
                // console.log(coins)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchCoinDetailsFromApi();

    },[])
    const [search,setSearch] = useState('')
    const [val,setVal] = useState([])
   const  handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        const filteredArr = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
       setVal(filteredArr)
       console.log(filteredArr)
    }
    let arr = []
    if(search !== ''){
        arr = val.length !== 0 ? val : coins
    }
    else{
        arr = coins
    }
    return (
        <>
            <div className='main-div'>
                <form className='crypto-form'>
                    <input type='text' placeholder='coin name' autoComplete='off' name='search' value={search} onChange={(e) => handleChange(e)}/>
                    <button className='btn' onClick={(e) => handleClick(e)}>Search</button>
                </form>

                <div className='info-div'>
                    <img className='elements text img'src='https://raw.githubusercontent.com/tylim88/crypto-symbol/master/img/symbol.png' alt='crypto-symbol' />
                    <p className='elements text'>Symbol </p>
                    <p className='elements text'>Name</p>
                    <p className='elements text'>market_cap</p>
                    <p className='elements text'>current_price</p>
                    <p className='elements text'>price_change_percentage_24h</p>
                </div>
               
                    {
                        
                    arr.map(coin => 
                        < div key={coin.id}>
                        
                            <div  className='info-div'>
                                <img className='elements elements2 img' src={coin.image} alt='crypto-coin-img'/>
                                <p className='elements elements2'>{coin.symbol}</p>
                                <p className='elements elements2'>{coin.name}</p>     
                                <p className='elements elements2'>{coin.market_cap}</p>
                                <p className='elements elements2'>INR.{coin.current_price}</p>
                                <p className='elements elements2'>  {coin.price_change_percentage_24h} %</p>
                            </div>
                            <hr />
                            </div>
                            )
                    }
                </div>
            

        </>
    )
};

export default Crypto;



    // const[search,setSearch] = useState('');
    // useEffect(() => {
    //     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //     .then(res=>{
    //        setCoins(res.data)
    //        console.log(res.data)
    //     }).catch(error=>console.log(error))
    //   }, [])