import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router"; // Untuk navigasi
import { Ionicons } from "@expo/vector-icons"; // Mengimpor ikon
import { Picker } from '@react-native-picker/picker';

// Data berita dengan kategori
const data = [
  {
    id: "1",
    title: "Hasil UEFA Champions League",
    description: "Final UEFA Champions League baru saja berakhir.",
    category: "Olahraga",
    image: require('../../assets/images/images_berita/Hasil_UEFA.png'), // Gambar lokal
  },
  {
    id: "2",
    title: "Politik Internasional",
    description: "Isu politik internasional semakin memanas.",
    category: "Politik",
    image: require('../../assets/images/images_berita/prbw.jpg'), // Gambar lokal
  },
  {
    id: "3",
    title: "Inovasi Teknologi 2024",
    description: "Teknologi baru yang mengubah dunia di tahun 2024.",
    category: "Teknologi",
    image: "https://via.placeholder.com/150", // Gambar URL
  },
  // Berita lainnya
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalVisible, setModalVisible] = useState(false);

  // Fungsi untuk menyaring berita berdasarkan kategori
  const filteredData = selectedCategory === "All" 
    ? data 
    : data.filter(item => item.category === selectedCategory);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      {/* Cek apakah gambar lokal atau URL */}
      <Image 
        source={typeof item.image === "string" ? { uri: item.image } : item.image} 
        style={styles.image} 
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Link href={`/details/${item.id}`} style={styles.link}>
        Mau lihat selengkapnya? Klik aja!
      </Link>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BERITA TERKINI</Text>

      {/* Tempatkan filter di bawah header */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={styles.filterButton} 
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="filter" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Modal untuk memilih kategori */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pilih Kategori</Text>
            <Picker
              selectedValue={selectedCategory}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="Semua Berita" value="All" />
              <Picker.Item label="Olahraga" value="Olahraga" />
              <Picker.Item label="Politik" value="Politik" />
              <Picker.Item label="Teknologi" value="Teknologi" />
            </Picker>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Menampilkan berita yang sudah difilter */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list} // Menambahkan padding dan menghindari overflow
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fd3fc",
    paddingHorizontal: 10,
    overflow: "hidden", // Menghilangkan scrollbar
  },
  header: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  list: {
    paddingVertical: 10, // Mengurangi ruang vertikal
    paddingBottom: 0, // Menghilangkan ruang bawah untuk mencegah overflow
  },
  card: {
    backgroundColor: "#fff7f4",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%", // Pastikan card mengambil lebar penuh
    alignItems: "center", // Gambar dan konten terpusat secara horizontal
  },
  image: {
    width: "100%", // Gambar memenuhi lebar kartu
    height: 200, // Sesuaikan tinggi gambar
    resizeMode: "cover",
  },
  content: {
    padding: 10,
    justifyContent: "center", // Agar konten terpusat secara vertikal
    alignItems: "center", // Menjaga teks tetap di tengah secara horizontal
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center", // Pastikan judul berada di tengah
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    textAlign: "center", // Pastikan deskripsi di tengah
  },
  link: {
    fontSize: 14,
    color: "#007bff",
    textAlign: "center", // Teks link juga di tengah
    padding: 5,
  },
  filterContainer: {
    alignItems: "flex-end", // Posisikan filter ke kanan
  },
  filterButton: {
    backgroundColor: "#007bff",
    padding: 6,
    borderRadius: 50,
    elevation: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  picker: {
    height: 50,
    width: 200,
  },
  closeButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
