import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Digunakan untuk mengambil parameter URL

// Data deskripsi untuk setiap ID, termasuk gambar dan informasi lainnya
const detailsData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "1": {
    title: "Kerikil Bentuk Donat Berusia 12.000 Tahun Jadi Cikal Bakal Roda",
    description: `Jakarta - Para arkeolog di Israel mengidentifikasi kerikil berusia 12.000 tahun yang diperkirakan merupakan salah satu contoh paling awal teknologi roda yang pernah ditemukan.
Menurut penelitian yang diterbitkan Rabu,13 November 2024 di jurnal PLOS One, kerikil-kerikil ini berbentuk seperti donat, yang mungkin merupakan lingkaran poros. Sekitar 100 lingkaran spindel tersebut merupakan kerikil berlubang yang memungkinkan tongkat dimasukkan untuk memudahkan pemintalan tekstil menggunakan rami atau wol.

"Koleksi kumparan spindel ini merupakan contoh paling awal manusia menggunakan rotasi dengan alat berbentuk roda," tulis para arkeolog dalam sebuah pernyataan, dikutip dari Live Science.

Kumparan ini, menurut para peneliti, mungkin telah membuka jalan bagi teknologi rotasi selanjutnya, seperti roda pembuat tembikar dan roda kereta, yang sangat penting bagi perkembangan peradaban manusia awal.

"Meskipun kerikil berlubang tersebut sebagian besar tetap berada dalam bentuk alaminya yang tidak dimodifikasi, bentuk dan fungsinya menyerupai roda: objek bundar dengan lubang di tengahnya yang terhubung ke poros yang berputar," tutur Talia Yashuv, mahasiswa pascasarjana di Hebrew University of Jerusalem's Institute of Archaeology dan salah satu penulis makalah tersebut.

Para arkeolog sepakat bahwa roda diciptakan sekitar 6.000 tahun yang lalu, meskipun asal-usulnya yang pasti tidak diketahui. Untuk menyelidiki apakah kerikil tersebut merupakan 'teknologi rotasi' awal, Yashuv dan rekan penulis studi Leore Grosman, seorang profesor arkeologi prasejarah di Institute of Archaeology, menganalisis lebih dari 100 kerikil batu kapur berlubang, yang beratnya berkisar antara 1 gram hingga 34 gram.

Kerikil-kerikil itu ditemukan dalam penggalian sebelumnya di sebuah situs yang oleh para arkeolog disebut 'Nahal Ein Gev II.' Situs itu terletak di Israel utara, sekitar 2 kilometer di sebelah timur Laut Galilea. Situs itu berasal dari sekitar 12.000 tahun yang lalu, sebelum orang-orang di wilayah itu mempraktikkan pertanian dalam skala besar.

Tim tersebut menggunakan teknologi pemindaian 3D untuk membuat model virtual kerikil yang terperinci. Hal ini memungkinkan para arkeolog menganalisis kerikil pada tingkat detail yang tidak dapat dilihat oleh mata manusia. Mereka menemukan bahwa sebagian besar kerikil memiliki lubang yang dibor di bagian tengahnya.

Tim meneliti beberapa kemungkinan penggunaan kerikil. Misalnya, mereka mempertimbangkan apakah kerikil tersebut bisa jadi manik-manik. Namun, manik-manik sering kali diukir menjadi bentuk yang presisi, cenderung ringan, dan biasanya tidak melebihi 2 gram, sehingga penggunaan kerikil ini tidak mungkin.

Para peneliti juga menemukan bahwa kerikil tersebut tidak mungkin digunakan sebagai pemberat ikan, karena tidak ada contoh pemberat ikan lain dari masa yang sangat awal. Mereka juga mencatat bahwa pemberat ikan awal cenderung lebih besar dan terbuat dari bahan yang lebih berat daripada batu kapur.

Untuk melihat apakah kerikil tersebut bisa jadi merupakan gulungan benang, tim tersebut membuat replika kerikil yang tepat menggunakan pemindaian 3D dan meminta Yonit Crystal, seorang ahli dalam pembuatan kerajinan tradisional, menggunakannya untuk memintal tekstil.

Dengan sedikit latihan, Crystal mampu memintal tekstil secara efektif, dan menemukan bahwa rami lebih mudah diolah daripada wol. Tim menyimpulkan bahwa sebagian besar kerikil tersebut kemungkinan digunakan sebagai gulungan poros, jenis awal teknologi roda dan poros.

Temuan tim ini penting, kata Alex Joffe, seorang arkeolog yang telah melakukan banyak penelitian di bidang arkeologi prasejarah di wilayah tersebut dan merupakan direktur urusan strategis untuk Association for the Study of the Middle East and Africa.

"Hasil eksperimen memang menunjukkan batu berlubang digunakan sebagai poros putar," kata Joffe, yang tidak terlibat dalam penelitian ini.

"Kemungkinan besar rami dipintal dalam jumlah kecil untuk digunakan dalam teknologi baru lainnya seperti tas dan tali pancing, yaitu metode penyimpanan dan penghidupan baru," kata Joffe.

"Jika gulungan spindel digunakan untuk menciptakan metode penyimpanan baru, maka implikasi teknologinya mungkin lebih besar daripada yang disarankan oleh para penulis," kata Joffe.

Yorke Rowan, seorang profesor arkeologi di University of Chicago, juga memuji penelitian tersebut. "Menurut saya ini adalah analisis yang hebat, menyeluruh dan meyakinkan," kata Rowan.

"Karena ini masih sangat awal, saya rasa penilaian bahwa ini adalah titik balik penting dalam pencapaian teknologi cukup beralasan," kata Rowan.

Namun, Carole Cheval , seorang peneliti dengan keahlian dalam tekstil prasejarah yang merupakan peneliti asosiasi di laboratorium arkeologi yang dikenal sebagai Cultures and Environment, Prehistory, Antiquity, Middle Ages (CEPAM) di Prancis, mencatat bahwa temuan tersebut bukanlah bukti tertua dari teknologi seperti roda.

"Objek yang disajikan dalam artikel ini kemungkinan besar adalah pusaran spindel. Sesungguhnya, hipotesis ini bukan hipotesis asli dan objek serupa lainnya, beberapa di antaranya lebih tua, telah dipublikasikan," ujarnya.`,
    image: require("../../assets/images/images_berita/cikalbakalroda.png"), // Gambar lokal
  },
  "2": {
    title: "Politik Internasional",
    description: `Jakarta - Presiden Prabowo Subianto tengah melakukan kunjungan kerja sejak awal November 2024 hingga saat ini. Di tengah lawatan mancanegara itu, Prabowo mengaku ingin pulang ke tanah air.
Prabowo mulai bertolak ke luar negeri yakni pada 8 November 2024. Prabowo memulai lawatannya pertama kali dengan berkunjung ke China.

Setelah itu berlanjut ke Washington SC, Amerika Serikat (AS). Dalam kunjungan ke kedua negara itu, Prabowo bertemu masing-masing pemimpin negara yakni Presiden China Xi Jinping dan Presiden AS Joe Biden. Bukan cuma dengan pemimpin negara, di sela agenda itu Prabowo juga bertemu dengan sejumlah tokoh di masing-masing negara.

Selanjutnya, dari Washington DC Prabowo bertolak ke Peru untuk menghadiri Konferensi Tingkat Tinggi Asia-Pacific Economic Cooperation (KTT APEC). Lawatan Prabowo kemudian berlanjut ke Brasil menghadiri KTT G20.

Dari sejumlah negara yang sudah disinggahi itu, Prabowo mengaku kalau ia ingin pulang ke Indonesia. Namun, di sisi lain ia harus memanfaatkan waktu untuk sekalian berkunjung ke sejumlah negara yang mengundangnya.
Hal tersebut diungkap Prabowo dalam keterangan persnya di Brasil, Minggu (17/11). Prabowo awalnya membeberkan kalau dirinya ingin fokus membenahi perekonomian Indonesia di tahun pertama menjadi presiden.

"Tentunya saya fokus sebetulnya bulan-bulan pertama, tahun-tahun pertama, saya harus fokus untuk memperbaiki ekonomi dalam negeri domestik," kata Prabowo seperti dilihat di YouTube Sekretariat Presiden, Senin (17/11/2024).

Oleh karena itu lah, Prabowo merasa harus menghadiri beberapa forum ekonomi internasional. Terlebih usai dirinya dilantik, dalam waktu yang berdekatan ada penyelenggaraan KTT APEC dan KTT G20.

Prabowo memanfaatkan waktu untuk sekalian berkunjung ke negara lain. Di semua negara yang dikunjungi, Prabowo membahas seputar ekonomi.

"Kebetulan begitu saya dilantik ada G20, ada APEC, jadi saya harus datang dan juga karena G20 dan APEC itu berdekatan dan jauh, sekalian saya manfaatkan mampir ke beberapa negara, Tiongkok, Amerika," ujarnya.

Prabowo lalu menyebut setelah dari Brasil, ia akan melanjutkan lawatan ke Inggris. Ia lantas mengungkap rencana berkunjung ke beberapa negara di Timur Tengah.

"Nanti pulang dari sini (G20), saya akan ke Inggris untuk ketemu bicara masalah ekonomi juga, kemungkinan-kemungkinan kita bisa narik investasi. Dan dari situ, saya juga akan mampir ke Timur Tengah, berapa negara di Timur Tengah," ujarnya.

Perihal ini, Prabowo mengatakan akan melihat dulu kesesuaian waktu. Meski begitu, ia mengaku kalau sebenarnya ingin pulang ke tanah air.

"Hanya kita lihat apakah tanggalnya cocok atau tidak. Tapi saya ingin segera pulang sebetulnya," ujarnya.

China
Prabowo melawat ke luar negeri untuk pertama kalinya setelah menjabat sebagai presiden. Negara pertama yang dikunjungi ialah China.
Selama di China, Presiden Prabowo bertemu dengan Presiden China Xi Jinping, Perdana Menteri Li Qiang, dan Ketua Kongres Rakyat Nasional Zhao Leji i Balai Besar Rakyat pada Sabtu (9/11).
Dalam pertemuan tersebut, dibahas sejumlah langkah untuk memperkuat kerja sama di antara kedua negara di bidang ekonomi, kesehatan, ataupun pendidikan.
Prabowo juga menghadiri jamuan makan malam di lokasi yang sama. Sementara pada Minggu (10/11), Presiden Prabowo menghadiri Indonesia-China Business Forum 2024 dengan agenda penandatangan nota kesepahaman (MoU) antara perusahaan Indonesia dan China di bidang ketahanan pangan, ketahanan energi, hilirisasi, energi terbarukan, manufaktur canggih, dan kesehatan.

Amerika Serikat
Prabowo kemudian melanjutkan lawatannya ke Amerika Serikat (AS) dan bertemu dengan Presiden AS Joe Biden. Pertemuan itu digelar di Gedung Putih, Washington DC. Sejumlah hal dibahas dalam pertemuan tersebut.
Pertemuan itu digelar di Oval Office, Gedung Putih, Selasa (12/11) pukul 14.09 waktu setempat. Biden mengatakan pertemuannya dengan Prabowo itu sekaligus memperingati 75 tahun hubungan diplomatik Indonesia dan AS.
"Hari ini, saya duduk bersama Presiden Subianto dari Indonesia untuk memperingati 75 tahun hubungan diplomatik antara kedua negara," kata Biden.
Biden mengungkap dirinya membahas sejumlah hal dengan Prabowo. Salah satunya upaya memperkuat kemitraan Indo-Pasifik bebas terbuka dengan ASEAN sebagai pusatnya.
"We discussed continuing to strengthen our partnership, first by advancing a free and open Indo-Pacific with ASEAN at its center. (Kami membahas upaya untuk terus memperkuat kemitraan, pertama dengan memajukan Indo-Pasifik yang bebas dan terbuka dengan ASEAN sebagai pusatnya)," ujar Biden.
Prabowo menyebut Amerika Serikat adalah teman yang sangat baik bagi Indonesia. AS, kata Prabowo, telah banyak membantu perjuangan kemerdekaan Indonesia.
"Amerika Serikat bagi kami adalah teman yang sangat baik. Amerika Serikat mendukung kami dalam perjuangan kemerdekaan dan membantu kami berkali-kali saat kami membutuhkannya," kata Prabowo.
Prabowo menekankan komitmen untuk terus memperkuat kerja sama Indonesia-AS. "Oleh karena itu, saya akan bekerja keras untuk memperkuat hubungan Indonesia-Amerika Serikat," kata Prabowo.

Peru
Negara ketiga yang dikunjungi oleh Prabowo adalah Peru. Di sana, Prabowo Subianto menghadiri APEC Economic Gala Dinner 2024 bersama dengan para pemimpin dunia di Istana Kepresidenan Peru, Palacio De Gobierno, Lima, Peru.
Adapun dalam dalam rangka forum KTT APEC 2024 ini Prabowo menghadiri sejumlah pertemuan bilateral di antaranya pada hari pertama dengan Presiden Peru Dina Boluarte kemudian juga menyempatkan santap pagi bersama PM Australia Anthony Albanese.
Memasuki hari kedua, Prabowo juga melakukan pertemuan bilateral dengan Presiden Republik Sosialis Vietnam Luong Cuong, PM Canada Justin Trudeau, dan juga PM Selandia Baru Christopher Luxon.

Brasil
Di Brasil, Prabowo baru melakukan pertemuan dengan Sekretaris Jenderal Persatuan Bangsa-Bangsa (PBB) António Guterres pada Minggu (17/11). Prabowo membeberkan rencana Indonesia menuju energi terbarukan.
"Sekjen PBB sangat menghargai sikap Indonesia dalam berbagai masalah, terutama masalah climate change. Indonesia sangat mendukung upaya-upaya untuk mengambil langkah-langkah mengurangi emisi karbon dan Indonesia memang kita berniat dan kita punya rencana dan kita punya kemampuan untuk benar-benar menuju energi terbarukan renewable energy," kata Prabowo seperti dilihat di YouTube Sekretariat Presiden, Senin (18/11/2024).
Prabowo juga menjelaskan bahwa Indonesia memiliki potensi besar dalam pengembangan energi hijau, termasuk geothermal, hydro, tenaga surya, serta bioenergi. Prabowo pun menyampaikan apresiasi atas dukungan Sekjen PBB terhadap langkah-langkah yang telah diambil Indonesia.
"Indonesia dipandang cukup penting sekarang dan beliau berharap Indonesia terus mengambil sikap yang proaktif dan mendukung," kata Prabowo.

Selain itu, Prabowo juga menghadiri Indonesia-Brazil Business Forum. Prabowo mengungkap keinginan Indonesia menjadi anggora BRICS, aliansi negara ekonomi berkembang yang terdiri dari Brazil, Russia, India, China, dan South Africa.
Forum tersebut mempertemukan para pelaku usaha dari Indonesia dan Brasil untuk membahas peluang kerja sama ekonomi strategis, termasuk di sektor energi, industri, dan kemaritiman. Dalam sambutannya, Prabowo menyoroti banyaknya kesamaan antara Indonesia dan Brasil. Mulai dari sumber daya alam maupun visi strategis untuk masa depan.
"Indonesia dan Brasil adalah negara besar dengan populasi yang besar pula. Kita memiliki sumber daya yang melimpah. Brasil sudah maju dalam industrinya, sementara Indonesia sedang berusaha menyusul melalui industrialisasi. Saya yakin, kita bisa menciptakan sinergi yang baik dan hubungan yang saling menguntungkan," ujar Prabowo.`,
    image: require("../../assets/images/images_berita/prbw.png"), // Gambar lokal
  },
  "3": {
    title: "Duh, Mohamed Salah Dianggap Bukan Kelas Dunia",
    description: `Salah tampil sensasional sejak gabung ke Liverpool pada 2017. Dia sudah bikin 221 gol dan 99 assist dari 366 pertandingan. 221 gol yang dibuat Salah menempatkannya sebagai top skor ketiga Liverpool sepanjang masa. Eks AS Roma itu hanya kalah dari dua legenda The Reds, Ian Rush (339 gol) dan Roger Hunt (263 gol). Gelontoran gol Salah turut berdampak pada prestasi Liverpool. Merseyside Merah dibawanya menjadi juara Premier League hingga Liga Champions.

Ketajaman Salah terus berlanjut bahkan di musim ini. Dia jadi pemain pertama di lima liga top Eropa yang mengumpulkan dua digit gol dan assist, serta turut membawa Liverpool ke puncak klasemen sementara Liga Inggris dan Liga Champions.

Tak ayal, banyak pihak menyebut Salah sebagai salah satu pemain terbaik dunia dengan performa gemilangnya di Liverpool. Pendapat berbeda justru disampaikan Troy Deeney.

Di mata Deeney, Salah bukan pemain kelas dunia karena tak bisa dijadikan model bagi anak-anaknya. Bomber 32 tahun itu disebutnya tak lebih menginspirasi ketimbang winger Real Madrid, Vinicius Junior.

"Argumen saya selama ini adalah bahwa saya tidak menganggapnya pemain kelas dunia, tapi kelas dunia hanyalah pendapat yang berbeda. Spa yang saya pikirkan tentang kelas dunia adalah apakah saya ingin anak-anak saya bermain seperti pemain itu? Itulah yang saya pikirkan tentang kelas dunia," kata Deeney kepada TalkSPORT.

"Jika saya bertanya kepada anak-anak saya yang ingin menjadi penyerang, saya mengatakan saya ingin mereka melihat apa yang dilakukan Vinicius Jr dibandingkan dengan Mohamed Salah," sambungnya.

"Namun gol-gol yang dia [Salah] cetak, ia mencetak banyak sekali gol, dia sangat efektif, tetapi itu hanya pendapat saya. Dia mungkin akan berbalik dan berkata, 'Siapa sih Troy?', dan saya salut kepadanya, tetapi ini hanya pendapat saya," ujarnya soal Mohamed Salah.`,
    image: require("../../assets/images/images_berita/salah.jpg"), // Gambar URL
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
        source={
          typeof detail.image === "string"
            ? { uri: detail.image }
            : detail.image
        }
        style={styles.image}
      />
      <Text style={styles.title}>{detail.title}</Text>
      <Text style={styles.description}>{detail.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: "left",
  },
});
