import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  leftCol: {
    position: 'relative',
  },
  counterBadge: {
    position: 'absolute',
    right: 5,
    backgroundColor: '#3872E9',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  counterBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  rightCol: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
  },
})

export default styles
