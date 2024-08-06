import { describe, it, expect } from 'vitest';
import axiosInstance from './axiosInstance';

describe('axiosInstance', () => {
  it('should match the snapshot', () => {
    expect(axiosInstance.defaults).toMatchSnapshot();
  });
});
