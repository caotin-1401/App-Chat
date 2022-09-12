import React from 'react'
import Profile from '../img/profile.jpg'
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search" />
      </div>
      <div className="userChat">
        <img src={Profile} alt="" />
        <div className="userChatInfo">
          <span>A</span>
        </div>
      </div>
    </div>
  )
}

export default Search