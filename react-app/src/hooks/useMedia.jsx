import React, { useEffect, useState } from 'react';

function useMedia( media ) {
    const [match, setMach] = useState(null);

    useEffect(()=>{
        const changeMatch = ()=>{
            const { matches } = window.matchMedia(media);
            setMach(matches);
        }
        changeMatch();
        window.addEventListener('resize', changeMatch);
        return () =>{
            window.removeEventListener('resize', changeMatch);
        }
    },[media])

    return match;
}

export default useMedia