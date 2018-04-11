import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#cdcdcd', 
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 40
  },

  label: {
    marginRight: 10,
    color: '#cdcdcd'
  },

  titleInput: {
    height: 20,
    width: 75 + '%', 
    textAlign: 'right',
    padding: 0
  },

  nextButton: {
    backgroundColor: '#2c2c2c',
    width: 100+'%',
    height: 65
  },

  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15
  }
});

export default styles;