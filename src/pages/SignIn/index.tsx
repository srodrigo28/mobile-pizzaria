import React, { useState, useContext } from 'react';
import { Pressable, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/authContext';

// Pressable vs TouchableOpacity

export default function SignIn(){
    const { user } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        if(email === '' || password === ''){
            alert('Preencha todos os campos')
            return
        }

        console.log(email)
        console.log(password)
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            {/* <Text style={styles.white}> {user?.email } </Text> */}

            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.input} 
                    placeholder='Digite seu email'
                    placeholderTextColor="#c1c1c1"

                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Digite sua senha'
                    placeholderTextColor="#c1c1c1"
                    secureTextEntry={true}

                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e',
    },
    logo: {
        marginBottom: 18
    },
    InputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#fff',
        backgroundColor: '#101026'
    },
    button:{
        width: '95%',
        height: 40,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3fffa3',
    },
    buttonText:{
        fontSize: 18,
        color: '#1d1d2e',
        fontWeight: 'bold',
    },
    white: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    }   
})