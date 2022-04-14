import { View, StyleSheet, TouchableOpacity } from "react-native-web"
import React, { useState } from "react"
import { Menu, Divider, Provider } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'; 

import Text from "../Text"
import theme from "../../theme"

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: "row",
    marginVertical: 20,
    flex: "1 1 auto",
    flexShrink: 0,
    zIndex: 10,
  },
  menu: {
    width: '95%',
    marginLeft: 10,
  },
  menuitem: {
    maxWidth: 'none'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  }

})

const SortMenu = ({onPress, sort}) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const getVariables = (value) => {
    let variables;
    switch (value) {
      case 'Latest repositories':
        variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
        return variables;
      case 'Highest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
        return variables;
      case 'Lowest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
        return variables;
      default:
        return variables;
    }
  };

  return (
    <>
      <View style={styles.dropdown}>
        <Provider>
          <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity style={styles.button} onPress={openMenu}>
                  <Text color={theme.colors.textPrimary}>{sort ? sort : 'Latest repositories'}</Text>
                  <AntDesign name='caretdown' size={theme.fontSizes.body} color={theme.colors.textPrimary}/>
                </TouchableOpacity>
                
              }
              style={styles.menu}
              >
              <Menu.Item style={styles.menuitem} onPress={() => {
                onPress(getVariables('Latest repositories'), 'Latest repositories');
                closeMenu()
                }} title='Latest repositories' />
              <Divider />
              <Menu.Item style={styles.menuitem} onPress={() => {
                onPress(getVariables('Highest rated repositories'), 'Highest rated repositories');
                closeMenu()
                }} title='Highest rated repositories' />
              <Divider />
              <Menu.Item style={styles.menuitem} onPress={() => {
                onPress(getVariables('Lowest rated repositories'), 'Lowest rated repositories');
                closeMenu()
                }} title='Lowest rated repositories' />
            </Menu>

        </Provider>
      </View>
    </>

  )
}

export default SortMenu