import { APIRequestContext } from '@playwright/test';
import { BaseApi } from './BaseApi';

export class AuthApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async login(username: string, password?: string) {
    // Standard mock authentication for demonstration.
    // In a real framework, this points to your specific auth endpoint.
    const response = await this.post('/api/v1/auth/login', {
      username,
      password: password || 'secret_sauce'
    });
    
    return response;
  }

  async createToken(payload: object) {
    const response = await this.post('/api/v1/token', payload);
    return response.json();
  }
}
