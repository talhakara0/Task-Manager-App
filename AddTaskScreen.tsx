import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Switch
} from 'react-native';

export default function AddTaskScreen({ navigation, route }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleAddTask = () => {
        if (!title.trim()) return;

        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            dueDate,
            completed
        };

        route.params.onAddTask(newTask);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Yeni Görev Ekle</Text>

            <Text style={styles.label}>Başlık *</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Görev başlığı girin"
            />

            <Text style={styles.label}>Açıklama</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="İsteğe bağlı açıklama"
                multiline
            />

            <Text style={styles.label}>Son Tarih</Text>
            <TextInput
                style={styles.input}
                value={dueDate}
                onChangeText={setDueDate}
                placeholder="örn: 22 Temmuz 2025"
            />

            <View style={styles.switchRow}>
                <Text style={styles.label}>Tamamlandı mı?</Text>
                <Switch value={completed} onValueChange={setCompleted} />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Görevi Ekle</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#F9FAFB' },
    heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    label: { fontSize: 16, marginTop: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top'
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    button: {
        marginTop: 30,
        backgroundColor: '#3B82F6',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
});
