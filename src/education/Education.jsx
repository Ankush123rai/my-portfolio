import React from 'react'
import style from './Education.module.css'
const Education = () => {

  const educationData = [
    {
      id: 1,
      year: '2023-present',
      title: 'Frontend Web Developer',
      university: 'FunctionUp',
      from:'Bangalore, India',
    },
    {
      id: 2,
      year: '2019-2022',
      title: 'Bsc Information Technology',
      university: 'Jorhat Institute of Science and Technology',
      from:'Jorhat, Assam',
    },
    {
      id: 3,
      year: '2017-2019',
      title: 'Higher Secondary',
      university:'Luit Valley Academy',
      from:'Jorhat, Assam',
    },
  ]

  return (
    <div  className={style.container}>
      <div className={style.top_heading}>
        <h2>EDUCATION</h2>
          </div>
      <div className={style.education}>
        {educationData.map((data) => (
          <div className={style.education_card} key={data.id}>
            <div className={style.details}>
              <h5><span>.</span>{data.year}</h5>
              <h3>{data.title}</h3>
              <p>{data.university}</p>
              <p>{data.from}</p>
              </div>
            </div>                                                                
        ))}
        </div>
    </div>
  )
}
export default Education