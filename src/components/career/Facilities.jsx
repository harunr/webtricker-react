import React from 'react'
import FacilitiesItem from './FacilitiesItem'

function Facilities() {
  return (
    <>
        <section className="facilities-wrap">
            <div className="common-wrap clear">
                <div className="facilities-inner">
                    <aside>
                        <h3>What you expect from us:</h3>
                    </aside>
                    <div className="facilities-item-wrap">
                        <FacilitiesItem
                            facilitiesItemText="Webtricker believes on people’s freedom and choices. We respect everyone’s thoughts and we hear everyone’s concepts to bring a greater outcome. Together we are team. So, anyone’s pain is our pain. We always try to grow as a team. That’s why it’s a very friendly atmosphere like we are a family all together."
                        />
                        <FacilitiesItem
                            facilitiesItemText="We have some exceptional bonus package and affiliate option to enlarge your income outside of your salary."
                        />
                        <FacilitiesItem
                            facilitiesItemText="2-time bonus per year. And there are special bonuses for special achievements and performances."
                        />
                        <FacilitiesItem
                            facilitiesItemText="Special gratuity and pension package after successful 5 years, 10 years, 15 years, 20 years and 25 years slot. Pension will be like government system. (Conditions will apply)"
                        />
                        <FacilitiesItem
                            facilitiesItemText="Special training and skill development training facilities."
                        />
                        <FacilitiesItem
                            facilitiesItemText="2/3 times salary revision per year depending on progress, skills and performances."
                        />
                        <FacilitiesItem
                            facilitiesItemText="1-time snacks during office time."
                        />
                        <FacilitiesItem
                            facilitiesItemText="Opportunity to be a shareholder on conditions."
                        />
                        <FacilitiesItem
                            facilitiesItemText="And other facilities."
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Facilities