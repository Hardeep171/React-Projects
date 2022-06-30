import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Spinner } from 'react-bootstrap';
const ViewEnlarged = (props) => {
    const imgStyle = {
        height: '75vh',
        width: '90vw',
        margin: '30px 80px'
    }
    const { id } = useParams();
    const [singlePhoto, setSinglePhoto] = useState({})

    useEffect(() => {
        const fetchSinglePhoto = async () => {
            try {
                const res = await axios.get(`https://picsum.photos/id/${id}/info`)
                setSinglePhoto(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchSinglePhoto()
    }, [id])
    return (
        <>
            {
            Object.keys(singlePhoto).length ? (
                <img
                    src={singlePhoto.download_url}
                    alt='singlePhoto'
                    style={imgStyle}
                />
            ) :
                <div className='spinnerr'>
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            }


        </>
    )
}

export default ViewEnlarged;