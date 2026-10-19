import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidUKPostcode, formatUKPostcode, isValidUKPhone, isValidEmail, isValidName } from './validation.ts';

test('UK postcode validator correctly validates valid London and UK postcodes', () => {
  // Store's postcode
  assert.equal(isValidUKPostcode('WC1A 1JN'), true);
  assert.equal(isValidUKPostcode('wc1a 1jn'), true);
  assert.equal(isValidUKPostcode('WC1A1JN'), true);

  // Other common UK patterns
  assert.equal(isValidUKPostcode('SW1A 1AA'), true);
  assert.equal(isValidUKPostcode('EC1A 1BB'), true);
  assert.equal(isValidUKPostcode('W1D 4AG'), true);
  assert.equal(isValidUKPostcode('M1 1AE'), true);
  assert.equal(isValidUKPostcode('B33 8TH'), true);
});

test('UK postcode validator rejects invalid postcodes', () => {
  assert.equal(isValidUKPostcode(''), false);
  assert.equal(isValidUKPostcode('12345'), false);
  assert.equal(isValidUKPostcode('LONDON'), false);
  assert.equal(isValidUKPostcode('90210'), false);
  assert.equal(isValidUKPostcode('INVALID POSTCODE'), false);
});

test('formatUKPostcode properly standardizes spacing', () => {
  assert.equal(formatUKPostcode('wc1a1jn'), 'WC1A 1JN');
  assert.equal(formatUKPostcode('sw1a1aa'), 'SW1A 1AA');
});

test('UK phone validator validates valid phone numbers', () => {
  // Store's phone
  assert.equal(isValidUKPhone('+44 1730 298007'), true);
  assert.equal(isValidUKPhone('+441730298007'), true);
  assert.equal(isValidUKPhone('01730 298007'), true);
  assert.equal(isValidUKPhone('020 7123 4567'), true);
  assert.equal(isValidUKPhone('07123 456789'), true);
});

test('UK phone validator rejects invalid numbers', () => {
  assert.equal(isValidUKPhone(''), false);
  assert.equal(isValidUKPhone('123'), false);
  assert.equal(isValidUKPhone('abcdef'), false);
  assert.equal(isValidUKPhone('0000000000'), false);
});

test('Email validator accepts valid emails and rejects bad ones', () => {
  assert.equal(isValidEmail('patient@example.co.uk'), true);
  assert.equal(isValidEmail('enquiries@riggsmedicalsupply.co.uk'), true);
  assert.equal(isValidEmail('test'), false);
  assert.equal(isValidEmail('test@'), false);
  assert.equal(isValidEmail('test@domain'), false);
});

test('Name validator verifies length', () => {
  assert.equal(isValidName('Sarah Jenkins'), true);
  assert.equal(isValidName('Jo'), true);
  assert.equal(isValidName(''), false);
  assert.equal(isValidName('   '), false);
});
