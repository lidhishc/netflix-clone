import React, { useState, useEffect } from 'react'
import { requests } from '../Services/requests';
function Banner({ fetchUrl }) {
    const [banner, setBanner] = useState([]);
    const img_base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        requests.getRequest(fetchUrl).then(res => {
            console.log('banner res', res);
            setBanner(res.results[Math.floor(Math.random() * 20)]);
            console.log(banner, 'banner');
        }).catch(e => {
            console.log('error in fetchBaner req');
        })
    }, [fetchUrl])


    function text_truncate(string, length) {
        if (string.length > length) {
            return string.substring(0, length) + '...';
        } else {
            return string;
        }
    };


    return (
        <header className="banner"
            style={{
                backgroundImage: `url(${img_base_url}${banner?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: 'cover cover',
            }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {banner?.title || banner?.name || banner?.original_name}
                </h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="banner_description">
                    {banner.overview && banner.overview.length > 150 ? (banner.overview.substring(0, 150) + '...') : banner.overview}
                </h1>

            </div>
            <div
                className="banner__bottom" />
        </header>
    )
}

export default Banner;
