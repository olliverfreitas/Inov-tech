import {Pressable, Text, StyleSheet} from 'react-native';
import {router} from 'expo-router';

type Props={
  buttonlink: string;
}

export const Button = (props:Props) => {

  function goToScreen(){
    router.navigate(props.buttonlink)
  }
  
  return (
      <Pressable style={styles.button}>
       <Text style={styles.buttonText}>Entrar</Text> 
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 246,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20
  },
  buttonText:{
    fontSize: 18
  }
})
