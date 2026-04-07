import { APIRequestContext, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';

export class UserApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getUser(userId: number | string) {
    return await this.get(`/api/users/${userId}`);
  }

  async createUser(userData: object) {
    const response = await this.post('/api/users', userData);
    expect(response.status()).toBe(201);
    return await response.json();
  }

  async deleteUser(userId: number | string) {
    const response = await this.delete(`/api/users/${userId}`);
    expect(response.ok()).toBeTruthy();
  }
}
