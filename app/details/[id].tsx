import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

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
    image: require("../../assets/images/images_berita/salah.jpg"),
  },

  "4": {
    title:
      "UEFA Nations League: San Marino Cetak Sejarah Perdana Menang Tandang",
    description: `Matchday pamungkas Grup D1 UEFA Nations League mempertandingkan Liechtenstein vs San Marino. Duel berlangsung di Rheinpark Stadium, Selasa (19/11/2024) dini hari WIB.

Liechtenstein unggul 1-0 di babak pertama lewat gol Aron Sele. San Marino membalikkan keadaan selepas turun minum dengan mencetak tiga gol.

Lorenzo Lazzari membuat skor berimbang 1-1 di menit ke-46. San Marino membalikkan keadaan via gol Nicola Nanni (penalti) pada menit ke-66 dan Alessandro Golinucci sepuluh menit berselang, sekaligus memastikan kemenangan 3-1.

Kemenangan ini menjadi sejarah baru untuk San Marino. La Serenissima berhasil meraih kemenangan tandang untuk pertama kalinya sejak debut di pentas internasional pada 1987.

San Marino memang jadi salah satu tim nasional dengan performa paling payah di dunia. Mereka sudah kalah 199 kali dari 211 pertandingan yang diikuti.

Ini menjadi kemenangan kedua San Marino di UEFA Nations League 2024/2025. Pasukan Roberto Cevoli sebelumnya menang 1-0 saat menjamu Liechtenstein September lalu.

Dua kemenangan atas Liechtenstein memastikan San Marino finis di puncak klasemen D1 dengan 7 poin, unggul satu angka dari Gibraltar. Tim rangking 210 dunia ini mengunci tiket promosi ke Liga C UEFA Nations League.

Keberhasilan San Marino promosi ke Liga C UEFA Nations League diapresiasi Presiden Federasi Sepakbola San Marino, Marco Tura. Dia bangga dengan apa yang sudah diraih Loreno Lazzari cs.

"Anak-anak telah membuat sejarah malam ini. Sebagai manusia, atlet, sebagai pria mereka telah menunjukkan nilai mereka. Saya menangis bersama anak-anak ini," kata Tura usai laga Liechtenstein vs San Marino.`,
    image: require("../../assets/images/images_berita/sanmarino.png"),
  },

  "5": {
    title: "McTominay Tak Menyesal Tinggalkan MU",
    description: `Gelandang asal Skotlandia itu merapat Italia pada akhir bursa transfer Agustus lalu. Ia ditebus Napoli seharga 25,7 juta Pound. Meski telat bergabung karena musim baru Serie A sudah dimulai, ia nyatanya mampu beradaptasi cepat dengan skema pelatih Antonio Conte.

McTominay sudah tampil 13 kali dan mencetak tiga gol serta dua asis di seluruh ajang. Ia juga dipercaya menjadi starter dalam delapan laga terakhir di liga, membantu Partenopei duduk di puncak klasemen sementara dengan 26 poin hingga giornata ke-12.

Sebagai produk akademi yang sudah bergabung sejak usia 5 tahun, kepergian McTominay jelas disayangkan karena MU kehilangan 'putra daerah'-nya. Namun ia puas dengan jalan hidup yang diambil.

"Jelas ini adalah keputusan besar, tidak dapat disangkal lagi. Itu adalah keputusan besar bagi saya, keluarga, dan teman-teman saya," ujar McTominay kepada The Times.

"Pada saat-saat seperti itu dalam hidup Anda, Anda hanya perlu bilang, 'Apakah saya ingin melakukannya? Tentu saja,' maka lakukanlah. Tidak ada kata mundur. Saya tak pernah menyesali apa pun dalam hidup atau karier saya dan saya terus begitu hingga hari ini."

"Saya ingin karier saya sukses dan saya akan berusaha sekuat tenaga untuk mencoba dan mendorong diri saya sendiri untuk menjadi pemain terbaik dan pribadi terbaik yang saya bisa," jelasnya

Sementara ia bersinar di negeri pizza, MU justru tampil inkonsisten. Mereka menelan empat kekalahan dari sembilan laga awal Liga Inggris dan selalu imbang dalam tiga laga awal Liga Europa, membuat Erik ten Hag kehilangan posisi manajer.

MU kini dilatih Ruben Amorim. Sebelum manajer asal Portugal itu tiba, Ruud van Nistelrooy sudah melakukan 'bersih-bersih' sebagai pelatih interim dengan meraih tiga kemenangan dalam empat laga untuk membawa Setan Merah ke situasi yang lebih kondusif.

Namun sewaktu MU sedang dalam periode negatif, nama McTominay sempat naik sebagai pembahasan. Sejumlah pihak menyayangkan kepergiannya karena dinilai mengganggu keseimbangan lini tengah tim. Namun McTominay tak ambil pusing soal itu.

"Saya tak membaca koran atau media sosial. Itu adalah sesuatu yang sangat saya hindari. Tidak ada alasan bagi saya untuk memperhatikan hal itu," McTominay melanjutkan.

"Masa lalu biarlah menjadi masa lalu. Saya menikmati permainan saya dan hanya ingin melakukan segala upaya untuk mendorong tim saya lebih tinggi di klasemen dan juga melakukan yang terbaik untuk manajer saya di Italia," ia menegaskan.`,
    image: require("../../assets/images/images_berita/mcto.png"),
  },

  "6": {
    title:
      "Bek Arab Saudi Ini Tak Takut Intimidasi Suporter Indonesia di SUGBK",
    description: `Laga Indonesia vs Arab Saudi digelar dalam rangkaian match ke-6 di Grup C Babak Ketiga Kualifikasi Piala Dunia 2026 Zona Asia. Pertandingan dihelat di Stadion Utama Gelora Bung Karno (SUGBK), Senayan, Selasa (19/11/2024) malam WIB.

SUGBK dikenal menjadi markas yang cukup bising bagi lawan. Fans Indonesia kerap mengintimidasi lawan dan memenuhi tribune, yang biasanya mencapai 60-70 ribu suporter datang.

Terakhir Jepang yang merasakan atmosfer itu. Kini Arab Saudi yang akan datang, dan Al-Shahrani menegaskan takkan takut menghadapinya. "Kami terbiasa bermain di depan 60.000 penonton atau lebih, dan kami memiliki pengalaman yang diperlukan dalam menghadapi pertandingan ini," kata pemain Al Hilal itu kepada Saudi Sport Channel.

Arab Saudi kini berada di peringkat 3 Grup C dengan 6 poin. Sementara Indonesia di posisi juru kunci dengan 3 poin. Pada laga pertama di Jeddah, Indonesia mampu menahan Arab Saudi 1-1. Apakah tim Merah Putih bisa meraih hasil lebih baik di SUGBK?`,
    image: require("../../assets/images/images_berita/arab.png"),
  },

  "7": {
    title: "Mengenal Perforasi, Lubang-lubang Kecil di Prangko",
    description: `Perforasi ini berfungsi untuk memudahkan pemisahan prangko dari lembarannya. Ukuran perforasi dapat diketahui dengan odontometer. Disadur dari situs Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia, perforasi dibuat dengan cara melubangi kertas prangko sehingga dapat dengan mudah dipisahkan satu sama lain tanpa merusak prangko itu sendiri.

Prangko sendiri didefinisikan sebagai benda pos berupa tanda pelunasan tarif pelayanan pos yang mengandung ciri-ciri citra budaya bangsa.  Prangko juga bisa diartikan sebagai tanda pembayaran untuk pengiriman surat atau dokumen, biasanya terbuat dari kertas yang dicetak dengan nilai tertentu dan gambar yang khas. Prangko digunakan untuk menunjukkan bahwa biaya pengiriman telah dibayar. Ukuran prangko pertama kali berukuran 25 x 18 mm, kemudian disesuaikan dengan kebutuhan penerbitannya. Perangko terkecil dimiliki Jerman, dengan ukuran 9x9 mm. Sedangkan perangko terbesar pernah dibuat di Amerika Serikat, yaitu 53 x 97 mm. 

Fungsi prangko
Beberapa fungsi prangko, yakni:
-Pembayaran: menjadi bukti bahwa pengiriman surat sudah dibayar.
-Koleksi: banyak orang mengoleksi prangko sebagai hobi, karena banyak desain yang menarik dan bersejarah.
-Dokumentasi: prangko juga sering digunakan sebagai alat dokumentasi dalam penelitian sejarah dan komunikasi.

Komponen prangko
Dilansir dari jurnal Perancangan Media Informasi Buku Ensiklopedia Mengenai Visual Prangko Pada Masa Orde Baru (1966-1980) (2011) karya Ima Amalliyah, berikut komponen prangko: 
-Nama atau identitas negara
-Harga nominal (ada beberapa jenis prangko yang cukup disebut "Air Mail", artinya harga sesuai tarif pos udara saat itu).
-Gambar atau rancangan prangko
-Tipografi atau teks
-Perforasi atau lubang kecil berderet yang berguna untuk mempermudah pemisahan satu prangko dengan lainnya.
-Margin atau ruang kosong antara gambar dan tepi prangko
-Lem bagian belakang prangko
-Watermark untuk melindungi prangko agar tidak mudah palsu
-Perfin atau lubang yang membentuk inisial di bagian tengah prangko
-Berwarna `,
    image: require("../../assets/images/images_berita/prangko.png"),
  },

  "8": {
    title: "Cara Dinasti Abbasiyah Mengembangkan Ilmu Pengetahuan",
    description: `Dinasti Abbasiyah secara resmi berkuasa setelah menggulingkan Bani Umayyah pada tahun 750 dan mempertahankan kekuasaannya selama lima abad, yakni hingga tahun 1258. Pada masa pemerintahannya, Kekhalifahan Abbasiyah dikenal berhasil menjadikan dunia Islam sebagai pusat pengetahuan dunia. Cara-cara Dinasti Abbasiyah membangun peradaban ilmu tidak hanya membawa manfaat bagi umat Islam, tetapi berdampak luas bagi perkembangan ilmu pengetahuan dunia.  Berikut ini cara Dinasti Abbasiyah dalam mengembangkan ilmu.

Melakukan penerjemahan buku-buku asing
Perkembangan ilmu pengetahuan pada masa Abbasiyah dapat berjalan pesat berkat upaya penerjemahan buku-buku dari bahasa asing Khalifah Bani Abbasiyah mendukung dengan memberikan pendanaan untuk penerjemahan buku-buku ilmu pengetahuan dari bahasa asing ke bahasa Arab.
Penerjemahan buku-buku meluas ke berbagai bidang ilmu sesuai dengan perkembangan zaman. Itulah salah satu cara yang dilakukan Dinasti Abbasiyah dalam memajukan pendidikan dan ilmu pengetahuan umat Islam.

Menggalang penyusunan buku
Tidak hanya kegiatan penerjemahan, perkembangan ilmu pengetahuan pada zaman Daulah Abbasiyah didukung pula oleh kegiatan penyusunan dan mengumpulkan buku sebanyak mungkin. Pemerintahan Abbasiyah memandang buku sebagai jendela dunia. Produksi buku di masa Dinasti Abbasiyah dilakukan secara besar-besaran. Hasil penelitian para ulama dikumpulkan dan disusun menjadi buku-buku untuk memastikan ilmu pengetahuan yang terkandung di dalamnya mudah dipelajari dan diakses generasi mendatang. Inisiatif ini memastikan bahwa kemajuan ilmu pengetahuan tidak hanya berlangsung dalam satu generasi, tetapi juga mewariskannya kepada generasi-generasi berikutnya.

Membangun pusat kegiatan ilmu pengetahuan
Kunci kesuksesan dari pengembangan ilmu pengetahuan oleh Dinasti Abbasiyah adalah dengan mendirikan pusat kegiatan ilmu pengetahuan. Kekhalifahan Abbasiyah mendirikan Baitul Hikmah, pusat ilmu pengetahuan sekaligus menjadi perpustakaan. Baitul Hikmah merupakan salah satu perpustakaan terbesar di dunia pada masa keemasan Islam sekaligus simbol kemajuan ilmu pengetahuan di era keemasan Islam. Pasalnya, pada masa itu, perpustakaan beroperasi mirip dengan universitas di zaman modern. Baitul Hikmah digunakan sebagai perpustakaan, pusat penerjemahan teks-teks kuno dari Yunani, dan pusat keilmuan pada masa kejayaan Islam. Di Baitul Hikmah banyak kegiatan penerjemahan teks kuno dari bahasa Yunani, China, serta Sanskerta, ke bahasa Arab dan beberapa bahasa lainnya. Terjemahan itu meliputi berbagai bidang keilmuan, mulai dari matematika, fisika, biologi, astronomi, hingga sastra. Di Baitul Hikmah pula, lahir ilmuwan-ilmuwan Islam yang masyhur, seperti Al-Kindi, Al-Farabi, Al-Ghazali, Al-Khawarizmi, dan Al-Battani. Peran ilmuwan muslim dalam perkembangan ilmu pengetahuan pada masa Daulah Abbasiyah pun sangat besar.`,
    image: require("../../assets/images/images_berita/salah.jpg"),
  },

  "9": {
    title: "Manfaat Minum Wedang Jahe di Pagi Hari, Termasuk Naikkan Mood",
    description: `Apa saja manfaat wedang jahe di pagi hari? Mengutip Times of India dan Very Well Mind,berikut Kompas.com merangkum beberapa manfaat minum wedang jahe di pagi hari:

1. Membantu meningkatkan sistem pencernaan
2. Membantu menurunkan berat badan
3. Meningkatkan sistem kekebalan
4. Membantu mengurangi peradangan dan nyeri
5. Menjaga kesehatan kulit
6. Meredakan depresi dan kecemasan
7. Meningkatkan energi`,
    image: require("../../assets/images/images_berita/jahe.jpg"),
  },

  "10": {
    title: "Apakah Jus Nanas Bisa Menurunkan Kadar Gula? Berikut Penjelasannya",
    description: `Jus nanas tidak bisa menurunkan kadar gula. Pasalnya, kebanyakan jus nanas dibuat dengan tambahan gula dan menghilangkan serat alami di dalamnya sehingga justru bisa meningkatkan kadar gula darah. Selain itu, jus nanas mungkin menggunakan potongan buah yang lebih banyak sehingga memicu gula darah tinggi. Dilansir dari Healthline, setengah gelas jus nanas murni mengandung 16 gram karbohidrat. Serat yang hilang dari jus nanas dapat membuat kandungan gula di dalamnya diserap dengan lebih cepat oleh tubuh. Kadar gula darah akan meningkat hanya dengan minum segelas jus nanas murni, meskipun jus tersebut tidak ditambah gula. Orang-orang dengan gula darah tinggi disarankan untuk mengonsumsi buah nanas segar atau buah nanas yang sudah dibekukan. Pasalnya, buah nanas yang sudah diproses, termasuk dibuat menjadi jus, dapat meningkatkan kadar gula darah dengan lebih cepat.
Minuman penurun gula darah Memilih jenis minuman yang tepat sangatlah penting agar kadar gula darah di dalam tubuh tetap seimbang. Dilansir dari Eating Well, terdapat beberapa jenis minuman penurun gula darah yang bisa dikonsumsi, seperti: Air putih,Kopi hitam tanpa gula, Teh hitam tanpa gula, Teh hijau tanpa gula Susu tanpa lemak atau rendah lemak, Jus tomat.

Selain memilih jenis minuman yang tepat, seseorang yang memiliki gula darah tinggi, atau diabetes, diimbau untuk melakukan pola hidup sehat. Beberapa pola hidup sehat yang bisa dilakukan sebagai cara menurunkan gula darah tinggi, yakni: Makan di jam yang sama setiap hari dan menghindari kebiasaan melewatkan waktu makan, Berolahraga secara teratur setidaknya selama 30 menit sehari, atau selama 150 menit dalam seminggu, Membatasi asupan karbohidrat, dan meningkatkan asupan protein, serta lemak sehat Tidur cukup setiap malam, atau setidaknya selama tujuh jam Mengatasi stres dengan melakukan kegiatan relaksasi, termasuk hobi dan meditasi Memahami apakah jus nanas bisa menurunkan kadar gula sangatlah penting untuk orang-orang dengan kadar gula darah tinggi, atau diabetes.

Daripada minum jus nanas, Anda yang memiliki gula darah tinggi diimbau untuk makan buah segar karena kandungan serat di dalamnya bisa memperlambat penyerapan glukosa di dalam darah. Selain itu, memilih jenis minuman yang tepat dan melakukan pola hidup sehat bisa mendukung keseimbangan kadar gula darah.`,
    image: require("../../assets/images/images_berita/nanas.jpg"),
  },

  "11": {
    title:
      "4 Kebiasaan Sederhana yang Bikin Otak Encer, Cegah Pikun di Usia Tua",
    description: `Dikutip dari India Times, berikut empat kebiasaan yang dapat dilakukan untuk menjaga otak tetap dalam kondisi prima.

1. Membaca Secara Teratur
Membaca merupakan salah satu kebiasaan di pagi hari yang dapat meningkatkan fungsi otak. Membaca dapat merangsang pikiran, menambah pengetahuan, dan meningkatkan kosa kata.

2. Menjaga Rasa Ingin Tahu Tetap Hidup
Rasa ingin tahu merupakan kekuatan pendorong di balik pembelajaran dan inovasi. Pikiran yang ingin tahu selalu mencari informasi baru, mengajukan pertanyaan, dan meksplorasi berbagai perspektif.

3. Tidur Itu Penting
Tidur yang berkualitas sangat penting untuk fungsi otak yang optimal. Selama tidur, otak memproses informasi dari hari itu, mengonsolidasikan ingatan, dan membersihkan racun.

4. Menerapkan Gaya Hidup Sehat
Gaya hidup secara keseluruhan memiliki dampak yang signifikan terhadap kesehatan otak. Aktivitas fisik yang teratur, pola makan yang seimbbang, dan pengelolaan stres, merupakan komponen utama gaya hidup sehat yang mendukung fungsi otak.`,
    image: require("../../assets/images/images_berita/otak.png"),
  },

  "12": {
    title:
      "Wortel Organik di AS Tercemar E Coli, Picu 1 Warga Tewas-Puluhan Jatuh Sakit",
    description: `Diberitakan Strait Times, infeksi tersebut terkait dengan beberapa merek wortel organik utuh dan 'baby carrot' yang ditarik kembali yang dijual oleh Grimmway Farms.
Grimmway Farms, yang berbasis di Bakersfiled, California, telah menarik kembali wortel-wortel tersebut, termasuk wortel organik utuh dan baby carrot yang dijual dalam kemasan dengan berbagai nama merek termasuk 365, Cal-Organic, Nature's Promise, O-Organics, Trader Joe's , dan Wegmans.
CDC memperingatkan konsumen untuk tidak memakan wortel dalam kemasan yang ditarik kembali dan memeriksa lemari es atau freezer mereka dan segera membuang wortel yang sesuai dengan deskripsi tersebut.

Beberapa bulan terakhir telah terjadi beberapa wabah E. coli di Amerika Serikat. Pada bulan Oktober, lebih dari 100 pelanggan McDonald's jatuh sakit akibat wabah E. coli yang terkait dengan bawang bombay. Sementara E. coli pada kacang kenari organik di 19 negara bagian AS membuat puluhan orang yang mengonsumsinya pada bulan April lalu dirawat di rumah sakit.
Gejala infeksi E. coli biasanya dimulai tiga hingga empat hari setelah memakan bakteri itu, yang mencakup kram perut yang parah, diare yang sering kali berdarah, dan muntah-muntah. Orang dengan gejala infeksi E. coli yang parah harus segera mendapat pertolongan medis karena infeksinya bisa memicu kematian.`,
    image: require("../../assets/images/images_berita/wortel.png"),
  },

  "13": {
    title:
      "Pneumonia pada Anak Bisa Dideteksi dengan Menghitung Napas, Bagaimana Caranya?",
    description: `Ketua Satgas Imunisasi Ikatan Dokter Anak Indonesia (IDAI) Prof dr Hartono Gunardi, SpA(K) menjelaskan cara untuk menghitung frekuensi napas anak sebagai indikator potensi pneumonia.

"Kalau mau menentukan pada bayi ada periodic breathing (nafas periodik), jadi kita harus hitung satu menit. Kurang dari dua bulan (frekuensi nafas) 60 kali per menit, kalau dua bulan sampai 12 bulan 50 kali per menit," ujarnya saat ditemui di Jakarta Selatan, Senin (18/11).

"Satu tahun sampai lima tahun 40 kali per menit, di atas lima tahun 30 kali per menit," lanjutnya.

Menurut Prof Hartono, mengukur frekuensi napas pada anak, terutama bayi di bawah dua tahun, perlu ketelitian karena sifat napas bayi yang bisa berfluktuasi.
Orang tua juga perlu memperhatikan apakah ada tarikan dinding dada yang tidak biasa, yang dapat menjadi tanda anak mengalami sesak napas.

"Napasnya cepat, napasnya cepat. Kalau kita napas, napasnya biasa, kalau napas cepat kan seperti orang lari ya, seperti itu," imbuhnya lagi.

Selain menghitung frekuensi napas, Prof Hartono menyarankan agar orang tua mewaspadai tanda pneumonia pada anak lainnya, seperti demam dan batuk. Gejala ini perlu dicurigai lebih lanjut, terutama jika disertai dengan napas cepat.

Tak hanya itu, Prof Hartono juga menekankan pentingnya pemberian nutrisi yang baik dan seimbang. Orang tua disarankan untuk memberikan ASI eksklusif pada bayi dan memastikan asupan nutrisi yang mencakup karbohidrat, lemak, dan protein.

"Kalau dulu ada istilahnya 4 sehat, 5 sempurna, jadi karbohidrat, lemak, protein. Nggak boleh karbohidrat melulu sama lemak, anaknya nggak boleh dikasih MPASI hanya karbohidrat saja, buah-buahan saja, kalau bayi harus seimbang ada protein zat pembangun," tuturnya.

Orang tua juga disarankan untuk menjaga kebersihan diri, rajin mencuci tangan, menjaga kebersihan rumah, serta memastikan adanya ventilasi yang baik untuk menjaga bayi agar tetap sehat dan terhindar dari infeksi.

"Jangan sampai ada polusi di dalam rumah, seperti asap rokok," pungkas Prof Hartono.`,
    image: require("../../assets/images/images_berita/suntik.png"),
  },

  "14": {
    title: "Kata Terawan soal Pentingnya Riset Medis di Indonesia",
    description: `"Jadi memang riset harus kita bangun terus, maka terapi-terapi baru kita mampu wujudkan termasuk bagaimana untuk fertility dan sebagainya," kata Terawan di Jakarta, Senin (18/11/2024).

Terawan mengatakan bahwa dirinya saat ini sedang mencoba untuk mengembangkan metode imunoterapi. Menurutnya metode pengobatan yang berfokus pada sistem kekebalan tubuh (imun) dapat membantu pengobatan penyakit kronis seperti diabetes hingga gangguan inflamasi lainnya.
Sebagai informasi, imunoterapi sering digunakan dalam pengobatan kanker, penyakit autoimun, alergi, dan penyakit lain yang berkaitan dengan gangguan sistem imun.

"Termasuk saya sedang mengembangkan imunoterapi. Imunoterapi adalah sebuah proses dari tindakan medis terhadap sel darah kita, khususnya sel dendritik," kata Terawan.

"Sel dendritik dulu cara pengolahannya termasuk rumit, termasuk dengan teknologi baru mampu kita sederhanakan menjadi lebih simpel. Teknologi itu mampu kita kuasai, meskipun sifatnya individual, tapi sudah bisa kita berikan secara massal. Massal yang individual," lanjutnya.

Menurut Terawan, riset terkait imunoterapi merupakan hal baru yang dilakukan di Indonesia, sehingga diharapkan mampu membantu dunia kesehatan. Menurut Terawan, salah satu tantangan dari riset medis adalah terkait pembiayaan. Dirinya berharap pemerintah dan lembaga terkait mampu memberikan dukungan penuh untuk melakukan riset-riset guna memajukan dunia medis Indonesia, sehingga masyarakat bisa mendapatkan pengobatan yang lebih baik.
`,
    image: require("../../assets/images/images_berita/terawan.png"),
  },

  "15": {
    title: "Apakah betul sariawan dapat diobati dengan berkumur air garam?",
    description: `Sariawan merupakan istilah luka yang terjadi di dalam mulut dan dapat terasa nyeri, hingga mengganggu aktivitas makan, minum, dan berbicara. Umumnya sariawan berukuran kecil, berjumlah sedikit, dan dapat sembuh dengan sendirinya dalam waktu 1-2 minggu.

Oleh karena itu, terkadang tidak dibutuhkan perawatan apapun untuk mengatasinya. Berkumur dengan air garam dapat membantu mempercepat penyembuhan sariawan.

Namun, jika sariawan terasa sangat nyeri apalagi sampai membuat bibir bengkak seperti pada kasus yang dialami, perlu pemeriksaan lebih lanjut terkait kondisi mulutnya.

Selain itu, perlu ada pemeriksaan kesehatan lebih lanjut oleh dokter gigi spesialis penyakit mulut. Ini untuk mengidentifikasi faktor yang memperburuk sariawan.

Pada kasus yang dialami ini, mungkin tidak cukup dengan hanya berkumur air garam saja. Untuk mencegah kekambuhan, perlu dilakukan pemeriksaan terlebih dulu.

- drg Masita Mandasari, PhD, SpPM(K). Dokter gigi spesialis penyakit mulut. RS Pondok Indah - Puri Indah`,
    image: require("../../assets/images/images_berita/garam.png"),
  },
  "16": {
    title: "Menteri Desa PDT Dorong Satu Desa Kembangkan Satu Produk Unggulan",
    description: `Sumber daya alam (SDA) yang melimpah di desa-desa Indonesia menjadi kunci penting dalam mewujudkan ketahanan pangan, ketahanan energi, serta mendukung misi swasembada pangan yang dicanangkan oleh Presiden Republik Indonesia (RI) Prabowo Subianto. Untuk itu, Menteri Desa, Pembangunan Daerah Tertinggal (Mendes PDT) Yandri Susanto mendorong setiap desa mengembangkan satu potensi lokal yang dapat dijadikan produk unggulan, guna mendukung berbagai program strategis nasional. "Jika di desa ada potensi jagung, silakan kembangkan jagung. Jika ada sagu, manfaatkan sagu. Kalau ada ubi-ubian, ya manfaatkan ubi-ubian," ujarnya dalam siaran pers yang diterima Kompas.com, Selasa (19/11/2024). Baca juga: Sarasehan Nasional Dit. KMA Perkuat Jaring Kerja Sama Penghayat Kepercayaan di Indonesia Pernyataan tersebut disampaikan Yandri dalam acara Sarasehan bersama Penjabat (Pj) Gubernur Sulawesi Selatan (Sulsel) Zudan Arif Fakhrulloh saat menginap di salah satu rumah warga Desa Biringala, Kecamatan Barombong, Kabupaten Gowa, Provinsi Sulsel, Senin (18/11/2024). Pada kesempatan itu, ia juga menekankan pentingnya mengembangkan sektor peternakan.

"Jika ada peternak telur, kembangkan usaha telur. Kalau ada potensi ikan, manfaatkan ikan," imbuh Yandri. Ia menjelaskan, sejauh ini pihaknya telah menggandeng berbagai pihak untuk mengoptimalkan potensi desa di seluruh Indonesia.

Meski demikian, Yandri juga mengingatkan agar masyarakat desa menjaga pelestarian lingkungan dan revitalisasi lahan, sehingga kekayaan alam tersebut bisa terus dinikmati oleh generasi sekarang dan mendatang. "Kami tidak bekerja sendirian dalam hal ini. Kami telah melakukan kolaborasi dan memo of understanding (MoU) dengan berbagai kementerian terkait, seperti Kementerian Pertanian (Kementan) dan Kementerian Sosial (Kemensos)," tuturnya. Sebagai informasi, dalam kegiatan tersebut, juga dihadiri oleh Bupati Gowa Adnan Purichta Ichsan, pejabat tinggi pratama di lingkungan Menteri Desa, Pembangunan Daerah Tertinggal (Kemendes PDT), serta sejumlah tenaga ahli pendamping profesional tingkat Provinsi Sulsel dan pendamping desa di Kabupaten Gowa.
`,
    image: require("../../assets/images/images_berita/desa.png"),
  },
  "17": {
    title:
      "Polda Metro Jaya dan Kejati Jakarta Digugat, Diduga Hentikan Penyidikan Firli Bahuri",
    description: `Masyarakat Anti-Korupsi Indonesia (MAKI) bersama Lembaga Pengawasan, Pengawalan, dan Penegakan Hukum Indonesia (LP3HI) menggugat Polda Metro Jaya dan Kejaksaan Tinggi (Kejati) Jakarta ke Pengadilan Negeri (PN) Jakarta Selatan, Senin (11/11/2024). Gugatan yang teregister dengan nomor perkara 116/Pid.Pra/2024/PN JKT.SEL ini dilayangkan lantaran kedua lembaga penegak hukum ini dinilai menghentikan penyidikan mantan Ketua Komisi Pemberantasan Korupsi (KPK), Firli Bahuri. “Sah atau tidaknya penghentian penyidikan,” demikian klasifikasi perkara yang dimuat di Sistem Informasi Penelusuran Perkara (SIPP) PN Jakarta Selatan, Senin (18/11/2024). Baca juga: Berkaca Kasus Firli, DPR Diminta Tak Pilih Pimpinan KPK yang Cacat Etik Dikonfirmasi Kompas.com, Wakil Ketua LP3HI Kurniawan Adi Nugroho menyampaikan, gugatan ini dilayangkan lantaran Polda Metro Jaya dan Kejaksaan dinilai tidak serius menangani perkara dugaan korupsi yang menjerat Firli Bahuri. Sejak Firli Bahuri ditetapkan sebagai tersangka pada tanggal 22 November 2023, eks Ketua Komisi Antirasuah itu belum juga ditahan dan dibawa ke pengadilan.

“Bahwa setelah ditetapkan sebagai tersangka, Firli Bahuri tidak segera ditahan dan hingga permohonan praperadilan a quo diajukan ke Pengadilan Negeri Jakarta Selatan, belum terdapat penyerahan berkas tahap 2 dari termohon I kepada termohon II,” kata Kurniawan. Baca juga: Direktorat Gratifikasi Batal Klarifikasi Kaesang, KPK Sebut Tak Ada Tekanan “Tidak ditahannya Firli Bahuri oleh termohon I, telah menimbulkan kesan bahwa penyidikan terksesan tidak serius dan mudah dipermainkan oleh pihak-pihak yang tidak menginginkan transparansi dalam penanganan perkara,” ucapnya. Terpisah, Pejabat Humas Pengadilan Negeri (PN) Jakarta Selatan Djuyamto membenarkan adanya gugatan tersebut. Ia bilang, perkara ini bakal diperiksa dan diadili oleh hakim tunggal PN Jakarta Selatan, Lusiana Amping. “Sidang perdana, Selasa 26 November 2024 untuk praperadilan Firli Bahuri,” kata Djuyamto.

Sebelumnya, Kapolda Metro Jaya Irjen Karyoto mengungkapkan bahwa kasus yang menjerat Firli Bahuri kini sudah memasuki tahap finishing atau penyelesaian akhir. "Gelar perkara kasus Pak Firli, sudah finishing," kata Karyoto saat diwawancarai di Jakarta Barat, Rabu (30/10/2024) malam. Meskipun demikian, ia belum memberikan penjelasan lebih lanjut mengenai proses gelar perkara tersebut, yang terkait dengan dugaan suap terhadap mantan Menteri Pertanian Syahril Yasin Limpo (SYL).

Sementara itu, diketahui bahwa sebanyak 160 saksi telah diperiksa penyidik dalam kasus dugaan pemerasan dan pertemuan Firli Bahuri dengan Syahrul.

Dalam perkara dugaan pemerasan, di mana Firli berstatus tersangka, Direktorat Reserse Kriminal Khusus (Ditreskrimsus) Polda Metro Jaya telah memeriksa 123 saksi. "Total saksi-saksi yang telah dilakukan pemeriksaan sebanyak 123 saksi. Total ahli yang dilakukan pemeriksaan sebanyak 11 orang,” ungkap Dirreskrimsus Polda Metro Jaya Kombes Pol Ade Safri Simanjuntak saat dikonfirmasi, Selasa (1/10/2024).`,
    image: require("../../assets/images/images_berita/polda.jpg"),
  },
  "18": {
    title: `Ungkap Banyak Masyarakat Iseng Ikut "Lapor Mas Wapres", Istana: Laporannya Main-main`,
    description: `
Hasan menyebut laporan yang disampaikan masyarakat hanya main-main. "Ya karena sistemnya sedang dibuat dan dimatangkan, karena banyak yang iseng ya. Bahkan, dari teman-teman itu banyak yang iseng, hanya sekadar untuk mengucapkan, menyampaikan laporan-laporan main-main," ujar Hasan di Gedung Kriya Bhakti, Jakarta Pusat, Senin (18/11/2024). "Ada juga yang iseng dan mereka ngaku sendiri kan. Di Bocor Alus Tempo mereka ngaku sendiri bahwa mereka isengin laporan itu, yang NGO saja iseng gitulah. Apalagi yang masyarakat juga ada," sambungnya.

Hasan mengatakan, nomor pengaduan Lapor Mas Wapres kini didesain untuk memformat orang-orang yang iseng.
Dengan demikian, kata dia, laporan yang masuk adalah laporan yang valid saja sehingga bisa ditindaklanjuti pemerintah. "Jadi kita membuatkan formatnya supaya yang iseng-iseng ini bisa terfilter. Jadi kita ingin laporan-laporan masyarakat itu benar-benar laporan yang valid sehingga kita bisa tindak lanjuti," imbuhnya. Layanan pengaduan "Lapor Mas Wapres" merupakan inisiatif yang digagas oleh Wakil Presiden (Wapres) Gibran Rakabuming Raka, yang diluncurkan pada Senin, 11 November 2024.

Tujuan utama dari layanan ini adalah memberikan ruang bagi masyarakat Indonesia untuk menyampaikan keluhan dan masalah yang mereka hadapi terkait pelayanan publik. Layanan ini juga diharapkan dapat menjadi saluran efektif bagi warga negara dalam mencari solusi terhadap berbagai masalah administratif dan sosial yang dihadapi masyarakat. Pada hari pertama layanan dibuka, sebanyak 55 aduan diterima dari masyarakat berbagai daerah di Indonesia, mulai dari wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek) hingga Surabaya, Makassar, hingga Manado. Meskipun layanan ini baru dimulai, beragam tanggapan muncul dari masyarakat. Sebagian besar pengadu merasa senang dengan sikap petugas yang ramah dan terbuka.`,
    image: require("../../assets/images/images_berita/sodormic.png"),
  },
  "19": {
    title: "4 Ciri Sosiologi sebagai Ilmu Pengetahuan",
    description: `Sosiologi sebagai ilmu pengetahuan berarti sosiologi merupakan ilmu tentang kehidupan masyarakat.
Dalam buku Sosiologi Korupsi (2019) oleh Anantawikrama Tungga Atmadja, dituliskan bahwa secara umum, sosiologi memiliki ciri sebagai berikut:

1. Sosiologi adalah ilmu atau logos
2. Sosiologi mempelajari masyarakat secara keseluruhan
3. Sosiologi adalah ilmu pengetahuan yang mempelajari masyarakat secara keseluruhan
4. Hubungan antarmanusia atau kelompok bisa berwujud formal atau informal, dan statis atau dinamis.

Lantas, bagaimana ciri-ciri sosiologi sebagai ilmu pengetahuan? Ciri-ciri sosiologi sebagai ilmu pengetahuan Dilansir dari buku Sosiologi Pertanian (2023) karya Amruddin dkk, sosiologi adalah ilmu pengetahuan yang berdiri sendiri, karena telah memenuhi segenap unsur ilmu. Salah satu buktinya, yakni sosiologi termasuk kelompok ilmu sosial yang mempelajari peristiwa atau fakta sosial.

Bukti lainnya adalah sosiologi bersifat umum atau general. Karena sosiologi mengkaji gejala umum yang ada pada masyarakat. Jelaskan ciri ciri sosiologi sebagai ilmu pengetahuan!  Dikutip dari buku Sosiologi Pariwisata (2013) karya Liga Suryadana, menurut Harry M. Johnson, ciri sosiologi sebagai ilmu pengetahuan adalah:

1. Bersifat empiris 
2. Bersifat teoretis 
3. Bersifat kumulatif 
4. Bersifat non-etis`,
    image: require("../../assets/images/images_berita/4sosiologi.png"),
  },
  "20": {
    title: "Hasil Japan Masters 2024: Gregoria Kalah di Final!",
    description: `Gregoria Mariska Tunjung vs Akane Yamaguchi berlangsung di Kumamoto Prefectural Gymnasium, Minggu (17/11/2024) siang WIB. Gregoria kalah 12-21, 12-21.

Gregoria kesulitan di awal-awal gim pertama. Wakil dari Indonesia itu tertinggal 2-5.

Jarak Gregoria dengan Akane makin menjauh di interval dengan skor 11-5. Selepas jeda, Gregoria masih belum bisa meningkatkan permainannya dan tertinggal 8-17.

Akane berhasil menjaga ritme permainannya sampai gim pertama tuntas. Gregoria pun harus menyerah 12-21.

Gregoria sempat memimpin 3-0 di awal gim kedua. Situasi kemudian berbalik drastis dengan Akane meraih enam poin beruntun.

Gregoria berhasil memangkas jarak menjadi 8-9. Namun, beberapa kesalahan terjadi hingga membuat Gregoria tertinggal 8-11 di interval.

Akane masih cukup tangguh selepas jeda. Gregoria kesusahan dalam mengambil poin hingga tertinggal 11-16.

Gregoria akhirnya harus menyerah juga di gim kedua. Unggulan kelima itu tumbang lagi dengan skor 12-21.`,
    image: require("../../assets/images/images_berita/gregoria.png"),
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