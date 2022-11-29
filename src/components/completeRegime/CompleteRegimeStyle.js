import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dash: {
    borderWidth: 1,
    flex: 1,
    borderStyle: 'dashed',
    borderColor: '#B1EDEF',
    zIndex: 100,
  },
  connectOdd: {
    marginRight: -10,
    marginTop: -50,
    transform: [{ rotateX: '0deg' }, { rotateZ: '-35deg' }, { rotateY: '0deg' }],
  },
  connectEven: {
    marginLeft: -10,
    marginTop: -50,
    transform: [{ rotateX: '0deg' }, { rotateZ: '35deg' }, { rotateY: '0deg' }],
  },
  container: {
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#B1EDEF',
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16
  },
  title: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#000000',
    textAlign: 'center',
  },
  pNumber: {
    position: 'absolute',
    zIndex: 10000,
    top: -18,
  },
  number: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '#FF7F42',
  },
  dropMargin: {
    marginTop: 75,
  },
  pad: {
    paddingTop: 16,
    paddingBottom: 5,
  },
  outer: {
    alignItems: 'center',
  },
  common: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateX: '45deg' }, { rotateZ: '45deg' }],
    borderRadius: 5,
  },
  first: {
    backgroundColor: 'white',
    marginTop: -30,
    opacity: 1,
    zIndex: 1003,
  },
  second: {
    backgroundColor: 'white',
    marginTop: -33,
    zIndex: 1001,
    opacity: 0.5,
    width: 41,
    height: 41
  },
  third: {
    backgroundColor: 'white',
    marginTop: -27,
    zIndex: 1000,
    opacity: 0.3,
    width: 35,
    height: 35
  },
});

export { styles }