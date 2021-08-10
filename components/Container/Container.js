import React from 'react';
import { Checkbox, Input, Button } from '@material-ui/core';
import StyledButton from '../StyledComponents/Button';

const Container = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <main>
      <p>Find your BEST TEACHER</p>
      <p>Whether you are a student strying to find your ideal private language teachers/tutors
        or a teacher trying to find great students for your customised private lessons!
      </p>

      <Input placeholder='Type here what are you looking for'/>
      <Checkbox checked={checked}/>
      <span>I'M A TEACHER</span>
      <Checkbox checked={checked}/>
      <span>I'M A STUDENT</span>
      <StyledButton>Search</StyledButton>
    </main>
  )
}

export default Container