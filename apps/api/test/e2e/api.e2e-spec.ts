import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

describe('API E2E Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth Module', () => {
    it('/auth/login (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'test@example.com', password: 'password' })
        .expect(201);

      expect(response.body).toHaveProperty('accessToken');
    });

    it('/auth/register (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ email: 'newuser@example.com', password: 'password', confirmPassword: 'password' })
        .expect(201);

      expect(response.body).toHaveProperty('accessToken');
    });
  });

  describe('Users Module', () => {
    it('/users (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/users')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });

    it('/users/:id (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/users/1')
        .expect(200);

      expect(response.body).toHaveProperty('id', 1);
    });

    it('/users (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/users')
        .send({ email: 'newuser@example.com', password: 'password' })
        .expect(201);

      expect(response.body).toHaveProperty('id');
    });

    it('/users/:id (PUT)', async () => {
      const response = await request(app.getHttpServer())
        .put('/users/1')
        .send({ email: 'updateduser@example.com' })
        .expect(200);

      expect(response.body).toHaveProperty('email', 'updateduser@example.com');
    });

    it('/users/:id (DELETE)', async () => {
      await request(app.getHttpServer())
        .delete('/users/1')
        .expect(200);
    });
  });

  describe('Investments Module', () => {
    it('/investments (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/investments')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });

    it('/investments/:id (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/investments/1')
        .expect(200);

      expect(response.body).toHaveProperty('id', 1);
    });

    it('/investments (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/investments')
        .send({ amount: 1000, portfolioId: 1 })
        .expect(201);

      expect(response.body).toHaveProperty('id');
    });

    it('/investments/:id (PUT)', async () => {
      const response = await request(app.getHttpServer())
        .put('/investments/1')
        .send({ amount: 2000 })
        .expect(200);

      expect(response.body).toHaveProperty('amount', 2000);
    });

    it('/investments/:id (DELETE)', async () => {
      await request(app.getHttpServer())
        .delete('/investments/1')
        .expect(200);
    });
  });

  describe('Portfolios Module', () => {
    it('/portfolios (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/portfolios')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });

    it('/portfolios/:id (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/portfolios/1')
        .expect(200);

      expect(response.body).toHaveProperty('id', 1);
    });

    it('/portfolios (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/portfolios')
        .send({ name: 'New Portfolio', userId: 1 })
        .expect(201);

      expect(response.body).toHaveProperty('id');
    });

    it('/portfolios/:id (PUT)', async () => {
      const response = await request(app.getHttpServer())
        .put('/portfolios/1')
        .send({ name: 'Updated Portfolio' })
        .expect(200);

      expect(response.body).toHaveProperty('name', 'Updated Portfolio');
    });

    it('/portfolios/:id (DELETE)', async () => {
      await request(app.getHttpServer())
        .delete('/portfolios/1')
        .expect(200);
    });
  });

  describe('Transactions Module', () => {
    it('/transactions (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/transactions')
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });

    it('/transactions/:id (GET)', async () => {
      const response = await request(app.getHttpServer())
        .get('/transactions/1')
        .expect(200);

      expect(response.body).toHaveProperty('id', 1);
    });

    it('/transactions (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/transactions')
        .send({ amount: 1000, investmentId: 1, type: 'buy' })
        .expect(201);

      expect(response.body).toHaveProperty('id');
    });

    it('/transactions/:id (PUT)', async () => {
      const response = await request(app.getHttpServer())
        .put('/transactions/1')
        .send({ amount: 2000 })
        .expect(200);

      expect(response.body).toHaveProperty('amount', 2000);
    });

    it('/transactions/:id (DELETE)', async () => {
      await request(app.getHttpServer())
        .delete('/transactions/1')
        .expect(200);
    });
  });
});
