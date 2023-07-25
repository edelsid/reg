import Validator from '../nameExamination';

test('name testing1', () => {
  const nameStr = new Validator('!!!!!!');
  const result = nameStr.validateUsername();
  expect(result).toBe(false);
});

test('name testing2', () => {
  const nameStr = new Validator('-aury');
  const result = nameStr.validateUsername();
  expect(result).toBe(false);
});

test('name testing3', () => {
  const nameStr = new Validator('aury_');
  const result = nameStr.validateUsername();
  expect(result).toBe(false);
});

test('name testing4', () => {
  const nameStr = new Validator('ty4yt');
  const result = nameStr.validateUsername();
  expect(result).toBe(true);
});

test('name testing5', () => {
  const nameStr = new Validator('ume-ld34it-ss');
  const result = nameStr.validateUsername();
  expect(result).toBe(true);
});

test('name testing6', () => {
  const nameStr = new Validator('r2r4t');
  const result = nameStr.validateUsername();
  expect(result).toBe(true);
});

test('name testing1', () => {
  const nameStr = new Validator('ty44444yt');
  const result = nameStr.validateUsername();
  expect(result).toBe(false);
});
