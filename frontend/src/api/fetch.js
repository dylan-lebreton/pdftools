import { getOrCreateVisitId } from "./visit.js";

export function apiFetch(url, options = {}) {
  const visitId = getOrCreateVisitId();

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "X-Visit-Id": visitId,
    },
  });
}
