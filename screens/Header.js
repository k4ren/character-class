import {Container, Content, Header, Title, Button, Icon, Text,
  import { Font } from 'expo'; //to include font from expo.
  import getTheme from '../native-base-theme/components';
  import material from '../native-base-theme/variables/material';

  import React, { Component } from 'react';

export class Header extends Component {
  constructor() {

  }

  render () {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
