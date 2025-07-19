import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar
} from 'react-native';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Toplantı Hazırlığı' },
        { id: '2', title: 'Rapor Güncellemesi' },
        { id: '3', title: 'UI Testleri' }
    ]);

    // ✅ Yeni görev ekleme fonksiyonu
    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.taskCard}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', { task: item })}
        >
            <Text style={styles.taskTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />
            <View style={styles.container}>
                <Text style={styles.heading}>📋 Görev Listesi</Text>

                {/* 🆕 Görev ekleme butonu */}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() =>
                        navigation.navigate('AddTask', { onAddTask: handleAddTask })
                    }
                >
                    <Text style={styles.addButtonText}>+ Görev Ekle</Text>
                </TouchableOpacity>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Henüz görev yok.</Text>
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
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
        paddingHorizontal: 20,
        paddingTop: 10
    },
    heading: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 10,
        color: '#1F2937'
    },
    addButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#3B82F6',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 20
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    taskCard: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 16,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#3B82F6'
    },
    taskTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#111827'
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#6B7280'
    }
});
