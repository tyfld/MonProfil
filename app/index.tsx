import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
export default function HomeScreen() {
    const router = useRouter();
    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* Photo de profil */}
                <Image source={require('../assets/moi.jpg')} style={styles.avatar} />
                {/* Nom et Titre */}
                <Text style={styles.name}>LE DEVEHAT Tyfenn</Text>
                <Text style={styles.role}>Software Engineer</Text>
                {/* Bouton de contact */}
                <TouchableOpacity style={styles.btn} onPress={() => router.push('/about')}>
                    <Text style={styles.btnText}>Me contacter</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    // Mise en page
    container: { flex:1, backgroundColor:'#FFF', alignItems:'center',justifyContent:'center', paddingHorizontal:24 },
    // Photo de profil
    avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
    // Nom et Titre
    name: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 4 },
    role: { fontSize: 15, color: '#666666', marginBottom: 24 },
    // Bouton de contact
    btn: { backgroundColor: '#E8871A', paddingVertical: 12, paddingHorizontal: 32, borderRadius: 8 },
    btnText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
});
