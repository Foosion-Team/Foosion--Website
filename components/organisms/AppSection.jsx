import React from 'react'

import App from '../molecules/App'

const AppSection = () => {
  return (
    <div className='flex md:justify-between px-4 sm:px-12 xl:px-28'>
        {
            App.map(x => {
                return (
                    <div key={x.id}>
                        <img src={x.image} className='w-28 lg:w-36 xl:w-48'/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AppSection