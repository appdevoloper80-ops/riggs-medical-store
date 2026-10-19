import test from 'node:test';
import assert from 'node:assert/strict';
import { processUserChatQuery, getInitialBotMessage, QUICK_CHIPS } from './chatEngine.ts';

test('Initial greeting contains demo assistant badge info', () => {
  const greeting = getInitialBotMessage();
  assert.equal(greeting.sender, 'assistant');
  assert.match(greeting.text, /Riggs Store Demo Assistant/i);
});

test('Emergency keywords immediately trigger 999 alert and avoid medical advice', () => {
  const emergencyResponse = processUserChatQuery('Help me, someone has chest pain and cannot breathe');
  assert.match(emergencyResponse.text, /999/);
  assert.match(emergencyResponse.text, /EMERGENCY/i);
  assert.equal(emergencyResponse.action?.target, 'tel:999');
});

test('Medical diagnosis queries remind user that store cannot give clinical advice', () => {
  const diagResponse = processUserChatQuery('What is the dosage for antibiotic pills?');
  assert.match(diagResponse.text, /cannot provide medical advice/i);
});

test('Hours query affirms 24 hours open status', () => {
  const hoursResponse = processUserChatQuery('Are you open now?');
  assert.match(hoursResponse.text, /open 24 hours/i);
  assert.match(hoursResponse.text, /21 Museum Street/i);
});

test('Delivery query explains delivery service with action link', () => {
  const deliveryResponse = processUserChatQuery('Do you deliver?');
  assert.match(deliveryResponse.text, /Delivery is available/i);
  assert.equal(deliveryResponse.action?.type, 'delivery');
});

test('Location query mentions 21 Museum St and London WC1A 1JN', () => {
  const locResponse = processUserChatQuery('Where are you?');
  assert.match(locResponse.text, /21 Museum St/i);
  assert.match(locResponse.text, /WC1A 1JN/i);
});

test('Quick chips array contains requested topics', () => {
  assert.equal(QUICK_CHIPS.includes("Are you open now?"), true);
  assert.equal(QUICK_CHIPS.includes("Do you deliver?"), true);
  assert.equal(QUICK_CHIPS.includes("Where are you?"), true);
  assert.equal(QUICK_CHIPS.includes("Call the store"), true);
});
