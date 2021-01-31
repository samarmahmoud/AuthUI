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
    type:string;
    value:string;
    placeholder:string;
    keyboardType:string;
    secureTextEntry:boolean;
    onEndEditing?:()=>void;
    onChangeText:(e: Event) => void;
    changeIcon:()=>void,
    icon?:string;
    iconColor?:string;
    textField:string;
    errorColor:string;
    inputTextColor:string
}

export const Input: React.FC<Props> = ({ 
    type,
    value,
    placeholder,
    keyboardType,
    secureTextEntry,
    onEndEditing,
    onChangeText,
    changeIcon ,
    icon,
    iconColor,
    textField,
    errorColor=colors.LightBlue,
    inputTextColor=colors.Black
  }) => {
  let _keyboardType = "default",
    secureInput = false;

  switch (type) {
    case "Password":
      {
        _keyboardType = "default";
        secureInput = secureTextEntry;
      }
      break;
    case "Number":
      {
        _keyboardType = "numeric";
      }
      break;
    case "Email":
      {
        _keyboardType = "email-address";
      }
      break;
    case "TextArea":
      {
        _keyboardType = "default";
        multiline = true;
        style = styles.textArea;
      }
      break;
    default: {
      _keyboardType = "default";
    }
  }
  return (
    
      <View style={styles.Container}>
        <Text style={[styles.textField,{color:errorColor}]}>{textField}</Text>
        
        <View style={[styles.inputContainer,{borderBottomColor:errorColor}]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.LightBlue}
          style={[styles.input,{color:inputTextColor}]}
          type={type}
          keyboardType={_keyboardType}
          secureTextEntry={secureInput}
          onEndEditing={onEndEditing}
        />

        <TouchableOpacity onPress={changeIcon}>
          <Icon
            name={icon}
            color={iconColor}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  Container: {
    width: '100%',
  },
  input: {
    paddingVertical:height * 0.01,
    width: "90%",
    fontSize: 16,
    marginTop:10
  },

  iconContainer: {
    width: 24,
    height: 14
  },
  textField:{
    fontSize: 25,
    marginTop: 20,
    fontFamily: fonts.BebasNeueRegular
  }
});
