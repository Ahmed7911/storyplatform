
// src/contents/registry.js
import { contents as level3Prep } from "./level3PrepContents";
import { contents as level5 } from "./contents";
import { contents as level6 } from "./level6Contents";

/**
 * Map your level parameter to the corresponding contents.
 * You can alias "3" to the prep contents, or use "3-prep".
 */
export const contentMap = {
  "9": level3Prep,
  "3-prep": level3Prep,
  "5": level5,
  "6": level6
};

export function getContentsForLevel(level) {
  const key = String(level).toLowerCase();
  return contentMap[key] || [];
}

/**
 * Centralize your Level → YouTube video mapping here.
 * Add more levels as needed.
 */
export function getVideoForLevel(level) {
  const key = String(level);
  const videoMap = {
    "5": "https://www.youtube.com/embed/ijyHIoxm4tM", // Level 5
    "9": "https://www.youtube.com/embed/1ugfrv8Lo-c?si=h3tP0B3Ga5JHEF1k", // Level 3 Prep
    "6": "https://www.youtube.com/embed/BsllTK3zvAg?si=oItHSFDOLycajCQL"  // Level 6
  };
  return videoMap[key] || null;
}
