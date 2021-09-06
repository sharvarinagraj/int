import React ,{useState, useEffect} from 'react'

const url= 'https://restcountries.eu/rest/v2/region/asia'

const Countries = () => {
    const [countries,setCountries]=useState([]);

    const fetchCountry= async () => {
        const response=await fetch(url);
        const countries=await response.json()
     
        
        setCountries(countries)
    }

    useEffect(() =>{
        fetchCountry()
    },[])

    return (
       <section className='grid'>
           {countries.map((country)=>{
               const {numericCode,name,subregion,languages,population,region,capital,flag,borders}= country;
               return<article key ={numericCode}>
                   <div>
                       <img src={flag} alt={name}></img>
                       <div class="info">
                       <h3>
                           {name}
                       </h3>
                       <h4>
                           Population:<span>{population}</span>
                       </h4>
                       
                       <h4>
                           Region:<span>{region}</span>
                       </h4>
                       <h4>
                           Border:<span>{borders[0]}</span>
                           </h4>
                           <h4>
                           Languages:<span>{languages[0].name}</span>
                           </h4>
                       
                       <h4>
                           Sub-Region:<span>{subregion}</span>
                       </h4>
                       <h4>
                           Capital:<span>{capital}</span>
                       </h4>
                       </div>
                       
                       
                   </div>
               </article>
           })

           }
       </section>
    )
}

export default Countries
