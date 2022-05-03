import React from 'react'
import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Nametag from '../components/Nametag'
import Project from '../components/Project'
import Line from '../components/Line'

const Home = props => (
  <div>
    <Helmet>
      <title>Ethan Zhao</title>
    </Helmet>
    <PageContent>
      <Nametag />
      <p style={{ textAlign: "center" }}>
        &darr; And here's what I've worked on...
      </p>
      <Line />
      <Project title="Cohort" description="Group travel planning and itinerary generation app" />
    </PageContent>
  </div>
)

export default Home