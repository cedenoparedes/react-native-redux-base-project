import React, {useState, useContext} from 'react';
import {Alert, Button, TextInput, View, StyleSheet} from 'react-native';
import loginApi from '../api/index';
import GlobalContext from '../context';

const Login = props => {
  const [globalContext, setGlobalContext, contextMiddleware] = useContext(
    GlobalContext,
  );
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    await loginApi(username, password).then(res => {
      if (res.message === 'ok') {
        setGlobalContext(res.token);
        props.navigation.navigate('SuperHeroesList');
      } else {
        Alert.alert('login', `${res.message}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={username => setUserName(username)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={'Login'}
        style={styles.input}
        onPress={() => {
          onLogin();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Login;
