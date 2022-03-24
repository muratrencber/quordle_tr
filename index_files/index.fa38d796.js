var Fe = Object.defineProperty,
  he = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var Se = Object.getOwnPropertySymbols;
var We = Object.prototype.hasOwnProperty,
  fe = Object.prototype.propertyIsEnumerable;
var ee = (S, e, E) =>
    e in S
      ? Fe(S, e, { enumerable: !0, configurable: !0, writable: !0, value: E })
      : (S[e] = E),
  Ee = (S, e) => {
    for (var E in e || (e = {})) We.call(e, E) && ee(S, E, e[E]);
    if (Se) for (var E of Se(e)) fe.call(e, E) && ee(S, E, e[E]);
    return S;
  },
  Ae = (S, e) => he(S, ve(e));
var me = (S, e) => () => (e || S((e = { exports: {} }).exports, e), e.exports);
var wS = (S, e, E) =>
  new Promise((t, R) => {
    var L = (n) => {
        try {
          T(E.next(n));
        } catch (A) {
          R(A);
        }
      },
      I = (n) => {
        try {
          T(E.throw(n));
        } catch (A) {
          R(A);
        }
      },
      T = (n) => (n.done ? t(n.value) : Promise.resolve(n.value).then(L, I));
    T((E = E.apply(S, e)).next());
  });
