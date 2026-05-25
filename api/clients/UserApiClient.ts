import { APIRequestContext, expect } from '@playwright/test';

export class UserApiClient {

  constructor(
    private request: APIRequestContext
  ) {}

  async createUser(payload: any) {

    const response = await this.request.post(
      'https://reqres.in/api/users',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data: payload
      }
    );

    expect(response.status()).toBe(201);

    return await response.json();
  }

  async getUsers() {

    const response = await this.request.get(
      'https://reqres.in/api/users?page=2'
    );

    expect(response.status()).toBe(200);

    return await response.json();
  }

  async updateUser(id: string, payload: any) {

    const response = await this.request.put(
      `https://reqres.in/api/users/${id}`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        data: payload
      }
    );

    expect(response.status()).toBe(200);

    return await response.json();
  }

  async deleteUser(id: string) {

    const response = await this.request.delete(
      `https://reqres.in/api/users/${id}`
    );

    expect(response.status()).toBe(204);
  }
}