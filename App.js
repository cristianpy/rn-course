import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: prevState.placeName,
          image: placeImage
        })
      };
    });
  }

  // placeAddHandler = placeName => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.concat({key: Math.random(), value: prevState.placeName, image: PlaceImage})
  //     }
  //   });
  // }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Ingrese un texto"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button 
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});
