import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'
import Polaroid from '../components/Polaroid'
import signature from '../components/img/signature.png'

const PageContainer = styled.div`
    .header {
        margin-bottom: 0px;
    }

    .description {
        margin-top: 0px;
    }
`
const PageContent1 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: auto;
    max-width: 810px;

    .p-desktop {
        display: none;
    }

    @media(min-width: 768px) {

        .p-desktop {
            display: block;
            margin-bottom: 2em;
        }

        .p-mobile {
            display: none;
        }

        .content-bottom {
            display: flex;
            justify-content: space-between;
        }

        .credit {
            max-width: 691px;
        }
    }
`

const ContentColumns = styled.div`
    text-align: left;
    margin: auto;

    .content-top {
    }

    .content-left {
        margin-top: 10px;
        margin-bottom: 40px;
        min-height: 280px;
    }

    @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
        gap: 30px;

        .content-left {
            max-width: 200px;
            margin-top: auto;
            margin-bottom: auto;
        }

        .content-right {
            max-width: 470px;
            margin-left: 30px;
        }
    }
`

const Signature = styled.img`
    width: 119px;
    float: right;
`

const About = props => (
    <PageContainer>
        <Helmet>
            <title>Ethan Zhao</title>
        </Helmet>
        <PageContent>
            <PageContent1>
                <div class="content-top">
                    <p>Hello, I'm Ethan!</p>
                    <p>I'm a student at the Wharton School at the University of Pennsylvania
                        studying business and computer science.</p>
                </div>
                <ContentColumns>
                    <div class="content-left">
                        <Polaroid />
                    </div>
                    <div class="content-right">
                        <p class="header">1 - Where I am now</p>
                        <p class="description">
                            On campus, I'm the Internal Vice President of <a href="https://pennspark.org/">Penn Spark</a>,
                            Penn's community of developers and designers that builds both creative and client projects.</p>
                        <p class="header">2 - What I've done</p>
                        <p class="description">
                            Last semester, I helped developed the front-end website for Common Cents,
                            a student personal finance nonprofit.
                            During my gap year, I built a computer vision pipeline at WatchCharts, a wristwatch search engine.</p>
                        <p class="header">3 - When I'm not working</p>
                        <p class="description">
                            You can find me making things, playing board and card games, visiting museums, reading, working out,
                            and playing volleyball.</p>
                    </div>
                </ContentColumns>
                <div class="content-bottom">
                        <p class="credit">I designed and built this website with React and HTML + CSS :)</p>
                    <Signature src={signature} />
                </div>
            </PageContent1>
        </PageContent>
    </PageContainer>
)

export default About