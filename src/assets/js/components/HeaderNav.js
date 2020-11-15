import React from 'react';


const HeaderNav = ()=>{



    return(
        <div className="HeaderNav">
            <ul className="HeaderNav__list">
                <li className="HeaderNav__item">
                    <a href="#" className="HeaderNav__link">Меню</a>
                </li>
                <li className="HeaderNav-item">
                    <a href="#" className="HeaderNav__link">Акции</a>
                </li>
                <li className="HeaderNav-item">
                    <a href="#" className="HeaderNav__link">Новости</a>
                </li>
                <li className="HeaderNav-item">
                    <a href="#" className="HeaderNav__link">О нас</a>
                </li>
                <li className="HeaderNav-item">
                    <a href="#" className="HeaderNav__link">Карьера</a>
                </li>
                <li className="HeaderNav-item">
                    <a href="#" className="HeaderNav__link">Отзывы</a>
                </li>
            </ul>
        </div>
    );
}


export default HeaderNav