import {
  v as be,
  n as we,
  a as xe,
  c as N,
  b as Le,
  u as WS,
  d as _e,
  e as p,
  p as AS,
  m as Ve,
  s as nS,
  i as r,
  f as g,
  g as D,
  h as w,
  t as c,
  j as NS,
  k as K,
  l as k,
  o as HS,
  q as lS,
  r as OS,
  w as ye,
  x as Te,
  N as te,
  D as $e,
  y as ke,
  R as Ze,
  T as Je,
  L as Xe,
  z as xS,
  A as pe,
  B as ze,
  C as Qe,
  E as qe,
} from "./vendor.7fd09410.js";
var bt = me((ge) => {
  const je = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const R of document.querySelectorAll('link[rel="modulepreload"]'))
      t(R);
    new MutationObserver((R) => {
      for (const L of R)
        if (L.type === "childList")
          for (const I of L.addedNodes)
            I.tagName === "LINK" && I.rel === "modulepreload" && t(I);
    }).observe(document, { childList: !0, subtree: !0 });
    function E(R) {
      const L = {};
      return (
        R.integrity && (L.integrity = R.integrity),
        R.referrerpolicy && (L.referrerPolicy = R.referrerpolicy),
        R.crossorigin === "use-credentials"
          ? (L.credentials = "include")
          : R.crossorigin === "anonymous"
          ? (L.credentials = "omit")
          : (L.credentials = "same-origin"),
        L
      );
    }
    function t(R) {
      if (R.ep) return;
      R.ep = !0;
      const L = E(R);
      fetch(R.href, L);
    }
  };
  je();
  function SE(S = {}) {
    const {
      immediate: e = !1,
      onNeedRefresh: E,
      onOfflineReady: t,
      onRegistered: R,
      onRegisterError: L,
    } = S;
    let I, T;
    const n = (A = !0) =>
      wS(this, null, function* () {
        A &&
          (I == null ||
            I.addEventListener("controlling", (O) => {
              O.isUpdate && window.location.reload();
            })),
          T && T.waiting && (yield we(T.waiting, { type: "SKIP_WAITING" }));
      });
    if ("serviceWorker" in navigator) {
      (I = new be("/sw.js", { scope: "/", type: "classic" })),
        I.addEventListener("activated", (A) => {
          A.isUpdate || t == null || t();
        });
      {
        const A = () => {
          E == null || E();
        };
        I.addEventListener("waiting", A),
          I.addEventListener("externalwaiting", A);
      }
      I.register({ immediate: e })
        .then((A) => {
          (T = A), R == null || R(A);
        })
        .catch((A) => {
          L == null || L(A);
        });
    }
    return n;
  }
  const GS = 2,
    ie = 2,
    rS = GS * ie,
    V = 9,
    IS = 5,
    tS = {
      year: 24 * 60 * 60 * 1e3 * 365,
      month: (24 * 60 * 60 * 1e3 * 365) / 12,
      day: 24 * 60 * 60 * 1e3,
      hour: 60 * 60 * 1e3,
      minute: 60 * 1e3,
      second: 1e3,
    },
    fS = new Date("01/24/2022"),
    ae = tS.day,
    le = 1.3,
    Ne = 0.7,
    eE = 0.1,
    se = !!navigator.vibrate,
    EE =
      [
        "ipad simülatörü",
        "iphone simülatörü",
        "ipod simülatörü",
        "ipad",
        "iphone",
        "ipod",
      ].indexOf(navigator.platform.toLowerCase()) >= 0 ||
      (navigator.userAgent.toLowerCase().includes("mac") &&
        "ontouchend" in document),
    Oe = "standalone" in window.navigator && window.navigator.standalone === !0;
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
  window.matchMedia("(display-mode: standalone)").matches;
  const AE =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ text: "test share text" }),
    tE =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({
        text: "test share text",
        files: [new File([new Blob()], "test.png", { type: "image/png" })],
      }),
    OE = {
      appName: "Dörtle",
      keywords:
        "wordle, quordle, dörtle, oyun, bulmaca, kelime, harfler, oyna, online, çevrim içi, tahmin, zeka oyunu, ikile",
      description:
        "Yeteneklerini Put your skills to the test and solve four Wordles at once! You have 9 guesses to solve all four words. A new Quordle available each day to solve.",
      webAddress: "http://muratrencber.github.io/quordle_tr/",
      noJs: "Bu programı çalıştırmak için JavaScript'i etkinleştirmeniz gerekiyor.",
      error404: "404",
      oops: "Hay aksi!",
      pageNotFound: "Sayfa bulunamadı",
      notFoundText: "Aradığınız sayfa aslında yok.",
      backToDaily: "Günlük Dörtle'ye geri dön",
      close: "Kapat",
      dictionaryUrl: "https://www.google.com/search?q=t%C3%BCrk%C3%A7e+s%C3%B6zl%C3%BCk#dobs=%{word}",
    },
    RE = {
      aria: {
        openMoreOptions: "Daha Fazla Seçenek Menüsünü Aç",
        openPage: "%{page} Sayfasını Aç",
      },
      title: "Dörtle",
      daily: "Günlük",
      practice: "Pratik",
      settings: "Ayarlar",
      dailyStats: "Günlük İstatistikleri",
      practiceStats: "Pratik İstatistikleri",
      donate: "Bağış Yap",
      patreon: "Patreon",
      help: "Yardım",
      moreOptions: "Daha Fazla Seçenek",
    },
    rE = {
      keyboardHeight: "Klavye Yüksekliği (%{height})",
      gameSize: "Oyun Boyutu",
      gameFit: "Ekrana Sığdır",
      gameSquare: "Her Zaman Kare Kutular",
      currentSeed: "Mevcut Pratik Oyun Seed'i",
      gameSeedDescription:
        "Aşağıdaki girdi alanı, pratik oyunu için özel bir seed belirlemenizi sağlar. Bu, aynı seed'i birden fazla kişiyle paylaşmada işinize yarabilir (ki herkes aynı cevaplar ile oynayabilsin).",
      gameSeedInputLabel: "Yeni Pratik Oyunu Seed'i",
      gameSeedInputPlaceholder: "Oyun seed'ini buraya girin!",
      startNewPractice: "Yeni Pratik Oyunu Başlat",
      startNewPracticeWarning:
        "Uyarı: Yeni bir oyun başlatmak kayıp olarak sayılacaktır!",
      copySeedToClipboard: "Oyun Seed'ini Panoya Kopyala",
      copiedSeedToClipboardAlert:
        'Pratik seed\'i "%{seed}" panoya kopyalandı!',
      resetPractice: "Mevcut Pratiği Sıfırla",
      resetWarning: "Uyarı: Sıfırlamak kayıp olarak sayılacaktır!",
      darkMode: "Karanlık Mod",
      colorblindMode: "Renk Körü Modu",
      vibration: "Titreşim",
      switchKeys: "Tuşları Değiştir (%{example})",
      switchKeysInfo:
        "Silme ve Enter tuşlarının yerini değiştirmek için açıp kapat. Şu anda %{left} solda ve %{right} sağda.",
    },
    IE = {
      aria: {
        played: "toplam oynanan %{mode} sayısı %{num}",
        winPercent: "%{mode} kazanma yüzdesi %{num}%",
        numGames: "%{smart_count} oyun |||| %{smart_count} oyun",
        numGuesses: "%{smart_count} tahmin |||| %{smart_count} tahmin",
        numWords: "%{smart_count} kelime |||| %{smart_count} kelime",
        currentStreak: "%{mode} mevcut üst üste kazanma sayısı %{numGames}",
        maxStreak: "%{mode} maksimum üst üste kazanma sayısı %{numGames}",
        winChartBar: "%{numGames} oyun %{numGuesses} kerede tamamlandı",
        winRateRatio: "Kazanma oranı. Kaybetme oranını görmek için tıklayın.",
        lossChartBar: "%{numGames} oyun %{numWords} kaçırmayla kaybedildi",
      },
      dailyStatistics: "Günlük İstatistikleri",
      practiceStatistics: "Pratik İstatistikleri",
      played: "Oynanan",
      winPercent: "Kazanma %",
      currentStreak: `Mevcut Üst Üste`,
      maxStreak: `Maksimum Üst Üste`,
      winDistribution: "Kazanma Dağılımı",
      winDistExplain: "(4 kelimenin hepsinin bulmak için toplam tahmin #)",
      win: "Kazanılan",
      loss: "Kaybedilen",
      lossDistribution: "Kayıp Dağılımı",
      lossDistExplain: "(kaçırılan kelime #)",
    },
    nE = {
      aria: {
        tutorialGuess: "Öğretici tahmini %{guess}.",
        tutorialGuessBoard: "%{num} tahtasında öğretici tahmini %{guess}.",
        quordlePatrons: "Dörtle Bağışçıları",
      },
      tutorial: "Öğretici",
      title: "Dört tane Dörtle'nin hepsini 9 denemede tahmin et.",
      p1: "Her tahmin, 5 harfli geçerli bir kelime olmalı. Enter tuşuna basarak gönder. Her tahminden sonra, kutuların rengi tahmininin kelimeye ne kadar yakın olduğunu göstermek üzere değişecek.",
      examples: "Örnekler",
      exampleWord1: "DEMİR",
      exampleWord2: "YULAF",
      exampleWord3: "ALTIN",
      exampleWord4: "PATEN",
      example1: "D harfi kelimede var ve doğru yerde.",
      example2: "U harfi kelimede var ama yanlış yerde.",
      example3:
        "A, L, T, I, N harfleri kelimede herhangi bir yerde yok. Dörtle'de bir tahmin yazdığında, bulmaya çalştığın dört kelimenin hepsi için o tahmini yapmış oluyorsun. Aradığın dört kelimenin hepsi birbirinden farklı.",
      example4Title: "PATEN tahmini için:",
      example4b1: "Sol üst kelimede harflerden hiçbiri yok.",
      example4b2:
        "Sağ üst kelimede T yanlış yerde ve N doğru yerde.",
      example4b3: "Sol alt kelimede E yanlış yerde.",
      example4b4:
        "Sağ alt kelimede A doğru yerde ve N yanlış yerde.",
      final1: "4 kelimenin hepsini bulmak için 9 hakkın olacak. Bol şans!",
      final2: "Her gün, yeni bir Dörtle açılacak!",
      author: "Orijinal geliştirici: Freddie Meyer. Türkçeye uyarlayan: Murat Rençber. Çeviri: Meriç Bağlayan. Dörtle'nin isim babası: Can Çelik",
      supporters: "Destekçiler",
      patronsThank:
        "Dörtle'yi destekleyen herkese kocaman teşekkürler, ve bağışçılara ekstra teşekkürler!",
      historyTitle: "History of Quordle",
      history: `Quordle'ı Türkçeye çevirmek istedik, ve bunu yaptık. Yaşasın!`,
      twitter: "Twitter",
      github: "Github",
      facebook: "Facebook",
      reddit: "Reddit",
      instagram: "Instagram",
      discord: "Discord",
      twitch: "Twitch",
    },
    LE = {
      aria: {
        blank: "Blank",
        tileNever:
          "'%{letter}' (letter %{column}) tahmin edilemez (tahta tamamlandı)",
        tileFuture: "'%{letter}' (letter %{column}) gelecek bir tahmin",
        tileInvalid: "'%{letter}' (letter %{column}) yanlış bir tahmin",
        tilePresent: "'%{letter}' (letter %{column}) tahmin ediliyor",
        tileDiff: "'%{letter}' (letter %{column}) farklı bir yerde",
        tileNone: "'%{letter}' (letter %{column}) yanlış",
        tileCorrect: "'%{letter}' (letter %{column}) doğru",
        keyboard: "Klavye",
        keyboardRow: "%{row}. klavye satırı",
        key: "'%{letter}' tuşu. %{info}.",
        keyInfoDelimiter: ". ",
        keyNotGuessed: "Tahmin edilmedi",
        keyIncorrectAll: "Bütün oyun tahtalarında yanlış",
        keyDiff: "%{board} tahtasında farklı yerde",
        keyNone: "%{board} tahtasında yanlış",
        keyCorrect: "%{board} tahtasında doğru",
        gameCompleteBanner: "\"Oyun tamamlandı\" afişi",
        shareBanner: "Oyun sonuçları ve paylaşma afişi",
        shareAnswer: "%{board} tahtası için cevap %{word}. %{solved}",
        shareAnswerSolved:
          "%{smart_count} tahminde çözüldü. |||| %{smart_count} tahminde çözüldü.",
        shareAnswerUnsolved: "Çözülmedi.",
        shareAnswerLinkDesc: "Kelime tanımına bağlantı",
      },
      dailyQuordleShare: "Günlük Dörtle",
      practiceQuordleShare: "Pratik Dörtle'si",
      hoursDuration: "%{smart_count} saat içinde |||| %{smart_count} saat içinde",
      minutesDuration:
        "%{smart_count} dakika içine |||| %{smart_count} dakika içinde",
      secondsDuration:
        "%{smart_count} saniye içinde |||| %{smart_count} saniye içinde",
      newPractice: "Yeni Pratik Oyunu",
      nextDaily: "Yeni Günlük Oyun: %{duration}",
      dailyResetTimer: "Günlük %{duration} içinde sıfırlanacak",
      complete: "Dörtle Tamamlandı!",
      soClose: "Az Kalmıştı!",
      betterLuck: "Bir Dahaki Sefere!",
      copiedResults: "Sonuçlar panoya kopyalandı!",
      errorCopy: "Sonuçları panoya kopyalarken hata meydana geldi!",
      share: "Paylaş",
      shareImage: "Görseli Paylaş",
      saveImage: "Görseli Kaydet",
      copyClipboard: "Panoya Kopyala",
      enterKey: "Enter Tuşu",
      backspaceKey: "Silme Tuşu",
      alphabet: "ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ",
      keyboard: `Q W E R T Y U I O P Ğ Ü
A S D F G H J K L Ş İ
bs Z X C V B N M Ö Ç enter`,
      keyboardReversed: `Q W E R T Y U I O P Ğ Ü
A S D F G H J K L Ş İ
enter Z X C V B N M Ö Ç bs`,
    };
  var TE = {
    app: OE,
    header: RE,
    settings: rE,
    stats: IE,
    tutorial: nE,
    game: LE,
  };
  const iE = Ae(Ee({}, TE), {
    blacklist: "",
    wordBank:
      "ABAZA ABONE ABİDE ABİYE ACABA ACELE ACEMİ ACILI ACIMA ADETA ADRES ADSIZ AFAKİ AFGAN AFYON AFİFE AFİLİ AFİŞE AHALİ AHBAP AHENK AHKAM AHLAK AHLAT AHMAK AHVAL AHİZE AHŞAP AJANS AJİTE AKAİT AKBAŞ AKICI AKKOR AKORT AKRAN AKREP AKSAK AKSAM AKSAN AKSON AKTAR AKTÖR AKTİF AKÇIL AKİDE AKŞAM AKŞIN ALACA ALAKA ALARM ALBAY ALBÜM ALENİ ALEVİ ALEYH ALGIN ALICI ALKAN ALKIM ALKIŞ ALKOL ALLIK ALMAK ALMAN ALTIN ALÇAK ALİZE AMADE AMBAR AMBER AMELE AMELİ AMPUL AMPİR AMİGO ANANE ANCAK ANDAÇ ANDIÇ ANEMİ ANGIÇ ANGUT ANKET ANLAM ANLIK ANONS ANTEN ANTET ANTRE ANTİK ANİME APACI APLİK APORT APTAL APİKO ARABA ARABİ ARACI ARAMA ARAZİ ARDIL ARDIÇ ARENA ARGIT ARGON ARIZA ARIZİ ARKIT ARMUT AROMA ARPEJ ARPÇI ARSIZ ARTER ARTIK ARTIM ARTIŞ ARTMA ARTÇI ARİFE ARİZA ARŞIN ARŞİV ASABİ ASHAP ASILI ASKER ASKLI ASLAN ASLEN ASLIK ASMAK ASPUR ASTAR ASTAT ASTIM ASİDE ASİST ATAMA ATARİ ATAŞE ATICI ATILI ATLAS ATLET ATMAK AVANE AVANS AVARE AVDET AVLAK AVUNÇ AVİZE AVŞAR AYDIN AYGIR AYGIT AYIRT AYNEN AYRAN AYRAÇ AYYAŞ AYYUK AZADE AZAMİ AZERİ AZGIN AZILI AZLIK AZMAN AZİZE AÇGÖZ AÇLIK AÇMAZ AĞILI AĞLAK AİDAT AŞAMA AŞARİ AŞAĞI AŞEVİ AŞICI AŞILI AŞIRI AŞKIN AŞLIK AŞMAK AŞURE AŞİNA BACAK BADEM BADİK BAFRA BAGAJ BAGET BAHAR BAHÇE BAHİR BAKAN BAKIM BAKIR BAKIŞ BAKLA BAKMA BAKİR BALAT BALCI BALDO BALET BALIK BALLI BALON BALTA BALYA BALİĞ BAMBU BAMYA BANAL BANDO BANKA BANKO BANMA BANYO BARAJ BARAN BAREM BARET BARIŞ BARIŞ BAROK BARON BARUT BARİZ BASAK BASAR BASEN BASIK BASIM BASIN BASIŞ BASKI BASMA BASTI BASUR BASİT BATAK BATAR BATIK BATIL BATIN BATIŞ BATKI BATMA BATON BATİK BAVUL BAYAN BAYAT BAYIR BAYMA BAZAL BAZEN BAĞCI BAĞIŞ BAĞLI BAŞAK BAŞKA BAŞLI BAŞTA BAŞÇI BEBEK BEDEL BEDEN BEGÜM BEHER BEKAR BEKÇİ BELGE BELKİ BELLİ BEMOL BENCE BENDE BENEK BENGİ BENİZ BERAT BERİL BESTE BESİN BETER BETON BETİK BETİM BEYAN BEYAZ BEYZİ BEYİN BEYİT BEZEN BEŞER BEŞİK BEŞİZ BIDIK BIYIK BIÇAK BIÇIK BIÇKI BLOKE BOBİN BODUR BOHEM BOHÇA BOMBA BOMBE BORAN BORAT BORDA BORDO BORSA BORUK BOYAR BOYNA BOYOZ BOYUN BOYUT BOZCA BOZUK BOZUM BOĞAZ BOĞUM BRANŞ BRAVO BRONZ BRONŞ BUCAK BUDAK BUDUN BUGÜN BUHAR BUKET BUKLE BULGU BULUT BULUŞ BUNAK BURGU BURSA BURUK BURUN BUTLU BUTON BUTİK BUYMA BUZLU BUZUL BUÇUK BUĞRA BUŞON BÖBÜR BÖCEK BÖLGE BÖLME BÖLÜK BÖLÜM BÖLÜT BÖLÜŞ BÖREK BÖYLE BÖĞÜR BÜKÜM BÜLUĞ BÜNYE BÜTAN BÜTÇE BÜTÜN BÜYÜK BÜZGÜ BÜZME BİBER BİBLO BİDON BİLEK BİLET BİLGE BİLGİ BİLME BİLYE BİLİM BİLİR BİLİŞ BİNDİ BİNEK BİNİŞ BİRAZ BİREY BİRİM BİTAP BİTKİ BİTİK BİZON BİÇEM BİÇİM CACIK CADDE CAHİL CAMCI CAMİA CANAN CANLI CANİK CANİP CASUS CEBEL CEBRİ CEBİN CEBİR CEDRE CEDİT CEHRİ CEHİL CEKET CELAL CELBE CELEP CELSE CELİL CEMAL CEMRE CEMİL CENAH CENAP CENUP CENİN CEPHE CEPÇİ CEREN CESET CESUR CESİM CEVAP CEVAZ CEVİR CEVİZ CEZAİ CEZBE CEZVE CEZİR CIBIL CILIZ CIVIK CONTA COŞKU COŞMA COŞUM COŞUŞ CUKKA CUMBA CUNDA CUNTA CUŞİŞ CÜBBE CÜCÜK CÜLUS CÜMLE CÜNÜP CÜRET CÜRUF CÜRÜM CÜSSE CİBRE CİBİN CİCİM CİDAR CİDDİ CİHAN CİHAT CİHAZ CİHET CİLVE CİMRİ CİNAS CİNAİ CİNCİ CİNLİ CİNSİ CİRİM CİRİT CİSİM CİVAN CİVAR CİZRE CİZYE CİĞER DADAY DADAŞ DAHİL DAKİK DALAK DALAN DALGA DALIZ DALIŞ DALLI DALMA DALSI DAMAK DAMAR DAMAT DAMGA DAMLA DARAŞ DARBE DASİT DATÇA DAVAR DAVET DAVUL DAYAK DAĞAR DAİMA DAİMİ DAİRE DEBBE DEBİL DEFNE DEFİN DEGAJ DEKAN DEKAR DEKOR DELGİ DELME DELTA DELİK DELİL DEMCİ DEMEK DEMET DEMEÇ DEMLİ DEMRE DEMİN DEMİR DENEK DENET DENEY DENGE DENLİ DENYO DENİM DENİZ DEPAR DERBİ DERGİ DERME DERYA DERİK DERİN DESEN DESTE DETAY DEVAM DEVCE DEVRE DEVRİ DEVİM DEVİR DEYİM DEYİŞ DEĞER DEĞER DEĞME DEĞİL DEĞİM DEĞİN DEĞİŞ DEİST DEİZM DEŞME DEŞİK DILAK DIĞAN DIŞKI DOBRA DOGMA DOKUZ DOLAK DOLAM DOLAP DOLAR DOLAY DOLGU DOLMA DOLUM DOLUŞ DOMUR DOMUZ DONLU DONMA DONUK DONÖR DORSE DORUK DOSYA DOYGU DOYMA DOYUM DOYUŞ DOZAJ DOZER DOĞAL DOĞAN DOĞAÇ DOĞRU DOĞUM DOĞUŞ DRAJE DRAMA DUACI DUALI DUBAR DUBLE DUDAK DUHUL DULUK DUMAN DUMUR DURAK DURAL DURGU DURMA DURUK DURUM DURUŞ DUTÇU DUVAK DUVAR DUYAR DUYGU DUYMA DUYUM DÖGER DÖKME DÖKÜK DÖKÜM DÖKÜŞ DÖLEK DÖLÜT DÖNEK DÖNEL DÖNEM DÖNER DÖNEÇ DÖNGÜ DÖNÜK DÖNÜM DÖNÜT DÖNÜŞ DÖPER DÖVEÇ DÖVME DÖVÜŞ DÖVİZ DÖŞEK DÖŞEM DÜBEL DÜBEŞ DÜDEN DÜDÜK DÜMEN DÜNKÜ DÜNYA DÜNÜR DÜNİT DÜRME DÜRTÜ DÜRZÜ DÜRZİ DÜRÜM DÜVEL DÜVER DÜZEM DÜZEN DÜZEY DÜZEÇ DÜZGÜ DÜZME DÜĞME DÜĞÜM DÜĞÜN DÜŞES DÜŞEY DÜŞEŞ DÜŞKÜ DÜŞÜK DÜŞÜN DÜŞÜT DÜŞÜŞ DİBEK DİCLE DİDAR DİDİM DİKEL DİKEN DİKEY DİKEÇ DİKME DİKSE DİKTA DİKTE DİKÇE DİKİM DİKİT DİKİZ DİKİŞ DİLEK DİLME DİLSİ DİLİM DİLİŞ DİMAĞ DİNAR DİNCE DİNEK DİNEN DİNGO DİNME DİNİŞ DİPLİ DİREK DİREN DİRİL DİRİM DİRİĞ DİSKO DİTME DİVAL DİVAN DİYAR DİYET DİYEZ DİYOT DİZEK DİZEL DİZEM DİZEY DİZGE DİZGİ DİZME DİZİM DİZİN DİĞER DİŞLİ DİŞÇİ EBCET EBEDİ EBELİ EBLEH ECDAT EDALI EDEBİ EDİNÇ EFDAL EFEKT EFKAR EFLAK EFRAT EFRİZ EFSUN EGALE EGLOG EGZOZ EHVEN EJDER EKLEM EKLER EKMEK EKOSE EKRAN EKSEN EKSER EKSİK EKÜRİ EKİLİ ELBET ELCİK ELDEN ELEJİ ELEME ELLİK ELMAS ELMEK ELVAN ELYAF ELZEM ELÇİM ELİFİ ELİPS EMARE EMAYE EMCEK EMCİK EMLAK EMLİK EMMEÇ EMRAZ EMSAL EMTİA EMVAL EMZİK EMİCİ ENAYİ ENCAM ENDAM ENDER ENEME ENEZE ENFES ENGEL ENGİN ENKAZ ENLEM ENSAR ENZİM ENÖTE EOSEN EPEYİ EPSEM ERBAA ERBAP ERBAŞ ERBİN ERCİŞ ERDEK ERDEM ERGEN ERGİN ERKAN ERKEK ERKEN ERKEÇ ERKLİ ERKİN ERLİK ERMEK ERMİN ERMİŞ EROİN ERVAH ERZAK ERZİN ERİKA ERİME ERİNÇ ESAME ESANS ESASİ ESBAP ESEME ESHAM ESKİL ESKİZ ESLAF ESMEK ESMER ESNAF ESNEK ESPAS ESPRİ ESRAR ESSAH ESTET ESVAP ETENE ETFAL ETKEN ETKİN ETLİK ETMEK ETMEN ETNİK ETRAF ETSEL ETSİZ ETÇİL EVAZE EVCEK EVCİK EVCİL EVDEŞ EVGİN EVHAM EVKAF EVLAT EVRAK EVRAT EVREN EVRİK EVRİM EVSAF EVSİZ EVVEL EVİYE EYLEM EYLÜL EYVAH EYVAN EYYAM EZANİ EZBER EZELİ EZGİN EZGİÇ EZMEK EZİNE EÇHEL EĞLEK EĞMEK EĞMEÇ EĞMÜR EĞRİM EŞARP EŞKAL EŞKİN EŞLEK EŞLİK EŞMEK EŞRAF EŞREF EŞSİZ FACİA FAGOT FAHRİ FAHTE FAHİŞ FAKAT FAKÜL FAKİH FAKİR FALAN FALCI FALEZ FALSO FALYA FANTA FANTİ FANUS FANYA FARAD FARAŞ FARBA FARİL FARİĞ FASET FASIK FASIL FASLI FASON FASİH FATSA FATİH FAUNA FAYDA FAZIL FAZLA FECİR FEDAİ FEHVA FEHİM FEKÜL FELAH FELEK FENER FENNİ FENİK FERAH FERDA FERDİ FERLİ FERMA FERİH FERİK FESAT FESİH FETHA FETVA FETÜS FETİH FETİŞ FEVRİ FEYİZ FIKIH FIKRA FIRIN FIRKA FIRÇA FITIK FITRİ FLAMA FLORA FLORİ FLÖRE FLÖRT FODUL FOKUS FOLYO FONDA FONDÜ FONEM FORMA FOROZ FORSA FORTE FORUM FOSİL FRANK FRAPE FRENK FREZE FRİGO FRİSA FUAYE FUHUŞ FUJER FULAR FULYA FUNDA FURYA FÜNYE FÜSUN FÜTUR FİBER FİDAN FİDYE FİFRE FİGAN FİGÜR FİKRİ FİKİR FİLAN FİLET FİLİZ FİNAL FİNCE FİNİŞ FİRAK FİRAR FİREZ FİRMA FİSKE FİSTO FİTNE FİTRE FİTÇİ FİTİL FİTİN FİYAT FİZİK FİİLİ FİŞEK FİŞLİ GABRO GABYA GABİN GADİR GAFUR GAFİL GALAT GALON GALOP GALOŞ GALİP GALİZ GAMBA GAMET GAMLI GAMZE GARAJ GAROZ GARİP GASİL GAUSS GAVUR GAYDA GAYET GAYRI GAYRİ GAYUR GAYYA GAZAP GAZEL GAZLI GAZOZ GAİLE GAİTA GAŞİY GEBEŞ GEBRE GEDME GEDİK GEDİZ GELEN GELİN GELİR GENEL GENOM GENİZ GENİŞ GEOİT GEREK GEREN GEREÇ GERGİ GERME GERZE GERÇİ GERİM GERİZ GERİŞ GETTO GEVAŞ GEVİŞ GEYVE GEYİK GEYŞA GEZME GEZİŞ GEÇEK GEÇEN GEÇER GEÇME GEÇÇE GEÇİM GEÇİT GEÇİŞ GICIK GICIR GIDIK GIDIM GIPTA GIRLA GIYAP GLASE GNAYS GOCUK GODOŞ GOLCÜ GOLLÜ GONCA GORİL GOTÇA GOTİK GRADO GRENA GROGİ GRİZU GUATR GUDDE GUGUK GULAŞ GULET GURME GURUP GURUR GUSTO GUSÜL GÖBEK GÖBEL GÖBÜT GÖCEN GÖDEN GÖDEŞ GÖKÇE GÖLET GÖLGE GÖMME GÖMÜT GÖNYE GÖNÜL GÖREV GÖRGÜ GÖRME GÖRÜŞ GÖVDE GÖVEK GÖVEL GÖVEM GÖYME GÖZCÜ GÖZDE GÖZER GÖZGÜ GÖZLÜ GÖÇER GÖÇME GÖÇÜK GÖÇÜM GÖÇÜŞ GÖĞÜS GÜBRE GÜBÜR GÜCÜK GÜCÜN GÜDEK GÜDÜK GÜDÜL GÜDÜM GÜFTE GÜLCÜ GÜLEÇ GÜLLE GÜLLÜ GÜLME GÜLÜK GÜLÜŞ GÜMEÇ GÜMÜŞ GÜNAH GÜNCE GÜNEY GÜNEŞ GÜNLÜ GÜPÜR GÜRCÜ GÜREŞ GÜRSU GÜRUH GÜRÜN GÜTME GÜVEN GÜVEN GÜVEÇ GÜZEL GÜZEY GÜZÜN GÜÇLÜ GÜĞÜM GİDER GİDON GİDİŞ GİRAY GİRDİ GİREN GİRME GİRİM GİRİŞ GİTAR GİTME GİYME GİYSİ GİYİM GİYİT GİYİŞ GİZEM GİZLİ GİZİL HABBE HABER HABEŞ HABİP HABİS HACET HACİM HACİR HACİZ HADDE HADIM HADİM HADİS HAFIZ HAFTA HAFİF HAFİK HAFİT HAHAM HAKAN HAKAS HAKEM HAKLI HAKİM HAKİR HALAS HALAT HALAY HALAÇ HALEF HALEL HALEN HALET HALFA HALKA HALUK HALİK HALİM HALİS HALİÇ HAMAK HAMAL HAMAM HAMEL HAMIZ HAMLE HAMSE HAMSİ HAMUR HAMUT HAMİL HAMİŞ HANAK HANCI HANDE HANEK HANGİ HANIM HANUT HANYA HAPAZ HAPÇI HAPŞU HARAM HARAP HARAÇ HARBE HARBİ HAREM HARIM HARIN HARLI HARTA HARİR HARİÇ HASAR HASAT HASBİ HASET HASIL HASIM HASIR HASPA HASSA HASTA HATIL HATIR HATMİ HATTA HATUN HATİF HATİM HATİP HAVAN HAVAS HAVAİ HAVLI HAVLU HAVRA HAVSA HAVUT HAVUZ HAVUÇ HAVVA HAVYA HAVZA HAYAL HAYAT HAYBE HAYCI HAYDA HAYDİ HAYFA HAYIF HAYIR HAYIT HAYIZ HAYLİ HAYTA HAZAN HAZAR HAZCI HAZIM HAZIR HAZNE HAZİN HAÇLI HAİLE HAŞAT HAŞIL HAŞİN HAŞİR HAŞİV HAŞİŞ HECİN HEDEF HEDER HEDİK HEKİM HELAK HELAL HELEN HELKE HELME HELVA HELİK HEMEN HEMPA HEMZE HENÜZ HEPSİ HEREK HERZE HERİF HERİK HESAP HEVES HEYBE HEYET HIMIŞ HIRBO HIRKA HISIM HIYAR HIZAR HIZIR HIZLA HIZLI HIZMA HIŞIM HIŞIR HODAN HODRİ HOKEY HOKKA HONAZ HOPPA HORON HOROZ HORST HOZAN HOZAT HOŞAF HOŞÇA HUKUK HULUL HULUS HUMAR HUMMA HUMOR HUMUS HURDA HURMA HURRA HURUÇ HUSUL HUSUS HUTBE HUYLU HUZUR HÖDÜK HÖYÜK HÜCRE HÜCUM HÜKMİ HÜKÜM HÜLLE HÜLYA HÜNER HÜNSA HÜRLE HÜRYA HÜSÜN HÜYÜK HÜZME HÜZÜN HİCAP HİCAZ HİCRİ HİCİV HİDRA HİDİV HİKEM HİLAF HİLAL HİLAT HİLYE HİMEN HİNDU HİNDİ HİPPİ HİSAR HİSLİ HİSSE HİSSİ HİTAM HİTAN HİTAP HİTİT HİZAN HİZİP ILGAR ILGAZ ILGIN ILICA ILICA IRAMA IRGAT IRKÇI IRMAK ISLAH ISLAK ISLIK ISRAR ISSIZ ISTAR ITLAK ITRAH IZGIN IZRAR IĞDIR IŞIMA IŞKIN IŞTIR JAKAR JAPON JETON JOKER JOKEY JÜPON JİKLE JİLET KABAK KABAN KABIZ KABLO KABUK KABUL KABUS KABZA KABİL KABİN KABİR KADAR KADEH KADEM KADER KADIN KADRO KADÜK KADİM KADİR KADİT KAFES KAFUR KAFİR KAGİR KAHIR KAHPE KAHTA KAHVE KAHYA KAHİL KAHİN KAHİR KAKAO KAKAÇ KAKIM KAKIÇ KAKIŞ KAKMA KAKÜL KALAK KALAN KALAS KALAY KALBİ KALEM KALFA KALIK KALIM KALIN KALIP KALIT KALIŞ KALMA KALÇA KAMER KAMET KAMGA KAMIŞ KAMUS KAMÇI KAMİL KANAL KANAT KANCA KANIK KANIT KANKA KANLI KANMA KANTO KANUN KANİŞ KAPAK KAPAN KAPIŞ KAPLI KAPUT KAPUZ KAPİK KAPİŞ KARAR KARAY KARGA KARGI KARGO KARHA KARIN KARIŞ KARLI KARMA KARNE KARNİ KARST KARUN KARYE KARŞI KASAP KASEM KASET KASIK KASIM KASIR KASIT KASKO KASLI KASMA KASNI KASTİ KASİS KATAR KATIK KATIR KATKI KATLI KATMA KATOT KATRE KATİL KATİP KAVAF KAVAK KAVAL KAVAT KAVGA KAVKI KAVMİ KAVUK KAVUN KAVUZ KAVİL KAVİM KAVİS KAYAK KAYAN KAYAÇ KAYGI KAYIK KAYIN KAYIP KAYIR KAYIT KAYIŞ KAYMA KAYME KAYŞA KAZAK KAZAN KAZAZ KAZIK KAZIL KAZIM KAZMA KAÇAK KAÇAR KAÇIK KAÇIŞ KAÇLI KAÇMA KAÇTA KAĞAN KAĞIT KAĞNI KAİDE KAİME KAŞAR KAŞIK KAŞLI KAŞİF KEBAN KEBAP KEBZE KEBİR KEDER KEFAL KEFEN KEFNE KEFİL KEFİR KEHLE KEKEÇ KEKRE KEKİK KELAM KELEK KELEM KELEP KELEŞ KELLE KELLİ KELİK KEMAH KEMAL KEMAN KEMER KEMİK KENAR KENDİ KENET KENYA KEPEK KEPME KEPÇE KEPİR KERDE KEREM KERKİ KERTE KERTİ KERİH KERİM KERİZ KESAT KESEK KESEL KESEN KESER KESKİ KESME KESRE KESİF KESİK KESİM KESİN KESİR KESİT KESİŞ KETAL KETEN KETUM KEVEL KEVEN KEYFİ KEYİF KEŞAP KEŞEN KEŞKE KEŞKİ KEŞİF KEŞİK KEŞİŞ KIBLE KIDEM KILGI KILIF KILIK KILIÇ KILIŞ KILLI KILMA KIMIL KIMIZ KINIK KIPMA KIPTİ KIRAN KIRAT KIRAY KIRAÇ KIRCA KIRCI KIRIK KIRIM KIRMA KISAS KISIK KISIM KISIR KISIT KISIŞ KISKI KISMA KISMİ KISSA KITAL KITIR KIVAM KIYAK KIYAM KIYAS KIYGI KIYIK KIYIM KIYIN KIYIŞ KIYMA KIYYE KIZAK KIZAN KIZIK KIZIL KIZIŞ KIZMA KIŞIR KIŞLA KLAPA KLİMA KLİPS KLİŞE KOALA KOBAY KOBRA KODES KOFRA KOFTİ KOKAK KOKET KOKMA KOKOT KOKOZ KOKOŞ KOKUŞ KOLAJ KOLAN KOLAY KOLCU KOLEJ KOLLU KOLON KOLPO KOLSU KOLYE KOLİK KOLİT KOMBİ KOMOT KOMUT KOMÜN KOMİK KOMŞU KONAK KONDU KONMA KONSA KONUK KONUM KONUR KONUT KONUŞ KONYA KONİK KOPAL KOPMA KOPUK KOPUZ KOPUŞ KOPYA KOPÇA KOPİL KORAL KORKU KORNA KORNO KORSE KORTE KORUK KORZA KOTAN KOTON KOTRA KOVAN KOVCU KOVMA KOVUK KOYAK KOYAR KOYMA KOYUN KOYUT KOYUŞ KOZAK KOZAN KOÇAK KOÇAN KOÇMA KOĞUŞ KOŞAM KOŞAÇ KOŞMA KOŞUK KOŞUL KOŞUM KOŞUT KOŞİN KRAMP KRANK KRAVL KRAÇA KREDİ KREMA KROKİ KROŞE KRİKO KUBAT KUBBE KUBUR KUCAK KUDAS KUDUZ KUDÜM KUKLA KULAK KULAÇ KULUN KULÜP KULİS KUMAN KUMAR KUMAŞ KUMCU KUMLA KUMRU KUMSU KUMUK KUMUL KUMUÇ KUPES KUPLE KUPON KUPÜR KURAK KURAL KURAM KURAN KURGU KURMA KURNA KURON KURUL KURUM KURUŞ KURYA KURYE KUSMA KUSUR KUTLU KUTNU KUTSİ KUTUP KUTUR KUVER KUVÖZ KUYTU KUYUM KUZEN KUZEY KUZİN KUŞAK KUŞKU KUŞÇA KUŞÇU KÖFTE KÖHNE KÖKEN KÖKLÜ KÖKSÜ KÖKÇÜ KÖLÜK KÖMEÇ KÖMÜR KÖPEK KÖPRÜ KÖPÜK KÖRPE KÖRÜK KÖSEM KÖSNÜ KÖSÇÜ KÖTEK KÖYCÜ KÖYLÜ KÖÇEK KÖŞEK KÜBİK KÜFLÜ KÜFÜR KÜKRE KÜLAH KÜLEK KÜLLÜ KÜLLİ KÜLOT KÜLTE KÜLÇE KÜMES KÜNDE KÜNYE KÜPLÜ KÜRAR KÜREK KÜRSÜ KÜRİT KÜSKÜ KÜSME KÜSPE KÜSUR KÜTLE KÜTLÜ KÜTÖR KÜTÜK KÜTİN KÜVET KÜÇÜK KÜŞAT KÜŞNE KÜŞÜM KİBAR KİBİR KİFAF KİLER KİLLİ KİLÜS KİLİM KİLİS KİLİT KİLİZ KİMSE KİMYA KİMÜS KİNCİ KİNLİ KİNİK KİNİŞ KİRAZ KİREÇ KİRLİ KİRPİ KİRVE KİRİL KİRİŞ KİSVE KİTAP KİTLE KİTRE LADEN LADES LADİK LADİN LAFIZ LAFZİ LAGÜN LAHZA LAHİT LAKAP LAKİN LAMBA LAMEL LANDO LANET LANSE LAPON LARGO LARVA LASKİ LASTA LATİF LATİN LAVAJ LAVAŞ LAVUK LAYIK LAZCA LAZER LAZIM LAZUT LAÇIN LAÇİN LAĞIM LAĞIV LEDÜN LEGAL LEHÇE LEHİM LEMİS LEPRA LERZE LEVHA LEVYE LEYDİ LEYLİ LEZAR LEZİZ LEĞEN LIKIR LIĞLI LOBUT LODOS LOJİK LOKAL LOKMA LOKUM LONCA LONGA LOPUR LORTA LOTUS LOŞÇA LÖKOZ LÖPÜR LÜFER LÜGAT LÜGOL LÜMEN LÜNET LÜPÇÜ LÜTUF LÜZUM LİBRE LİDER LİFLİ LİGER LİKÖR LİKİT LİMAN LİMBO LİMON LİMİT LİPOM LİPİT LİRET LİRİK LİSAN LİSTE LİTRE LİVAR LİYAN LİZOL LİZÖZ MAADA MABAT MABET MABUT MACAR MACUN MADAM MADDE MADDİ MADEM MADEN MADER MADUN MADİK MAFYA MAFİŞ MAGMA MAHAL MAHFE MAHFİ MAHUR MAHYA MAHİR MAJÖR MAKAK MAKAM MAKAS MAKAT MAKET MAKRO MAKTA MAKUL MAKUS MALCA MALCI MALEN MALUL MALUM MALYA MALİK MAMUR MAMUT MANAT MANAV MANDA MANEJ MANGA MANGO MANTI MANTO MANTİ MANÇU MAPUS MARAL MARAZ MARKA MARKE MARKİ MARTI MARUF MARUL MARUZ MARYA MARİZ MASAJ MASAL MASAT MASKE MASNU MASON MASUM MASÖR MASÖZ MASİF MATAH MATBU MATEM MATLA MATUF MATUH MATİZ MAVAL MAVNA MAVRA MAVİŞ MAYIN MAYIS MAYNA MAZAK MAZOT MAZUR MAÇKA MAŞER MAŞUK MEBDE MEBNİ MEBUS MECAL MECAZ MECMU MECRA MECUS MEDAR MEDET MEDYA MEDÜZ MEDİH MEFUL MEHAZ MEHDİ MEHİL MEKAN MEKİK MELAL MELAS MELCE MELEK MELES MELEZ MELEŞ MELON MELUL MELUN MELİK MEMAT MEMNU MEMUL MEMUR MENFA MENFİ MENUS MENŞE MERAK MERAM MERCİ MERET MERMİ MERİH MERİÇ MESAJ MESAİ MESEL MESEN MESMU MESUL MESUT MESİH METAL METAN METBU METOT METRE METRO METİL METİN MEVKİ MEVLA MEVUT MEVZU MEVZİ MEYAN MEYUS MEYVE MEYİL MEZAR MEZAT MEZRA MEZUN MEZZO MEZÜR MEĞER MEŞBU MEŞRU MEŞİN MICIR MIGIR MIGRİ MIHLI MIRRA MISIR MISRA MOBİL MODEL MODEM MODÜL MOHER MOLAS MOLLA MOLOZ MONAT MONTE MORAL MOREN MORUK MOTEL MOTOR MOTTO MOTİF MOZAK MOĞOL MUARE MUCUK MUCUR MUCİP MUCİR MUCİT MUFLA MUHAL MUHAT MUHİL MUHİP MUHİT MUJİK MUKNİ MUKUS MUKİM MUMCU MUMLU MUMYA MUNİS MURAT MURİS MUSAP MUSIR MUSKA MUSON MUTAF MUTAT MUTKİ MUTLU MUYLU MUZIR MUZİP MUĞLA MUŞTA MUŞTU MÖBLE MÖSYÖ MÜBAH MÜDÜR MÜFTÜ MÜHRE MÜHÜR MÜHİM MÜJDE MÜLGA MÜLKİ MÜMİN MÜNŞİ MÜRAİ MÜRUR MÜRİT MÜZİK MÜZİÇ MİDYE MİKAP MİKRO MİLAS MİLAT MİLLİ MİLİM MİLİS MİMAR MİMLİ MİMİK MİNÖR MİNİK MİRAS MİRAT MİRAÇ MİRZA MİSAK MİSAL MİSİL MİSİS MİTOS MİTOZ MİYAV MİYAZ MİYOM MİYOP MİZAH MİZAN MİZAÇ MİÇEL NABIZ NACAK NADAN NADAS NADİR NAFTA NAFİA NAFİZ NAHIR NAHOŞ NAHİF NAHİV NAKDİ NAKIŞ NAKLİ NAKİL NAKİP NAKİT NAKŞİ NALAN NALIN NALÇA NAMAZ NAMLI NAMLU NAMUS NANAY NANİK NARİN NASIL NASIR NASİP NATIR NATUK NATÜR NAZAL NAZAR NAZIM NAZIR NAZLI NAZİK NAZİL NAZİR NAÇAR NAÇİZ NAĞME NAŞİR NEBAT NECAT NECİP NEDEN NEDİM NEFER NEFES NEFİR NEFİS NEFİY NEHİR NEHİY NEKES NELER NEMLİ NEMSE NEMÇE NESNE NESİH NESİL NESİM NESİR NEVİR NEYSE NEYÇE NEZLE NEZİF NEZİH NEŞET NEŞİR NISIF NODUL NODÜL NOGAY NOHUT NOKTA NONOŞ NOTER NUTUK NÖBET NÖRON NÜANS NÜFUS NÜFUZ NÜKTE NÜKUL NÜSHA NÜZUL NİCEL NİFAK NİHAN NİHAİ NİKAH NİKEL NİMET NİNNİ NİPEL NİSAN NİSAİ NİSPİ NİTEL NİYAZ NİYET NİZAM NİZİP NİÇİN NİĞDE NİŞAN OBERJ OBRUK OCUMA ODACI ODALI ODSUZ OFANS OFLAZ OFRİS OJELİ OKAPİ OKLUK OKSİT OKTAN OKTAV OKUMA OKUME OLASI OLEİK OLEİN OLGUN OLMAK OLMAZ OLMUŞ OLURU OMLET ONAMA ONGEN ONGUN ONLAR ONLUK ONMAK ONSUZ ONİKS OOSİT OPERA OPTİK ORADA ORALI ORASI ORAYA ORCİK ORFOZ ORGAN ORGCU ORLON ORMAN ORTAK ORTAM ORTAY ORTAÇ ORTEZ ORTOZ OTACI OTAMA OTLAK OTLUK OTSUL OTÇUL OTİST OTİZM OVALI OVMAK OVMAÇ OYACI OYALI OYLUM OYMAK OYNAK OYNAŞ OZMOZ OZUGA OĞLAK OĞLAN PABUÇ PAFTA PAGAN PAHAL PAKET PALAN PALAS PALAZ PALET PALTO PAMPA PAMUK PANDA PANEL PANİK PAPAK PAPAZ PAPEL PARAF PARKA PARKE PARPA PARSA PARTİ PARYA PARÇA PASAJ PASAK PASLI PASTA PASÇI PASÖR PASİF PATAK PATAL PATEN PATOZ PATİK PAYAN PAYDA PAZAR PAZEN PAÇOZ PEDAL PEDER PEKÇE PELTE PELÜR PELÜŞ PELİN PELİT PEMBE PENGÖ PENSE PENYE PENÇE PENİS PERDE PEREN PERKİ PERMA PERMİ PERON PERUK PERVA PESEK PESÜS PETEK PEYDA PEYKE PEŞTU PEŞİN PIHTI PINAR PIRPI PISMA PLAKA PLASE PLATO PLATİ PLAZA POKER POLAR POLAT POLEN POLÜM POLİM POLİP POLİS POMAK POMPA PONZA POPÇU PORTE PORTO POSOF POSTA POTAS POTUK POTUR POTİN POŞET PRAYA PRENS PROJE PROVA PRUVA PUDRA PUFLA PULCU PULLU PULSU PULUÇ PUMBA PUNTO PUSAT PUSET PUSLU PUSMA PUVAR PÜNEZ PÜREN PÜRÜZ PÜTÜR PİGME PİKAJ PİKAP PİKET PİLAV PİLLİ PİLOT PİLİÇ PİNEL PİNTİ PİPET PİSİK PİTON PİYAN PİYAZ PİYES PİYON PİZZA PİŞEK PİŞME PİŞTİ PİŞİK PİŞİM RABIT RACON RADAR RADDE RADON RADYO RAFLI RAFYA RAGBİ RAHAT RAHLE RAHNE RAHİM RAHİP RAKAM RAKET RAKIM RAKOR RAKUN RAKİP RALLİ RAMAK RAMPA RANDA RANZA RAPOR RASAT RASIT RASPA RASYO RAUNT RAYİÇ REAYA REBAP RECEP RECİM REDİF REFAH REFÜJ REFİK REHİN REJİM REKAT REKOR REKİZ RENDE RESEN RESMİ RESUL RESİF RESİM REVAK REVAN REVAÇ REVİR REVİŞ REYON REZİL REÇEL REŞME REŞİT RIZIK ROBOT RODAJ RODEO ROKET ROLCÜ ROMAN ROMEN ROSTO ROTOR ROTİL ROZET RUBAİ RUBLE RUFAİ RUGAN RUHEN RUHLU RULET RUMBA RUMCA RUMUZ RUSÇA RUTİN RÖFLE RÖGAR RÖTAR RÖTUŞ RÜESA RÜKÜN RÜKÜŞ RÜSUM RÜSUP RÜSVA RÜTBE RİCAL RİCAT RİJİT RİMEL RİNGA RİTİM RİYAL SABAH SABAN SABIK SABIR SABUH SABUN SABUR SABİT SADAK SADET SADIK SADİK SAFER SAFHA SAFRA SAFÇA SAFİR SAHAF SAHNE SAHRA SAHRE SAHTE SAHUR SAHİH SAHİL SAHİP SAKAF SAKAK SAKAL SAKAR SAKAT SAKIN SAKIT SAKIZ SAKLI SAKSI SAKİL SAKİN SAKİT SALAH SALAK SALAM SALAT SALAŞ SALCI SALEP SALGI SALIK SALLI SALMA SALON SALOZ SALPA SALSA SALTA SALTO SALUR SALVO SALYA SALÇA SALİM SALİP SAMAN SAMBA SAMSA SAMUR SAMUT SANAL SANAT SANCI SANIK SANIŞ SANKİ SANLI SANMA SANRI SAPAK SAPAN SAPIK SAPIŞ SAPLI SAPMA SARAK SARAT SARAY SARAÇ SARGI SARIK SARIM SARIŞ SARMA SARPA SASON SATEN SATHİ SATIH SATIR SATIŞ SATMA SAUNA SAVAK SAVAN SAVAT SAVAŞ SAVCA SAVCI SAVMA SAYAÇ SAYFA SAYGI SAYHA SAYIM SAYIN SAYIŞ SAYRI SAZAK SAZAN SAZCI SAZLI SAÇAK SAÇIK SAÇIŞ SAÇLI SAÇMA SAĞIR SAİKA SEANS SEBAT SEBEP SEBZE SEBİL SECDE SEDEF SEDYE SEDİR SEFER SEFİL SEFİR SEGAH SEHER SEHPA SEHİM SEHİV SEKEL SEKME SEKSİ SEKTE SEKİL SEKİZ SEKİŞ SELAM SELEK SELEN SELVİ SELİM SELİS SEMAH SEMAN SEMAİ SEMEN SEMER SEMİH SEMİZ SENCE SENET SENİT SEPET SEPYA SERAK SERAP SEREN SERGİ SERME SERUM SERVİ SERÇE SERİK SERİM SERİN SESLİ SETİK SETİR SEVAP SEVDA SEVER SEVGİ SEVME SEVİM SEVİR SEVİŞ SEYEK SEYİR SEYİS SEYİT SEZGİ SEZME SEZON SEÇAL SEÇKİ SEÇME SEÇİM SEÇİŞ SICAK SIFAT SIFIR SIHHİ SIKIM SIKMA SIKÇA SINAV SINAİ SINDI SINIF SINIK SINIR SINMA SIRAT SIRCI SIRIK SIRIM SIRLI SIRMA SIRÇA SISKA SITMA SIVIK SIYGA SIYGI SIZIŞ SIZMA SIÇAN SIÇMA SIĞIN SIĞIR SIĞMA SKALA SKİNK SLAYT SOFRA SOFTA SOKAK SOKET SOKMA SOKRA SOKUR SOLAK SOLCU SOLUK SOLUŞ SOMAK SOMON SOMUN SOMUT SOMYA SONAR SONDA SONLU SONRA SONUÇ SORGU SORMA SORTİ SORUM SORUN SORUŞ SOSİS SOYLU SOYMA SOYUM SOYUT SOYUŞ SOĞAN SOĞUK SPAZM SPERM SPREY STANT STATÜ STENT STRES STREÇ SUBAY SUBRA SUCUK SUDAN SUFLE SUKUT SULAK SULTA SULUK SUMAK SUNAK SUNMA SUNTA SUNUM SUNUŞ SUOKU SURAT SURET SURUÇ SUSAK SUSAM SUSKU SUSMA SUSTA SUSUŞ SUTAŞ SUTLU SUYUK SUÇLU SÖKEL SÖKME SÖKÜK SÖKÜM SÖKÜŞ SÖLOM SÖNÜK SÖNÜM SÖNÜŞ SÖVEN SÖVGÜ SÖVME SÖZCE SÖZCÜ SÖZDE SÖZEL SÖZLÜ SÖĞÜT SÖĞÜŞ SÜBEK SÜBUT SÜBYE SÜCUT SÜFLİ SÜKSE SÜKUN SÜKUT SÜLUK SÜLÜK SÜLÜN SÜLÜS SÜMEK SÜMEN SÜMER SÜMÜK SÜNGÜ SÜNNİ SÜPER SÜRAT SÜREK SÜREÇ SÜRFE SÜRGÜ SÜRME SÜRRE SÜRÜM SÜRÜŞ SÜSLÜ SÜSME SÜTLÜ SÜTRE SÜTSÜ SÜTUN SÜTÇÜ SÜVEN SÜVME SÜYEK SÜZEK SÜZGÜ SÜZME SÜZÜK SÜZÜŞ SÜĞME SİBOP SİCİL SİCİM SİDİK SİFON SİGAR SİHİR SİKKE SİKME SİLAH SİLGİ SİLKİ SİLLE SİLME SİLİK SİLİS SİMAV SİMGE SİMYA SİMİT SİNEK SİNLE SİNME SİNOP SİNSİ SİNÜS SİNİK SİNİR SİNİŞ SİPER SİPSİ SİREN SİRKE SİROZ SİRTO SİSLİ SİTEM SİVAS SİVRİ SİVİL SİYAH SİYAK SİYEK SİYER SİYME SİZCE SİĞİL TABAK TABAN TABLA TABLO TABUR TABUT TABYA TABİP TABİR TABİİ TACİK TACİR TADAT TADIM TADİL TAFRA TAFTA TAHIL TAHRA TAHTA TAHİN TAKAS TAKAT TAKIK TAKIM TAKKE TAKLA TAKMA TAKOZ TAKSİ TAKTİ TAKVA TAKİM TAKİP TALAK TALAN TALAS TALAZ TALAŞ TALEP TALİH TALİK TALİL TALİM TALİP TAMAH TAMAM TAMİM TAMİR TANEN TANGO TANIK TANIM TANIT TANIŞ TANRI TANİN TAOCU TAPAN TAPON TAPİR TARAF TARAK TARAŞ TARET TARIM TARLA TARTI TARİF TARİH TARİK TARİZ TASAR TASDİ TASIM TASMA TASNİ TATAR TATLI TATMA TATİL TAVAF TAVAN TAVCI TAVIR TAVLA TAVLI TAVUK TAVUS TAVİZ TAYFA TAYIN TAYİN TAYİP TAZİM TAZİP TAZİZ TAÇLI TAŞAK TAŞIL TAŞIM TAŞIT TAŞLI TAŞMA TAŞRA TAŞSI TAŞÇI TEALİ TEATİ TEBAA TEBER TECİL TECİM TEDAİ TEDİP TEHİR TEKEL TEKER TEKKE TEKLİ TEKME TEKNE TEKST TEKÇİ TEKİL TEKİN TEKİR TEKİT TELAŞ TELEF TELEK TELEM TELES TELLİ TELSİ TELVE TELİF TELİN TELİS TEMAS TEMEK TEMEL TEMPO TEMİN TEMİZ TENGE TENHA TENOR TENTE TENYA TENİS TEORİ TEPKİ TEPME TEPSİ TEPİK TEPİŞ TERAS TERBİ TEREK TERES TERFİ TERLİ TERME TERZİ TERÖR TERİM TESRİ TESTİ TESİR TESİS TETİK TETİR TEVEK TEVKİ TEVSİ TEYEL TEYZE TEYİT TEZAT TEZCE TEZEK TEZLİ TEĞET TEİST TEİZM TEŞCİ TEŞNE TEŞRİ TEŞYİ TIBBİ TIFIL TIKAÇ TIKIR TIKIZ TIMAR TINAZ TINMA TIPKI TIRAK TIRAŞ TIRIL TIRIS TOHUM TOKAT TOKAÇ TOKLU TOKUZ TOLGA TOMAK TOMAR TONAJ TONER TONGA TONLA TONLU TONOZ TONYA TONİK TOPAK TOPAL TOPAZ TOPAÇ TOPLA TOPLU TOPUK TOPUR TOPUT TOPUZ TOPÇU TOPİK TORAK TORBA TORNA TORTU TORUM TORUN TORİK TOSUN TOSYA TOTAL TOTEM TOYCA TOYCU TOZAN TOZLU TOZMA TRAFO TRAKE TRANS TRANŞ TRATA TROMP TRÖST TRİKO TUFAN TUGAY TUHAF TULUK TULUM TULUP TUMAN TUNİK TURAN TURAÇ TURBA TURBO TURFA TURNA TURNE TURNO TURTA TURŞU TUTAK TUTAM TUTAR TUTAÇ TUTKU TUTMA TUTUK TUTUM TUTUŞ TUTYA TUVAL TUYUĞ TUZAK TUZCU TUZLA TUZLU TUZSU TUĞCU TUĞLA TUĞLU TUĞRA TÖREL TÖREN TÖRPÜ TÖVBE TÖZEL TÜFEK TÜMCE TÜMEL TÜMEN TÜMEY TÜMÖR TÜMÜR TÜNEK TÜNEL TÜPLÜ TÜPÇÜ TÜRBE TÜREL TÜREV TÜRKÜ TÜRKİ TÜRLÜ TÜRÜM TÜTME TÜTSÜ TÜTÜN TÜVİT TÜYLÜ TÜZEL TÜZÜK TİFÜS TİKEL TİLKİ TİMÜS TİNER TİPİK TİRAJ TİRAN TİRAT TİRSİ TİRİT TİRİZ TİTAN TİTİZ UCUBE UKALA UKNUM ULAMA ULEMA ULUFE ULUMA UMACI UMMAK UMMAN UMUMİ UNLUK UNSUR UNVAN URGAN USKUR USSAL UTANÇ UTMAK UYARI UYGAR UYGUN UYGUR UYLUK UYMAK UYRUK UYSAL UYUMA UZAMA UZLET UZLUK UZMAN UÇARI UÇKUN UÇKUR UÇMAK UÇMAN UÇSUZ UÇUCU UĞRAK UĞRAŞ UĞRUN UŞKUN UŞŞAK VACİP VAGON VAHİM VAHİT VAHİY VAHŞİ VAKAR VAKFE VAKIA VAKIF VAKUM VAKUR VAKİT VALÖR VALİZ VANLI VAPUR VARAK VARAN VARGI VARIŞ VARMA VAROŞ VARTA VARİL VARİS VARİT VASAT VASIF VASIL VATAN VATKA VATOZ VAZIH VAŞAK VEBAL VECİH VECİZ VEDİA VEFAT VEHİM VEKİL VELET VELUT VENÜS VEREM VEREV VERGİ VERME VERİM VERİŞ VEZNE VEZİN VEZİR VICIK VOKAL VOLAN VOLTA VONOZ VOTKA VOYVO VUKUF VULVA VURGU VURMA VURUK VURUŞ VUSUL VUZUH VÜCUT VİDEO VİLLA VİRAJ VİRAL VİRAN VİRÜS VİSAL VİSKİ VİTES VİYOL VİZON VİZÖR VİŞNE YABAN YAFTA YAHEY YAHNİ YAHUT YAHŞİ YAKIM YAKIN YAKIT YAKIŞ YAKMA YAKUT YAKİN YALAK YALAN YALAZ YALIM YALIN YALIZ YALPA YALPI YAMAK YAMAN YAMAÇ YAMUK YAMÇI YANAK YANAL YANAY YANAZ YANCI YANGI YANIK YANIT YANIŞ YANKI YANLI YANMA YANSI YAPAK YAPAY YAPIK YAPIM YAPIT YAPIŞ YAPMA YARAN YARAR YARAŞ YAREN YARGI YARIK YARIM YARIN YARIŞ YARKA YARMA YASAK YASAL YASLI YASSI YASİN YATAK YATAY YATIK YATIM YATIR YATIŞ YATSI YATÇI YAVAN YAVAŞ YAVER YAVRU YAVUZ YAYAN YAYGI YAYIK YAYIM YAYIN YAYIŞ YAYLA YAYLI YAYMA YAZAR YAZGI YAZIK YAZIM YAZIN YAZIR YAZIT YAZMA YAĞCI YAĞIR YAĞIZ YAĞIŞ YAĞLI YAĞMA YAĞSI YAŞAM YAŞIT YAŞLI YEDEK YEDİZ YEGAH YEGAN YEKTA YEKUN YELEK YELEÇ YELME YELVE YELİN YEMCİ YEMEK YEMİN YEMİŞ YENGE YENGİ YENLİ YENME YENİK YEREL YERGİ YERLİ YERME YETER YETKE YETKİ YETME YETİK YETİM YEYGİ YEZİT YEĞEN YEĞNİ YEĞİN YEŞİL YEŞİM YIKIK YIKIM YIKIŞ YIKMA YILAN YILGI YILIK YILKI YILMA YIRIK YIĞIN YIĞIŞ YIĞMA YOBAZ YOKSA YOKUŞ YOKÇU YOLAK YOLCU YOLLU YOLMA YOMRA YONCA YONGA YONMA YONTU YORGA YORMA YORTU YORUM YOSMA YOSUN YOĞUN YUDUM YUFKA YUKAÇ YULAF YULAR YUMAK YUMMA YUMRU YUMUK YUNAN YUNMA YUNUS YUTAK YUTMA YUTUM YUVAK YUVAR YUVGU YÖNLÜ YÖRÜK YÜKLÜ YÜKÇÜ YÜKÜM YÜKÜN YÜLGÜ YÜNLÜ YÜREK YÜRÜK YÜZDE YÜZER YÜZEY YÜZLÜ YÜZME YÜZÜK YÜZÜŞ YİRMİ YİTME YİTİK YİTİM YİTİŞ YİVLİ YİYİM YİYİŞ YİĞİT ZABIT ZABİT ZAFER ZAFER ZAHİR ZALİM ZAMAN ZAMİR ZANKA ZANLI ZARAR ZARİF ZATEN ZAYIF ZAĞAR ZAĞCI ZAĞLI ZEBRA ZEHİR ZEKAT ZEMİN ZENNE ZERRE ZEVAL ZEVAT ZEVCE ZEYİL ZIBIN ZIMBA ZIPIR ZIPKA ZIRVA ZOMBİ ZORBA ZORLA ZORLU ZUHUR ZULÜM ZURNA ZÜHRE ZÜLÜF ZÜMRE ZÜPPE ZİFİN ZİFİR ZİGON ZİGOT ZİHNİ ZİNDE ZİRAİ ZİRVE ZİYAN ÇADIR ÇAKAL ÇAKAR ÇAKER ÇAKIL ÇAKIM ÇAKIN ÇAKIR ÇAKIŞ ÇAKMA ÇAKRA ÇALAK ÇALAP ÇALAR ÇALGI ÇALIK ÇALIM ÇALIŞ ÇALKI ÇALMA ÇALTI ÇAMAŞ ÇAMUR ÇANAK ÇANCI ÇANLI ÇANTA ÇAPAK ÇAPAR ÇAPLA ÇAPUL ÇAPUT ÇARIK ÇARKA ÇARPI ÇARŞI ÇASAR ÇATAL ÇATIK ÇATIŞ ÇATKI ÇATMA ÇAVLI ÇAVMA ÇAVUN ÇAVUŞ ÇAYAN ÇAYCI ÇAYIR ÇAYLI ÇAĞLA ÇAĞRI ÇEBİÇ ÇECİK ÇEDİK ÇEHRE ÇEKEK ÇEKEL ÇEKEM ÇEKER ÇEKME ÇEKÇE ÇEKÜL ÇEKİK ÇEKİM ÇEKİÇ ÇEKİŞ ÇELEN ÇELGİ ÇELLO ÇELME ÇELİK ÇELİM ÇEMEN ÇEMÇE ÇENGİ ÇEPEL ÇEPER ÇEPEZ ÇEPNİ ÇERAĞ ÇEREZ ÇERGE ÇERÇİ ÇETİN ÇEVRE ÇEVRİ ÇEVİK ÇEYİZ ÇEÇEN ÇEŞME ÇEŞNİ ÇEŞİT ÇIBAN ÇIKAN ÇIKAR ÇIKIK ÇIKIN ÇIKIT ÇIKIŞ ÇIKMA ÇIKRA ÇIKTI ÇINAR ÇINGI ÇIPIR ÇIRAK ÇIRPI ÇITAK ÇITIR ÇIYAN ÇIĞIR ÇOBAN ÇOCUK ÇOKAL ÇOKLU ÇOKÇA ÇOLAK ÇOLPA ÇOMAK ÇOMAR ÇOPRA ÇOPUR ÇORAK ÇORAP ÇORBA ÇORUM ÇOTRA ÇOĞUL ÇOĞUN ÇUBUK ÇUKUR ÇUPRA ÇUVAL ÇUVAŞ ÇÖKEK ÇÖKEL ÇÖKME ÇÖKÜK ÇÖKÜŞ ÇÖMEZ ÇÖMME ÇÖMÇE ÇÖPLÜ ÇÖPÇÜ ÇÖREK ÇÖRTÜ ÇÖVEN ÇÖZGÜ ÇÖZME ÇÖZÜK ÇÖZÜM ÇÜKÜR ÇÜNKÜ ÇÜRÜK ÇİFTE ÇİGAN ÇİLEK ÇİLLİ ÇİMEN ÇİNCE ÇİNKO ÇİNLİ ÇİROZ ÇİRİŞ ÇİSEN ÇİTEN ÇİTME ÇİVİT ÇİZER ÇİZGE ÇİZGİ ÇİZME ÇİZİK ÇİZİM ÇİZİŞ ÇİÇEK ÇİĞLİ ÇİĞİL ÇİĞİN ÇİŞİK ÖBÜRÜ ÖDEME ÖDLEK ÖDÜNÇ ÖKSÜZ ÖLMEK ÖLMEZ ÖLMÜŞ ÖLÇEK ÖLÇER ÖLÇME ÖLÇÜM ÖLÇÜN ÖLÇÜT ÖLÇÜŞ ÖNCEL ÖNCÜL ÖNDER ÖNERİ ÖNLEM ÖNLÜK ÖPMEK ÖRCİN ÖRDEK ÖREKE ÖRGÜN ÖRGÜT ÖRMEK ÖRNEK ÖRTME ÖRTÜK ÖRTÜŞ ÖRÜCÜ ÖRÜLÜ ÖTEKİ ÖTMEK ÖTÜCÜ ÖTÜRÜ ÖVMEK ÖVÜCÜ ÖVÜNÇ ÖZALP ÖZBEK ÖZDEN ÖZDEŞ ÖZEME ÖZENÇ ÖZENİ ÖZERK ÖZGÜL ÖZGÜN ÖZGÜR ÖZLEM ÖZLÜK ÖZNEL ÖĞLEN ÖĞREK ÜCRET ÜDEBA ÜLFET ÜLGER ÜLKER ÜLSER ÜMERA ÜMMET ÜMRAN ÜNDEŞ ÜNLEM ÜNSÜZ ÜNİTE ÜREME ÜRGÜP ÜRKEK ÜRKME ÜRKÜŞ ÜRYAN ÜRÜME ÜSERA ÜSKÜF ÜSLUP ÜSTAT ÜSTEL ÜSTLÜ ÜSTÜN ÜTMEK ÜTÜCÜ ÜTÜLÜ ÜZERE ÜZERİ ÜZGÜN ÜZLÜK ÜZMEK ÜZÜCÜ ÜZÜNÇ ÜÇGEN ÜÇGÜL ÜÇKAT ÜÇLER ÜÇLÜK ÜĞRÜM ÜŞÜME İBARE İBATE İBDAİ İBLAĞ İBLİS İBRAZ İBRET İBRİK İBZAL İCMAL İDADİ İDAME İDARE İDARİ İDDİA İDEAL İDMAN İDRAK İDRAR İFADE İFFET İFLAH İFLAS İFRAT İFRAZ İFRAĞ İFRİT İFSAT İFTAR İHALE İHBAR İHLAL İHLAS İHMAL İHRAM İHRAZ İHRAÇ İHSAN İHSAS İHTAR İHVAN İHZAR İKAME İKBAL İKDAM İKLİM İKMAL İKONA İKRAH İKRAM İKRAR İKRAZ İKSİR İKİCİ İKİLİ İLAHE İLAHİ İLAHİ İLAVE İLBAY İLENÇ İLERİ İLETİ İLGEÇ İLHAK İLHAM İLHAN İLKAH İLKEL İLLET İLMEK İLMİK İMALE İMALI İMAME İMBAT İMDAT İMECE İMKAN İMLEK İMLEÇ İMREN İMROZ İMSAK İNANÇ İNCİK İNCİL İNCİR İNDİS İNFAZ İNGİN İNKAR İNMEK İNSAF İNSAN İNZAL İNÖNÜ İNŞAT İPEKA İPHAM İPLİK İPSİZ İPTAL İPUCU İPÇİK İRADE İRADİ İRFAN İRKME İRMİK İRONİ İRSAL İRSEN İRİCE İRİTE İRŞAT İSALE İSEVİ İSHAL İSKAN İSKOÇ İSLAM İSLAV İSLİM İSMEN İSMET İSNAT İSPAT İSPİR İSPİR İSRAF İSTEK İSTEM İSTER İSTOP İSTİF İSTİM İSYAN İTAAT İTEĞİ İTHAF İTHAL İTHAM İTLAF İTLİK İTMAM İTMEK İTİCİ İTİLA İTİNA İVEDİ İVESİ İVMEK İYİCE İZABE İZAFİ İZHAR İZLEK İZLEM İZLEV İZMİR İZMİT İZNİK İZOLE İZZET İÇERİ İÇKİN İÇLEM İÇLİK İÇMEK İÇREK İÇSEL İÇSİZ İÇTEN İÇYÜZ İĞDİR İĞDİŞ İĞFAL İĞLİK İŞEME İŞGAL İŞKAL İŞKİL İŞLEK İŞLEM İŞLEV İŞLİK İŞMAR İŞSİZ İŞTAH İŞTEŞ ŞABAN ŞAFAK ŞAFUL ŞAFİİ ŞAHAP ŞAHIS ŞAHNE ŞAHSİ ŞAHİN ŞAHİT ŞAKAK ŞAKUL ŞALAK ŞAMAN ŞAMAR ŞAMİL ŞANLI ŞAPEL ŞAPKA ŞAPLI ŞAPÇI ŞARAP ŞARKI ŞARPİ ŞARYO ŞATIR ŞAYAK ŞAYAN ŞAYET ŞAYİA ŞAİBE ŞAİRE ŞAŞAA ŞAŞMA ŞEBEK ŞEDDE ŞEDİT ŞEFİK ŞEHİR ŞEHİT ŞEKEL ŞEKER ŞEKVA ŞEKİL ŞELEK ŞEMSİ ŞEPİT ŞERAN ŞEREF ŞERPA ŞERİF ŞERİR ŞERİT ŞETİM ŞINAV ŞIPKA ŞOFÖR ŞOPAR ŞORCA ŞOSET ŞOSON ŞOVEN ŞUARA ŞUBAT ŞUHUT ŞUNCA ŞURUP ŞÖLEN ŞÖMİZ ŞÖYLE ŞÜKÜR ŞÜMUL ŞÜPHE ŞİFON ŞİFRE ŞİKAR ŞİLEM ŞİLEP ŞİLTE ŞİLİN ŞİMAL ŞİMDİ ŞİNTO ŞİNİK ŞİRAN ŞİRİN ŞİŞEK ŞİŞKO ŞİŞME ŞİŞİK",
    allowed:
      "ABACI ABADİ ABALI ABANA ABANİ ABAŞO ABBAS ABDAL ABECE ABHAZ ABLAK ABOSA ABRAŞ ABULİ ACARA ACEZE ACICA ACUBE ACUZE ACİBE ADALE ADALI ADAMA ADANA ADEDİ ADESE ADINA ADSAL AFAZİ AFONİ AFSUN AFTOS AFŞAR AFŞİN AGAMİ AGORA AGRAF AHCAR AHFAT AHFEŞ AHLAF AHRAZ AKABE AKAJU AKALA AKDUT AKEMİ AKKUŞ AKKÖY AKLAN AKLEN AKLIK AKMAK AKMAN AKMAZ AKONT AKPAS AKTAŞ AKVAM ALAZA ALKİL ALLAH ALLEM ALMAÇ ALMAŞ ALMUS ALNAÇ ALTES ALTIK ALTIZ ALTLI ALYAN ALYON AMORF AMPER AMUDİ ANACA ANALI ANDIK ANDIZ ANELE ANGIN ANJİN ANLAK ANMAK ANSIZ ANTLI ANYON ANZAK ANÜRİ ANİDE APOTR APOŞİ APRİL APSİS ARAKA ARALI ARAMİ ARDAK ARGAÇ ARGIN ARICI ARKAÇ ARKOZ ARMUZ ARSİN ARTIN ARİYA ASKAT ASTİK ASUDE ASYÖN ATFEN ATMIK AVARA AVAZE AVRAT AVRET AVURT AYEVİ AYICI AYLAK AYLIK AYMAK AYMAZ AYNAZ AYRIK AYRIM AYRIT AYRIÇ AYSAR AYSIZ AYVAN AYVAZ AYYAR AZMAK AZNİF AZOİK AZVAY AÇMAK AĞCIK AĞMAK AĞNAM AĞRAZ AĞYAR BABAÇ BABAİ BADAL BADAS BADAT BADIÇ BADYA BAHAİ BAHRİ BAHİS BAKAM BAKAÇ BALAR BALKI BALOZ BANAK BANAZ BANJO BARAK BARBA BARCI BARDA BARDO BARKA BARÇA BARİT BASSO BASYA BASİL BATUR BAVCI BAVLI BAYRI BAZİK BAZİT BAÇÇI BAĞAN BAĞDA BAĞIL BAĞIM BAĞIN BAĞIR BAĞIT BAŞAT BECET BEDÜK BEDİK BEDİR BEDİİ BEHEY BEHRE BEKAS BEKRİ BELCE BELDE BELEK BELEN BELEŞ BELGİ BELİK BELİT BELİĞ BENCİ BENLİ BERRİ BESNİ BEZCİ BEZEK BEZGİ BEZME BEZSİ BEZİK BEZİR BEZİŞ BEŞLİ BEŞME BEŞON BEŞUŞ BICIL BIKIŞ BIKMA BIZIR BOCCE BOCUK BODUÇ BOKLU BOLCA BORAK BORİK BOYCA BOYLU BOZMA BOZUŞ BOĞAK BOĞMA BOĞUK BRÖVE BUHUR BULAK BULMA BUNCA BUNLU BUNMA BURAK BURCU BURMA BUYOT BUZCU BUZLA BUĞUR BUĞUZ BÖLEN BÖNCE BÜCÜR BÜKEN BÜKME BÜKÜK BÜKÜN BÜKÜÇ BÜKÜŞ BÜRGÜ BÜRÜK BÜRÜN BÜTEN BÜTEY BÜVET BÜZÜK BÜĞET BÜĞLÜ BİCİK BİDAR BİDAT BİHUŞ BİKES BİKİR BİLAR BİNER BİNGİ BİNME BİNİT BİRCİ BİRER BİRLİ BİRUN BİTEK BİTEY BİTLİ BİTME BİTÜM BİTİM BİTİŞ BİYEL BİZAR BİZCE BİÇKİ BİÇME BİÇİŞ BİŞEK CALİP CAMIZ CAMLI CAMSI CAMİT CARLI CARTA CAYIŞ CAYMA CAZCI CAZLI CAZİP CAİZE CEDEL CEHRE CEMAN CEVVİ CEVZA CEZRİ CICIK CIVMA CIZIK CORUM CUDAM CÜNHA CÜNUN CİCOZ CİCİK CİDAL CİHAR DALAŞ DALGI DALYA DAMAL DAMLI DANCA DANIŞ DARAÇ DARCA DATİF DAVYA DAĞCI DAĞLI DENME DERUN DEĞEÇ DIŞIK DONAM DONRA DORUM DOĞMA DULDA DURAÇ DUYUŞ DUŞAK DUŞLU DÖNME DÖŞLÜ DÜGAH DÜVEN DÜYEK DÜYUN DÜZCE DÜÇAR DÜŞME DÜŞÇÜ DİDON DİGOR DİLCE DİLCİ DİLLİ DİNCİ DİNGİ DİNLİ DİREY DİVİK DİVİT DİZİŞ DİŞİL EDVAR EFECE EFSUS EHRAM EKSİN EKSİZ EKİCİ ELGİN ELHAK ELÇEK EMMEK ENSİZ ENTEL EPOPE ERCİK ERDEN ERSİZ ERZEL ESBAK ESLEK ESRİK ESTER ESİRE ETÇİK EVLEK EVLİK EVSİN EYTAM EZİCİ EZİNÇ EĞREZ EŞHAS EŞLEM FAHUR FASKA FASİT FENCİ FENOL FERAĞ FIŞKI FLEOL FODLA FODRA FRESK FÜLÜS FÜZEN FİLAR FİLOZ FİLSİ FİLUM FİRİK FİŞKA GARAZ GARBİ GAVOT GAZAL GAZVE GEBZE GELME GELİŞ GEMRE GEVEN GEVME GROSA GUANO GÖLEK GÖLÜK GÖMEÇ GÖMÜK GÖMÜŞ GÖNCÜ GÖNEN GÖRÜM GÖYÜK GÖĞEM GÜLÜT GÜMÜL GÜNDE GÜNEÇ GÜVEZ HAHHA HAKÇA HAMLA HANAY HAPİS HARAR HARİM HARİS HASEP HASSE HASUT HASİS HATAY HAZIK HAZRO HELİS HERKE HERTZ HEZEL HEZEN HIFIZ HINIS HIRLI HOTOZ HOŞUR HUDUT HUSUF HUSYE HUTUT HİÇÇİ IHMAK ILGIM ILIMA ILTAR ISKAT IĞRIP JARSE JELOZ KALCI KALIÇ KALYA KAMAN KANIŞ KANON KAPMA KARIK KATIM KATÇI KAVAS KAVUT KAYAR KAYRA KAŞAN KELER KELES KEMHA KEMRE KENEF KEPEZ KERES KESBİ KETON KEŞAN KILIR KINLI KIPIK KIRBA KIRKI KISKA KITIK KIŞIN KOFUL KOLZA KOMAR KOPOY KORUN KOVUŞ KOŞUN KROME KULLE KUMLU KUNDA KURCA KURUT KUTAN KUVVE KUŞET KÖMBE KÖMÜŞ KÜNCÜ KÜRDİ KÜSUF KİKLA KİLSİ KİNİN KİRDE KİTİN KİZİR LAFÇI LAGAR LAGOS LAHOS LAHUT LAKOZ LAKÇI LAVTA LAÇKA LENFA LENTO LETÇE LEÇEK LOGOS LİBAS LİBOŞ LİKEN LİNET LİNİN MAGRİ MAHIV MAHRA MAHUT MAKSİ MAKTU MALAK MALAZ MAMAK MAMBO MAMUL MANAS MANCA MANEN MANİA MAOCU MARDA MARON MASTI MASUN MAİLE MEBİZ MEHLE MEMBA MEREK MERES METİS MEVDU MEVTA MEZON MEZRU MEŞUM MOPET MORTO MUHİK MULAJ MUTÇU MUZSU MUŞLU MÜFİT MÜMAS MÜŞİR MİKOZ MİLEL MİSEL MİTİL MİYAR NADİM NAHAK NAKIS NAKIZ NASIP NASİR NEDBE NEFHA NEFTİ NEKRE NESEP NESİÇ NEZİR NOKRA NOTAM NUKUT NUMEN NURLU NİKAP NİSAP ODEON OFSET OLÇUM OMBRA ORKİT ORİON OTSUZ OYDAŞ PADOK PAUNT PAYEN PAYET PAYLI PAÇAL PENES PEÇİÇ PEŞLİ PIRTI POLKA POMAT PONJE PORNO POYRA PRAFA PRESE PÖÇÜK PÜSÜR PİNES PİRİT PİSİN RAFİT RAKİK RAKİT RATIP RAYBA REMEL REMİL REMİZ RUHÇA RUJLU RUNİK RÜYET SADIR SADME SAHAN SAKİM SALİK SANEM SANGI SAPKI SARIZ SARİG SARİH SATIM SATİR SAVLA SAVLO SAVUR SAYMA SAĞCI SAĞIM SAĞIN SAĞMA SAĞRI SEBEN SEFİH SELEF SELVA SENEK SENİR SEPEK SERİŞ SESÇİ SETER SETRE SEZİŞ SIHRİ SIKIT SIMAK SIZAK SIĞLA SOKUM SOKUŞ SOLMA SONAT SORİT SOYKA STENO STİLO SUARE SUBYE SUCUL SUDAK SUNGU SUPAP SUSUZ SUVAT SÖKÜN SÖNME SÖVÜŞ SÜNME SÜRUR SÜSEN SÜYÜM SİFİN SİLAJ SİLİŞ SİRMO SİTİL SİİRT TACİL TACİZ TAKSA TAMİK TAPIŞ TAPMA TARAZ TAVAS TAVİK TAYGA TEPKE TEPİR TERKİ TESİT TEVDİ TEVZİ TEVİL TIKIM TIKMA TIRIK TOKYO TORUL TOYGA TUMBA TVİST TÜNME TÜRAP TÜYME TİRLE TİRŞE URBAN USANÇ USARE UYMAZ VARDA VARTO VELUR VERDİ VERİT VEÇHE VURAÇ VÜRUT VÜSAT VİGLA VİTİR VİYAK YABGU YARAK YARDA YASMA YATMA YAVSI YAZIŞ YAĞAR YAŞÇA YEDME YELLİ YEREY YEVMİ YOLUK YUNAK YURDU YUTUŞ YÜLÜK YÜSRÜ YİRİK ZAHİT ZAMLI ZAMME ZARCI ZARSI ZARTA ZEBAN ZEBUN ZEBUR ZECRİ ZECİR ZEFİR ZEHAP ZEKER ZELVE ZELİL ZENCİ ZERDE ZIHLI ZIMNİ ZLOTİ ZORCA ZORGU ZORUN ZÜBDE ZÜHAL ZÜHUL ZÜKAM ZÜLAL ZÜRRA ZÜYUF ZİFAF ZİFOS ZİHAF ZİHİN ZİKİR ZİLLİ ZİMMİ ÇABUK ÇAMAT ÇAMÇA ÇANDI ÇAPLI ÇAPMA ÇATAK ÇAĞMA ÇAŞIT ÇELEK ÇEMİÇ ÇEMİŞ ÇENEK ÇENET ÇEPİN ÇIDAM ÇIFIT ÇIKAK ÇIRAĞ ÇIVMA ÇOKÇU ÇORLU ÇOTUK ÇULCU ÇULHA ÇUMRA ÇUŞKA ÇÖKÜM ÇÖRKÜ ÇÖZÜŞ ÇÖĞME ÇÖĞÜR ÇİMEK ÇİMME ÇİPİL ÇİĞDE ÇİĞİT ÖLGÜN ÖNEZE ÖNSEL ÖRGEN ÖZDEK ÖZSEL ÜFLEÇ ÜREMİ ÜÇTAŞ ÜŞENÇ ÜŞMEK İCBAR İFHAM İHATA İHDAS İLKİN İLZAM İMBİK İMLİK İNFAK İNTAK İNTAN İNTAÇ İSPİT İZAFE İZALE İÇİCİ İŞRET İŞYAR ŞARKİ ŞAVUL ŞAYKA ŞEHLA ŞEKLİ ŞEMSE ŞERHA ŞERİK ŞIRAK ŞİŞLİ",
  });
  var aE = new xe({ locale: "en", phrases: iE });
  const kS = Le(),
    lE = (S) =>
      N(kS.Provider, {
        value: aE,
        get children() {
          return S.children;
        },
      }),
    F = () => {
      const S = WS(kS);
      if (!S)
        throw new Error("TranslationsContext has been used outside provider");
      return S;
    },
    mS = (S) => String(S),
    bS = (S, e) => (S === null ? e : S === "true"),
    oe = (S) => S,
    De = (S, e) => (S === null ? e : S),
    cS = (S) => String(S),
    dS = (S, e) => {
      if (S === null) return e;
      {
        const E = Number(S);
        return isFinite(E) && E >= 0 ? E : e;
      }
    },
    Ue = (S) => S.join(","),
    Ce = (S, e) =>
      S === null
        ? e
        : S
        ? S.split(",").map((E) => {
            const t = Number(E);
            return isFinite(t) && t >= 0 ? t : 0;
          })
        : [],
    ce = (S) => S.join(","),
    de = (S, e) => {
      if (S) {
        const E = F(),
          t = S.split(",").map((R) => R.toLocaleUpperCase(E.locale()));
        return t.every((R) => R.length === IS) ? t : e;
      } else return e;
    },
    NE = {
      key: "dark_mode",
      getDefault: () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      serialize: mS,
      deserialize: bS,
    },
    sE = {
      key: "colorblind",
      getDefault: () => !1,
      serialize: mS,
      deserialize: bS,
    },
    oE = {
      key: "vibration",
      getDefault: () => !0,
      serialize: mS,
      deserialize: bS,
    },
    DE = {
      key: "enter_bs_reversed",
      getDefault: () => !1,
      serialize: mS,
      deserialize: bS,
    },
    UE = {
      key: "keyboard_height",
      getDefault: () => 1,
      serialize: (S) => String(S),
      deserialize: (S, e) => {
        if (S === null) return e;
        {
          const E = Number(S);
          return isFinite(E) && E <= le && E >= Ne ? E : e;
        }
      },
    },
    CE = {
      key: "game_size",
      getDefault: () => "fit",
      serialize: (S) => S,
      deserialize: (S, e) => (S === "fit" || S === "square" ? S : e),
    },
    cE = {
      key: "last_daily",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    dE = {
      key: "last_free",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    ME = {
      key: "daily_guesses",
      getDefault: () => [],
      serialize: ce,
      deserialize: de,
    },
    PE = {
      key: "free_guesses",
      getDefault: () => [],
      serialize: ce,
      deserialize: de,
    },
    YE = {
      key: "daily_current",
      getDefault: () => "",
      serialize: oe,
      deserialize: De,
    },
    uE = {
      key: "free_current",
      getDefault: () => "",
      serialize: oe,
      deserialize: De,
    },
    HE = {
      key: "daily_history",
      getDefault: () => new Array(V + 4).fill(0),
      serialize: Ue,
      deserialize: Ce,
    },
    GE = {
      key: "free_history",
      getDefault: () => new Array(V + 4).fill(0),
      serialize: Ue,
      deserialize: Ce,
    },
    BE = {
      key: "daily_current_streak",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    KE = {
      key: "free_current_streak",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    gE = {
      key: "daily_max_streak",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    FE = {
      key: "free_max_streak",
      getDefault: () => 0,
      serialize: cS,
      deserialize: dS,
    },
    Me = {
      dark_mode: NE,
      colorblind: sE,
      vibration: oE,
      enter_bs_reversed: DE,
      keyboard_height: UE,
      game_size: CE,
      last_daily: cE,
      daily_guesses: ME,
      daily_current: YE,
      daily_history: HE,
      daily_current_streak: BE,
      daily_max_streak: gE,
      last_free: dE,
      free_guesses: PE,
      free_current: uE,
      free_history: GE,
      free_current_streak: KE,
      free_max_streak: FE,
    };
  function $(S) {
    const e = Me[S];
    try {
      return e.deserialize(window.localStorage.getItem(e.key), e.getDefault());
    } catch (E) {
      return e.getDefault();
    }
  }
  function j(S, e) {
    const E = Me[S];
    try {
      window.localStorage.setItem(E.key, E.serialize(e));
    } catch (t) {}
  }
  const Pe = () => {
      const S = new Date();
      return (
        ((S.getTime() -
          fS.getTime() +
          (fS.getTimezoneOffset() - S.getTimezoneOffset()) * tS.minute) /
          ae) >>
        0
      );
    },
    Q = (S, e, E) => {
      window.gtag && gtag(S, e, E);
    },
    h = (S) => {
      se && S && navigator.vibrate(1);
    },
    Re = (S, e, E) => {
      if ("RelativeTimeFormat" in Intl) {
        const L = new Intl.RelativeTimeFormat(E.locale(), { numeric: "auto" }),
          I = e.valueOf() - S.valueOf();
        for (const T in tS) {
          const n = T;
          if (Math.abs(I) > tS[n] || T === "second")
            return L.format(Math.round(I / tS[n]), n);
        }
        return `${I} ms`;
      }
      const t = e.getTime() - S.getTime();
      let R = Math.floor(t / tS.hour);
      return R > 1
        ? E.t("game.hoursDuration", { smart_count: R })
        : ((R = Math.floor(t / tS.minute)),
          R > 1
            ? E.t("game.minutesDuration", { smart_count: R })
            : E.t("game.secondsDuration", {
                smart_count: Math.floor(t / tS.second),
              }));
    },
    hE = (S) => {
      let e = S.length;
      for (; e--; ) {
        const E = Math.floor(Math.random() * e);
        [S[e], S[E]] = [S[E], S[e]];
      }
      return S;
    };
  function CS(S, e) {
    return S + "_" + e;
  }
  const Ye = (S, e) => {
      const E = e.split(""),
        t = S.split(""),
        R = new Array(IS).fill("none"),
        L = {};
      for (let I = 0; I < IS; I++) L[t[I]] = 0;
      for (let I = 0; I < IS; I++)
        E[I] === t[I] &&
          ((E[I] = " "), (L[t[I]] = 2), (t[I] = " "), (R[I] = "correct"));
      for (let I = 0; I < IS; I++)
        E.indexOf(t[I]) !== -1 &&
          E[I] !== t[I] &&
          t[I] !== " " &&
          (L[t[I]] != 2 && (L[t[I]] = 1),
          (E[E.indexOf(t[I])] = " "),
          (R[I] = "diff"));
      return R;
    },
    vE = (S, e) => {
      const E = [[], [], [], []];
      for (let t = 0; t < e.length; t++) {
        const R = S.indexOf(e[t]);
        for (let L = 0; L < S.length; L++)
          (L <= R || R === -1) && E[t].push(Ye(S[L], e[t]));
      }
      return E;
    },
    $S = (S, e, E) => {
      let t;
      const R = new Ve(S);
      R.random_int31(), R.random_int31(), R.random_int31(), R.random_int31();
      do
        t = [
          e[R.random_int31() % e.length],
          e[R.random_int31() % e.length],
          e[R.random_int31() % e.length],
          e[R.random_int31() % e.length],
        ];
      while (
        t[0] === t[1] ||
        t[0] === t[2] ||
        t[0] === t[3] ||
        t[1] === t[2] ||
        t[1] === t[3] ||
        t[2] === t[3] ||
        E.has(t[0]) ||
        E.has(t[1]) ||
        E.has(t[2]) ||
        E.has(t[3])
      );
      return t;
    };
  function WE(S) {
    const e = Pe(),
      E = S.t("wordBank").split(" "),
      t = S.t("allowed"),
      R = t ? t.split(" ") : [],
      L = S.t("blacklist"),
      I = L ? L.split(" ") : [],
      T = S.t("game.keyboard")
        .split(
          `
`
        )
        .map((i) => i.split(" ")),
      n = S.t("game.keyboardReversed")
        .split(
          `
`
        )
        .map((i) => i.split(" ")),
      A = {
        daily: {
          seed: $("last_daily"),
          guesses: [...$("daily_guesses")],
          answers: [],
          current: $("daily_current"),
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: [...$("daily_history")],
          currentStreak: $("daily_current_streak"),
          maxStreak: $("daily_max_streak"),
        },
        free: {
          seed: $("last_free"),
          guesses: [...$("free_guesses")],
          answers: [],
          current: $("free_current"),
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: [...$("free_history")],
          currentStreak: $("free_current_streak"),
          maxStreak: $("free_max_streak"),
        },
        wordBank: E,
        wordBankSet: new Set(E),
        allowed: R,
        allowedSet: new Set(R),
        blacklist: I,
        blacklistSet: new Set(I),
        alphabet: S.t("game.alphabet"),
        keyboard: T,
        keyboardReversed: n,
        darkMode: $("dark_mode"),
        colorblind: $("colorblind"),
        vibration: $("vibration"),
        enterBsReversed: $("enter_bs_reversed"),
        keyboardHeight: $("keyboard_height"),
        gameSize: $("game_size"),
      };
    ["daily", "free"].forEach((i) => {
      const a = A[i];
      a.seed && (i === "free" || a.seed === e)
        ? Q("event", "restore", {
            mode: i,
            daily_seed: i === "daily" ? a.seed : void 0,
          })
        : ((a.seed = i === "daily" ? e : Date.now()),
          (a.guesses = []),
          (a.current = ""),
          Q("event", "start", {
            mode: i,
            daily_seed: i === "daily" ? a.seed : void 0,
          })),
        (a.answers = $S(a.seed, A.wordBank, A.blacklistSet)),
        (a.states = vE(a.guesses, a.answers)),
        (a.answersCorrect = [0, 1, 2, 3].map((o) =>
          a.guesses.indexOf(a.answers[o])
        )),
        (A[i] = a);
    });
    const [O, l] = _e(A);
    return (
      p(() => {
        j("dark_mode", O.darkMode);
      }),
      p(() => {
        j("colorblind", O.colorblind);
      }),
      p(() => {
        j("vibration", O.vibration);
      }),
      p(() => {
        j("enter_bs_reversed", O.enterBsReversed);
      }),
      p(() => {
        j("keyboard_height", O.keyboardHeight);
      }),
      p(() => {
        j("game_size", O.gameSize);
      }),
      ["daily", "free"].forEach((i) => {
        p(() => {
          j(CS("last", i), O[i].seed);
        }),
          p(() => {
            j(CS(i, "guesses"), O[i].guesses);
          }),
          p(() => {
            j(CS(i, "current"), O[i].current);
          }),
          p(() => {
            j(CS(i, "history"), O[i].history);
          }),
          p(() => {
            j(CS(i, "current_streak"), O[i].currentStreak);
          }),
          p(() => {
            j(CS(i, "max_streak"), O[i].maxStreak);
          });
      }),
      [O, l]
    );
  }
  const ZS = Le(),
    fE = (S) => {
      const e = F(),
        [E, t] = WE(e),
        R = (A) =>
          E[A].guesses.length === V ||
          E[A].answers.filter((O) => E[A].guesses.indexOf(O) >= 0).length === 4,
        L = (A, O) => {
          t(
            AS((l) => {
              l[A].current.length < 5 && !R(A) && (l[A].current += O);
            })
          );
        },
        I = (A) => {
          t(
            AS((O) => {
              O[A].current.length > 0 &&
                !R(A) &&
                (O[A].current = O[A].current.slice(0, -1));
            })
          );
        },
        T = (A) => {
          t(
            AS((O) => {
              if (
                O[A].current.length === 5 &&
                (E.wordBankSet.has(O[A].current) ||
                  E.allowedSet.has(O[A].current)) &&
                !R(A)
              ) {
                const l = O[A].current;
                O[A].guesses.push(l), (O[A].current = "");
                for (let i = 0; i < rS; i++) {
                  const a = O[A].guesses.indexOf(O[A].answers[i]);
                  (a === -1 || a === O[A].guesses.length - 1) &&
                    O[A].states[i].push(Ye(l, O[A].answers[i])),
                    (O[A].answersCorrect[i] = O[A].guesses.indexOf(
                      O[A].answers[i]
                    ));
                }
                if (
                  (Q("event", "guess", {
                    mode: A,
                    daily_seed: A === "daily" ? O[A].seed : void 0,
                    word: l,
                  }),
                  R(A))
                ) {
                  const i = O[A].answersCorrect.reduce(
                    (a, o) => (a += o >= 0 ? 1 : 0),
                    0
                  );
                  if (i === 4) {
                    const a = Math.max(...O[A].answersCorrect);
                    O[A].history[a]++,
                      O[A].currentStreak++,
                      O[A].currentStreak > O[A].maxStreak &&
                        (O[A].maxStreak = O[A].currentStreak),
                      Q("event", "win", {
                        mode: A,
                        daily_seed: A === "daily" ? O[A].seed : void 0,
                        guesses: O[A].guesses,
                        num_guesses: a + 1,
                      });
                  } else
                    O[A].history[V + i]++,
                      O[A].currentStreak > 0 &&
                        Q("event", "streak_reset", {
                          mode: A,
                          daily_seed: A === "daily" ? O[A].seed : void 0,
                          current_streak: O[A].currentStreak,
                          max_streak: O[A].maxStreak,
                        }),
                      (O[A].currentStreak = 0),
                      Q("event", "loss", {
                        mode: A,
                        daily_seed: A === "daily" ? O[A].seed : void 0,
                        guesses: O[A].guesses,
                        total_correct: i,
                      });
                }
              } else O[A].current = "";
            })
          );
        },
        n = [
          E,
          {
            setDarkMode(A) {
              t(
                AS((O) => {
                  O.darkMode = A;
                })
              );
            },
            setColorblind(A) {
              t(
                AS((O) => {
                  O.colorblind = A;
                })
              );
            },
            setVibration(A) {
              t(
                AS((O) => {
                  O.vibration = A;
                })
              );
            },
            setEnterBsReversed(A) {
              t(
                AS((O) => {
                  O.enterBsReversed = A;
                })
              );
            },
            setKeyboardHeight(A) {
              t(
                AS((O) => {
                  O.keyboardHeight = A;
                })
              );
            },
            setGameSize(A) {
              t(
                AS((O) => {
                  O.gameSize = A;
                })
              );
            },
            sendKey(A, O) {
              if (O.ctrlKey) return !1;
              if (O.key === "Backspace") return I(A), !0;
              if (O.key === "Enter") return T(A), !0;
              if (O.key) {
                const l = O.key.toLocaleUpperCase(e.locale());
                return E.alphabet.indexOf(l) === -1 ? !1 : (L(A, l), !0);
              } else return !1;
            },
            isGameComplete: R,
            addLetter: L,
            deleteLetter: I,
            submitCurrent: T,
            resetDailyIfOld() {
              const A = Pe();
              A !== E.daily.seed &&
                t(
                  AS((O) => {
                    (O.daily.seed = A),
                      (O.daily.guesses = []),
                      (O.daily.answers = $S(A, O.wordBank, O.blacklistSet)),
                      (O.daily.current = ""),
                      (O.daily.states = [[], [], [], []]),
                      (O.daily.answersCorrect = [-1, -1, -1, -1]);
                  })
                );
            },
            resetFree(A) {
              const O = A || new Date().getTime();
              t(
                AS((l) => {
                  if (!R("free")) {
                    const i = l.free.answersCorrect.reduce(
                      (a, o) => (a += o >= 0 ? 1 : 0),
                      0
                    );
                    l.free.history[V + i]++,
                      l.free.currentStreak > 0 &&
                        Q("event", "streak_reset", {
                          mode: "free",
                          daily_seed: void 0,
                          current_streak: l.free.currentStreak,
                          max_streak: l.free.maxStreak,
                        }),
                      (l.free.currentStreak = 0),
                      Q("event", "loss", {
                        mode: "free",
                        daily_seed: void 0,
                        guesses: l.free.guesses,
                        total_correct: i,
                      }),
                      Q("event", "reset", {
                        mode: "free",
                        daily_seed: void 0,
                        guesses: l.free.guesses,
                        total_correct: i,
                      });
                  }
                  (l.free.seed = O),
                    (l.free.guesses = []),
                    (l.free.answers = $S(O, l.wordBank, l.blacklistSet)),
                    (l.free.current = ""),
                    (l.free.states = [[], [], [], []]),
                    (l.free.answersCorrect = [-1, -1, -1, -1]);
                })
              );
            },
          },
        ];
      return (
        setInterval(() => {
          n[1].resetDailyIfOld();
        }, 1e3),
        N(ZS.Provider, {
          value: n,
          get children() {
            return S.children;
          },
        })
      );
    },
    q = () => {
      const S = WS(ZS);
      if (!S || !S.length)
        throw new Error("GamesDataContext has been used outside provider");
      return S;
    },
    mE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><title></title><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>'
    ),
    bE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path></svg>'
    ),
    wE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>'
    ),
    xE =
      c(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><title></title><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`),
    _E = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>'
    ),
    VE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><title></title><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>'
    ),
    yE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>'
    ),
    $E = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>'
    ),
    kE = c(
      '<svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><title></title><g clip-path="url(#clip0)"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"></path></g></svg>'
    ),
    ZE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 268"><title></title><g><path d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z" fill="currentColor"></path></g></svg>'
    ),
    JE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    ),
    XE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'
    ),
    pE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    ),
    zE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>'
    ),
    QE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"><title></title><path fill="currentColor" fill-rule="evenodd" d="M124 7408.71c0-8.08 10.32-13.186 16.916-6.892 3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834h-2.327L124 7408.71z" transform="translate(-124 -7399)"></path></svg>'
    ),
    qE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Fran\xE7ais</title><rect width="900" height="600" fill="#ED2939"></rect><rect width="600" height="600" fill="#fff"></rect><rect width="300" height="600" fill="#002395"></rect></svg>'
    ),
    jE = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Espa\xF1ol</title><rect width="900" height="600" fill="#c60b1e"></rect><rect width="900" height="300" y="150" fill="#ffc400"></rect></svg>'
    ),
    SA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 3 2"><title>Italiano</title><rect width="3" height="2" fill="#009246"></rect><rect width="2" height="2" x="1" fill="#fff"></rect><rect width="1" height="2" x="2" fill="#ce2b37"></rect></svg>'
    ),
    eA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 9 6"><title>Nederlands</title><rect fill="#21468B" width="9" height="6"></rect><rect fill="#FFF" width="9" height="4"></rect><rect fill="#AE1C28" width="9" height="2"></rect></svg>'
    ),
    EA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 5850 3900"><title>English</title><rect width="7410" height="3900" fill="#b22234"></rect><path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300"></path><rect width="2964" height="2100" fill="#3c3b6e"></rect><g fill="#fff"><g id="s18"><g id="s9"><g id="s5"><g id="s4"><path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"></path><use href="#s" y="420"></use><use href="#s" y="840"></use><use href="#s" y="1260"></use></g><use href="#s" y="1680"></use></g><use href="#s4" x="247" y="210"></use></g><use href="#s9" x="494"></use></g><use href="#s18" x="988"></use><use href="#s9" x="1976"></use><use href="#s5" x="2470"></use></g></svg>'
    ),
    AA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>'
    ),
    tA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor"><title></title><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"></path></g></svg>'
    ),
    OA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>'
    ),
    RA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
    ),
    rA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'
    ),
    IA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
    ),
    nA = c(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'
    ),
    LA = (S) => {
      const e = F();
      return (() => {
        const E = mE.cloneNode(!0),
          t = E.firstChild,
          R = t.nextSibling,
          L = R.nextSibling,
          I = L.nextSibling,
          T = I.nextSibling;
        return (
          nS(E, S, !0, !0),
          r(t, () => e.t("app.appName")),
          g(
            (n) => {
              const A = S.colorblind ? "#fb923c" : "#00cc88",
                O = S.colorblind ? "#fb923c" : "#00cc88",
                l = S.colorblind ? "#60a5fa" : "#ffcc00";
              return (
                A !== n._v$ && D(L, "fill", (n._v$ = A)),
                O !== n._v$2 && D(I, "fill", (n._v$2 = O)),
                l !== n._v$3 && D(T, "fill", (n._v$3 = l)),
                n
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0 }
          ),
          E
        );
      })();
    },
    TA = (S) => {
      const e = F();
      return (() => {
        const E = bE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("game.enterKey")),
          g(() => D(E, "height", (S.height ? S.height : 16) + "px")),
          E
        );
      })();
    },
    iA = (S) => {
      const e = F();
      return (() => {
        const E = wE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("game.backspaceKey")),
          g(() => D(E, "height", (S.height ? S.height : 16) + "px")),
          E
        );
      })();
    },
    ue = (S) => {
      const e = F();
      return (() => {
        const E = xE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.twitter")),
          g(() => D(E, "height", (S.height ? S.height : 16) + "px")),
          E
        );
      })();
    },
    aA = (S) => {
      const e = F();
      return (() => {
        const E = _E.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.github")),
          g(
            (R) => {
              const L = (S.height ? S.height : 24) + "px",
                I = (S.height ? S.height : 24) + "px";
              return (
                L !== R._v$4 && D(E, "height", (R._v$4 = L)),
                I !== R._v$5 && D(E, "width", (R._v$5 = I)),
                R
              );
            },
            { _v$4: void 0, _v$5: void 0 }
          ),
          E
        );
      })();
    },
    lA = (S) => {
      const e = F();
      return (() => {
        const E = VE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.facebook")),
          g(
            (R) => {
              const L = (S.height ? S.height : 24) + "px",
                I = (S.height ? S.height : 24) + "px";
              return (
                L !== R._v$6 && D(E, "height", (R._v$6 = L)),
                I !== R._v$7 && D(E, "width", (R._v$7 = I)),
                R
              );
            },
            { _v$6: void 0, _v$7: void 0 }
          ),
          E
        );
      })();
    },
    NA = (S) => {
      const e = F();
      return (() => {
        const E = yE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.reddit")),
          g(
            (R) => {
              const L = (S.height ? S.height : 24) + "px",
                I = (S.height ? S.height : 24) + "px";
              return (
                L !== R._v$8 && D(E, "height", (R._v$8 = L)),
                I !== R._v$9 && D(E, "width", (R._v$9 = I)),
                R
              );
            },
            { _v$8: void 0, _v$9: void 0 }
          ),
          E
        );
      })();
    },
    sA = (S) => {
      const e = F();
      return (() => {
        const E = $E.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.instagram")),
          g(
            (R) => {
              const L = (S.height ? S.height : 24) + "px",
                I = (S.height ? S.height : 24) + "px";
              return (
                L !== R._v$10 && D(E, "height", (R._v$10 = L)),
                I !== R._v$11 && D(E, "width", (R._v$11 = I)),
                R
              );
            },
            { _v$10: void 0, _v$11: void 0 }
          ),
          E
        );
      })();
    },
    oA = (S) => {
      const e = F();
      return (() => {
        const E = kE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.discord")),
          g(() => D(E, "height", (S.height ? S.height : 24) + "px")),
          E
        );
      })();
    },
    DA = (S) => {
      const e = F();
      return (() => {
        const E = ZE.cloneNode(!0),
          t = E.firstChild;
        return (
          r(t, () => e.t("tutorial.twitch")),
          g(() => D(E, "height", (S.height ? S.height : 24) + "px")),
          E
        );
      })();
    },
    UA = () => {
      const S = F();
      return (() => {
        const e = JE.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("header.help")), e;
      })();
    },
    JS = (S) => {
      const e = F();
      return (() => {
        const E = XE.cloneNode(!0),
          t = E.firstChild;
        return nS(E, S, !0, !0), r(t, () => e.t("header.moreOptions")), E;
      })();
    },
    CA = (S) => {
      const e = F();
      return (() => {
        const E = pE.cloneNode(!0),
          t = E.firstChild;
        return nS(E, S, !0, !0), r(t, () => e.t("header.settings")), E;
      })();
    },
    cA = (S) => {
      const e = F();
      return (() => {
        const E = zE.cloneNode(!0),
          t = E.firstChild;
        return nS(E, S, !0, !0), r(t, () => e.t("header.donate")), E;
      })();
    },
    dA = (S) => {
      const e = F();
      return (() => {
        const E = QE.cloneNode(!0),
          t = E.firstChild;
        return nS(E, S, !0, !0), r(t, () => e.t("header.patreon")), E;
      })();
    },
    MA = (S) =>
      (() => {
        const e = qE.cloneNode(!0);
        return nS(e, S, !0, !0), e;
      })(),
    PA = (S) =>
      (() => {
        const e = jE.cloneNode(!0);
        return nS(e, S, !0, !0), e;
      })(),
    YA = (S) =>
      (() => {
        const e = SA.cloneNode(!0);
        return nS(e, S, !0, !0), e;
      })(),
    uA = (S) =>
      (() => {
        const e = eA.cloneNode(!0);
        return nS(e, S, !0, !0), e;
      })(),
    HA = (S) =>
      (() => {
        const e = EA.cloneNode(!0);
        return nS(e, S, !0, !0), e;
      })(),
    GA = () => {
      const S = F();
      return (() => {
        const e = AA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("game.share")), e;
      })();
    },
    BA = () => {
      const S = F();
      return (() => {
        const e = tA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("game.share")), e;
      })();
    },
    He = () => {
      const S = F();
      return (() => {
        const e = OA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("game.copyClipboard")), e;
      })();
    },
    re = () => {
      const S = F();
      return (() => {
        const e = RA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("game.saveImage")), e;
      })();
    },
    KA = () => {
      const S = F();
      return (() => {
        const e = rA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("game.newPractice")), e;
      })();
    },
    gA = (S) => {
      const e = F();
      return (() => {
        const E = IA.cloneNode(!0),
          t = E.firstChild;
        return (
          r(
            t,
            (() => {
              const R = w(() => S.mode === "daily", !0);
              return () =>
                R()
                  ? e.t("stats.dailyStatistics")
                  : e.t("stats.practiceStatistics");
            })()
          ),
          E
        );
      })();
    },
    XS = () => {
      const S = F();
      return (() => {
        const e = nA.cloneNode(!0),
          E = e.firstChild;
        return r(E, () => S.t("app.close")), e;
      })();
    },
    FA = c('<button type="button"></button>'),
    hA = c(
      '<div class="px-4 py-2 text-center"><div class="text-3xl pb-2"></div></div>'
    ),
    vA = c(
      '<div class="flex items-center justify-center"><div class="ml-2"></div></div>'
    ),
    WA = c('<div class="text-black dark:text-white text-2xl"></div>'),
    fA = c(
      '<div class="mx-2.5 mt-1 px-4 py-2 text-center bg-rose-700 text-white text-xl rounded"></div>'
    ),
    mA = (S) =>
      (() => {
        const e = FA.cloneNode(!0);
        return (
          OS(e, "click", S.onClick, !0),
          r(e, () => S.children),
          g(
            (E) => {
              const t = `text-lg min-h-[40px] text-gray-900 bg-gray-300 border border-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-gray-600 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:focus:ring-gray-900 transition-colors ${S.class}`,
                R = S.ariaLabel;
              return (
                t !== E._v$ && (e.className = E._v$ = t),
                R !== E._v$2 && D(e, "aria-label", (E._v$2 = R)),
                E
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          e
        );
      })(),
    bA = (S) => {
      const e = F(),
        [E, t] = q(),
        R = K(() =>
          E[S.mode].answersCorrect.reduce((A, O) => (A += O >= 0 ? 1 : 0), 0)
        ),
        L = K(
          () =>
            new Date(
              fS.getTime() +
                (new Date().getTimezoneOffset() - fS.getTimezoneOffset()) *
                  tS.minute +
                (E[S.mode].seed + 1) * ae
            )
        ),
        [I, T] = k(new Date()),
        n = setInterval(() => T(new Date()), 1e3);
      return (
        HS(() => clearInterval(n)),
        K(() =>
          t.isGameComplete(S.mode)
            ? (() => {
                const A = hA.cloneNode(!0),
                  O = A.firstChild;
                return (
                  r(
                    O,
                    (() => {
                      const l = w(() => R() === 4, !0);
                      return () =>
                        l()
                          ? e.t("game.complete")
                          : (() => {
                              const i = w(() => R() === 3, !0);
                              return () =>
                                i()
                                  ? e.t("game.soClose")
                                  : e.t("game.betterLuck");
                            })();
                    })()
                  ),
                  r(
                    A,
                    (() => {
                      const l = w(() => S.mode === "free", !0);
                      return () =>
                        l()
                          ? N(mA, {
                              onClick: () => {
                                h(E.vibration), t.resetFree();
                              },
                              get ariaLabel() {
                                return e.t("game.newPractice");
                              },
                              get children() {
                                const i = vA.cloneNode(!0),
                                  a = i.firstChild;
                                return (
                                  r(i, N(KA, {}), a),
                                  r(a, () => e.t("game.newPractice")),
                                  i
                                );
                              },
                            })
                          : (() => {
                              const i = WA.cloneNode(!0);
                              return (
                                r(i, () =>
                                  e.t("game.nextDaily", {
                                    duration: Re(I(), L(), e),
                                  })
                                ),
                                i
                              );
                            })();
                    })(),
                    null
                  ),
                  g(
                    (l) => {
                      const i = e.t("game.aria.gameCompleteBanner"),
                        a = {
                          "text-green-600 dark:text-green-500": R() === 4,
                          "text-amber-600 dark:text-amber-400": R() === 3,
                          "text-orange-600 dark:text-orange-500": R() === 2,
                          "text-rose-600": R() <= 1,
                        };
                      return (
                        i !== l._v$3 && D(A, "aria-label", (l._v$3 = i)),
                        (l._v$4 = lS(O, a, l._v$4)),
                        l
                      );
                    },
                    { _v$3: void 0, _v$4: void 0 }
                  ),
                  A
                );
              })()
            : S.mode === "daily" &&
              L().getTime() - I().getTime() < tS.minute * 5
            ? (() => {
                const A = fA.cloneNode(!0);
                return (
                  r(A, () =>
                    e.t("game.dailyResetTimer", { duration: Re(I(), L(), e) })
                  ),
                  g(() =>
                    A.classList.toggle(
                      "animate-pulse",
                      L().getTime() - I().getTime() < tS.second * 15
                    )
                  ),
                  A
                );
              })()
            : null
        )
      );
    };
  NS(["click"]);
  const SS = (S) => (S < 0 ? "\u{1F7E5}" : `${S + 1}\uFE0F\u20E3`),
    KS = (S) => {
      let e = "";
      if (!S || S.length === 0) return "\u2B1B\u2B1B\u2B1B\u2B1B\u2B1B";
      for (let E = 0; E < S.length; E++)
        S[E] === "correct"
          ? (e += "\u{1F7E9}")
          : S[E] === "diff"
          ? (e += "\u{1F7E8}")
          : S[E] === "none" && (e += "\u2B1C");
      return e;
    },
    gS = (S) =>
      S
        ? S === "correct"
          ? "#00cc88"
          : S === "diff"
          ? "#ffcc00"
          : S === "none"
          ? "#e0e0e0"
          : "#2d2d2d"
        : "#2d2d2d";
  function YS(S, e, E, t, R, L) {
    const I = { tl: L, tr: L, br: L, bl: L };
    S.beginPath(),
      S.moveTo(e + I.tl, E),
      S.lineTo(e + t - I.tr, E),
      S.quadraticCurveTo(e + t, E, e + t, E + I.tr),
      S.lineTo(e + t, E + R - I.br),
      S.quadraticCurveTo(e + t, E + R, e + t - I.br, E + R),
      S.lineTo(e + I.bl, E + R),
      S.quadraticCurveTo(e, E + R, e, E + R - I.bl),
      S.lineTo(e, E + I.tl),
      S.quadraticCurveTo(e, E, e + I.tl, E),
      S.closePath(),
      S.fill();
  }
  const Ge = (S, e, E) => {
      let t = "";
      S === "daily"
        ? (t =
            E.t("game.dailyQuordleShare") +
            " #" +
            e.seed.toString(10) +
            `
` +
            SS(e.answersCorrect[0]) +
            SS(e.answersCorrect[1]) +
            `
` +
            SS(e.answersCorrect[2]) +
            SS(e.answersCorrect[3]))
        : (t =
            E.t("game.practiceQuordleShare") +
            `
` +
            SS(e.answersCorrect[0]) +
            SS(e.answersCorrect[1]) +
            (" " + e.answers[0] + " - " + e.answers[1]) +
            `
` +
            SS(e.answersCorrect[2]) +
            SS(e.answersCorrect[3]) +
            (" " + e.answers[2] + " - " + e.answers[3])),
        (t +=
          `
` + E.t("app.webAddress"));
      const R = t;
      t += `
`;
      let L = V - 1;
      e.answersCorrect[0] >= 0 &&
        e.answersCorrect[1] >= 0 &&
        (L = Math.max(e.answersCorrect[0], e.answersCorrect[1]));
      let I = V - 1;
      e.answersCorrect[2] >= 0 &&
        e.answersCorrect[3] >= 0 &&
        (I = Math.max(e.answersCorrect[2], e.answersCorrect[3]));
      for (let T = 0; T <= L; T++)
        t +=
          KS(e.states[0][T]) +
          " " +
          KS(e.states[1][T]) +
          `
`;
      t += `
`;
      for (let T = 0; T <= I; T++)
        t +=
          KS(e.states[2][T]) +
          " " +
          KS(e.states[3][T]) +
          `
`;
      return [t, R];
    },
    FS = (S, e, E, t) =>
      wS(ge, null, function* () {
        const [R, L] = Ge(S, e, t);
        if (
          (Q("event", "share", {
            mode: S,
            share_type: E,
            daily_seed: S === "daily" ? e.seed : void 0,
          }),
          E === "clipboard")
        )
          navigator.clipboard
            .writeText(R)
            .then(() => alert(t.t("game.copiedResults")))
            .catch((I) => {
              console.error(I), alert(t.t("game.errorCopy"));
            });
        else if (E === "share")
          navigator.share({ text: R }).catch((I) => console.error(I));
        else if (E === "image" || E === "image_save") {
          const I = document.createElement("canvas");
          I.style.display = "none";
          let T = V - 1;
          e.answersCorrect[0] >= 0 &&
            e.answersCorrect[1] >= 0 &&
            (T = Math.max(e.answersCorrect[0], e.answersCorrect[1]));
          let n = V - 1;
          e.answersCorrect[2] >= 0 &&
            e.answersCorrect[3] >= 0 &&
            (n = Math.max(e.answersCorrect[2], e.answersCorrect[3]));
          const A = 64,
            O = A / 16,
            l = A / 8,
            i = 0.75,
            a = A / 4;
          (I.width = (A + O) * 11 - O),
            (I.height = (A + O) * (T + 1 + n + 1 + 4) - O);
          const o = I.getContext("2d");
          if (!o) return;
          (o.fillStyle = "black"), o.fillRect(0, 0, I.width, I.height);
          let Y = 0,
            P = 0;
          for (let s = 0; s <= T; s++) {
            let U = e.states[0][s];
            for (Y = 0; Y < IS; Y++)
              (o.fillStyle = gS(U == null ? void 0 : U[Y])),
                YS(o, Y * (A + O), P * (A + O), A, A, l);
            for (U = e.states[1][s], Y = 6; Y < IS + 6; Y++)
              (o.fillStyle = gS(U == null ? void 0 : U[Y - 6])),
                YS(o, Y * (A + O), P * (A + O), A, A, l);
            P++;
          }
          (o.font = A * i + "px Arial"),
            (o.textAlign = "center"),
            (o.textBaseline = "alphabetic"),
            (o.fillStyle = "#ffffff");
          const G =
            S === "daily"
              ? t.t("game.dailyQuordleShare") + " #" + e.seed.toString(10)
              : t.t("game.practiceQuordleShare");
          let d = o.measureText(G),
            H = d.actualBoundingBoxAscent;
          o.fillText(
            G,
            I.width / 2,
            P * (A + O) + A - (A - H) / 2,
            I.width - a * 2
          ),
            P++;
          for (let s = 0; s < 2; s++) {
            for (let U = 0; U < 2; U++) {
              o.fillStyle =
                e.answersCorrect[U + s * 2] >= 0 ? "#00a6ed" : "#f8312f";
              const v = U * 2 - 1,
                m = I.width / 2 + v * (O / 2) + v * (A / 2);
              if (
                (YS(o, m - A / 2, P * (A + O), A, A, l),
                e.answersCorrect[U + s * 2] >= 0)
              ) {
                (o.textAlign = "center"), (o.fillStyle = "#ffffff");
                const J = String(e.answersCorrect[U + s * 2] + 1);
                (d = o.measureText(J)),
                  (H = d.actualBoundingBoxAscent + d.actualBoundingBoxDescent),
                  o.fillText(J, m, P * (A + O) + A - (A - H) / 2, A);
              }
            }
            if (S === "free") {
              (o.textAlign = "right"), (o.fillStyle = "#ffffff");
              let U = e.answers[0 + s * 2];
              (d = o.measureText(U)),
                (H = d.actualBoundingBoxAscent + d.actualBoundingBoxDescent),
                o.fillText(
                  U,
                  I.width / 2 - O / 2 - A - a,
                  P * (A + O) + A - (A - H) / 2,
                  I.width / 2 - O - A - a * 2
                ),
                (o.textAlign = "left"),
                (U = e.answers[1 + s * 2]),
                (d = o.measureText(U)),
                (H = d.actualBoundingBoxAscent + d.actualBoundingBoxDescent),
                o.fillText(
                  U,
                  I.width / 2 + O / 2 + A + a,
                  P * (A + O) + A - (A - H) / 2,
                  I.width / 2 - O - A - a * 2
                );
            }
            P++;
          }
          (o.textAlign = "center"),
            (o.textBaseline = "middle"),
            (o.fillStyle = "#ffffff"),
            o.fillText(
              t.t("app.webAddress"),
              I.width / 2,
              P * (A + O) + A / 2,
              I.width
            ),
            P++;
          for (let s = 0; s <= n; s++) {
            Y = 0;
            let U = e.states[2][s];
            for (Y = 0; Y < IS; Y++)
              (o.fillStyle = gS(U == null ? void 0 : U[Y])),
                YS(o, Y * (A + O), P * (A + O), A, A, l);
            for (U = e.states[3][s], Y = 6; Y < IS + 6; Y++)
              (o.fillStyle = gS(U == null ? void 0 : U[Y - 6])),
                YS(o, Y * (A + O), P * (A + O), A, A, l);
            P++;
          }
          const C = yield new Promise((s) => I.toBlob(s));
          if (!C) return;
          const M = `quordle-${S === "daily" ? "daily" : "practice"}-${
              e.seed
            }.png`,
            u = new File([C], M, { type: "image/png" });
          E === "image"
            ? navigator
                .share({ files: [u], text: L })
                .catch((s) => console.error(s))
            : E === "image_save" && ye.saveAs(u, M);
        }
      }),
    wA = c(
      '<button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button>'
    ),
    xA = c('<span><a target="_blank"></a></span>'),
    _A = c(
      '<div class="flex flex-col rounded-t-lg text-center px-4 pt-2 pb-4"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="flex items-center justify-center mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>'
    ),
    _S = c(
      '<div class="flex items-center justify-center"><div class="ml-2"></div></div>'
    ),
    VA = c('<div class="mr-2 inline-flex"></div>'),
    yA = c(
      '<div class="inline-flex" role="group"><button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400 transition-colors"><div class="flex items-center justify-center"><div class="ml-2"></div></div></button><button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button></div>'
    ),
    $A = c('<div class="flex items-center justify-center mt-2"></div>'),
    VS = (S) =>
      (() => {
        const e = wA.cloneNode(!0);
        return (
          OS(e, "click", S.onClick, !0),
          r(e, () => S.children),
          g(() => D(e, "aria-label", S.ariaLabel)),
          e
        );
      })(),
    hS = (S) => {
      const e = F(),
        [E] = q(),
        t = K(() => E[S.mode].answersCorrect[S.gameIndex]),
        R = K(() => E[S.mode].answers[S.gameIndex]);
      return (() => {
        const L = xA.cloneNode(!0),
          I = L.firstChild;
        return (
          r(I, R),
          g(
            (T) => {
              const n = {
                  "mr-4": S.marginSide === "right",
                  "ml-4": S.marginSide === "left",
                  "text-green-600 dark:text-green-500":
                    E[S.mode].answersCorrect[S.gameIndex] >= 0,
                  "text-rose-600": E[S.mode].answersCorrect[S.gameIndex] < 0,
                },
                A = e.t("game.aria.shareAnswer", {
                  word: R(),
                  board: S.gameIndex + 1,
                  solved:
                    t() >= 0
                      ? e.t("game.aria.shareAnswerSolved", {
                          smart_count: t() + 1,
                        })
                      : e.t("game.aria.shareAnswerUnsolved"),
                }),
                O = e.t("app.dictionaryUrl", {
                  word: E[S.mode].answers[S.gameIndex],
                }),
                l = e.t("game.aria.shareAnswerLinkDesc");
              return (
                (T._v$ = lS(L, n, T._v$)),
                A !== T._v$2 && D(L, "aria-label", (T._v$2 = A)),
                O !== T._v$3 && D(I, "href", (T._v$3 = O)),
                l !== T._v$4 && D(I, "aria-label", (T._v$4 = l)),
                T
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 }
          ),
          L
        );
      })();
    },
    kA = (S) => {
      const e = F(),
        [E] = q(),
        [t, R] = k(void 0),
        [L, I] = k(!1),
        T = K(() => Ge(S.mode, E[S.mode], e)[0]);
      return (() => {
        const n = _A.cloneNode(!0),
          A = n.firstChild,
          O = A.firstChild,
          l = O.firstChild,
          i = O.nextSibling,
          a = i.firstChild,
          o = A.nextSibling,
          Y = o.firstChild,
          P = Y.firstChild,
          G = Y.nextSibling,
          d = G.firstChild,
          H = o.nextSibling,
          C = H.nextSibling;
        return (
          r(
            O,
            N(hS, {
              get mode() {
                return S.mode;
              },
              gameIndex: 0,
              marginSide: "right",
            }),
            l
          ),
          r(l, () => SS(E[S.mode].answersCorrect[0])),
          r(a, () => SS(E[S.mode].answersCorrect[1])),
          r(
            i,
            N(hS, {
              get mode() {
                return S.mode;
              },
              gameIndex: 1,
              marginSide: "left",
            }),
            null
          ),
          r(
            Y,
            N(hS, {
              get mode() {
                return S.mode;
              },
              gameIndex: 2,
              marginSide: "right",
            }),
            P
          ),
          r(P, () => SS(E[S.mode].answersCorrect[2])),
          r(d, () => SS(E[S.mode].answersCorrect[3])),
          r(
            G,
            N(hS, {
              get mode() {
                return S.mode;
              },
              gameIndex: 3,
              marginSide: "left",
            }),
            null
          ),
          r(
            H,
            AE &&
              (() => {
                const M = VA.cloneNode(!0);
                return (
                  r(
                    M,
                    N(VS, {
                      onClick: () => {
                        h(E.vibration), FS(S.mode, E[S.mode], "share", e);
                      },
                      get ariaLabel() {
                        return e.t("game.share");
                      },
                      get children() {
                        const u = _S.cloneNode(!0),
                          s = u.firstChild;
                        return (
                          r(u, EE ? N(BA, {}) : N(GA, {}), s),
                          r(s, () => e.t("game.share")),
                          u
                        );
                      },
                    })
                  ),
                  M
                );
              })(),
            null
          ),
          r(
            H,
            tE
              ? (() => {
                  const M = yA.cloneNode(!0),
                    u = M.firstChild,
                    s = u.firstChild,
                    U = s.firstChild,
                    v = u.nextSibling;
                  return (
                    (u.$$click = () => {
                      h(E.vibration), FS(S.mode, E[S.mode], "image", e);
                    }),
                    r(s, N(ue, { height: 16 }), U),
                    r(U, () => e.t("game.shareImage")),
                    (v.$$click = () => {
                      h(E.vibration), FS(S.mode, E[S.mode], "image_save", e);
                    }),
                    r(v, N(re, {})),
                    g(
                      (m) => {
                        const J = e.t("game.shareImage"),
                          X = e.t("game.saveImage");
                        return (
                          J !== m._v$8 && D(u, "aria-label", (m._v$8 = J)),
                          X !== m._v$9 && D(v, "aria-label", (m._v$9 = X)),
                          m
                        );
                      },
                      { _v$8: void 0, _v$9: void 0 }
                    ),
                    M
                  );
                })()
              : N(VS, {
                  onClick: () => {
                    h(E.vibration), FS(S.mode, E[S.mode], "image_save", e);
                  },
                  get ariaLabel() {
                    return e.t("game.saveImage");
                  },
                  get children() {
                    const M = _S.cloneNode(!0),
                      u = M.firstChild;
                    return (
                      r(M, N(re, {}), u), r(u, () => e.t("game.saveImage")), M
                    );
                  },
                }),
            null
          ),
          r(
            n,
            (() => {
              const M = w(() => !!t(), !0);
              return () =>
                M() &&
                (() => {
                  const u = $A.cloneNode(!0);
                  return (
                    r(
                      u,
                      N(VS, {
                        onClick: () => {
                          h(E.vibration),
                            Q("event", "share", {
                              mode: S.mode,
                              share_type: "clipboard",
                              daily_seed:
                                S.mode === "daily" ? E[S.mode].seed : void 0,
                            }),
                            I(!0);
                          const s = t();
                          if (s) {
                            s.select(), document.execCommand("copy");
                            const U =
                              window.getSelection && window.getSelection();
                            U && U.removeAllRanges(), s.blur();
                          }
                          alert(e.t("game.copiedResults"));
                        },
                        get ariaLabel() {
                          return e.t("game.copyClipboard");
                        },
                        get children() {
                          const s = _S.cloneNode(!0),
                            U = s.firstChild;
                          return (
                            r(s, N(He, {}), U),
                            r(U, () => e.t("game.copyClipboard")),
                            s
                          );
                        },
                      })
                    ),
                    u
                  );
                })();
            })(),
            C
          ),
          R(C),
          r(C, T),
          g(
            (M) => {
              const u = e.t("game.aria.shareBanner"),
                s = { "absolute top-[100%]": !L() },
                U = e.t("game.copyClipboard");
              return (
                u !== M._v$5 && D(n, "aria-label", (M._v$5 = u)),
                (M._v$6 = lS(C, s, M._v$6)),
                U !== M._v$7 && D(C, "aria-label", (M._v$7 = U)),
                M
              );
            },
            { _v$5: void 0, _v$6: void 0, _v$7: void 0 }
          ),
          n
        );
      })();
    };
  NS(["click"]);
  const ZA = c(
      '<div class="quordle-box w-[20%]" role="cell"><div class="quordle-box-content"> </div></div>'
    ),
    Be = (S) => {
      const [e, E] = k(!1),
        t = K(() =>
          S.rowTemporalState === "present" || S.gameSize === "square"
            ? S.presentTileHeight
            : S.tileHeight
        );
      return (
        p(() => {
          if (t() > 0) {
            const R = setTimeout(() => {
              E(!0);
            }, 100);
            HS(() => clearTimeout(R));
          }
        }),
        (() => {
          const R = ZA.cloneNode(!0),
            L = R.firstChild,
            I = L.firstChild;
          return (
            g(
              (T) => {
                const n = {
                    "bg-box-correct": S.state === "correct" && !S.colorblind,
                    "bg-box-correct-alt": S.state === "correct" && S.colorblind,
                    "bg-box-diff": S.state === "diff" && !S.colorblind,
                    "bg-box-diff-alt": S.state === "diff" && S.colorblind,
                    "bg-gray-200 dark:bg-gray-700":
                      S.state === "none" && S.rowTemporalState === "past",
                    "bg-gray-300 dark:bg-gray-600":
                      S.rowTemporalState === "present" && !S.answered,
                    "bg-gray-100 dark:bg-gray-900":
                      S.rowTemporalState === "future" ||
                      S.rowTemporalState === "never" ||
                      (S.rowTemporalState === "present" && S.answered),
                    "text-black": S.state === "correct" || S.state === "diff",
                    "text-rose-600": S.state === "invalid",
                    "text-black dark:text-white": S.state === "none",
                    "quordle-heartbeat-anim dark:quordle-heartbeat-anim-dark":
                      S.activeCol === S.gameCol &&
                      S.rowTemporalState === "present" &&
                      !S.answered,
                    "quordle-letter-anim":
                      S.letter !== "" && S.rowTemporalState === "present",
                    "quordle-box-connected":
                      S.rowTemporalState === "future" ||
                      S.rowTemporalState === "never",
                    "quordle-box-animate": e(),
                  },
                  A = t() + "px",
                  O = Math.min(t() * 0.8, 30) + "px",
                  l = S.ariaLabel,
                  i = S.letter;
                return (
                  (T._v$ = lS(R, n, T._v$)),
                  A !== T._v$2 && R.style.setProperty("height", (T._v$2 = A)),
                  O !== T._v$3 &&
                    R.style.setProperty("font-size", (T._v$3 = O)),
                  l !== T._v$4 && D(R, "aria-label", (T._v$4 = l)),
                  i !== T._v$5 && (I.data = T._v$5 = i),
                  T
                );
              },
              {
                _v$: void 0,
                _v$2: void 0,
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0,
              }
            ),
            R
          );
        })()
      );
    },
    JA = (S) => {
      const e = F(),
        E = S.gameX + S.gameY * GS,
        [t, R] = q(),
        L = K(() => {
          const a = t[S.mode],
            o = a.guesses,
            Y = a.answers[E];
          return o.indexOf(Y);
        }),
        I = K(() => L() !== -1 && L() < S.gameRow),
        T = K(() => t[S.mode].current.length),
        n = K(() => {
          const a = t[S.mode],
            o = a.current,
            Y = a.guesses;
          return (
            S.gameRow <= L() ||
            (L() === -1 && S.gameRow < Y.length) ||
            (L() === -1 && S.gameRow === Y.length && S.gameCol < o.length)
          );
        }),
        A = K(() => {
          const a = t[S.mode],
            o = a.guesses,
            Y = a.current;
          let P = "";
          if (n())
            S.gameRow < o.length
              ? (P = o[S.gameRow][S.gameCol])
              : S.gameRow === o.length && (P = Y[S.gameCol]);
          else return P;
          return P;
        }),
        O = K(() => {
          var G;
          const a = t[S.mode],
            o = a.guesses,
            Y = a.states,
            P = a.current;
          if (n()) {
            if (S.gameRow < o.length)
              return (
                ((G = Y[E][S.gameRow]) == null ? void 0 : G[S.gameCol]) ||
                "none"
              );
            if (
              S.gameRow === o.length &&
              P.length === 5 &&
              !t.allowedSet.has(P) &&
              !t.wordBankSet.has(P)
            )
              return "invalid";
          }
          return "none";
        }),
        l = K(() => {
          const o = t[S.mode].guesses;
          return S.gameRow === o.length
            ? R.isGameComplete(S.mode)
              ? "never"
              : "present"
            : I()
            ? "never"
            : o.length > S.gameRow
            ? "past"
            : "future";
        }),
        i = K(() => {
          const a = {
            letter: A() ? A() : e.t("game.aria.blank"),
            column: S.gameCol + 1,
          };
          return I() || l() === "never"
            ? e.t("game.aria.tileNever", a)
            : l() === "future"
            ? e.t("game.aria.tileFuture", a)
            : O() === "invalid"
            ? e.t("game.aria.tileInvalid", a)
            : l() === "present"
            ? e.t("game.aria.tilePresent", a)
            : O() === "diff"
            ? e.t("game.aria.tileDiff", a)
            : O() === "none"
            ? e.t("game.aria.tileNone", a)
            : e.t("game.aria.tileCorrect", a);
        });
      return N(Be, {
        get state() {
          return O();
        },
        get letter() {
          return A();
        },
        get gameRow() {
          return S.gameRow;
        },
        get gameCol() {
          return S.gameCol;
        },
        get rowTemporalState() {
          return l();
        },
        get activeCol() {
          return T();
        },
        get colorblind() {
          return t.colorblind;
        },
        get currentRow() {
          return t[S.mode].guesses.length;
        },
        get tileHeight() {
          return S.tileHeight;
        },
        get presentTileHeight() {
          return S.presentTileHeight;
        },
        get answered() {
          return I();
        },
        get gameSize() {
          return t.gameSize;
        },
        get ariaLabel() {
          return i();
        },
      });
    },
    XA = c(
      '<a class="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded" target="_blank"></a>'
    ),
    pA = c(
      '<div id="options-dropdown" class="absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4" aria-controls="settings-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4" aria-controls="statistics-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center" href="https://www.buymeacoffee.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white"></div></a></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center" href="https://www.patreon.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white"></div></a></button><div class="m-4 flex flex-row-reverse justify-center items-center"></div></div>'
    ),
    zA = c(
      '<nav class="bg-slate-300 dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><span class="mx-3 text-black dark:text-white"></span><div class="flex flex-grow-0 flex-shrink-1 overflow-auto"></div><div class="flex flex-1 justify-end items-center ml-2"><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white transition-colors" aria-controls="tutorial-panel"></button><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition" aria-controls="options-dropdown"></button></div></div></nav>'
    ),
    uS = (S) =>
      (() => {
        const e = XA.cloneNode(!0);
        return (
          OS(e, "click", S.onClick, !0),
          r(
            e,
            N(S.iconComponent, {
              class: "h-5 w-auto rounded-sm ring-1 ring-black dark:ring-white",
            })
          ),
          g(
            (E) => {
              const t = `https://${
                  S.lang === "en" ? "www" : S.lang
                }.quordle.com`,
                R = S.ariaLabel;
              return (
                t !== E._v$ && D(e, "href", (E._v$ = t)),
                R !== E._v$2 && D(e, "aria-label", (E._v$2 = R)),
                E
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          e
        );
      })(),
    QA = (S) => {
      const e = F(),
        [E] = q(),
        [t] = Te(),
        R = K(() => t.overlay === "tutorial"),
        L = K(() => t.overlay === "statistics"),
        I = K(() => t.overlay === "settings"),
        [T, n] = k(!1),
        [A, O] = k();
      return (() => {
        const l = zA.cloneNode(!0),
          i = l.firstChild,
          a = i.firstChild,
          o = a.nextSibling,
          Y = o.nextSibling,
          P = Y.firstChild,
          G = P.nextSibling;
        return (
          r(
            i,
            N(LA, {
              get colorblind() {
                return E.colorblind;
              },
            }),
            a
          ),
          r(a, () => e.t("header.title")),
          r(
            o,
            N(te, {
              href: "/",
              activeClass: "quordle-nav-active",
              class: "quordle-nav",
              onClick: () => h(E.vibration),
              end: !0,
              get children() {
                return e.t("header.daily");
              },
            }),
            null
          ),
          r(
            o,
            N(te, {
              href: "/practice",
              activeClass: "quordle-nav-active",
              class: "quordle-nav ml-2",
              onClick: () => h(E.vibration),
              end: !0,
              get children() {
                return e.t("header.practice");
              },
            }),
            null
          ),
          OS(P, "click", S.onOpenTutorial, !0),
          r(P, N(UA, {})),
          (G.$$click = () => h(E.vibration)),
          ((d) => O(d))(G),
          r(G, N(JS, {})),
          r(
            i,
            N($e, {
              class: "z-30",
              menuButton: A,
              open: T,
              setOpen: n,
              animation: { name: "quordle-fade" },
              get children() {
                const d = pA.cloneNode(!0),
                  H = d.firstChild,
                  C = H.firstChild,
                  M = H.nextSibling,
                  u = M.firstChild,
                  s = M.nextSibling,
                  U = s.firstChild,
                  v = U.firstChild,
                  m = s.nextSibling,
                  J = m.firstChild,
                  X = J.firstChild,
                  eS = m.nextSibling;
                return (
                  (H.$$click = () => {
                    n(!1), S.onOpenSettings();
                  }),
                  r(H, N(CA, {}), C),
                  r(C, () => e.t("header.settings")),
                  (M.$$click = () => {
                    n(!1), S.onOpenStatistics();
                  }),
                  r(
                    M,
                    N(gA, {
                      get mode() {
                        return S.mode;
                      },
                    }),
                    u
                  ),
                  r(
                    u,
                    (() => {
                      const W = w(() => S.mode === "daily", !0);
                      return () =>
                        W()
                          ? e.t("header.dailyStats")
                          : e.t("header.practiceStats");
                    })()
                  ),
                  (s.$$click = () => {
                    h(E.vibration), n(!1);
                  }),
                  r(U, N(cA, {}), v),
                  r(v, () => e.t("header.donate")),
                  (m.$$click = () => {
                    h(E.vibration), n(!1);
                  }),
                  r(J, N(dA, {}), X),
                  r(X, () => e.t("header.patreon")),
                  r(
                    eS,
                    (() => {
                      const W = w(() => e.locale() !== "en", !0);
                      return () =>
                        W() &&
                        N(uS, {
                          lang: "en",
                          ariaLabel: "English Quordle",
                          onClick: () => {
                            h(E.vibration), n(!1);
                          },
                          iconComponent: HA,
                        });
                    })(),
                    null
                  ),
                  r(
                    eS,
                    (() => {
                      const W = w(() => e.locale() !== "fr", !0);
                      return () =>
                        W() &&
                        N(uS, {
                          lang: "fr",
                          ariaLabel: "Quordle Fran\xE7ais",
                          onClick: () => {
                            h(E.vibration), n(!1);
                          },
                          iconComponent: MA,
                        });
                    })(),
                    null
                  ),
                  r(
                    eS,
                    (() => {
                      const W = w(() => e.locale() !== "es", !0);
                      return () =>
                        W() &&
                        N(uS, {
                          lang: "es",
                          ariaLabel: "Quordle Espa\xF1ol",
                          onClick: () => {
                            h(E.vibration), n(!1);
                          },
                          iconComponent: PA,
                        });
                    })(),
                    null
                  ),
                  r(
                    eS,
                    (() => {
                      const W = w(() => e.locale() !== "it", !0);
                      return () =>
                        W() &&
                        N(uS, {
                          lang: "it",
                          ariaLabel: "Quordle Italiano",
                          onClick: () => {
                            h(E.vibration), n(!1);
                          },
                          iconComponent: YA,
                        });
                    })(),
                    null
                  ),
                  r(
                    eS,
                    (() => {
                      const W = w(() => e.locale() !== "nl", !0);
                      return () =>
                        W() &&
                        N(uS, {
                          lang: "nl",
                          ariaLabel: "Quordle Nederlands",
                          onClick: () => {
                            h(E.vibration), n(!1);
                          },
                          iconComponent: uA,
                        });
                    })(),
                    null
                  ),
                  g(
                    (W) => {
                      var x;
                      const sS =
                          (((x = A()) == null
                            ? void 0
                            : x.getBoundingClientRect().bottom) || 0) +
                          12 +
                          "px",
                        iS = I(),
                        oS = e.t("header.aria.openPage", {
                          page: e.t("header.settings"),
                        }),
                        aS = L(),
                        z = e.t("header.aria.openPage", {
                          page:
                            S.mode === "daily"
                              ? e.t("stats.dailyStatistics")
                              : e.t("stats.practiceStatistics"),
                        }),
                        LS = e.t("header.donate"),
                        f = e.t("header.patreon");
                      return (
                        sS !== W._v$3 &&
                          d.style.setProperty("top", (W._v$3 = sS)),
                        iS !== W._v$4 && D(H, "aria-expanded", (W._v$4 = iS)),
                        oS !== W._v$5 && D(H, "aria-label", (W._v$5 = oS)),
                        aS !== W._v$6 && D(M, "aria-expanded", (W._v$6 = aS)),
                        z !== W._v$7 && D(M, "aria-label", (W._v$7 = z)),
                        LS !== W._v$8 && D(s, "aria-label", (W._v$8 = LS)),
                        f !== W._v$9 && D(m, "aria-label", (W._v$9 = f)),
                        W
                      );
                    },
                    {
                      _v$3: void 0,
                      _v$4: void 0,
                      _v$5: void 0,
                      _v$6: void 0,
                      _v$7: void 0,
                      _v$8: void 0,
                      _v$9: void 0,
                    }
                  ),
                  d
                );
              },
            }),
            null
          ),
          g(
            (d) => {
              const H = R(),
                C = e.t("header.aria.openPage", { page: e.t("header.help") }),
                M = T(),
                u = T(),
                s = e.t("header.aria.openMoreOptions");
              return (
                H !== d._v$10 && D(P, "aria-expanded", (d._v$10 = H)),
                C !== d._v$11 && D(P, "aria-label", (d._v$11 = C)),
                M !== d._v$12 &&
                  G.classList.toggle("rotate-180", (d._v$12 = M)),
                u !== d._v$13 && D(G, "aria-expanded", (d._v$13 = u)),
                s !== d._v$14 && D(G, "aria-label", (d._v$14 = s)),
                d
              );
            },
            {
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0,
              _v$14: void 0,
            }
          ),
          l
        );
      })();
    };
  NS(["click"]);
  const qA = c(
      '<button class="quordle-key border-gray-300 dark:border-gray-700" role="cell"><div class="quordle-box-content"></div></button>'
    ),
    jA = c(
      '<div class="w-full flex-col p-1 pb-1.5 bg-blue-200 dark:bg-cyan-900 rounded-t shadow" role="table"></div>'
    ),
    St = c('<div class="flex w-full justify-center" role="row"></div>'),
    et = (S) => {
      const e = F(),
        [E, t] = q(),
        R = K(() => {
          if (S.key === "bs" || S.key === "enter") return !1;
          const n = E[S.mode].guesses;
          let A = !1;
          for (let O = 0; O < n.length; O++)
            if (n[O].indexOf(S.key) >= 0) {
              A = !0;
              break;
            }
          return A;
        }),
        L = K(() => {
          const n = E[S.mode].guesses,
            A = ["none", "none", "none", "none"];
          for (let O = 0; O < A.length; O++) {
            const l = E[S.mode].states[O];
            if (!(E[S.mode].answersCorrect[O] >= 0))
              for (let i = 0; i < l.length; i++)
                for (let a = 0; a < l[i].length; a++)
                  S.key === n[i][a] &&
                    (l[i][a] === "correct" || l[i][a] === "diff") &&
                    (l[i][a] === "correct"
                      ? (A[O] = "correct")
                      : l[i][a] === "diff" &&
                        A[O] !== "correct" &&
                        (A[O] = "diff"));
          }
          return A;
        }),
        I = K(() => {
          if (!R() || L().every((O) => O === "none")) return "";
          const n = {
              none: E.darkMode ? "#9ca3af" : "#d1d5db",
              diff: E.colorblind ? "#60a5fa" : "#ffcc00",
              correct: E.colorblind ? "#fb923c" : "#00cc88",
            },
            A = L().map((O) => n[O]);
          return (
            "background: conic-gradient(" +
            A[1] +
            " 0deg 90deg, " +
            A[3] +
            " 90deg 180deg, " +
            A[2] +
            " 180deg 270deg, " +
            A[0] +
            " 270deg 360deg);"
          );
        }),
        T = K(() =>
          S.key === "bs"
            ? e.t("game.backspaceKey")
            : S.key === "enter"
            ? e.t("game.enterKey")
            : e.t("game.aria.key", {
                letter: S.key,
                info: R()
                  ? L().every((n) => n === "none") && R()
                    ? e.t("game.aria.keyIncorrectAll")
                    : L()
                        .map((n, A) =>
                          n === "diff"
                            ? e.t("game.aria.keyDiff", { board: A + 1 })
                            : n === "none"
                            ? e.t("game.aria.keyNone", { board: A + 1 })
                            : e.t("game.aria.keyCorrect", { board: A + 1 })
                        )
                        .join(e.t("game.aria.keyInfoDelimiter"))
                  : e.t("game.aria.keyNotGuessed"),
              })
        );
      return (() => {
        const n = qA.cloneNode(!0),
          A = n.firstChild;
        return (
          OS(n, "focusout", S.onFocusOut, !0),
          OS(n, "focusin", S.onFocusIn, !0),
          (n.$$click = () => {
            h(E.vibration),
              t.sendKey(
                S.mode,
                new KeyboardEvent("keydown", {
                  keyCode:
                    S.key === "enter"
                      ? 13
                      : S.key === "bs"
                      ? 8
                      : E.alphabet.indexOf(S.key) + 65,
                  key:
                    S.key === "enter"
                      ? "Enter"
                      : S.key === "bs"
                      ? "Backspace"
                      : S.key,
                })
              );
          }),
          r(
            A,
            (() => {
              const O = w(() => S.key === "enter", !0);
              return () =>
                O()
                  ? N(TA, {
                      get height() {
                        return S.fontSize * 0.8;
                      },
                    })
                  : (() => {
                      const l = w(() => S.key === "bs", !0);
                      return () =>
                        l()
                          ? N(iA, {
                              get height() {
                                return S.fontSize * 0.8;
                              },
                            })
                          : S.key;
                    })();
            })()
          ),
          g(
            (O) => {
              const l = {
                  "w-[calc(10%-0.25rem)]":
                    S.numKeysInRow >= 10,
                  "w-[calc(15%-0.5rem)]":
                    (S.key === "enter" || S.key === "bs") &&
                    S.numKeysInRow === 9,
                  "w-[calc(20%-0.5rem)]":
                    (S.key === "enter" || S.key === "bs") &&
                    S.numKeysInRow === 8,
                  "w-[calc(25%-0.5rem)]":
                    (S.key === "enter" || S.key === "bs") &&
                    S.numKeysInRow === 7,
                  "text-black dark:text-black border-gray-400": !!I(),
                  "text-black dark:text-white bg-white dark:bg-gray-500":
                    !I() && !R(),
                  "text-blue-300 dark:text-cyan-600 bg-blue-100 dark:bg-cyan-800 border-blue-200 dark:border-cyan-900":
                    !I() && R(),
                },
                i =
                  "padding-bottom: calc(" +
                  10 * E.keyboardHeight +
                  "% - 0.25rem);" +
                  I(),
                a = T();
              return (
                (O._v$ = lS(n, l, O._v$)),
                (O._v$2 = ke(n, i, O._v$2)),
                a !== O._v$3 && D(n, "aria-label", (O._v$3 = a)),
                O
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0 }
          ),
          n
        );
      })();
    },
    Et = (S) => {
      const e = F(),
        [E, t] = q(),
        [R, L] = k(),
        I = (T) => {
          console.log(S);
          console.log(S.mode);
          console.log()
          T = new KeyboardEvent("keydown", {
            keyCode:
            T.key === "enter"
                ? 13
                : T.key === "bs"
                ? 8
                : E.alphabet.indexOf(T.key) + 65,
            key:
            T.key === "enter"
                ? "Enter"
                : T.key === "bs"
                ? "Backspace"
                : T.key == "i"
                ? "İ"
                : T.key,
          });
          S.disableInputCapture ||
            (R() && T.key === "Enter") ||
            (t.sendKey(S.mode, T) && T.preventDefault());
        };
      return (
        document.addEventListener("keydown", I),
        HS(() => document.removeEventListener("keydown", I)),
        (() => {
          const T = jA.cloneNode(!0);
          return (
            r(T, () =>
              (E.enterBsReversed ? E.keyboardReversed : E.keyboard).map(
                (n, A) =>
                  (() => {
                    const O = St.cloneNode(!0);
                    return (
                      r(O, () =>
                        n.map((l, i) =>
                          N(et, {
                            get mode() {
                              return S.mode;
                            },
                            x: i,
                            y: A,
                            key: l,
                            get numKeysInRow() {
                              return n.length;
                            },
                            get fontSize() {
                              return S.fontSize;
                            },
                            onFocusIn: () => L(l),
                            onFocusOut: () => L(void 0),
                          })
                        )
                      ),
                      g(() =>
                        D(
                          O,
                          "aria-label",
                          e.t("game.aria.keyboardRow", { row: A + 1 })
                        )
                      ),
                      O
                    );
                  })()
              )
            ),
            g(() => D(T, "aria-label", e.t("game.aria.keyboard"))),
            T
          );
        })()
      );
    };
  NS(["click", "focusin", "focusout"]);
  function Ke(S) {
    const [e, E] = k([]),
      t = (I) => E((T) => T.concat(I)),
      R = new Map(),
      L = new Ze((I) => {
        if (!!Array.isArray(I))
          for (const T of I) {
            const n = Math.round(T.contentRect.width),
              A = Math.round(T.contentRect.height),
              O = R.get(T.target);
            if (!O || O.width !== n || O.height !== A) {
              const l = { width: n, height: A };
              S.onResize(l, T.target), R.set(T.target, { width: n, height: A });
            }
          }
      });
    return (
      p((I) => {
        let T = [];
        if (S.refs) {
          const n = typeof S.refs == "function" ? S.refs() : S.refs;
          Array.isArray(n) ? (T = T.concat(n)) : T.push(n);
        }
        return (
          (T = T.concat(e())),
          (I = I || []),
          I.forEach((n) => {
            n in T || (L.unobserve(n), R.delete(n));
          }),
          T.forEach((n) => {
            n in I || L.observe(n);
          }),
          T
        );
      }),
      HS(() => L.disconnect()),
      t
    );
  }
  const At = c(
      '<div class="text-lg mt-6 mb-3 flex items-center justify-center"><div class="text-sm text-right">:</div><input type="number" class="mx-2 text-sm text-center text-black dark:text-white bg-white dark:bg-gray-800" readonly><button class="transition"></button></div>'
    ),
    tt = c(
      '<div class="text-center"><button type="button" class="text-sm min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"><div class="flex items-center justify-center"><div class="ml-2"></div></div></button><div class="text-sm my-4"></div><label for="new_practice_seed" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"></label><div class="flex flex-row items-center"><input type="text" id="new_practice_seed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxlength="20" inputmode="numeric"><button type="button" class="flex-shrink-0 font-medium rounded-lg text-sm p-2.5 text-center ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:text-gray-400 disabled:bg-gray-300 disabled:dark:text-gray-500 disabled:dark:bg-gray-700 disabled:cursor-not-allowed"></button></div></div>'
    ),
    Ot = c('<div class="text-center text-base mt-2"></div>'),
    Rt = (S) => {
      const e = F(),
        [E, t] = q(),
        [R, L] = k(!1),
        [I, T] = k(),
        [n, A] = k(0),
        [O, l] = k(void 0),
        i = K(() => {
          const a = n();
          return a === 0 || a === E.free.seed || a < 1e6;
        });
      return S.mode !== "free"
        ? null
        : [
            (() => {
              const a = At.cloneNode(!0),
                o = a.firstChild,
                Y = o.firstChild,
                P = o.nextSibling,
                G = P.nextSibling;
              return (
                r(o, () => e.t("settings.currentSeed"), Y),
                l(P),
                (G.$$click = () => {
                  h(E.vibration), L(!R());
                }),
                r(G, N(JS, {})),
                g(
                  (d) => {
                    const H = E.free.seed,
                      C = e.t("settings.currentSeed"),
                      M = R();
                    return (
                      H !== d._v$ && (P.value = d._v$ = H),
                      C !== d._v$2 && D(P, "aria-label", (d._v$2 = C)),
                      M !== d._v$3 &&
                        G.classList.toggle("rotate-180", (d._v$3 = M)),
                      d
                    );
                  },
                  { _v$: void 0, _v$2: void 0, _v$3: void 0 }
                ),
                a
              );
            })(),
            w(
              (() => {
                const a = w(() => !!R(), !0);
                return () =>
                  a() &&
                  (() => {
                    const o = tt.cloneNode(!0),
                      Y = o.firstChild,
                      P = Y.firstChild,
                      G = P.firstChild,
                      d = Y.nextSibling,
                      H = d.nextSibling,
                      C = H.nextSibling,
                      M = C.firstChild,
                      u = M.nextSibling;
                    return (
                      (Y.$$click = () => {
                        h(E.vibration);
                        const s = O();
                        if (s) {
                          s.select(), document.execCommand("copy");
                          const U =
                            window.getSelection && window.getSelection();
                          U && U.removeAllRanges(),
                            s.blur(),
                            alert(
                              e.t("settings.copiedSeedToClipboardAlert", {
                                seed: s.value,
                              })
                            );
                        }
                      }),
                      r(P, N(He, {}), G),
                      r(G, () => e.t("settings.copySeedToClipboard")),
                      r(d, () => e.t("settings.gameSeedDescription")),
                      r(H, () => e.t("settings.gameSeedInputLabel")),
                      (M.$$input = (s) => {
                        const U = I();
                        if (U) {
                          const v = Number(s.target.value);
                          if (v && !Number.isNaN(v) && Number.isFinite(v)) {
                            const m = Math.max(
                              0,
                              Math.min(Math.floor(v), 1e21)
                            );
                            A(m), (U.value = String(m));
                          } else A(0), (U.value = "");
                        }
                      }),
                      T(M),
                      (u.$$click = () => {
                        h(E.vibration), t.resetFree(n()), A(0);
                        const s = I();
                        s && (s.value = "");
                      }),
                      r(u, () => e.t("settings.startNewPractice")),
                      r(
                        o,
                        (() => {
                          const s = w(
                            () =>
                              E.free.guesses.length > 0 &&
                              !t.isGameComplete(S.mode),
                            !0
                          );
                          return () =>
                            s() &&
                            (() => {
                              const U = Ot.cloneNode(!0);
                              return (
                                r(U, () =>
                                  e.t("settings.startNewPracticeWarning")
                                ),
                                U
                              );
                            })();
                        })(),
                        null
                      ),
                      g(
                        (s) => {
                          const U = e.t("settings.gameSeedInputPlaceholder"),
                            v = n() ? n() : "",
                            m = i();
                          return (
                            U !== s._v$4 && D(M, "placeholder", (s._v$4 = U)),
                            v !== s._v$5 && (M.value = s._v$5 = v),
                            m !== s._v$6 && (u.disabled = s._v$6 = m),
                            s
                          );
                        },
                        { _v$4: void 0, _v$5: void 0, _v$6: void 0 }
                      ),
                      o
                    );
                  })();
              })()
            ),
          ];
    };
  NS(["click", "input"]);
  const rt = c(
      '<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>'
    ),
    It = c(
      '<div id="settings-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"></div><div class="flex flex-col text-base"><div class="m-4"><label for="keyboardHeightRange"></label><input type="range" class="appearance-none w-full h-2 rounded bg-gray-300 dark:bg-gray-600 cursor-pointer" id="keyboardHeightRange"></div><div class="m-4"><label for="gameSizeSelect" class="block text-black dark:text-white mb-1"></label><div class="relative"><div class="flex items-center text-black dark:text-white absolute top-0 bottom-0 right-3 pointer-events-none"></div><select id="gameSizeSelect" class="bg-gray-50 border border-gray-400 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer appearance-none"><option value="fit"></option><option value="square"></option></select></div></div></div></div></div>'
    ),
    nt = c(
      '<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"></button><div class="text-center text-base"></div></div>'
    ),
    vS = (S) =>
      (() => {
        const e = rt.cloneNode(!0),
          E = e.firstChild,
          t = E.firstChild,
          R = t.firstChild,
          L = R.nextSibling,
          I = L.nextSibling,
          T = t.nextSibling;
        return (
          OS(R, "change", S.onChange),
          OS(R, "click", S.onClick, !0),
          r(T, () => S.text),
          g(
            (n) => {
              const A = S.id,
                O = S.id,
                l = S.checked,
                i = S.ariaLabel,
                a = S.checked,
                o = S.checked && !S.colorblind,
                Y = S.checked && S.colorblind;
              return (
                A !== n._v$ && D(E, "for", (n._v$ = A)),
                O !== n._v$2 && D(R, "id", (n._v$2 = O)),
                l !== n._v$3 && (R.checked = n._v$3 = l),
                i !== n._v$4 && D(R, "aria-label", (n._v$4 = i)),
                a !== n._v$5 &&
                  I.classList.toggle("translate-x-[100%]", (n._v$5 = a)),
                o !== n._v$6 &&
                  I.classList.toggle("bg-box-correct", (n._v$6 = o)),
                Y !== n._v$7 &&
                  I.classList.toggle("bg-box-correct-alt", (n._v$7 = Y)),
                n
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
            }
          ),
          e
        );
      })(),
    Lt = (S) => {
      const e = F(),
        [E, t] = q();
      return (() => {
        const R = It.cloneNode(!0),
          L = R.firstChild,
          I = L.firstChild,
          T = L.nextSibling,
          n = T.firstChild,
          A = n.nextSibling,
          O = A.firstChild,
          l = O.firstChild,
          i = l.nextSibling,
          a = O.nextSibling,
          o = a.firstChild,
          Y = o.nextSibling,
          P = Y.firstChild,
          G = P.nextSibling,
          d = G.firstChild,
          H = d.nextSibling;
        return (
          OS(I, "click", S.onCloseSettings, !0),
          r(I, N(XS, {})),
          r(n, () => e.t("header.settings")),
          r(
            A,
            N(vS, {
              id: "toggleDarkMode",
              get text() {
                return e.t("settings.darkMode");
              },
              get checked() {
                return E.darkMode;
              },
              get colorblind() {
                return E.colorblind;
              },
              onClick: () => h(E.vibration),
              onChange: (C) => t.setDarkMode(C.currentTarget.checked),
            }),
            O
          ),
          r(
            A,
            N(vS, {
              id: "toggleColorblind",
              get text() {
                return e.t("settings.colorblindMode");
              },
              get checked() {
                return E.colorblind;
              },
              get colorblind() {
                return E.colorblind;
              },
              onClick: () => h(E.vibration),
              onChange: (C) => t.setColorblind(C.currentTarget.checked),
            }),
            O
          ),
          r(
            A,
            se &&
              N(vS, {
                id: "toggleVibration",
                get text() {
                  return e.t("settings.vibration");
                },
                get checked() {
                  return E.vibration;
                },
                get colorblind() {
                  return E.colorblind;
                },
                onClick: () => h(E.vibration),
                onChange: (C) => t.setVibration(C.currentTarget.checked),
              }),
            O
          ),
          r(
            A,
            N(vS, {
              id: "toggleEnterBsReversed",
              get text() {
                return e.t("settings.switchKeys", {
                  example: `${E.enterBsReversed ? "\u23CE" : "\u232B"} . . . ${
                    E.enterBsReversed ? "\u232B" : "\u23CE"
                  }`,
                });
              },
              get checked() {
                return E.enterBsReversed;
              },
              get colorblind() {
                return E.colorblind;
              },
              onClick: () => h(E.vibration),
              onChange: (C) => t.setEnterBsReversed(C.currentTarget.checked),
              get ariaLabel() {
                return e.t("settings.switchKeysInfo", {
                  left: E.enterBsReversed
                    ? e.t("game.backspaceKey")
                    : e.t("game.enterKey"),
                  right: E.enterBsReversed
                    ? e.t("game.enterKey")
                    : e.t("game.backspaceKey"),
                });
              },
            }),
            O
          ),
          r(l, () =>
            e.t("settings.keyboardHeight", {
              height: E.keyboardHeight.toFixed(1),
            })
          ),
          i.addEventListener("change", (C) =>
            t.setKeyboardHeight(Number(C.currentTarget.value))
          ),
          (i.$$input = (C) =>
            t.setKeyboardHeight(Number(C.currentTarget.value))),
          D(i, "min", Ne),
          D(i, "max", le),
          D(i, "step", eE),
          r(o, () => e.t("settings.gameSize")),
          r(P, N(JS, {})),
          G.addEventListener("change", (C) =>
            t.setGameSize(C.currentTarget.value)
          ),
          (G.$$click = () => h(E.vibration)),
          r(d, () => e.t("settings.gameFit")),
          r(H, () => e.t("settings.gameSquare")),
          r(
            T,
            N(Rt, {
              get mode() {
                return S.mode;
              },
            }),
            null
          ),
          r(
            T,
            (() => {
              const C = w(
                () =>
                  S.mode === "free" &&
                  E.free.guesses.length > 0 &&
                  !t.isGameComplete(S.mode),
                !0
              );
              return () =>
                C() &&
                (() => {
                  const M = nt.cloneNode(!0),
                    u = M.firstChild,
                    s = u.nextSibling;
                  return (
                    (u.$$click = () => {
                      h(E.vibration), t.resetFree();
                    }),
                    r(u, () => e.t("settings.resetPractice")),
                    r(s, () => e.t("settings.resetWarning")),
                    M
                  );
                })();
            })(),
            null
          ),
          g(
            (C) => {
              const M = e.t("header.settings"),
                u = e.t("app.close"),
                s = !E.colorblind,
                U = E.colorblind,
                v = E.keyboardHeight,
                m = E.gameSize;
              return (
                M !== C._v$8 && D(R, "aria-label", (C._v$8 = M)),
                u !== C._v$9 && D(I, "aria-label", (C._v$9 = u)),
                s !== C._v$10 &&
                  i.classList.toggle("quordle-range", (C._v$10 = s)),
                U !== C._v$11 &&
                  i.classList.toggle("quordle-range-alt", (C._v$11 = U)),
                v !== C._v$12 && (i.value = C._v$12 = v),
                m !== C._v$13 && (G.value = C._v$13 = m),
                C
              );
            },
            {
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0,
            }
          ),
          R
        );
      })();
    };
  NS(["click", "input"]);
  const Tt = c(
      '<div id="statistics-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><h1 class="text-4xl mt-2 mb-4 text-center"></h1><div class="w-full grid grid-cols-4 gap-2"><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div></div><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div></div>'
    ),
    Ie = c(
      '<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>'
    ),
    it = c(
      '<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1"> - </div><div class="flex-1 text-right"> - </div></div>'
    ),
    at = c(
      '<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden" role="button" aria-controls="loss-distribution"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>'
    ),
    lt = c(
      '<div id="loss-distribution"><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div>'
    ),
    Nt = [...Array(V - (rS - 1)).keys()].map((S) => S + (rS - 1)),
    st = [...Array(rS).keys()].map((S) => S + V).reverse(),
    ot = (S) => {
      const e = F(),
        [E, t] = q(),
        [R, L] = k(!1),
        I = K(() => Math.max(...E[S.mode].history.slice(rS - 1, V), 1)),
        T = K(() => Math.max(...E[S.mode].history.slice(V), 1)),
        n = K(() =>
          E[S.mode].history.slice(rS - 1, V).reduce((P, G) => P + G, 0)
        ),
        A = K(() => E[S.mode].history.slice(V).reduce((P, G) => P + G, 0)),
        O = K(() => n() + A()),
        l = K(() =>
          E[S.mode].answersCorrect.reduce((P, G) => (P += G >= 0 ? 1 : 0), 0)
        ),
        i = K(() => Math.max(...E[S.mode].answersCorrect)),
        a = K(() => t.isGameComplete(S.mode) && l() === rS),
        o = K(() => t.isGameComplete(S.mode) && l() < rS),
        Y = K(() =>
          S.mode === "daily" ? e.t("header.daily") : e.t("header.practice")
        );
      return (() => {
        const P = Tt.cloneNode(!0),
          G = P.firstChild,
          d = G.firstChild,
          H = G.nextSibling,
          C = H.firstChild,
          M = C.nextSibling,
          u = M.firstChild,
          s = u.firstChild,
          U = s.nextSibling,
          v = u.nextSibling,
          m = v.firstChild,
          J = m.nextSibling,
          X = v.nextSibling,
          eS = X.firstChild,
          W = eS.nextSibling,
          sS = X.nextSibling,
          iS = sS.firstChild,
          oS = iS.nextSibling,
          aS = M.nextSibling,
          z = aS.nextSibling,
          LS = z.nextSibling;
        return (
          OS(d, "click", S.onCloseStatistics, !0),
          r(d, N(XS, {})),
          r(
            C,
            (() => {
              const f = w(() => S.mode === "daily", !0);
              return () =>
                f()
                  ? e.t("stats.dailyStatistics")
                  : e.t("stats.practiceStatistics");
            })()
          ),
          r(s, () => n() + A()),
          r(U, () => e.t("stats.played")),
          r(m, () => Math.round((O() > 0 ? n() / O() : 0) * 100)),
          r(J, () => e.t("stats.winPercent")),
          r(eS, () => E[S.mode].currentStreak),
          r(W, () => e.t("stats.currentStreak")),
          r(iS, () => E[S.mode].maxStreak),
          r(oS, () => e.t("stats.maxStreak")),
          r(aS, () => e.t("stats.winDistribution")),
          r(z, () => e.t("stats.winDistExplain")),
          r(LS, () =>
            Nt.map((f) =>
              (() => {
                const x = Ie.cloneNode(!0),
                  y = x.firstChild,
                  Z = y.nextSibling;
                return (
                  r(y, f + 1),
                  r(Z, () => E[S.mode].history[f]),
                  g(
                    (b) => {
                      const _ = e.t("stats.aria.winChartBar", {
                          numGames: e.t("stats.aria.numGames", {
                            smart_count: E[S.mode].history[f],
                          }),
                          numGuesses: e.t("stats.aria.numGuesses", {
                            smart_count: f + 1,
                          }),
                        }),
                        B = {
                          " text-black bg-box-correct": a() && i() === f,
                          "text-black bg-gray-300 dark:text-white dark:bg-gray-700":
                            !(a() && i() === f),
                        },
                        ES = (E[S.mode].history[f] / I()) * 100 + "%";
                      return (
                        _ !== b._v$7 && D(x, "aria-label", (b._v$7 = _)),
                        (b._v$8 = lS(Z, B, b._v$8)),
                        ES !== b._v$9 &&
                          Z.style.setProperty("width", (b._v$9 = ES)),
                        b
                      );
                    },
                    { _v$7: void 0, _v$8: void 0, _v$9: void 0 }
                  ),
                  x
                );
              })()
            )
          ),
          r(
            H,
            (() => {
              const f = w(() => A() > 0, !0);
              return () =>
                f() && [
                  (() => {
                    const x = it.cloneNode(!0),
                      y = x.firstChild,
                      Z = y.firstChild,
                      b = y.nextSibling,
                      _ = b.firstChild;
                    return (
                      r(y, () => e.t("stats.win"), Z),
                      r(y, n, null),
                      r(b, A, _),
                      r(b, () => e.t("stats.loss"), null),
                      x
                    );
                  })(),
                  (() => {
                    const x = at.cloneNode(!0),
                      y = x.firstChild,
                      Z = y.nextSibling;
                    return (
                      (x.$$click = () => {
                        h(E.vibration), L(!R());
                      }),
                      g(
                        (b) => {
                          const _ = R(),
                            B = e.t("stats.aria.winRateRatio"),
                            ES = (n() / O()) * 100 + "%",
                            TS = (A() / O()) * 100 + "%";
                          return (
                            _ !== b._v$10 &&
                              D(x, "aria-expanded", (b._v$10 = _)),
                            B !== b._v$11 && D(x, "aria-label", (b._v$11 = B)),
                            ES !== b._v$12 &&
                              y.style.setProperty("width", (b._v$12 = ES)),
                            TS !== b._v$13 &&
                              Z.style.setProperty("width", (b._v$13 = TS)),
                            b
                          );
                        },
                        {
                          _v$10: void 0,
                          _v$11: void 0,
                          _v$12: void 0,
                          _v$13: void 0,
                        }
                      ),
                      x
                    );
                  })(),
                ];
            })(),
            null
          ),
          r(
            H,
            (() => {
              const f = w(() => !!R(), !0);
              return () =>
                f() &&
                (() => {
                  const x = lt.cloneNode(!0),
                    y = x.firstChild,
                    Z = y.nextSibling,
                    b = Z.nextSibling;
                  return (
                    r(y, () => e.t("stats.lossDistribution")),
                    r(Z, () => e.t("stats.lossDistExplain")),
                    r(b, () =>
                      st.map((_) =>
                        (() => {
                          const B = Ie.cloneNode(!0),
                            ES = B.firstChild,
                            TS = ES.nextSibling;
                          return (
                            r(ES, rS - (_ - V)),
                            r(TS, () => E[S.mode].history[_]),
                            g(
                              (RS) => {
                                const MS = e.t("stats.aria.lossChartBar", {
                                    numGames: e.t("stats.aria.numGames", {
                                      smart_count: E[S.mode].history[_],
                                    }),
                                    numWords: e.t("stats.aria.numWords", {
                                      smart_count: rS - (_ - V),
                                    }),
                                  }),
                                  BS = {
                                    "text-white bg-rose-600 dark:bg-rose-800":
                                      o() && l() === _ - V,
                                    "text-black bg-gray-300 dark:bg-gray-700 dark:text-white":
                                      !(o() && l() === _ - V),
                                  },
                                  PS = (E[S.mode].history[_] / T()) * 100 + "%";
                                return (
                                  MS !== RS._v$14 &&
                                    D(B, "aria-label", (RS._v$14 = MS)),
                                  (RS._v$15 = lS(TS, BS, RS._v$15)),
                                  PS !== RS._v$16 &&
                                    TS.style.setProperty(
                                      "width",
                                      (RS._v$16 = PS)
                                    ),
                                  RS
                                );
                              },
                              { _v$14: void 0, _v$15: void 0, _v$16: void 0 }
                            ),
                            B
                          );
                        })()
                      )
                    ),
                    x
                  );
                })();
            })(),
            null
          ),
          g(
            (f) => {
              const x =
                  S.mode === "daily"
                    ? e.t("stats.dailyStatistics")
                    : e.t("stats.practiceStatistics"),
                y = e.t("app.close"),
                Z = e.t("stats.aria.played", { mode: Y(), num: n() + A() }),
                b = e.t("stats.aria.winPercent", {
                  mode: Y(),
                  num: Math.round((O() > 0 ? n() / O() : 0) * 100),
                }),
                _ = e.t("stats.aria.currentStreak", {
                  mode: Y(),
                  numGames: e.t("stats.aria.numGames", {
                    smart_count: E[S.mode].maxStreak,
                  }),
                }),
                B = e.t("stats.aria.maxStreak", {
                  mode: Y(),
                  numGames: e.t("stats.aria.numGames", {
                    smart_count: E[S.mode].maxStreak,
                  }),
                });
              return (
                x !== f._v$ && D(P, "aria-label", (f._v$ = x)),
                y !== f._v$2 && D(d, "aria-label", (f._v$2 = y)),
                Z !== f._v$3 && D(u, "aria-label", (f._v$3 = Z)),
                b !== f._v$4 && D(v, "aria-label", (f._v$4 = b)),
                _ !== f._v$5 && D(X, "aria-label", (f._v$5 = _)),
                B !== f._v$6 && D(sS, "aria-label", (f._v$6 = B)),
                f
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
            }
          ),
          P
        );
      })();
    };
  NS(["click"]);
  const Dt = c('<div class="flex w-[100%]" role="row"></div>'),
    Ut = c(
      '<a class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" target="_blank"></a>'
    ),
    Ct = c(
      '<div id="tutorial-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6"><h1 class="text-3xl mt-2 mb-1"></h1><div class="text-base"></div><h2 class="text-3xl mt-4 mb-2"></h2><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="flex w-[100%] mb-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="flex w-[100%] my-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="text-base"></div><ol class="text-base list-decimal ml-8 mb-6"><li></li><li></li><li></li><li></li></ol><div class="text-base mb-6"></div><div class="text-base mb-8"></div><div class="text-sm mb-2 text-center"></div><div class="flex flex-row items-center justify-between mb-8"></div><h1 class="text-3xl text-center">&#128150; <!> &#128150;</h1><div class="text-base mb-4 text-center"></div><div class="text-sm text-center mb-8"></div><h1 class="text-3xl mb-4 text-center"></h1><div class="text-base mb-6 whitespace-pre-line"></div></div></div>'
    ),
    ct = c(
      '<div class="flex item-center justify-center mb-6"><a title="Crowdin" target="_blank" href="https://crowdin.com/project/quordle" class="inline-flex"><img src="https://badges.crowdin.net/quordle/localized.svg"></a></div>'
    ),
    dt = hE([
      "Can Çelik",
    ]),
    DS = (S) => {
      const e = F();
      return (() => {
        const E = Dt.cloneNode(!0);
        return (
          r(E, () =>
            S.word[0].split("").map((t, R) =>
              N(Be, {
                get state() {
                  return S.word[1][R];
                },
                letter: t,
                gameRow: 0,
                gameCol: R,
                rowTemporalState: "past",
                activeCol: 0,
                get colorblind() {
                  return S.colorblind;
                },
                currentRow: 0,
                get tileHeight() {
                  return S.tileHeight;
                },
                get presentTileHeight() {
                  return S.tileHeight;
                },
                answered: !1,
                gameSize: "square",
                get ariaLabel() {
                  return w(() => S.word[1][R] === "diff", !0)()
                    ? e.t("game.aria.tileDiff", { letter: t, column: R + 1 })
                    : w(() => S.word[1][R] === "none", !0)()
                    ? e.t("game.aria.tileNone", { letter: t, column: R + 1 })
                    : e.t("game.aria.tileCorrect", {
                        letter: t,
                        column: R + 1,
                      });
                },
              })
            )
          ),
          E
        );
      })();
    },
    US = (S) =>
      (() => {
        const e = Ut.cloneNode(!0);
        return r(e, () => S.children), g(() => D(e, "href", S.href)), e;
      })(),
    Mt = (S) => {
      const e = F(),
        [E] = q(),
        [t, R] = k(0),
        L = Ke({
          onResize: ({ width: T, height: n }) => {
            const A = parseFloat(
              getComputedStyle(document.documentElement).fontSize
            );
            if (T) {
              const O = (T - A * 0.5 - A * 0.25 * 10) / 10;
              R(O);
            }
          },
        }),
        I = [
          [
            e.t("tutorial.exampleWord1"),
            ["correct", "none", "none", "none", "none"],
          ],
          [
            e.t("tutorial.exampleWord2"),
            ["none", "diff", "none", "none", "none"],
          ],
          [
            e.t("tutorial.exampleWord3"),
            ["none", "none", "none", "none", "none"],
          ],
          [
            e.t("tutorial.exampleWord4"),
            ["none", "none", "none", "none", "none"],
          ],
          [
            e.t("tutorial.exampleWord4"),
            ["none", "none", "diff", "none", "correct"],
          ],
          [
            e.t("tutorial.exampleWord4"),
            ["none", "none", "none", "diff", "none"],
          ],
          [
            e.t("tutorial.exampleWord4"),
            ["none", "correct", "none", "none", "diff"],
          ],
        ];
      return (() => {
        const T = Ct.cloneNode(!0),
          n = T.firstChild,
          A = n.firstChild,
          O = n.nextSibling,
          l = O.firstChild,
          i = l.nextSibling,
          a = i.nextSibling,
          o = a.nextSibling,
          Y = o.nextSibling,
          P = Y.nextSibling,
          G = P.nextSibling,
          d = G.nextSibling,
          H = d.nextSibling,
          C = H.nextSibling,
          M = C.firstChild,
          u = M.nextSibling,
          s = C.nextSibling,
          U = s.firstChild,
          v = U.nextSibling,
          m = s.nextSibling,
          J = m.nextSibling,
          X = J.firstChild,
          eS = X.nextSibling,
          W = eS.nextSibling,
          sS = W.nextSibling,
          iS = J.nextSibling,
          oS = iS.nextSibling,
          aS = oS.nextSibling,
          z = aS.nextSibling,
          LS = z.nextSibling,
          f = LS.firstChild,
          x = f.nextSibling;
        x.nextSibling;
        const y = LS.nextSibling,
          Z = y.nextSibling,
          b = Z.nextSibling,
          _ = b.nextSibling;
        return (
          OS(A, "click", S.onCloseTutorial, !0),
          r(A, N(XS, {})),
          L(O),
          r(l, () => e.t("tutorial.title")),
          r(i, () => e.t("tutorial.p1")),
          r(a, () => e.t("tutorial.examples")),
          r(
            o,
            N(DS, {
              get word() {
                return I[0];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(Y, () => e.t("tutorial.example1")),
          r(
            P,
            N(DS, {
              get word() {
                return I[1];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(G, () => e.t("tutorial.example2")),
          r(
            d,
            N(DS, {
              get word() {
                return I[2];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(H, () => e.t("tutorial.example3")),
          r(
            M,
            N(DS, {
              get word() {
                return I[3];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(
            u,
            N(DS, {
              get word() {
                return I[4];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(
            U,
            N(DS, {
              get word() {
                return I[5];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(
            v,
            N(DS, {
              get word() {
                return I[6];
              },
              get colorblind() {
                return E.colorblind;
              },
              get tileHeight() {
                return t();
              },
            })
          ),
          r(m, () => e.t("tutorial.example4Title")),
          r(X, () => e.t("tutorial.example4b1")),
          r(eS, () => e.t("tutorial.example4b2")),
          r(W, () => e.t("tutorial.example4b3")),
          r(sS, () => e.t("tutorial.example4b4")),
          r(iS, () => e.t("tutorial.final1")),
          r(oS, () => e.t("tutorial.final2")),
          r(aS, () => e.t("tutorial.author")),
          r(
            z,
            N(US, {
              href: "https://twitter.com/quordle",
              get children() {
                return N(ue, { height: 30 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://www.facebook.com/quordle",
              get children() {
                return N(lA, { height: 40 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://www.instagram.com/quordlegame/",
              get children() {
                return N(sA, { height: 36 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://www.reddit.com/r/Quordle/",
              get children() {
                return N(NA, { height: 36 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://www.twitch.tv/quordlegame",
              get children() {
                return N(DA, { height: 36 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://discord.gg/F7ZBeA2p2S",
              get children() {
                return N(oA, { height: 30 });
              },
            }),
            null
          ),
          r(
            z,
            N(US, {
              href: "https://github.com/fireph/quordle",
              get children() {
                return N(aA, { height: 40 });
              },
            }),
            null
          ),
          r(
            O,
            (() => {
              const B = w(() => e.locale() !== "en", !0);
              return () => B() && ct.cloneNode(!0);
            })(),
            LS
          ),
          r(LS, () => e.t("tutorial.supporters"), x),
          r(y, () => e.t("tutorial.patronsThank")),
          r(Z, () => dt.map((B) => B.replace(/ /g, "\xA0")).join(", ")),
          r(b, () => e.t("tutorial.historyTitle")),
          g(
            (B) => {
              const ES = e.t("tutorial.tutorial"),
                TS = e.t("app.close"),
                RS = e.t("tutorial.aria.tutorialGuess", { guess: I[0] }),
                MS = e.t("tutorial.aria.tutorialGuess", { guess: I[1] }),
                BS = e.t("tutorial.aria.tutorialGuess", { guess: I[2] }),
                PS = e.t("tutorial.aria.tutorialGuessBoard", {
                  guess: I[3],
                  num: 1,
                }),
                pS = e.t("tutorial.aria.tutorialGuessBoard", {
                  guess: I[4],
                  num: 2,
                }),
                zS = e.t("tutorial.aria.tutorialGuessBoard", {
                  guess: I[5],
                  num: 3,
                }),
                QS = e.t("tutorial.aria.tutorialGuessBoard", {
                  guess: I[6],
                  num: 4,
                }),
                qS = e.t("tutorial.aria.quordlePatrons"),
                jS = e.t("tutorial.history");
              return (
                ES !== B._v$ && D(T, "aria-label", (B._v$ = ES)),
                TS !== B._v$2 && D(A, "aria-label", (B._v$2 = TS)),
                RS !== B._v$3 && D(o, "aria-label", (B._v$3 = RS)),
                MS !== B._v$4 && D(P, "aria-label", (B._v$4 = MS)),
                BS !== B._v$5 && D(d, "aria-label", (B._v$5 = BS)),
                PS !== B._v$6 && D(M, "aria-label", (B._v$6 = PS)),
                pS !== B._v$7 && D(u, "aria-label", (B._v$7 = pS)),
                zS !== B._v$8 && D(U, "aria-label", (B._v$8 = zS)),
                QS !== B._v$9 && D(v, "aria-label", (B._v$9 = QS)),
                qS !== B._v$10 && D(Z, "aria-label", (B._v$10 = qS)),
                jS !== B._v$11 && (_.innerHTML = B._v$11 = jS),
                B
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
            }
          ),
          T
        );
      })();
    };
  NS(["click"]);
  const Pt = c(
      '<div class="absolute w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>'
    ),
    Yt = c('<div class="flex w-full" role="row"></div>'),
    ut = c(
      '<div class="flex flex-col flex-auto p-1 first:pl-2 last:pr-2" role="table"></div>'
    ),
    Ht = c(
      '<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto"><div class="w-full flex-col" aria-label="Game Boards"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>'
    ),
    Gt = c('<div class="flex w-full"></div>'),
    yS = (S) =>
      N(Je, {
        enterClass: "quordle-exit-page",
        enterToClass: "quordle-enter-page",
        exitClass: "quordle-enter-page",
        exitToClass: "quordle-exit-page",
        get children() {
          return (
            w(() => !!S.open, !0)() &&
            (() => {
              const e = Pt.cloneNode(!0);
              return (
                r(e, () => S.children),
                g(() => e.style.setProperty("font-size", S.fontSize + "px")),
                e
              );
            })()
          );
        },
      }),
    Bt = [...Array(GS).keys()],
    Kt = [...Array(ie).keys()],
    gt = [...Array(V).keys()],
    Ft = [...Array(IS).keys()],
    ht = (S) => {
      const [e] = q(),
        E = K(() => {
          const t = S.gameX + S.gameY * GS,
            R = e[S.mode].guesses,
            L = e[S.mode].current,
            I = R[S.gameRow],
            T = e[S.mode].states[t][S.gameRow],
            n = e[S.mode].answersCorrect[t];
          return S.gameRow === n
            ? `Row ${S.gameRow + 1}. Guess ${I} is correct.`
            : S.gameRow === R.length && n < 0
            ? `Row ${S.gameRow + 1}. Current guess ${L}.`
            : I && T
            ? `Row ${S.gameRow + 1}. Guess ${I}. `
            : `Row ${S.gameRow + 1}. ` +
              (S.gameRow > n && n >= 0
                ? `Answer already guessed correctly on row ${n + 1}.`
                : "Future guess.");
        });
      return (() => {
        const t = Yt.cloneNode(!0);
        return (
          r(t, () =>
            Ft.map((R) =>
              N(JA, {
                get mode() {
                  return S.mode;
                },
                get gameX() {
                  return S.gameX;
                },
                get gameY() {
                  return S.gameY;
                },
                get gameRow() {
                  return S.gameRow;
                },
                gameCol: R,
                get tileHeight() {
                  return S.tileHeight;
                },
                get presentTileHeight() {
                  return S.presentTileHeight;
                },
              })
            )
          ),
          g(() => D(t, "aria-label", E())),
          t
        );
      })();
    },
    vt = (S) =>
      (() => {
        const e = ut.cloneNode(!0);
        return (
          r(e, () =>
            gt.map((E) =>
              N(ht, {
                get mode() {
                  return S.mode;
                },
                get gameX() {
                  return S.gameX;
                },
                get gameY() {
                  return S.gameY;
                },
                gameRow: E,
                get tileHeight() {
                  return S.tileHeight;
                },
                get presentTileHeight() {
                  return S.presentTileHeight;
                },
              })
            )
          ),
          g(() =>
            D(e, "aria-label", `Game Board ${S.gameX + S.gameY * GS + 1}`)
          ),
          e
        );
      })(),
    ne = (S) => {
      const [e, E] = q(),
        [t, R] = Te(),
        [L, I] = k(35),
        [T, n] = k(0),
        [A, O] = k(0),
        [l, i] = k(!1),
        a = K(() => t.overlay === "tutorial"),
        o = K(() => t.overlay === "statistics"),
        Y = K(() => t.overlay === "settings"),
        P = (d) => {
          (a() || o() || Y()) && d.key === "Escape" && R({ overlay: void 0 });
        };
      document.addEventListener("keydown", P),
        HS(() => document.removeEventListener("keydown", P));
      const G = Ke({
        onResize: ({ width: d, height: H }) => {
          const C = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
          if (d) {
            I(d / 16);
            const M = (d - 1.5 * C - C * 0.25 * 10) / 10;
            if ((O(M), H))
              if (E.isGameComplete(S.mode)) {
                const u = (H - C - C * 0.25 * 18) / 18;
                i(u < M / 3), n(Math.max(M / 3, Math.min(M, u)));
              } else {
                const u = (H - C - C * 0.25 * 18 - M * 2) / 16;
                i(u < M / 3), n(Math.max(M / 3, Math.min(M, u)));
              }
          }
        },
      });
      return (() => {
        const d = Ht.cloneNode(!0),
          H = d.firstChild,
          C = H.nextSibling,
          M = C.firstChild,
          u = C.nextSibling;
        return (
          lS(d, { "h-full": !Oe, "h-[calc(100%-25px)] bottom-[25px]": Oe }),
          r(
            d,
            N(QA, {
              get mode() {
                return S.mode;
              },
              onOpenTutorial: () => {
                h(e.vibration),
                  Q("event", "tutorial", { mode: S.mode }),
                  R({ overlay: "tutorial" });
              },
              onOpenStatistics: () => {
                h(e.vibration),
                  Q("event", "statistics", { mode: S.mode }),
                  R({ overlay: "statistics" });
              },
              onOpenSettings: () => {
                h(e.vibration),
                  Q("event", "settings", { mode: S.mode }),
                  R({ overlay: "settings" });
              },
            }),
            H
          ),
          r(
            H,
            N(bA, {
              get mode() {
                return S.mode;
              },
            })
          ),
          G(C),
          r(M, () =>
            Kt.map((s) =>
              (() => {
                const U = Gt.cloneNode(!0);
                return (
                  D(U, "aria-label", `Game Boards Row ${s + 1}`),
                  r(U, () =>
                    Bt.map((v) =>
                      N(vt, {
                        get mode() {
                          return S.mode;
                        },
                        gameX: v,
                        gameY: s,
                        get tileHeight() {
                          return T();
                        },
                        get presentTileHeight() {
                          return A();
                        },
                      })
                    )
                  ),
                  U
                );
              })()
            )
          ),
          r(
            u,
            (() => {
              const s = w(() => !!E.isGameComplete(S.mode), !0);
              return () =>
                s()
                  ? N(kA, {
                      get mode() {
                        return S.mode;
                      },
                    })
                  : N(Et, {
                      get mode() {
                        return S.mode;
                      },
                      get fontSize() {
                        return L();
                      },
                      get disableInputCapture() {
                        return a() || o() || Y();
                      },
                    });
            })()
          ),
          r(
            d,
            N(yS, {
              get open() {
                return Y();
              },
              get fontSize() {
                return L();
              },
              get children() {
                return N(Lt, {
                  get mode() {
                    return S.mode;
                  },
                  onCloseSettings: () => {
                    h(e.vibration), R({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          r(
            d,
            N(yS, {
              get open() {
                return o();
              },
              get fontSize() {
                return L();
              },
              get children() {
                return N(ot, {
                  get mode() {
                    return S.mode;
                  },
                  onCloseStatistics: () => {
                    h(e.vibration), R({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          r(
            d,
            N(yS, {
              get open() {
                return a();
              },
              get fontSize() {
                return L();
              },
              get children() {
                return N(Mt, {
                  onCloseTutorial: () => {
                    h(e.vibration), R({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          g(
            (s) => {
              const U = L() + "px",
                v = !a() && !o() && (e.gameSize === "square" || l()),
                m = a() || o() || (e.gameSize === "fit" && !l()),
                J = L() + "px",
                X = L() + "px";
              return (
                U !== s._v$ && H.style.setProperty("font-size", (s._v$ = U)),
                v !== s._v$2 &&
                  C.classList.toggle("overflow-auto", (s._v$2 = v)),
                m !== s._v$3 &&
                  C.classList.toggle("overflow-hidden", (s._v$3 = m)),
                J !== s._v$4 && C.style.setProperty("font-size", (s._v$4 = J)),
                X !== s._v$5 && u.style.setProperty("font-size", (s._v$5 = X)),
                s
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
            }
          ),
          d
        );
      })();
    },
    Wt = c(
      '<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl"></h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500"></span> </h6><p class="mb-8 text-center text-gray-500 md:text-lg"></p></div></div></div>'
    ),
    ft = (S) => {
      const e = F();
      return (() => {
        const E = Wt.cloneNode(!0),
          t = E.firstChild,
          R = t.firstChild,
          L = R.firstChild,
          I = L.nextSibling,
          T = I.firstChild;
        T.nextSibling;
        const n = I.nextSibling;
        return (
          r(L, () => e.t("app.error404")),
          r(T, () => e.t("app.oops")),
          r(I, () => e.t("app.pageNotFound"), null),
          r(n, () => e.t("app.notFoundText")),
          r(
            R,
            N(Xe, {
              href: "/",
              class:
                "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
              get children() {
                return e.t("app.backToDaily");
              },
            }),
            null
          ),
          E
        );
      })();
    },
    mt = () => {
      const S = K(() => WS(ZS)),
        e = K(() => WS(kS));
      return (
        p(() => {
          var t;
          const E = document.querySelector("meta[name=theme-color]");
          ((t = S()) == null ? void 0 : t[0].darkMode)
            ? (document.documentElement.classList.add("dark"),
              E == null || E.setAttribute("content", "#111827"))
            : (document.documentElement.classList.remove("dark"),
              E == null || E.setAttribute("content", "#cbd5e1"));
        }),
        S() && e()
          ? N(pe, {
              get children() {
                return [
                  N(xS, {
                    path: "/",
                    get element() {
                      return N(ne, { mode: "daily" });
                    },
                  }),
                  N(xS, {
                    path: "/practice",
                    get element() {
                      return N(ne, { mode: "free" });
                    },
                  }),
                  N(xS, {
                    path: "/*all",
                    get element() {
                      return N(ft, {});
                    },
                  }),
                ];
              },
            })
          : null
      );
    };
  if ("serviceWorker" in navigator) {
    const S = SE({
      onNeedRefresh() {
        S(!0);
      },
    });
  }
  ze(
    () =>
      N(Qe, {
        get source() {
          return qe();
        },
        get children() {
          return N(lE, {
            get children() {
              return N(fE, {
                get children() {
                  return N(mt, {});
                },
              });
            },
          });
        },
      }),
    document.getElementById("root")
  );
});
export default bt();
//# sourceMappingURL=index.fa38d796.js.map
