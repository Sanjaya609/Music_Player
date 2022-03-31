import React from 'react'

export const Search = () => {
  return (
    <form className="form-inline" onSubmit={handleSubmit}>
                <input className="form-control mr-sm-2" 
                id='song'
                type="search" 
                placeholder="Search Your Fav Song" 
                aria-label="Search"
                onChange={handleChange}
                value={values.song} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
  )
}
