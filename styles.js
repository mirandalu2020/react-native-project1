import { StyleSheet } from 'react-native';
import { CuteFont_400Regular } from '@expo-google-fonts/cute-font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 3,
    // backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 2,
    width: 300,
    height: 200,
    borderRadius: 15,
    // zIndex: 100,
  },
  scrollView: {
    // flex: 1,
    // backgroundColor: 'pink',
    position:'absolute',
    // zIndex: 100
  },
  buttonContainer: {
    flex: 2,
    width: 100,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    // backgroundColor: 'blue',
    // borderWidth:2,
    borderRadius: 10,
    margin: 5,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
    backgroundColor: 'blue',
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
  text: {
    fontFamily: 'CuteFont_400Regular',
  }
});