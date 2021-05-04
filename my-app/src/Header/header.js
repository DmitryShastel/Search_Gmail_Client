import React from 'react'
import s from './style.header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                    <div className={s.headerInner}>
                        <div className={s.headerLogo}>QULIX
                                {/*
                            <img src = 'images.jpg'/>
*/}
                        </div>
                        <nav className={s.nav}>
                            <select>
                                    <option value = 'Select City'>Select City</option>
                            </select>
                            <a className={s.navLink}>AA
                                {/*<img src = "https://www.flaticon.com/"/>*/}
                            </a>
                            <a className={s.navLink}>Message</a>
                            <a className={s.navLink}>User Name</a>
                            <a className={s.navLink}>Search</a>
                        </nav>
                    </div>
            </div>
        </div>

    )
}