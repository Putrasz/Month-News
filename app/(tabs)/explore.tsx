import { StyleSheet, Image, ScrollView, View, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

export default function TabTwoScreen() {
  return (
    <LinearGradient
      colors={["#ffffff", "#f3f4f6", "#e0e7ff"]} // Gradien dari putih ke biru muda
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Image */}
        <Image
          source={require("../../assets/images/icon.png")} // Menggunakan gambar lokal
          style={styles.headerImage}
          resizeMode="contain"
        />

        <ThemedText style={styles.title}>Selamat Datang di Aplikasi Saya</ThemedText>

        <ThemedText style={styles.description}>
          Aplikasi ini menyajikan berita terkini yang tentunya ditampilkan dengan
          antarmuka yang friendly.
        </ThemedText>

        {/* Divider */}
        <View style={styles.divider} />

        <ThemedText style={styles.sectionTitle}>Fitur</ThemedText>
        <ThemedText style={styles.description}>
          - Berita Terkini: Menyajikan berita terbaru dari berbagai bidang dan
          kategori.{'\n'}
          {'\n'}- Filter Kategori: Pengguna dapat memilih kategori berita yang
          mereka inginkan, seperti Olahraga, Politik, Teknologi, dan lainnya.{'\n'}
          {'\n'}- Navigasi Mudah: Navigasi antar halaman aplikasi sangat mudah
          dengan penggunaan ikon dan tombol yang sederhana.{'\n'}
          {'\n'}- Detail Berita: Pengguna dapat melihat detail dari setiap
          berita, dengan deskripsi lengkap dan gambar yang mendukung.{'\n'}
        </ThemedText>

        {/* Divider */}
        <View style={styles.divider} />

        <ThemedText style={styles.sectionTitle}>Cara Menggunakan Aplikasi Ini</ThemedText>
        <ThemedText style={styles.description}>
          1. Buka Aplikasi: Setelah membuka aplikasi, pengguna akan melihat
          daftar berita terkini.{'\n'}
          {'\n'}2. Gunakan Filter: Klik ikon filter di pojok kanan atas untuk
          memilih kategori berita yang diinginkan.{'\n'}
          {'\n'}3. Lihat Detail: Klik pada "Mau lihat selengkapnya? Klik aja!"
          untuk melihat detail berita secara lengkap.
        </ThemedText>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,

  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#3b82f6", // Biru terang
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#334155", // Abu gelap
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#1d4ed8", // Biru tua
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb", // Warna abu terang
    marginVertical: 20,
  },
});
