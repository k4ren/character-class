import {Container, Content, Header, Title, Button, Icon, Text, StyleProvider, Left,Body,Right, CardItem, Card, Thumbnail } from 'native-base'; //Include Nativebase required components
import React from 'react';
import { Image } from 'react-native';
import { Font } from 'expo'; //to include font from expo.
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

export default class App extends React.Component {
  //checking state for if font is loaded or not.
  state = {
    fontLoaded: false,
  };
  async componentWillMount() {
     await Expo.Font.loadAsync({
       'Roboto': require('native-base/Fonts/Roboto.ttf'),
       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
     });
     //Setting the state to true when font is loaded.
     this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
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
        {
           this.state.fontLoaded ? (
            <Content style={{padding: 5}}>

            <Card style={{padding: 5}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://nativebase.io/customizer/static/media/logo.9b000b33.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.notigatos.es/wp-content/uploads/2018/02/gato-atigrado-830x554.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>



            </Content>
        ) : null
        }
      </Container>
      </StyleProvider>
    );
  }
}
