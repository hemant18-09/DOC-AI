// English + Hindi + Telugu emergency signals (extensible)
export const SYMPTOM_SIGNALS = {
  cardiac: [
    // English
    "chest pain",
    "crushing chest",
    "pain in left arm",
    "jaw pain",
    "heart attack",
    "tightness in chest",

    // Hindi
    "सीने में दर्द",
    "दिल का दौरा",
    "बाएं हाथ में दर्द",
    "छाती में जकड़न",

    // Telugu
    "ఛాతిలో నొప్పి",
    "గుండె నొప్పి",
    "హృదయాఘాతం",
  ],

  neurological: [
    "slurred speech",
    "stroke",
    "seizure",
    "arm weakness",

    "बोलने में कठिनाई",
    "लकवा",
    "दौरा",

    "మాట తడబడటం",
    "పక్షవాతం",
    "ఫిట్స్",
  ],

  respiratory: [
    "shortness of breath",
    "cannot breathe",
    "gasping for air",

    "सांस लेने में कठिनाई",
    "सांस नहीं आ रही",

    "శ్వాస తీసుకోవడంలో ఇబ్బంది",
    "ఊపిరి రావడం లేదు",
  ],

  bleeding: [
    "heavy bleeding",
    "vomiting blood",

    "बहुत ज्यादा खून बहना",
    "खून की उल्टी",

    "అధిక రక్తస్రావం",
    "రక్త వాంతులు",
  ],

  trauma: [
    "car accident",
    "head injury",

    "कार दुर्घटना",
    "सिर में चोट",

    "రోడ్డు ప్రమాదం",
    "తల గాయం",
  ],
};

export const CONTEXT_SIGNALS = {
  sudden: ["sudden", "अचानक", "అకస్మాత్తుగా"],
  worsening: ["getting worse", "बढ़ रहा है", "మరింత ఎక్కువవుతోంది"],
  exertion: ["walking", "exercise", "चलते समय", "నడుస్తున్నప్పుడు"],
  duration: ["for hours", "कई घंटों से", "గంటలుగా"],
};
