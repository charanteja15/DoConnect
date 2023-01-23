import React, { useEffect, useState } from 'react'

function Search() {
    const[topic,setTopic]=useState('');
    const[data,setData]=useState([]);
    function getTopicAPI(){
            fetch("http://localhost:9090/user/answers/react js")
            .then((response)=>response.json())
            .then((data)=>{console.log(data);setData(data)})
    }
    useEffect(()=>{
        getTopicAPI()
    },[])
  return (
    <div>
        <form >
       <div className='form-group'>
       
            <label className="mt-3">search Topic</label>
            <input type="text" value={topic} className='form-control' placeholder="Enter Topic" onChange={(e) => setTopic(e.target.value)}></input>
        </div>
        <br />
        <button type="submit" className='btn btn-success'>Get Topic</button>
        </form>
        <div>
             
               {
                    data.map((question)=>{
                        return <p>
                                
                                <h4>search Results:</h4>
                                <p>{question.question.question}</p>
                                <p>{question.answer}</p>
                            
                               
                        </p>
                        
                    })
                }    
        </div>    
       
     
    </div>
  )
}

export default Search
