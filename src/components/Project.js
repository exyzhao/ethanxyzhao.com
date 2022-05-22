import React from 'react'
import styled from 'styled-components'

const ProjectHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: black;
    }
`

const ProjectHeaderLeft = styled.div`
    h3 {
        font-weight: 500;

        @media(max-width: 768px) {
            margin-bottom: 0;
        }
    }
`

const ProjectHeaderRight = styled.div`
    margin-left: auto;
    margin-right: 0;
    text-align: right;

    @media(max-width: 768px) {
        margin-bottom: 1em;
    }

    h4 {
        color: #555;
        font-weight: 400;

        @media(max-width: 768px) {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
    }
`

const ProjectLink = styled.a`
    margin: auto;
`

const ProjectImageWrapper = styled.div`
    max-width: calc(100vw - 4rem);
    overflow: none;
`

const ProjectImage = styled.img`
    max-width: calc(100vw - 4rem);
    margin: auto;

    -webkit-transition: all 1s ease; /* Safari and Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* IE 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;

    &:hover {
        -webkit-transform:scale(1.1); /* Safari and Chrome */
        -moz-transform:scale(1.1); /* Firefox */
        -ms-transform:scale(1.1); /* IE 9 */
        -o-transform:scale(1.1); /* Opera */
        transform:scale(1.1);
    }
    
    @media(min-width: 768px) {
        max-width: calc(100vw - 40vw);
    }
`

const Project = props => (
    <>
        <ProjectHeader>
            <ProjectHeaderLeft>
                <a href={props.link}>
                    <h2>{props.title}</h2>
                    <h3>{props.description}</h3>
                </a>
            </ProjectHeaderLeft>
            <ProjectHeaderRight>
                <h4>{props.skills}</h4>
                <h4>{props.date}</h4>
            </ProjectHeaderRight>
        </ProjectHeader>
        <ProjectLink href={props.link}>
            <ProjectImageWrapper>
                <ProjectImage src={props.image} alt={props.title} />
            </ProjectImageWrapper>
        </ProjectLink>
    </>
)

export default Project