import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } 
        catch(err){
            console.log(err);
        }
        
    }
     

  useEffect(() => {
   getCovidData();
  }, [])
  


  return (
    <>
    <section>
    <h4>LIVE</h4>
    <h1>COVID-19 TRACKER</h1>
    <h1>STATEWISE</h1>
    <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> Our </span> COUNTRY </p>
                    <p className='card__total card__small'> INDIA </p>
                </div>
            </div>
            <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL </span> RECOVERED </p>
                    <p className='card__total card__small'>{data.recovered}</p>
                </div>
            </div>
            <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL </span> CONFIRMED </p>
                    <p className='card__total card__small'>{data.confirmed}</p>
                </div>
            </div>
            <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL </span> DEATH </p>
                    <p className='card__total card__small'>{data.deaths}</p>
                </div>
            </div>
            <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> TOTAL </span> ACTIVE </p>
                    <p className='card__total card__small'>{data.active}</p>
                </div>
            </div>
            <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'><span> LAST </span> UPDATED </p>
                    <p className='card__total card__small'>{data.lastupdatedtime}</p>
                </div>
            </div>

        </li>
        </li>

        </li>

        </li>

        </li>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid