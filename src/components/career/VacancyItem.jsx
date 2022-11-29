import React from 'react'
import { Link } from 'react-router-dom';

function VacancyItem(props) {
  return (
    <>
        <Link to={props.vacancyLink} className="vacancy-item">
            <h4>{props.vacancyHeading}</h4>
            <p>{props.vacancyDesc}</p>
        </Link>
    </>
  )
}

export default VacancyItem;