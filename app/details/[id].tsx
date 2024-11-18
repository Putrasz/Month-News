import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Digunakan untuk mengambil parameter URL

// Data deskripsi untuk setiap ID, termasuk gambar dan informasi lainnya
const detailsData: Record<
  string,
  { title: string; description: string; additionalInfo: string; image: string }
> = {
  '1': {
    title: 'Hasil UEFA Champions League',
    description: 'Final UEFA Champions League baru saja berakhir.',
    additionalInfo: 'Tanggal: 12 Desember 2024.',
    image: require('../../assets/images/images_berita/Hasil_UEFA.png'), // Gambar lokal
  },
  '2': {
    title: 'Politik Internasional',
    description: 'Isu politik internasional semakin memanas.',
    additionalInfo: 'Isu utama: Pemilu global 2024.',
    image: require('../../assets/images/images_berita/prbw.jpg'), // Gambar lokal
  },
  '3': {
    title: 'Inovasi Teknologi 2024',
    description: 'Teknologi baru yang mengubah dunia di tahun 2024.',
    additionalInfo: 'Fitur: AI, Robotik, dan lainnya.',
    image: 'https://via.placeholder.com/150', // Gambar URL
  },
};

export default function Details() {
  const { id } = useLocalSearchParams(); // Mengambil ID dari URL

  // Validasi ID dan ambil data detail berdasarkan ID
  const validId = Array.isArray(id) ? id[0] : id;
  const detail = validId && detailsData[validId] ? detailsData[validId] : null;

  if (!detail) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deskripsi Tidak Ditemukan</Text>
        <Text style={styles.description}>
          Maaf, halaman ini masih tahap pengerjaan.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tampilkan gambar berdasarkan ID */}
      <Image
        source={typeof detail.image === 'string' ? { uri: detail.image } : detail.image}
        style={styles.image}
      />
      <Text style={styles.title}>{detail.title}</Text>
      <Text style={styles.description}>{detail.description}</Text>
      <Text style={styles.additionalInfo}>{detail.additionalInfo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
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
