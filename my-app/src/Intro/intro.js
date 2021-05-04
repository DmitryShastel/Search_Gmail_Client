import React from 'react'
import s from './intro.module.css'

export const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={s.container}>
                <nav className={s.navLinks}>
                    <a className={s.navLink}>Menu Item</a>
                    <a className={s.navLink}>Menu Item</a>
                    <a className={s.navLink}>Menu Item</a>
                    <a className={s.navLink}>Menu Item</a>
                    <a className={s.navLink}>Menu Item</a>
                </nav>
            </div>
        </div>
    )
}