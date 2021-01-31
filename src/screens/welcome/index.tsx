import React, { useState } from 'react';
import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';

import { Styles } from './style';
import { images, colors } from '../../globals';
import { Login } from '../login';
import { SignUp } from '../signUp';


export const Welcome: React.FC = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [signUpVisible, setSignUpVisible] = useState(false);

    return (
        <SafeAreaView style={Styles.Container}>
            <Text style={Styles.Title}>{"tmrw.car"}</Text>
            <Image style={Styles.Logo} source={images.welcomeLogo} />
            <Text style={Styles.Heading}>{"Welcome to tmrw.car "}</Text>
            <Text style={Styles.Paragraph}>{"The best place to sell and buy your car, with all supports for you to have a best choice"}</Text>

            <TouchableOpacity
                style={Styles.LoginContainer}
                onPress={() => {
                    setLoginVisible(true)
                    setSignUpVisible(false)
                }}>
                <Text style={Styles.actionText}>{"Login Now"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.SignUpContainer}
                onPress={() => {
                    setLoginVisible(false)
                    setSignUpVisible(true)
                }}>
                <Text style={[Styles.actionText, { color: colors.White }]}>{"Creat New account"}</Text>
            </TouchableOpacity>
            <Login shopModal={loginVisible} closeModal={()=>setLoginVisible(false)}/>
            <SignUp shopModal={signUpVisible} closeModal={()=>setSignUpVisible(false)}/>
        </SafeAreaView>
    )

}