import React,{Fragment, useEffect,useState} from 'react';
import axios from 'axios';

import List from './../list/List'
import './search.css';

const Search =()=>{

    const  [searchWord, setSearchWord] = useState('');
    const  [result, setResult] = useState([]);

    const handelLoadEmojies=async ()=>{
        const responsePost=await axios.get('emoji/Emoji.json');
        setResult(responsePost.data); 
    };
   
    useEffect(() => {
       
            const timeId=setTimeout(()=>{
                if(searchWord){
                    handelLoadEmojies();
                }else{
                    setResult([])
                }
            },500);

            return ()=>{
                clearTimeout(timeId);
            };     
   
    },[searchWord]);

    const handelinput=(e)=>{
        setSearchWord(e.target.value);
    };

        const finalresult=result.map(item => {
           if(item.keywords.includes(searchWord)){
              return <List key={item.title} title={item.title}  symbol={item.symbol} />
       } 
    });

    return (
     <Fragment>
        <div className='box'>
            <form>
                <input type="text"  name="search" placeholder="Search emoji eg:mask,water ..."  value={searchWord} onChange={handelinput}  />
            </form>
            {finalresult}
        </div>
     </Fragment>
          );

}

export default Search;