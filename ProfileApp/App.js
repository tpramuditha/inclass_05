import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // state = data that can change; the screen updates when it changes
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* 1. Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* 2. Body */}
      <View style={styles.body}>
        {/* Avatar + check badge */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200' }}
            style={styles.avatar}
          />
          <Ionicons
            name="checkmark"
            size={46}
            color="#00e000"
            style={styles.badge}
          />
        </View>

        {/* 3. Divider */}
        <View style={styles.divider} />

        {/* 4. Info blocks */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Kamal</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={18} color="#000" />
          <Text style={styles.rowText}>diluka.w@nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={18} color="#000" />
          <Text style={styles.rowText}>{points}</Text>
        </View>
      </View>

      {/* 5. Floating button */}
      <TouchableOpacity style={styles.fab} onPress={() => setPoints(points + 1)}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },

  header: {
    backgroundColor: '#000',
    paddingTop: 45,          // space for the phone status bar
    paddingBottom: 14,
    alignItems: 'center',
  },
  headerTitle: { color: '#fff', fontSize: 16, fontWeight: '500' },

  body: { padding: 16 },

  avatarWrapper: { alignSelf: 'center', marginBottom: 12 },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,        // half of width/height = perfect circle
    backgroundColor: '#fff',
  },
  badge: { position: 'absolute', right: -10, bottom: -8 },

  divider: { height: 1.5, backgroundColor: '#000', marginVertical: 14 },

  label: { fontWeight: 'bold', fontSize: 14, marginTop: 14 },
  value: { fontSize: 14, marginTop: 6, color: '#222' },

  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  rowText: { marginLeft: 8, fontSize: 14, color: '#222' },

  fab: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,            // shadow on Android
  },
});