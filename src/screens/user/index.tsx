import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';

import {OvalButton} from '../../components';
import {requestUser} from '../../redux/user/actions';
import {userSelector} from '../../redux/user/selectors';
import {yellow} from '../../constants';

const User = () => {
   const dispatch = useDispatch();
   const {user, isUserRetreiving} = useSelector(userSelector);

   const handleRequestUser = () => {
      dispatch(requestUser());
   };

   return (
      <View style={styles.container}>
         {isUserRetreiving && <ActivityIndicator size="large" color={yellow} />}
         {!isUserRetreiving && (
            <>
               <Text style={styles.text}>{JSON.stringify(user)}</Text>
               <OvalButton text="Get user" onPress={handleRequestUser} />
            </>
         )}
      </View>
   );
};

export default User;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   text: {
      marginVertical: 20,
      fontSize: 20,
   },
});
