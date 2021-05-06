import React from 'react'
import s from './main.module.css'

export const MainMenu = () => {
    return (
        <div className={s.wrapper}>
            <div className ={s.main} >
                <div className={s.sidebar}>
                    <h3>Submenu</h3>
                    <p>Submenu Item1</p>
                    <p>Submenu Item2</p>
                    <p>Submenu Item3</p>

                    <h3>Submenu</h3>
                    <p>Submenu Item1</p>
                    <p>Submenu Item2</p>
                    <p>Submenu Item3</p>
                </div>
                <div className={s.userpage}>
                    <div className={s.title}></div>
                    <div className={s.search}></div>
                    <div className={s.users}></div>
                </div>
            </div>

        </div>



    )
}