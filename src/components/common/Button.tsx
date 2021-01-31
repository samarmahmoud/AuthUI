import React, { FC } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Text
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { fonts, colors } from "../../globals";
const {width,height} =Dimensions.get('window')

interface Props{
    buttonLabel:string;
    onPress:()=>void;
}

export const Button: React.FC<Props> = ({buttonLabel,onPress }) => {
  
  return (
     <TouchableOpacity style={styles.ButtonContent} onPress={onPress}>
         <Text style={styles.Label}>{buttonLabel}</Text>
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   ButtonContent:{
     backgroundColor:colors.Black,
     width:'100%',
     paddingVertical:15,
     alignItems:'center',
     borderRadius:10
   },
   Label:{
       fontFamily:fonts.BebasNeueRegular,
       fontSize:22,
       color:colors.Yellow
   }
});
