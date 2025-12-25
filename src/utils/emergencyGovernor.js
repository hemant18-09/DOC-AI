/*
 Emergency Governor (refactored)
 - Uses Unicode-safe normalize() + calculateRisk() over multilingual signals
 - Returns a backward-compatible report for UI consumption
 - No diagnosis, only risk gating
*/

import { normalize } from "./normalize.js";
import { calculateRisk } from "./riskEngine.js";
import { CONTEXT_SIGNALS } from "./signals.js";

function matchAny(text, arr) {
  return arr.some((p) => text.includes(p));
}

function detectContext(text) {
  const ctx = [];
  if (matchAny(text, CONTEXT_SIGNALS.sudden)) ctx.push("sudden");
  if (matchAny(text, CONTEXT_SIGNALS.worsening)) ctx.push("worsening");
  if (matchAny(text, CONTEXT_SIGNALS.exertion)) ctx.push("exertion");
  if (matchAny(text, CONTEXT_SIGNALS.duration)) ctx.push("duration");
  return ctx;
}

export function assessEmergency(inputText, opts = {}) {
  const text = normalize(inputText || "");
  const { score, categories } = calculateRisk(text);
  const ctx = detectContext(text);

  const threshold = opts.threshold ?? 70; // tuned to category weights
  const isEmergency = score >= threshold;

  const reasons = [];
  if (categories.length) {
    for (const c of categories) reasons.push(`signal: ${c}`);
  }
  if (ctx.length) {
    for (const c of ctx) reasons.push(`context: ${c}`);
  }

  return {
    isEmergency,
    risk: score,
    matches: [],
    reasons,
    message: isEmergency
      ? "Potential emergency detected. This app cannot provide urgent care. Please seek immediate medical attention (call local emergency services)."
      : "No emergency signals detected by screen.",
  };
}

// Lightweight helper for UI guard
export function shouldBlockAI(inputText, opts) {
  const res = assessEmergency(inputText, opts);
  return { block: res.isEmergency, report: res };
}

// Compatibility wrapper for components expecting `emergencyGovernor()`
// Returns a simplified shape: { emergency, message, riskScore, reasons }
export function emergencyGovernor(inputText, opts) {
  const res = assessEmergency(inputText, opts);
  return {
    emergency: res.isEmergency,
    message: res.message,
    riskScore: res.risk,
    reasons: res.reasons,
  };
}
