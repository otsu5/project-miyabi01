/**
 * Example test file
 *
 * Run tests: npm test
 * Watch mode: npm test -- --watch
 * Coverage: npm test -- --coverage
 */

import { describe, it, expect } from 'vitest';
import { hello } from '../src/index.js';

describe('project-miyabi01', () => {
  it('should return greeting message', () => {
    const result = hello();
    expect(result).toBe('Hello from project-miyabi01!');
  });

  it('should handle basic math', () => {
    expect(2 + 2).toBe(4);
  });

  it('should validate async operations', async () => {
    const promise = Promise.resolve('success');
    await expect(promise).resolves.toBe('success');
  });
});

describe('Environment', () => {
  it('should have Node.js environment', () => {
    expect(typeof process).toBe('object');
    expect(process.env).toBeDefined();
  });
});
