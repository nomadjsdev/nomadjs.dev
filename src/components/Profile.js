import React from 'react'
import styled from 'styled-components'

import profileImg from '../images/profile.jpg'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const ProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`

const ProfileText = styled.p`
  margin: 0.5em 0;
`

export const Profile = ({ authorName, siteDescription }) => (
  <Container>
    <div>
      <ProfileImg src={profileImg} alt='James' />
    </div>
    <div>
      <ProfileText>{authorName}</ProfileText>
      <ProfileText>{siteDescription}</ProfileText>
    </div>
  </Container>
)
