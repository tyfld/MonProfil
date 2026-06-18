import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AboutScreen() {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:'#FFF' }}>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
                {/* Titre À Propos */}
                <Text style={{ fontSize:28, fontWeight:'bold', marginBottom:16 }}>À propos</Text>
                {/* Description */}
                <Text style={{ fontSize:16, lineHeight:26, color:'#555' }}>
                    Développeur passionné créant ma première application mobile.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
