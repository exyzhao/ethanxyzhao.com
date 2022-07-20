import React from 'react'
import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Nametag from '../components/Nametag'
import Project from '../components/Project'
import Line from '../components/Line'

import playbook from '../components/img/playbook-mockups.png'
import cohort from '../components/img/cohort-mockups-nologo.png'
import penntix from '../components/img/penntix-mockups.png'

const Home = props => (
  <>
    <Helmet>
      <title>Ethan Zhao</title>
    </Helmet>
    <PageContent>
      <Nametag />
      <p style={{ textAlign: "center" }}>
        &darr; And here's what I've worked on...
      </p>
      <Line />
      <Project title="Penn Playbook" description="Data and design-driven exhibition of life at Penn"
        skills="Development & Design" date="Spring 2022"
        link="http://www.pennplaybook.com/" image={playbook} />
      <Line />
      <Project title="Cohort" description="Group travel planning and itinerary generation app"
        skills="UX Design" date="Spring 2022" image={cohort} />
      <Line />
      <Project title="PennTix" description="Ticket resale platform for Penn students"
        skills="Development & Design" date="Fall 2021"
        link="https://penntix.herokuapp.com/" image={penntix} />
    </PageContent>
  </>
)

export default Home