import React,{useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import {Context} from '../context/BlogContext';

const EditScreen = ({ navigation }) =>{
    const {state, editBLogPost} = useContext(Context);

    id = navigation.getParam('id');
    const blogPost = state.find((blogPost)=>blogPost.id === id);

    console.log(blogPost);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return <View>
        <Text style={styles.label} >Edit Title</Text>
        <TextInput 
        style={styles.inputStyle}
        value={title}
        onChangeText={(text)=>setTitle(text)}
        />
        <Text style={styles.label}>Edit Content</Text>
        <TextInput 
        style={styles.inputStyle}
        value={content}
        onChangeText={(text)=>setContent(text)}
        />

        <Button style={styles.button} 
        title="Edit BLog"
        
        onPress={()=>{
            editBLogPost(id, title, content,()=>{
                navigation.navigate("Index");
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
export default EditScreen;