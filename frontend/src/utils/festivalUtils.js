const festivals = [
  {
    name: "Lohri",
    dates: [
      { start: "2025-01-06", end: "2025-01-13" },
      { start: "2026-01-06", end: "2026-01-13" }
    ],
    theme: {
      primary: "#FF4500", // Orange Red (Fire)
      secondary: "#FFD700", // Gold
      message: "Happy Lohri! May the fire of Lohri burn all your sorrows.",
      giftIcon: "🔥"
    }
  },
  {
    name: "Makar Sankranti / Pongal",
    dates: [
      { start: "2025-01-07", end: "2025-01-15" },
      { start: "2026-01-07", end: "2026-01-15" }
    ],
    theme: {
      primary: "#87CEEB", // Sky Blue (Kites)
      secondary: "#FFFACD", // Lemon Chiffon
      message: "Happy Makar Sankranti & Pongal! Let your dreams fly high like a kite.",
      giftIcon: "🪁"
    }
  },
  {
    name: "Holi",
    dates: [
      { start: "2025-03-07", end: "2025-03-14" },
      { start: "2026-02-15", end: "2026-03-04" }
    ],
    theme: {
      primary: "#FF1493", // Deep Pink
      secondary: "#00CED1", // Dark Turquoise
      message: "Happy Holi! Spread the colors of joy.",
      giftIcon: "🎨"
    }
  },
  {
    name: "Eid-ul-Fitr",
    dates: [
      { start: "2025-03-23", end: "2025-03-30" },
      { start: "2026-03-13", end: "2026-03-20" }
    ],
    theme: {
      primary: "#006400", // Dark Green
      secondary: "#FFD700", // Gold
      message: "Eid Mubarak! Wishing you peace and prosperity.",
      giftIcon: "🌙"
    }
  },
  {
    name: "Raksha Bandhan",
    dates: [
      { start: "2025-08-02", end: "2025-08-09" },
      { start: "2026-08-21", end: "2026-08-28" }
    ],
    theme: {
      primary: "#8B0000", // Dark Red
      secondary: "#DAA520", // Goldenrod
      message: "Happy Raksha Bandhan! Celebrating the bond of love and protection.",
      giftIcon: "🧵"
    }
  },
  {
    name: "Ganesh Chaturthi",
    dates: [
      { start: "2025-08-20", end: "2025-08-27" },
      { start: "2026-09-07", end: "2026-09-14" }
    ],
    theme: {
      primary: "#FF8C00", // Dark Orange
      secondary: "#FFFF00", // Yellow
      message: "Ganpati Bappa Morya! May Lord Ganesha bless you with wisdom.",
      giftIcon: "🐘"
    }
  },
  {
    name: "Navratri",
    dates: [
      { start: "2025-09-15", end: "2025-09-23" },
      { start: "2026-10-03", end: "2026-10-12" }
    ],
    theme: {
      primary: "#FF4500", // Orange Red
      secondary: "#9400D3", // Dark Violet
      message: "Happy Navratri! Celebrating the nine forms of Goddess Durga.",
      giftIcon: "💃"
    }
  },
  {
    name: "Diwali",
    dates: [
      { start: "2025-10-13", end: "2025-10-20" },
      { start: "2026-11-01", end: "2026-11-08" }
    ],
    theme: {
      primary: "#FFD700", // Gold
      secondary: "#FF4500", // Orange Red
      message: "Happy Diwali! May your life be filled with light and joy.",
      giftIcon: "🪔"
    }
  },
  {
    name: "Bhai Dooj",
    dates: [
      { start: "2025-10-21", end: "2025-10-22" },
      { start: "2026-11-09", end: "2026-11-10" }
    ],
    theme: {
      primary: "#C71585", // Medium Violet Red
      secondary: "#FFD700", // Gold
      message: "Happy Bhai Dooj! Strengthening the bond between siblings.",
      giftIcon: "🎁"
    }
  }
];

export const getCurrentFestival = () => {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];

  for (const festival of festivals) {
    for (const range of festival.dates) {
      if (dateStr >= range.start && dateStr <= range.end) {
        return {
          name: festival.name,
          ...festival.theme
        };
      }
    }
  }

  // Default theme if no festival
  return {
    name: "Default",
    primary: "#d4af37", // Harvest Gold
    secondary: "#4a3728", // Warm Brown
    message: "Welcome to Swarnaratna! Discover our exclusive collections.",
    giftIcon: "✨"
  };
};
