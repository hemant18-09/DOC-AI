import { SYMPTOM_SIGNALS, CONTEXT_SIGNALS } from "./signals.js";

function matchAny(text, phrases) {
  return phrases.some((p) => text.includes(p));
}

export function calculateRisk(text) {
  let score = 0;
  let categories = [];

  for (const [category, phrases] of Object.entries(SYMPTOM_SIGNALS)) {
    if (matchAny(text, phrases)) {
      categories.push(category);

      if (category === "cardiac") score += 60;
      else if (category === "neurological") score += 70;
      else if (category === "bleeding") score += 80;
      else if (category === "respiratory") score += 70; // escalate to emergency threshold
      else score += 40;
    }
  }

  if (matchAny(text, CONTEXT_SIGNALS.exertion)) score += 20;
  if (matchAny(text, CONTEXT_SIGNALS.duration)) score += 10;
  if (matchAny(text, CONTEXT_SIGNALS.sudden)) score += 20;
  if (matchAny(text, CONTEXT_SIGNALS.worsening)) score += 15;

  return { score, categories };
}
