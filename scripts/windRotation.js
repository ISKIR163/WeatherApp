import { directionAngles } from "./data.js";

export function windRotation(card) {
  const directionKey = card.type === "wind" ? card.direction : "";
  const angle = directionAngles[directionKey] ?? 0;
  console.log(angle);
  return angle;

}
