import React, { useCallback, useState } from 'react'

function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options)=>{
        let response;
        let json;
        try{
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (!response.ok) throw new Error(json.message);
        }catch(err){
            console.log(err);
            json = null;
            setError(err.message);
        }finally{
            setLoading(false);
            setData(json);
        }
    },[])

    return {
        data, 
        error, 
        loading,
        request
    }
}

export default useFetch;