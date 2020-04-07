import React from 'react';
import headerStyle from './Header.module.css';



const Header = () => {
    return (
        <div className={headerStyle.header}>
            <header className={headerStyle.header_content}>
                <img src='https://smmcraft.ru/images/icons/tik_tok.png' alt="logo" srcset="" className={headerStyle.logo} />
                <div className={headerStyle.header_container}>
                    <input type="text" placeholder='     Search' className={headerStyle.search} />
                    <button className={headerStyle.logout}>Log out</button>
                </div>
            </header>
            <div className={headerStyle.header_image}>
                <img src="https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" alt="" />
                <button>CHANGE IMAGE</button>
            </div>
        </div>
    )
}

export default Header