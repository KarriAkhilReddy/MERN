// eslint-disable-next-line no-unused-vars
import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">OUR MENU</h1>
                <p>Experience the vibrant flavors of South Indian cuisine, from savory dosas to aromatic biryanis, at Sri Saravana.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
