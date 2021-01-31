import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

import {  colors } from '../../globals';
import { CustomModal,Input, Button, IconButton } from '../../components/common';
import { Styles } from './style';
import { HandleValidation } from '../../schemavalidation';


interface Props{
    shopModal:boolean;
    closeModal:()=>void;
}

export const SignUp: React.FC<Props> = ({shopModal,closeModal}) => {
   const [userName,setUserName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

   const [emailTextField,setEmailTextField]=useState('Email');
   const [userNameTextField,setUserNameTextField]=useState('UserName');
   const [passwordTextField,setPasswordTextField]=useState('Password');
   const [errorColor,setErrorColor]=useState(colors.LightBlue);
   const [textColor,setTextColor]=useState(colors.Black);

   useEffect(()=>{
       setEmailTextField('Email');
       setPasswordTextField('Password');
       setUserNameTextField('UserName')
       setErrorColor(colors.LightBlue);
       setTextColor(colors.Black)
   },[shopModal]);

   const onSubmit=()=>{
     const errs = HandleValidation({email,password});
    if (errs) {
        setEmailTextField(errs?.email || 'Email');
        setPasswordTextField(errs?.password || 'Password');
        setUserNameTextField(errs.userName || 'UserName')
        setErrorColor(colors.Red);
        setTextColor(colors.Red)
      return;
    }
     closeModal();
   }
 return(
     <CustomModal
         visible={shopModal}
         onClose={closeModal}>
         <View style={Styles.Container}>

             <TouchableOpacity style={Styles.SignUpContainer}>
                 <Text style={[Styles.actionText,{paddingHorizontal: 25}]}>{"Login"}</Text>
             </TouchableOpacity>

             <View style={Styles.FormContainer}>
                 <Text style={Styles.actionText}>{"Creat New account"}</Text>
                 <Input
                     textField={userNameTextField}
                     value={userName}
                     placeholder={"Your userName"}
                     type={'default'}
                     onChangeText={(value) => setUserName(value)}
                     errorColor={errorColor}
                     inputTextColor={textColor}

                 />
                 <Input
                     textField={emailTextField}
                     value={email}
                     placeholder={"Your email"}
                     type={'Email'}
                     onChangeText={(value) => setEmail(value)}
                     errorColor={errorColor}
                     inputTextColor={textColor}

                 />
                 <Input
                     textField={passwordTextField}
                     value={password}
                     placeholder={"Enter password"}
                     type={'Password'}
                     secureTextEntry
                     onChangeText={(value) => setPassword(value)}
                     icon={'eye'}
                     iconColor={colors.LightBlue}
                     errorColor={errorColor}
                     inputTextColor={textColor}

                 />

                <View style={{marginTop:30}}>
                <Button buttonLabel={'Register new account'} onPress={onSubmit}/>
                </View>

                 <View style={Styles.Row}>
                     <View style={Styles.Separate}></View>
                     <Text style={Styles.Label}>{"Login"}</Text>
                     <View style={Styles.Separate}></View>
                 </View>

                 <View style={Styles.SocialRow}>
                     <IconButton buttonIcon={'logo-apple'} />
                     <IconButton buttonIcon={'logo-facebook'} />
                     <IconButton buttonIcon={'logo-google'} />
                 </View>
             </View>  
         </View>

     </CustomModal>
 )

}