import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function NewsResult(){

    const [result,setResult]=useState({});
    const {newsTopic}=useParams();

    useEffect(()=>{
       fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&from=2023-01-23&sortBy=popularity&apiKey=1bf2303bb76c4bf2946872c6fe8f2a2a`)
       .then(res=>res.json())
        .then(obj=> 
            setResult(obj)
        )
    },[newsTopic])
     
    let output=<></>;

    if(result.status==='ok'){
        output=result.articles.map((article,index)=>(
            <div className="card mb-3" key={index}>
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                    <p className="card-text">
                        {article.content}
                    </p>
                    <a href={`${article.url}`} target="_blank">View Article</a>
                </div>
            </div>
        ))
    }
    return (
        <>
            <h5>{newsTopic}</h5>
            <div>
                {output}
            </div>
        </>
    )
}