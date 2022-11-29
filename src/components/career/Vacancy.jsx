import React from 'react'
import VacancyItem from './VacancyItem';

function Vacancy() {
  return (
    <>
        <div className="vacancy-wrap">
            <div className="common-wrap">
                <div className="vacancy-title">
                    <h2>Do you have the courage to be a part of challenging people?</h2>
                    <p>If you are self motivated, confident but not over confident, hardworking, energetic, creative, team player and eager to achive something extra ordinary then you are surely welcome to a dynamic team!</p>
                </div>
                <div className="vacancy-item-wrap">
                    <VacancyItem
                        vacancyLink="/career/python"
                        vacancyHeading="Python developer"
                        vacancyDesc="VACANCY - 02"
                    />
                    <VacancyItem
                        vacancyLink="/career/java-developer"
                        vacancyHeading="Java developer "
                        vacancyDesc="VACANCY - 02"
                    />
                    <VacancyItem
                        vacancyLink="/career/flutter-developer"
                        vacancyHeading="Flutter developer"
                        vacancyDesc="VACANCY - 03"
                    />
                    <VacancyItem
                        vacancyLink="/career/kotlin-developer"
                        vacancyHeading="Kotlin developer "
                        vacancyDesc="VACANCY - 02"
                    />
                    <VacancyItem
                        vacancyLink="/career/mernstack-developer"
                        vacancyHeading="Mernstack developer "
                        vacancyDesc="VACANCY - 03"
                    />
                    <VacancyItem
                        vacancyLink="/career/seo-expert"
                        vacancyHeading="SEO expert"
                        vacancyDesc="VACANCY - 02"
                    />
                    <VacancyItem
                        vacancyLink="/career/wordpress-plugin-developer"
                        vacancyHeading="Wordpress Plugin developer"
                        vacancyDesc="VACANCY - 03"
                    />
                    <VacancyItem
                        vacancyLink="/career/content-writer"
                        vacancyHeading="Content Writer"
                        vacancyDesc="VACANCY - 02"
                    />
                    <VacancyItem
                        vacancyLink="/career/ui-ux-designer"
                        vacancyHeading="Excellent UI/UX designer"
                        vacancyDesc="VACANCY - 02"
                    />
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default Vacancy;