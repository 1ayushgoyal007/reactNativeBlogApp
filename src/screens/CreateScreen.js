import React,{useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput,Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import ShowScreen from './ShowScreen';

import {FontAwesome}  from '@expo/vector-icons';


const CreateScreen = ({ navigation }) =>{

    const [title,setTitle] = useState('');
    const [content,setContent] = useState("");

    const {addBLogPost}  = useContext(Context);

    return <View>
        <Text style={styles.label} >Enter Title:</Text>
        <TextInput style={styles.inputStyle} value={title} onChangeText={(text)=>setTitle(text)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.inputStyle} value={content} onChangeText={(text)=> setContent(text)} />

        <Button style={styles.button} 
        title="Create BLog"
        onPress={()=>{
            addBLogPost(title, content,()=>{
                navigation.navigate('Index');
            });
        }}
        />
    </View>
}



var styles = StyleSheet.create({

    inputStyle:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        margin:10,
        height:50,
        paddingLeft:5
    },
    label:{
        fontSize:20,
        marginLeft:10
    },
    button:{

    }

})

export default CreateScreen;