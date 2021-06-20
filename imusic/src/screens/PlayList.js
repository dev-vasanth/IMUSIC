import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
function PlayerList() {
    return (
        <View style={styles.container}>
            <Text>PlayerList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PlayerList
