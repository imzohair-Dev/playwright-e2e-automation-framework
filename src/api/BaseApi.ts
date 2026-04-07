import { APIRequestContext, expect } from '@playwright/test';

export class BaseApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  protected async get(url: string, params?: { [key: string]: string | number | boolean }) {
    const response = await this.request.get(url, { params });
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }

  protected async post(url: string, data: any, headers?: { [key: string]: string }) {
    const response = await this.request.post(url, { data, headers });
    return response;
  }

  protected async put(url: string, data: any) {
    const response = await this.request.put(url, { data });
    return response;
  }

  protected async delete(url: string) {
    const response = await this.request.delete(url);
    return response;
  }
}
