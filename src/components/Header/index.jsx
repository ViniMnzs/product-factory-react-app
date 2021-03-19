import React from 'react';

import {
  Container, Button, Label, Logo, Register,
} from './styles';

export default function Header() {
  const buttons = [
    {
      id: 1,
      name: 'Projects',
    },
    {
      id: 2,
      name: 'Partners',
    },
    {
      id: 3,
      name: 'FAQ',
    },
    {
      id: 4,
      name: 'Master',
    },
    {
      id: 5,
      name: 'Classes',
    },
    {
      id: 6,
      name: 'Course Experience',
    },
    {
      id: 7,
      name: 'About us',
    },
  ];

  return (
    <Container>
      <Logo />
      {
        buttons.map((value) => (
          <Button key={value.id}>
            <Label>{value.name}</Label>
          </Button>
        ))
      }
      <Register>
        <Label>Register</Label>
      </Register>
    </Container>
  );
}
