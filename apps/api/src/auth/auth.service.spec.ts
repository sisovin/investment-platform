import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/auth.dto';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            validateUser: jest.fn(),
            createUser: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should return an access token if credentials are valid', async () => {
      const loginDto: LoginDto = { email: 'test@example.com', password: 'password' };
      const user = { id: 1, email: 'test@example.com' };
      const accessToken = 'accessToken';

      jest.spyOn(usersService, 'validateUser').mockResolvedValue(user);
      jest.spyOn(jwtService, 'sign').mockReturnValue(accessToken);

      const result = await service.login(loginDto);

      expect(result).toEqual({ accessToken });
      expect(usersService.validateUser).toHaveBeenCalledWith(loginDto.email, loginDto.password);
      expect(jwtService.sign).toHaveBeenCalledWith({ email: user.email, sub: user.id });
    });

    it('should throw an error if credentials are invalid', async () => {
      const loginDto: LoginDto = { email: 'test@example.com', password: 'password' };

      jest.spyOn(usersService, 'validateUser').mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow('Invalid credentials');
      expect(usersService.validateUser).toHaveBeenCalledWith(loginDto.email, loginDto.password);
    });
  });

  describe('register', () => {
    it('should return an access token after successful registration', async () => {
      const registerDto: RegisterDto = { email: 'test@example.com', password: 'password', confirmPassword: 'password' };
      const user = { id: 1, email: 'test@example.com' };
      const accessToken = 'accessToken';

      jest.spyOn(usersService, 'createUser').mockResolvedValue(user);
      jest.spyOn(jwtService, 'sign').mockReturnValue(accessToken);

      const result = await service.register(registerDto);

      expect(result).toEqual({ accessToken });
      expect(usersService.createUser).toHaveBeenCalledWith(registerDto);
      expect(jwtService.sign).toHaveBeenCalledWith({ email: user.email, sub: user.id });
    });
  });
});
