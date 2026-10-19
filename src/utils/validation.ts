/**
 * UK Form Validation Utilities for Riggs Medical Supply Store
 */

/**
 * Validates a UK Postcode according to standard Royal Mail format.
 * Accepts formats with or without spaces, e.g.: WC1A 1JN, WC1A1JN, SW1A 1AA, M1 1AE.
 */
export function isValidUKPostcode(postcode: string): boolean {
  if (!postcode) return false;
  const cleaned = postcode.trim().toUpperCase();
  // Standard UK Outward and Inward postcode regex
  const ukPostcodeRegex = /^([A-Z]{1,2}[0-9][A-Z0-9]?)\s*([0-9][A-Z]{2})$/i;
  return ukPostcodeRegex.test(cleaned);
}

/**
 * Normalizes and formats a UK postcode with standard spacing (e.g. "wc1a1jn" -> "WC1A 1JN").
 */
export function formatUKPostcode(postcode: string): string {
  const cleaned = postcode.trim().toUpperCase().replace(/\s+/g, '');
  if (cleaned.length < 5) return cleaned;
  const inward = cleaned.slice(-3);
  const outward = cleaned.slice(0, -3);
  return `${outward} ${inward}`;
}

/**
 * Validates UK Landline, Mobile, or International formatted UK phone numbers.
 * Examples: +44 1730 298007, 01730 298007, 020 7123 4567, 07123 456789, +44 20 7123 4567.
 */
export function isValidUKPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  // Matches +44 followed by 9-10 digits, or 0 followed by 9-10 digits
  const ukPhoneRegex = /^((\+44)|(0044)|0)[1-9][0-9]{8,9}$/;
  return ukPhoneRegex.test(cleaned);
}

/**
 * Standard email validator.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates full name has at least 2 characters.
 */
export function isValidName(name: string): boolean {
  return typeof name === 'string' && name.trim().length >= 2;
}
