import React from 'react';
import {StyleSheet} from 'react-native';

import { colors, fonts } from '../../globals';

export const Styles=StyleSheet.create({
   Container:{
       backgroundColor:colors.Yellow,
       flex:1
   },
   Logo:{
       width:'100%',
       height:'40%',
       resizeMode:'contain',
       alignSelf:'flex-end'
   },
   Title:{
       fontSize:22,
       paddingHorizontal:25,
       marginTop:20,
       fontFamily:fonts.RobotoRegular
   },
   Heading:{
    fontSize:32,
    paddingHorizontal:25,
    fontFamily:fonts.BebasNeueRegular
   },
   Paragraph:{
       fontSize: 18,
       paddingHorizontal: 25,
       marginTop: 10,
       color:colors.Black,
       fontFamily: fonts.RobotoRegular,
       lineHeight:30,
       width:'95%'
   },
    LoginContainer: {
        width: '100%',
        height: 90,
        backgroundColor: colors.White,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3, 
        position:'absolute',
        bottom:'15%'
    },
    SignUpContainer: {
        width: '100%',
        height: 150,
        backgroundColor: colors.Black,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 0.16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
        position:'absolute',
        bottom:0   
    },
     actionText:{
        fontSize: 25,
        paddingHorizontal: 25,
        marginTop: 20,
        fontFamily: fonts.BebasNeueRegular
    },

})