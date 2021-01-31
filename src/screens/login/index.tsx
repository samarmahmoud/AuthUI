import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { colors } from '../../globals';
import { CustomModal, Input, Button, IconButton } from '../../components/common';
import { Styles } from './style';
import { HandleValidation } from '../../schemavalidation';


interface Props {
    shopModal: boolean;
    closeModal: () => void;
}
export const Login: React.FC<Props> = ({ shopModal, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailTextField, setEmailTextField] = useState('Email');
    const [passwordTextField, setPasswordTextField] = useState('Password');
    const [errorColor, setErrorColor] = useState(colors.LightBlue);
    const [textColor, setTextColor] = useState(colors.Black);

    useEffect(() => {
        setEmailTextField('Email');
        setPasswordTextField('Password');
        setErrorColor(colors.LightBlue);
        setTextColor(colors.Black)
    }, [shopModal]);

    const onSubmit = () => {
        const errs = HandleValidation({ email, password });
        if (errs) {
            setEmailTextField(errs ?.email || 'Email');
            setPasswordTextField(errs ?.password || 'Password');
            setErrorColor(colors.Red);
            setTextColor(colors.Red)
            return;
        }
        closeModal();
    }
    return (
        <CustomModal
            visible={shopModal}
            onClose={closeModal}>
            <View style={Styles.Container}>

                <TouchableOpacity style={Styles.SignUpContainer}>
                    <Text style={[Styles.actionText, { paddingHorizontal: 25 }]}>{"Creat New account"}</Text>
                </TouchableOpacity>

                <View style={Styles.FormContainer}>
                    <Text style={Styles.actionText}>{"Login"}</Text>
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
                    <Text style={Styles.ForgetText}>{"Forgot password?"}</Text>
                    <View style={{ marginTop: 30 }}>
                        <Button buttonLabel={'Login'} onPress={onSubmit} />
                    </View>
                    <View style={Styles.Row}>
                       <View style={Styles.Separate}></View>
                       <Text style={Styles.Label}>{"Login"}</Text>
                       <View style={Styles.Separate}></View>
                    </View>
                    <View style={Styles.SocialRow}>
                     <IconButton buttonIcon={'logo-apple'}/>
                     <IconButton buttonIcon={'logo-facebook'}/>
                     <IconButton buttonIcon={'logo-google'}/>
                    </View>
                </View>
            </View>

        </CustomModal>
    )

}