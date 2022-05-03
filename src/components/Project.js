import React from 'react'
import styled from 'styled-components'

const ProjectHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProjectHeaderLeft = styled.div`
    h3 {
        font-weight: 500;
    }
`

const ProjectHeaderRight = styled.div`
    margin-left: auto;
    margin-right: 0;

    h4 {
        color: #555;
        font-weight: 400;
    }
`

const Project = props => (
    <ProjectHeader>
        <ProjectHeaderLeft>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </ProjectHeaderLeft>
        <ProjectHeaderRight>
            <h4>UX Design</h4>
        </ProjectHeaderRight>
    </ProjectHeader>
)

export default Project