import { fileURLToPath } from 'url';
import path from 'path';

/**
 * 
 * @param {string} p 
 * @returns 
 */
export default function resolvePath(p) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.resolve(__dirname, p)
}