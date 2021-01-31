import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


import { fonts, colors } from "../../globals";

interface Props{
    buttonIcon:string;
    onPress:()=>void;
}

export const IconButton: React.FC<Props> = ({buttonIcon,onPress }) => {
  
  return (
     <TouchableOpacity style={styles.ButtonContent} onPress={onPress}>
         <Icon name={buttonIcon} size={25} color={colors.DarkBlue}/>
     </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   ButtonContent:{
     backgroundColor:colors.White,
     width:50,
     height:50,
     padding:5,
     alignItems:'center',
     justifyContent:'center',
     borderRadius:10,
     shadowColor: 'rgba(0,0,0, 0.8)',
     shadowOpacity: 0.16,
     shadowOffset: { width: 0, height: 6 },
     elevation: 3,
   }
});
