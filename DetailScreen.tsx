import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity
} from 'react-native';

export default function DetailScreen({ route }) {
    const { task } = route.params;

    // ✅ Durum state’i
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />
            <View style={styles.container}>
                <Text style={styles.pageTitle}>Görev Detayı</Text>

                <View style={styles.card}>
                    <Text style={styles.taskTitle}>{task.title}</Text>

                    <View style={styles.infoSection}>
                        <Text style={styles.label}>📌 Durum:</Text>
                        <Text
                            style={[
                                styles.infoText,
                                { color: isCompleted ? '#10B981' : '#6B7280' }
                            ]}
                        >
                            {isCompleted ? 'Tamamlandı' : 'Devam Ediyor'}
                        </Text>
                    </View>

                    <View style={styles.infoSection}>
                        <Text style={styles.label}>📅 Son Tarih:</Text>
                        <Text style={styles.infoText}>22 Temmuz 2025</Text>
                    </View>

                    {/* ✅ Buton sadece tamamlanmadıysa gösterilsin */}
                    {!isCompleted && (
                        <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
                            <Text style={styles.completeText}>✅ Tamamlandı Olarak İşaretle</Text>
                        </TouchableOpacity>
                    )}

                    {/* ✅ Tamamlandı mesajı göster */}
                    {isCompleted && (
                        <View style={styles.successMessage}>
                            <Text style={styles.successText}>🎉 Bu görev tamamlandı!</Text>
                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F3F4F6'
    },
    container: {
        flex: 1,
        padding: 20
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 20
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4
    },
    taskTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 20
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
        width: 110
    },
    infoText: {
        fontSize: 16,
        color: '#6B7280'
    },
    completeButton: {
        marginTop: 24,
        backgroundColor: '#10B981',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center'
    },
    completeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    successMessage: {
        marginTop: 20,
        padding: 12,
        backgroundColor: '#D1FAE5',
        borderRadius: 10,
        alignItems: 'center'
    },
    successText: {
        color: '#065F46',
        fontSize: 16,
        fontWeight: '500'
    }
});
