import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, DatePicker, List} from '@ant-design/react-native';
import {Container} from './styled';
import {connect} from 'react-redux';
import {actGetCategories} from '../../redux/actions/categories';

function DiscountCode({actGetCategories}) {
  const [state, setState] = useState({value: undefined});

  const onChange = () => {};

  useEffect(() => {}, []);

  return (
    <Container>
      <Text>xxxx</Text>
    </Container>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  actGetCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountCode);
