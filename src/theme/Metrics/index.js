import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  videoExpanded: (1080 / 1942) * width,
  bigImage: (1200 / 1080) * width,
  middleImage: (wth) => (600 / 1080) * wth,
  smallImage: (wth) => (400 / 1080) * wth,

  filter: 40,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  borderRadius: 10,
  textInBr: 10,
  contentWidth: width * 0.8,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  blurRadius: Platform.OS === 'ios' ? 20 : 10,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
