import React from 'react';
import { Text,View, StyleSheet, TouchableOpacity,} from 'react-native';

const TouchableButton = ({
    title,
    textStyle,
    containerStyle,
    buttonStyle,
    ...rest
}) => {
    
    return(
        <View style={[Styles.container,containerStyle]}>
            <TouchableOpacity {...rest} style={[Styles.touchableStyle,buttonStyle]}>
                <View style={Styles.integralVeiw}>
                    <Text style={[Styles.textStyle, textStyle]}> {title} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    };
export default TouchableButton;

const Styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingHorizontal:15, 
    height:50,
    marginTop:30,
  },
  touchableStyle: {
    width: '100%', 
    height: '100%', 
    backgroundColor:'black',
    borderRadius:60,
  },
  integralVeiw:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'row',
    backgroundColor:'#226ddcff',
    bordeRadius:60,
  }, 
  
  button: {
    //width:'100%',
   // height:'100%',
    //alignItems: 'center',
    //backgroundColor: '#226ddcff',
    //padding: 10,
    //marginBottom: 10,
  },
  textStyle:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
    textTransform: 'uppercase',
    paddingTop:15,

  }

});
  