import React from 'react';
import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../globals';

export const Styles = StyleSheet.create({
    Container: {
        backgroundColor: colors.White,
        height: '79.5%',
        bottom: 0,
        position: 'absolute',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    actionText: {
        fontSize: 25,
        marginTop: 20,
        fontFamily: fonts.BebasNeueRegular
    },
    SignUpContainer: {
        width: '100%',
        height: 90,
        backgroundColor: colors.Yellow,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
        
    },
    FormContainer: {
        width: '100%',
        height:'100%',
        backgroundColor: colors.White,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
        marginTop:-22,
        paddingHorizontal: 25,
        
    },
    ForgetText:{
       fontSize: 18,
       marginTop: 25,
       color:colors.Black,
       fontFamily: fonts.RobotoRegular,
       lineHeight:30,
       width:'95%',
       
    },
    Row:{
    flexDirection:'row',
     marginTop:40,
     alignItems:'center',
     alignSelf:'center'
    },
    Separate:{
        height:1,
        backgroundColor:colors.LightBlue,
        flex:3
    },
    Label: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        color: colors.DarkBlue,
        fontSize: 17
    },
    SocialRow: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'space-between',
        width:'60%'
    },

})