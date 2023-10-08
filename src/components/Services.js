import React from 'react'
import Title from './Title'
import { services } from './data'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subtitle='services'/>
      
      <div className="section-center services-center">
        {services.map((service) => {
        const {id, icon, text, title} = service
        return (
          <article className="service">
          <span className="service-icon"><i className={icon}></i></span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
              {text}
            </p>
          </div>
        </article>
)        })}
        
      </div>
    </section>
  )
}

export default Services;