import { Compass, Anchor, RotateCcw, ArrowRightLeft } from "lucide-react";

// Import illustrations
import ilustrasiGalileo from "@/assets/ilustrasi-galileo-ocean.png";
import ilustrasiKerangka from "@/assets/ilustrasi-kerangka-ocean.png";
import ilustrasiInersia from "@/assets/ilustrasi-inersia-ocean.png";
import ilustrasiNonInersia from "@/assets/ilustrasi-non-inersia-ocean.png";

export interface MateriContent {
  id: string;
  title: string;
  icon: typeof Compass;
  color: "turquoise" | "coral" | "sand" | "seaweed";
  narration: string;
  concept: string;
  points: string[];
  examples: string[];
  highlight: string;
  illustration?: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const materiList: MateriContent[] = [
  {
    id: "kerangka-acuan",
    title: "Kerangka Acuan",
    icon: Compass,
    color: "turquoise",
    narration: "Bayangkan kamu berada di atas kapal yang berlayar. Apakah kapal diam atau bergerak? Jawabannya tergantung siapa yang mengamati.",
    concept: "Kerangka acuan adalah sistem koordinat yang digunakan untuk mengamati gerak benda. Gerak bersifat relatif terhadap pengamat.",
    points: [
      "Gerak bersifat relatif terhadap pengamat",
      "Posisi dan kecepatan bergantung pada kerangka acuan yang dipilih",
      "Tidak ada kerangka acuan yang \"benar\" secara absolut"
    ],
    examples: [
      "Orang di stasiun melihat kereta bergerak",
      "Penumpang di kereta merasa dirinya diam"
    ],
    highlight: "Gerak itu relatif, tergantung dari mana kita mengamati.",
    illustration: ilustrasiKerangka,
    quiz: {
      question: "Sebuah kapal motor bergerak di sungai dengan kecepatan 10 m/s searah arus. Jika kecepatan arus sungai adalah 3 m/s, berapakah kecepatan kapal menurut orang yang berdiri di tepi sungai?",
      options: [
        "7 m/s",
        "10 m/s",
        "13 m/s",
        "30 m/s"
      ],
      correctIndex: 2,
      explanation: "u = u' + v = 10 + 3 = 13 m/s."
    }
  },
  {
    id: "inersia",
    title: "Kerangka Acuan Inersia",
    icon: Anchor,
    color: "seaweed",
    narration: "Jika kapal selam bergerak lurus dengan kecepatan tetap, hukum Newton berlaku normal.",
    concept: "Kerangka acuan inersia adalah kerangka acuan yang tidak mengalami percepatan - bisa diam atau bergerak lurus beraturan.",
    points: [
      "Tidak mengalami percepatan",
      "Diam atau bergerak lurus beraturan",
      "Tidak ada gaya semu",
      "Hukum Newton berlaku langsung"
    ],
    examples: [
      "Kereta melaju dengan kecepatan konstan",
      "Pesawat terbang lurus stabil",
      "Kapal selam melaju lurus di kedalaman tetap"
    ],
    highlight: "Di kerangka inersia, hukum Newton berlaku sempurna tanpa gaya semu.",
    illustration: ilustrasiInersia,
    quiz: {
      question: "Manakah yang merupakan contoh kerangka acuan inersia?",
      options: [
        "Mobil yang sedang berbelok",
        "Lift yang dipercepat ke atas",
        "Pesawat terbang lurus dengan kecepatan konstan",
        "Komidi putar yang berputar"
      ],
      correctIndex: 2,
      explanation: "Pesawat yang terbang lurus dengan kecepatan konstan tidak mengalami percepatan, sehingga merupakan kerangka acuan inersia."
    }
  },
  {
    id: "non-inersia",
    title: "Kerangka Acuan Non-Inersia",
    icon: RotateCcw,
    color: "coral",
    narration: "Saat kapal selam berbelok tajam, kamu terdorong ke samping. Mengapa?",
    concept: "Kerangka acuan non-inersia mengalami percepatan. Di dalamnya muncul gaya tambahan yang disebut gaya semu.",
    points: [
      "Kerangka acuan yang dipercepat",
      "Muncul gaya semu (pseudo force)",
      "Rumus: F = -m × a",
      "Hukum Newton memerlukan koreksi gaya semu"
    ],
    examples: [
      "Mobil direm mendadak - penumpang terdorong ke depan",
      "Lift dipercepat ke atas - terasa lebih berat",
      "Komidi putar - terdorong ke luar"
    ],
    highlight: "Gaya semu muncul karena kerangka acuan dipercepat.",
    illustration: ilustrasiNonInersia,
    quiz: {
      question: "Sebuah bus bergerak dengan percepatan 2 m/s². Seorang penumpang bermassa 50 kg berdiri di dalam bus. Berapakah gaya semu yang dirasakan penumpang tersebut?",
      options: [
        "50 N",
        "25 N",
        "100 N",
        "200 N"
      ],
      correctIndex: 2,
      explanation: "F_fiktif = m × (-a) = 50 × 2 = 100 Newton (arah berlawanan)."
    }
  },
  {
    id: "galileo",
    title: "Transformasi Galileo",
    icon: ArrowRightLeft,
    color: "sand",
    narration: "Dua kapal selam bergerak relatif. Bagaimana posisi dan kecepatan berubah antar kerangka acuan?",
    concept: "Transformasi Galileo adalah aturan matematika untuk mengubah posisi dan kecepatan dari satu kerangka acuan inersia ke yang lain.",
    points: [
      "Posisi: x' = x - vt",
      "Waktu bersifat absolut: t' = t",
      "Kecepatan: u' = u - v",
      "Percepatan tetap sama di semua kerangka inersia"
    ],
    examples: [
      "Kecepatan bola dilempar dari kereta = kecepatan lempar + kecepatan kereta",
      "Mobil A 60 km/jam, mobil B 80 km/jam → kecepatan relatif = 20 km/jam"
    ],
    highlight: "Kecepatan relatif, percepatan tetap sama di semua kerangka inersia.",
    illustration: ilustrasiGalileo,
    quiz: {
      question: "Sebuah kereta bergerak dengan kecepatan 20 m/s ke arah timur. Seorang penumpang duduk di kursi yang berjarak 50 m dari ujung belakang kereta. Setelah 10 detik, berapakah posisi penumpang tersebut relatif terhadap orang yang diam di stasiun (titik acuan awal di ujung belakang kereta)?",
      options: [
        "200 meter",
        "250 meter",
        "300 meter",
        "150 meter"
      ],
      correctIndex: 1,
      explanation: "x = x' + vt = 50 + (20 × 10) = 50 + 200 = 250 meter."
    }
  }
];

export const teamInfo = {
  groupName: "Kelompok Fisika Kelas XI",
  members: [
    "Danish Bima Abisali",
    "Syabrina Haura Safa", 
    "Keisya Putri Aulia",
    "Syafira Cynthia Dewi",
    "M.levi",
    "Enggar Aditya Sanusi"
  ]
};
