import React, { useEffect } from 'react';
import FeedPhotoItem from '../FeedPhotosItem';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api/api';

function FeedPhotos() {
    const { data, loading, error, request } = useFetch();

    useEffect(()=>{
        async function fetchPhotos(){
            const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});
            const { response, json } = await request(url, options);
            console.log(json);

        }
        fetchPhotos();
    },[request])

    return (
        <div>
            <FeedPhotoItem/>
        </div>
    )
}

export default FeedPhotos;