import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router} from 'expo-router';

import { Button } from '@/components/button';
import { Input } from '@/components/input/index';

export default function Index() {
    const [name, setName] = useState<string>('');

    
    function handleNext() {
        router.navigate('/dashboard');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World! { name }</Text>

            <Input onChangeText={setName}/>


            <Button title='Entrar' onPress={handleNext}/>
            {/* <Button title='Sair'/> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 32,
        gap: 16,
    },
    title: {
        fontSize: 24,
        color: "blue",
        fontWeight: "bold",
    },
});
