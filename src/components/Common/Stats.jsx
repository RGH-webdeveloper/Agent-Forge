import React from 'react'
import statsData from './ststasData'
const Stats = () => {
  return (
    <section className='stats'>
        <div className='stats-grid'>
            {statsData.map((item , index)=> (
                <div key={index} className='stats-item'>
                    <span className="stat-number">{item.number}</span>
                    <span className="stat-label text-secondary">{item.label}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stats
