import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import { signUpRequest } from '~/store/modules/auth/actions';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Full Name"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={setName}
            value={name}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="Type your email"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={setEmail}
            value={email}
            onSubmitEditing={() => nameRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
            returnKeyType="send"
            onChangeText={setPassword}
            value={password}
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit} loading={loading}>
            Register
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already have an account? Sign in here</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
