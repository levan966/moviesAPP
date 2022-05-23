import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {baseImageUrl} from '../api/links';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from './CustomText';

type Props = {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  poster_path: string;
  grade: number | null | undefined;
  cardWidth?: number;
  cardHeight?: number;
  borderRadius?: number;
  marginLeft?: number;
  marginTop?: number;
};

const MovieCardComponent = ({
  style,
  title,
  onPress,
  poster_path,
  grade = null,
  cardWidth = 140,
  cardHeight = 210,
  borderRadius = 5,
  marginLeft = 20,
  marginTop = 10,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={{width: cardWidth, marginLeft: marginLeft}}>
        <Image
          style={[{height: cardHeight, borderRadius, marginTop}]}
          source={{uri: baseImageUrl + poster_path}}
        />
        <View style={styles.info}>
          {grade ? (
            <View style={styles.rating}>
              <Icons name="star" size={16} color="#e0b423" />
              <Text style={styles.grade}>{grade}</Text>
            </View>
          ) : null}
          <CustomText
            style={styles.title}
            // adjustsFontSizeToFit
            numberOfLines={2}>
            {title}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCardComponent;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    color: '#ffffffe8',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  star: {
    color: '#ffffff94',
    fontSize: 10,
  },
  grade: {
    color: '#ffffff90',
    fontSize: 15,
    marginLeft: 10,
  },
  info: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
