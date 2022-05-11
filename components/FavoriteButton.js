import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Octicons';
import CustomText from './CustomText';

const FavoriteButton = (favorite = false) => {
  const [fav, setFav] = useState(false);

  return (
    <>
      {fav ? (
        <TouchableOpacity
          onPress={() => {
            setFav(false);
          }}
          style={[styles.container, styles.added]}>
          <Icons name="check" size={24} color="white" />
          <CustomText style={styles.addButoon}>Added to Favorites</CustomText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setFav(true);
          }}
          style={styles.container}>
          <Icons name="plus" size={24} />
          <CustomText style={[styles.addButoon, {color: '#000000'}]}>
            Add to Favorites
          </CustomText>
        </TouchableOpacity>
      )}
    </>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3ba1a',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d3ba1a',
  },
  addButoon: {
    fontWeight: '400',
    marginLeft: 12,
  },
  added: {
    backgroundColor: '#af7b7b00',
  },
});
