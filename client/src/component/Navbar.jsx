import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="nav-bar">
        <div className='nav-bar__container'>
            <Link to='/'>
                <img 
                    className="nav-bar--img"

                />
            </Link>
            <div className='nav-bar__search'>
                <div className='nav-bar__search--container'>
                    <img className="nav-bar__search--img" /> 
                    <input className='nav-bar__search--input'
                        type='text'
                        placeholder='Search'
                    />
                </div>
                <Link className='nav-bar__btn btn__notmobile' to='/upload'>
                    <img className='btn__ico'  alt='upload icon'/>
                    <span className='btn__text'>upload</span>
                </Link>
                <div className='nav-bar__search--display'>
                    <img className='profile-img'  alt='profile-picture'/>
                </div>
            </div>
            <Link className='nav-bar__btn btn__mobile' to='/upload'>
                <img className='btn__ico'  alt='upload icon'/>
                <span className='btn__text'>upload</span>
            </Link>
        </div>
    </header> 
  )
}

export default NavBar