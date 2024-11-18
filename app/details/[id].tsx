import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Data deskripsi untuk setiap ID, termasuk gambar
const detailsData: Record<
  string,
  { title: string; description: string; additionalInfo: string; image: string }
> = {
  '1': {
    title: 'Detail Item Pertama',
    description: `Detail item pertama mencakup fitur unggulan dan promosi menarik.`,
    additionalInfo: 'Harga: $1000. Promo hingga akhir bulan.',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+1',
  },
  '2': {
    title: 'Detail Item Kedua',
    description: `Detail item kedua dirancang untuk kebutuhan profesional.`,
    additionalInfo: 'Harga: $1500. Termasuk garansi 2 tahun.',
    image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image+2',
  },

};

export default function Details() {
  const { id } = useLocalSearchParams();

  // Validasi tipe ID menjadi string (mengambil elemen pertama jika berbentuk array)
  const validId = Array.isArray(id) ? id[0] : id;

  // Ambil data berdasarkan ID yang valid
  const detail = validId && detailsData[validId] ? detailsData[validId] : null;

  if (!detail) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deskripsi Tidak Ditemukan</Text>
        <Text style={styles.description}>
          Maaf, halaman ini masih tahap pengerjaan
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: detail.image }} style={styles.image} />
      <Text style={styles.title}>{detail.title}</Text>
      <Text style={styles.description}>{detail.description}</Text>
      <Text style={styles.additionalInfo}>{detail.additionalInfo}</Text>
    </ScrollView>
  );
}

// Konfigurasi Header dengan Judul "Kembali"
Details.options = {
  headerTitle: 'Kembali',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'left',
  },
  additionalInfo: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#555',
  },
});
