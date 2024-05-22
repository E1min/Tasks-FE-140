import React from 'react'

function Home({data}) {
  return (
    <div className='main'>
      {
        data.map(items=>{
            return (
                <div key={items.id} className='card'>
                    <img src={items?.thumbnail?.path + "."+items.thumbnail.extension} alt={items.thumbnail.extension} />
                    <h4>{items.name}</h4>
                    <h5>{items.modified}</h5>
                </div>
            )
        })
      }
    </div>
  )
}

export default Home
