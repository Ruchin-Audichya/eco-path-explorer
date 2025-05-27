
export const surveyData: Record<string, Array<{
  id: string;
  text: string;
  icon: string;
  options: Array<{
    text: string;
    score: number;
    emoji: string;
  }>;
}>> = {
  "Transport": [
    {
      id: "transport_1",
      text: "What's your primary mode of transportation for daily commutes?",
      icon: "🚗",
      options: [
        { text: "Private car (alone) or motorcycle", score: 1, emoji: "🚗" },
        { text: "Car sharing or rideshare", score: 2, emoji: "🚖" },
        { text: "Public transport (bus, train, metro)", score: 3, emoji: "🚌" },
        { text: "Cycling or e-bike", score: 4, emoji: "🚲" },
        { text: "Walking or work from home", score: 5, emoji: "🚶" }
      ]
    },
    {
      id: "transport_2",
      text: "How often do you take domestic flights per year?",
      icon: "✈️",
      options: [
        { text: "More than 6 times", score: 1, emoji: "✈️" },
        { text: "4-6 times", score: 2, emoji: "🛩️" },
        { text: "2-3 times", score: 3, emoji: "🎫" },
        { text: "Once per year", score: 4, emoji: "🏖️" },
        { text: "Never or very rarely", score: 5, emoji: "🌍" }
      ]
    },
    {
      id: "transport_3",
      text: "How often do you take international flights?",
      icon: "🌏",
      options: [
        { text: "More than 3 times per year", score: 1, emoji: "🌏" },
        { text: "2-3 times per year", score: 2, emoji: "🗺️" },
        { text: "Once per year", score: 3, emoji: "🧳" },
        { text: "Every few years", score: 4, emoji: "📸" },
        { text: "Never or very rarely", score: 5, emoji: "🏠" }
      ]
    },
    {
      id: "transport_4",
      text: "What type of vehicle do you drive most often?",
      icon: "🚙",
      options: [
        { text: "Large SUV or truck", score: 1, emoji: "🚛" },
        { text: "Standard SUV or large sedan", score: 2, emoji: "🚙" },
        { text: "Mid-size car", score: 3, emoji: "🚗" },
        { text: "Compact or hybrid car", score: 4, emoji: "🚘" },
        { text: "Electric vehicle or don't own a car", score: 5, emoji: "⚡" }
      ]
    }
  ],
  "Food": [
    {
      id: "food_1",
      text: "How often do you eat meat (beef, pork, lamb)?",
      icon: "🍖",
      options: [
        { text: "Daily or multiple times per day", score: 1, emoji: "🥩" },
        { text: "4-6 times per week", score: 2, emoji: "🍖" },
        { text: "2-3 times per week", score: 3, emoji: "🍗" },
        { text: "Once per week or less", score: 4, emoji: "🐟" },
        { text: "Never (vegetarian/vegan)", score: 5, emoji: "🌱" }
      ]
    },
    {
      id: "food_2",
      text: "Where do you source most of your food?",
      icon: "🛒",
      options: [
        { text: "Mostly imported/out-of-season produce", score: 1, emoji: "🌍" },
        { text: "Regular supermarket, mixed sources", score: 2, emoji: "🛒" },
        { text: "Some local farmers markets", score: 3, emoji: "🚚" },
        { text: "Mostly local and seasonal produce", score: 4, emoji: "🏪" },
        { text: "Grow my own or local organic only", score: 5, emoji: "🌾" }
      ]
    },
    {
      id: "food_3",
      text: "How much food do you typically waste?",
      icon: "🗑️",
      options: [
        { text: "A lot - often throw away spoiled food", score: 1, emoji: "😞" },
        { text: "Moderate amount of waste", score: 2, emoji: "🤷" },
        { text: "Some waste occasionally", score: 3, emoji: "👌" },
        { text: "Very little waste", score: 4, emoji: "✨" },
        { text: "Almost no waste - compost everything", score: 5, emoji: "♻️" }
      ]
    },
    {
      id: "food_4",
      text: "How often do you eat out or order takeaway?",
      icon: "🍕",
      options: [
        { text: "Daily or multiple times per day", score: 1, emoji: "🍕" },
        { text: "4-6 times per week", score: 2, emoji: "🍔" },
        { text: "2-3 times per week", score: 3, emoji: "🥡" },
        { text: "Once per week", score: 4, emoji: "🍽️" },
        { text: "Rarely - mostly cook at home", score: 5, emoji: "👨‍🍳" }
      ]
    }
  ],
  "Energy": [
    {
      id: "energy_1",
      text: "What type of energy does your home use?",
      icon: "⚡",
      options: [
        { text: "All fossil fuels (coal, gas, oil)", score: 1, emoji: "🏭" },
        { text: "Mostly fossil fuels, some renewables", score: 2, emoji: "⛽" },
        { text: "Mixed energy sources", score: 3, emoji: "🔌" },
        { text: "Mostly renewable energy", score: 4, emoji: "🌞" },
        { text: "100% renewable (solar, wind, etc.)", score: 5, emoji: "♻️" }
      ]
    },
    {
      id: "energy_2",
      text: "How do you heat/cool your home?",
      icon: "🌡️",
      options: [
        { text: "Always at comfortable temperature", score: 1, emoji: "🔥" },
        { text: "Frequent heating/cooling use", score: 2, emoji: "❄️" },
        { text: "Moderate use, some adjustment", score: 3, emoji: "🌡️" },
        { text: "Minimal use, dress for weather", score: 4, emoji: "🧥" },
        { text: "Rarely use heating/cooling", score: 5, emoji: "🌿" }
      ]
    },
    {
      id: "energy_3",
      text: "How conscious are you about turning off lights and electronics?",
      icon: "💡",
      options: [
        { text: "Never think about it", score: 1, emoji: "😴" },
        { text: "Sometimes remember", score: 2, emoji: "🤔" },
        { text: "Usually turn things off", score: 3, emoji: "👍" },
        { text: "Very conscious, always turn off", score: 4, emoji: "✅" },
        { text: "Use smart systems/timers to optimize", score: 5, emoji: "🏠" }
      ]
    },
    {
      id: "energy_4",
      text: "What type of appliances do you use?",
      icon: "🏠",
      options: [
        { text: "Older, less efficient appliances", score: 1, emoji: "📺" },
        { text: "Mix of old and new appliances", score: 2, emoji: "🔌" },
        { text: "Mostly standard efficiency", score: 3, emoji: "🏠" },
        { text: "Energy-efficient appliances", score: 4, emoji: "⭐" },
        { text: "All energy-star certified/smart home", score: 5, emoji: "🌟" }
      ]
    }
  ],
  "Waste": [
    {
      id: "waste_1",
      text: "How do you handle recycling?",
      icon: "♻️",
      options: [
        { text: "Don't recycle", score: 1, emoji: "🗑️" },
        { text: "Recycle occasionally", score: 2, emoji: "🤷" },
        { text: "Recycle most things", score: 3, emoji: "📦" },
        { text: "Recycle everything possible", score: 4, emoji: "♻️" },
        { text: "Recycle + reduce + reuse actively", score: 5, emoji: "🌟" }
      ]
    },
    {
      id: "waste_2",
      text: "How often do you use single-use items?",
      icon: "🥤",
      options: [
        { text: "Daily - plastic bags, cups, utensils", score: 1, emoji: "🥤" },
        { text: "Frequently use disposables", score: 2, emoji: "🍴" },
        { text: "Sometimes use single-use items", score: 3, emoji: "👌" },
        { text: "Rarely use disposables", score: 4, emoji: "🌱" },
        { text: "Always use reusable alternatives", score: 5, emoji: "♻️" }
      ]
    },
    {
      id: "waste_3",
      text: "Do you compost organic waste?",
      icon: "🌱",
      options: [
        { text: "Never compost anything", score: 1, emoji: "🗑️" },
        { text: "Rarely think about composting", score: 2, emoji: "🤔" },
        { text: "Sometimes compost", score: 3, emoji: "🌿" },
        { text: "Compost most organic waste", score: 4, emoji: "🌱" },
        { text: "Compost everything + vermiculture", score: 5, emoji: "🪱" }
      ]
    },
    {
      id: "waste_4",
      text: "How much packaging waste do you generate?",
      icon: "📦",
      options: [
        { text: "Lots - buy many packaged goods", score: 1, emoji: "📦" },
        { text: "Moderate packaging waste", score: 2, emoji: "🛍️" },
        { text: "Some packaging, try to minimize", score: 3, emoji: "👌" },
        { text: "Minimal packaging waste", score: 4, emoji: "🌿" },
        { text: "Almost zero - bulk/package-free", score: 5, emoji: "♻️" }
      ]
    }
  ],
  "Lifestyle": [
    {
      id: "lifestyle_1",
      text: "How often do you buy new clothing?",
      icon: "👕",
      options: [
        { text: "Very frequently - follow all trends", score: 1, emoji: "🛍️" },
        { text: "Buy new clothes monthly", score: 2, emoji: "👗" },
        { text: "Buy new clothes seasonally", score: 3, emoji: "👕" },
        { text: "Buy only when needed", score: 4, emoji: "🎯" },
        { text: "Buy second-hand or never", score: 5, emoji: "♻️" }
      ]
    },
    {
      id: "lifestyle_2",
      text: "How do you shop for consumer goods?",
      icon: "🛒",
      options: [
        { text: "Always buy new, premium brands", score: 1, emoji: "💳" },
        { text: "Mostly buy new items", score: 2, emoji: "🛒" },
        { text: "Mix of new and used items", score: 3, emoji: "🎯" },
        { text: "Prefer used/refurbished items", score: 4, emoji: "♻️" },
        { text: "Minimize purchases, repair first", score: 5, emoji: "🔧" }
      ]
    },
    {
      id: "lifestyle_3",
      text: "How long do you keep electronic devices?",
      icon: "📱",
      options: [
        { text: "Upgrade frequently (< 2 years)", score: 1, emoji: "📱" },
        { text: "Upgrade every 2-3 years", score: 2, emoji: "💻" },
        { text: "Keep for 3-4 years", score: 3, emoji: "⏰" },
        { text: "Use until they break (5+ years)", score: 4, emoji: "🔧" },
        { text: "Buy refurbished, repair when possible", score: 5, emoji: "♻️" }
      ]
    },
    {
      id: "lifestyle_4",
      text: "What influences your purchasing decisions?",
      icon: "💭",
      options: [
        { text: "Price only", score: 1, emoji: "💰" },
        { text: "Price and brand", score: 2, emoji: "🏷️" },
        { text: "Quality and value", score: 3, emoji: "⭐" },
        { text: "Environmental impact considered", score: 4, emoji: "🌍" },
        { text: "Sustainability is top priority", score: 5, emoji: "🌱" }
      ]
    }
  ]
};
