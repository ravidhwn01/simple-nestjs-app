import { Injectable } from '@nestjs/common';
import { Car } from './car.mock';

@Injectable()
export class CarService {
    private car = Car;
    public async getAll(){
        return  this.car;
    }

}
