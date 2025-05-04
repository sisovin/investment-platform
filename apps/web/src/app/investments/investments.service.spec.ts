import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InvestmentsService } from './investments.service';
import { Investment } from '../core/models/investment.model';

describe('InvestmentsService', () => {
  let service: InvestmentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InvestmentsService]
    });
    service = TestBed.inject(InvestmentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch investments', () => {
    const dummyInvestments: Investment[] = [
      { id: 1, amount: 1000, portfolioId: 1 },
      { id: 2, amount: 2000, portfolioId: 2 }
    ];

    service.getInvestments().subscribe(investments => {
      expect(investments.length).toBe(2);
      expect(investments).toEqual(dummyInvestments);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyInvestments);
  });

  it('should fetch a single investment', () => {
    const dummyInvestment: Investment = { id: 1, amount: 1000, portfolioId: 1 };

    service.getInvestment(1).subscribe(investment => {
      expect(investment).toEqual(dummyInvestment);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyInvestment);
  });

  it('should create an investment', () => {
    const newInvestment: Investment = { id: 3, amount: 3000, portfolioId: 3 };

    service.createInvestment(newInvestment).subscribe(investment => {
      expect(investment).toEqual(newInvestment);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('POST');
    req.flush(newInvestment);
  });

  it('should update an investment', () => {
    const updatedInvestment: Investment = { id: 1, amount: 1500, portfolioId: 1 };

    service.updateInvestment(1, updatedInvestment).subscribe(investment => {
      expect(investment).toEqual(updatedInvestment);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedInvestment);
  });

  it('should delete an investment', () => {
    service.deleteInvestment(1).subscribe(response => {
      expect(response).toBeUndefined();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
