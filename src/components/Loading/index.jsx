import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Container} from './styled';

function Loading({children, isShowLoading}) {
  return isShowLoading ? (
    <Container>
      <ActivityIndicator size={80} color="#fff" />
    </Container>
  ) : (
    <>{children}</>
  );
}

const mapStateToProps = state => ({
  isShowLoading: state.loading.isShowLoading,
});

export default connect(mapStateToProps)(Loading);
