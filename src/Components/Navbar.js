import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [handleNavScroll, sethandleNavScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                return sethandleNavScroll(true)
            } else {
                return sethandleNavScroll(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }

        , []);


    return (
        <div className={`nav ${handleNavScroll && 'nav_hover'} `}>
            <img className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='netflix_logo' />
            <div className='avatar'>

            </div>
        </div>
    )
}
