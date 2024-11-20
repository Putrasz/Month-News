import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Modal, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router"; // Untuk navigasi
import { Ionicons } from "@expo/vector-icons"; // Mengimpor ikon
import { Picker } from "@react-native-picker/picker";

// Data berita dengan kategori
const data = [
  {
    id: "1",
    title: "Kerikil Bentuk Donat Berusia 12.000 Tahun Jadi Cikal Bakal Roda",
    description:
      "Kerikil Bentuk Donat Berusia 12.000 Tahun, menjadi Cikal Bakal Roda hingga banyaknya roda saat ini.",
    category: "Pengetahuan",
    image: require("../../assets/images/images_berita/cikalbakalroda.png"),
  },
  {
    id: "2",
    title:
      "Rindu Prabowo Ingin Pulang ke Indonesia di Tengah Lawatan Mancanegara",
    description:
      "Momen Presiden Prabowo Memulai Lawatan Perdana ke Luar Negeri (Foto: ANTARA FOTO/MUHAMMAD ADIMAJA)",
    category: "Politik",
    image: require("../../assets/images/images_berita/prbw.png"),
  },
  {
    id: "3",
    title: "Duh, Mohamed Salah Dianggap Bukan Kelas Dunia",
    description:
      "Liverpool - Eks pemain Watford, Troy Deeney, mengomentari performa Mohamed Salah di Liverpool. Menurutnya Si Raja Mesir belum berada di level dunia.",
    category: "Olahraga",
    image: require("../../assets/images/images_berita/salah.jpg"),
  },
  {
    id: "4",
    title:
      "UEFA Nations League: San Marino Cetak Sejarah Perdana Menang Tandang",
    description:
      "Vaduz - Tim rangking terbawah FIFA, San Marino, mencetak sejarah di kandang Liechtenstein. La Serenissima untuk pertama kalinya dalam sejarah memenangkan laga tandang.",
    category: "Olahraga",
    image: require("../../assets/images/images_berita/sanmarino.png"),
  },
  {
    id: "5",
    title: "McTominay Tak Menyesal Tinggalkan MU",
    description:
      "Scott McTominay tak menyesali keputusannya hengkang dari Manchester United. Ia memilih bergerak maju dan melanjutkan hidup bersama Napoli.",
    category: "Olahraga",
    image: require("../../assets/images/images_berita/mcto.png"),
  },
  {
    id: "6",
    title:
      "Bek Arab Saudi Ini Tak Takut Intimidasi Suporter Indonesia di SUGBK",
    description:
      "Laga Indonesia vs Arab Saudi digelar di SUGBK nanti malam. Bek Yasser Al-Shahrani, menegaskan The Green Falcons tak takut intimidasi suporter lawan.",
    category: "Olahraga",
    image: require("../../assets/images/images_berita/arab.png"),
  },
  {
    id: "7",
    title: "Mengenal Perforasi, Lubang-lubang Kecil di Prangko",
    description:
      "Ilustrasi Apa nama komponen lubang-lubang kecil di sisi prangko? Namanya perforasi.",
    category: "Pengetahuan",
    image: require("../../assets/images/images_berita/prangko.png"),
  },
  {
    id: "8",
    title: "Cara Dinasti Abbasiyah Mengembangkan Ilmu Pengetahuan",
    description:
      "Daulah Abbasiyah merupakan khalifah ketiga setelah masa Nabi Muhammad, yang didirikan oleh keturunan dari paman Nabi, yakni Abbas bin Abdul-Muttalib.",
    category: "Pengetahuan",
    image: require("../../assets/images/images_berita/daulah.jpg"),
  },
  {
    id: "9",
    title: "Manfaat Minum Wedang Jahe di Pagi Hari, Termasuk Naikkan Mood",
    description: "Ternyata minum wedang jahe di pagi hari ada manfaatnya loh!",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/jahe.jpg"),
  },
  {
    id: "10",
    title: "Apakah Jus Nanas Bisa Menurunkan Kadar Gula? Berikut Penjelasannya",
    description:
      "Buah nanas memiliki kandungan gula dan karbohidrat alami yang dapat meningkatkan kadar gula darah. Namun, apakah jus nanas bisa menurunkan kadar gula?",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/nanas.jpg"),
  },
  {
    id: "11",
    title:
      "4 Kebiasaan Sederhana yang Bikin Otak Encer, Cegah Pikun di Usia Tua",
    description:
      "Terdapat sejumlah kebiasaan yang dapat berdampak positif pada kesehatan otak.",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/otak.png"),
  },
  {
    id: "12",
    title:
      "Wortel Organik di AS Tercemar E Coli, Picu 1 Warga Tewas-Puluhan Jatuh Sakit",
    description:
      "Satu orang dilaporkan meninggal dan 39 orang jatuh sakit akibat wabah E coli yang terkait dengan wortel organik.",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/wortel.png"),
  },
  {
    id: "13",
    title:
      "Pneumonia pada Anak Bisa Dideteksi dengan Menghitung Napas, Bagaimana Caranya?",
    description:
      "Orang tua perlu mewaspadai apabila anak mengalami gejala seperti napas cepat. Hal ini dikarenakan napas cepat bisa menjadi salah satu tanda infeksi pneumonia.",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/suntik.png"),
  },
  {
    id: "14",
    title: "Kata Terawan soal Pentingnya Riset Medis di Indonesia",
    description:
      "Penasihat Khusus Bidang Kesehatan Presiden Terawan Agus Putranto menyinggung soal pentingnya riset medis untuk memajukan dunia kesehatan Indonesia.",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/terawan.png"),
  },
  {
    id: "15",
    title: "Benarkah Kumur Air Garam Bisa Atasi Sariawan?",
    description:
      "Apakah betul sariawan dapat diobati dengan berkumur air garam, Dok? Atau mungkin ada obat lain untuk mengobati sariawan dan bagaimana mencegah agar sariawan tidak berulang?",
    category: "Kesehatan",
    image: require("../../assets/images/images_berita/garam.png"),
  },
  {
    id: "16",
    title: "Menteri Desa PDT Dorong Satu Desa Kembangkan Satu Produk Unggulan",
    description:
      "Menteri Desa PDT mendorong program 'Satu Desa, Satu Produk' untuk memperkuat potensi ekonomi lokal dan mendorong kemandirian desa melalui pengembangan produk unggulan.",
    category: "Politik",
    image: require("../../assets/images/images_berita/desa.png"),
  },
  {
    id: "17",
    title:
      "Polda Metro Jaya dan Kejati Jakarta Digugat, Diduga Hentikan Penyidikan Firli Bahuri",
    description:
      "Polda Metro Jaya dan Kejati Jakarta digugat terkait dugaan penghentian penyidikan kasus Firli Bahuri.",
    category: "Politik",
    image: require("../../assets/images/images_berita/polda.jpg"),
  },
  {
    id: "18",
    title: `Ungkap Banyak Masyarakat Iseng Ikut "Lapor Mas Wapres", Istana: Laporannya Main-main`,
    description: `Kepala Kantor Komunikasi Kepresidenan Hasan Nasbi mengungkapkan, banyak masyarakat yang iseng dalam membuat laporan melalui nomor WhatsApp "Lapor Mas Wapres".`,
    category: "Politik",
    image: require("../../assets/images/images_berita/sodormic.png"),
  },
  {
    id: "19",
    title: "4 Ciri Sosiologi sebagai Ilmu Pengetahuan",
    description:
      "Sosiologi sebagai ilmu pengetahuan memiliki empat ciri utama sebagai ilmu pengetahuan.",
    category: "Pengetahuan",
    image: require("../../assets/images/images_berita/4sosiologi.png"),
  },
  {
    id: "20",
    title: "Hasil Japan Masters 2024: Gregoria Kalah di Final!",
    description:
      "Gregoria Mariska Tunjung kalah di final Japan Masters 2024. Gregoria menyerah di hadapan Akane Yamaguchi.",
    category: "Olahraga",
    image: require("../../assets/images/images_berita/gregoria.png"),
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalVisible, setModalVisible] = useState(false);

  // Fungsi untuk menyaring berita berdasarkan kategori
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card}>
      {/* Cek apakah gambar lokal atau URL */}
      <Image
        source={
          typeof item.image === "string" ? { uri: item.image } : item.image
        }
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Link href={`/details/${item.id}`} style={styles.link}>
        Mau lihat selengkapnya? Klik di sini!
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
              <Picker.Item label="Pengetahuan" value="Pengetahuan" />
              <Picker.Item label="Kesehatan" value="Kesehatan" />
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

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
