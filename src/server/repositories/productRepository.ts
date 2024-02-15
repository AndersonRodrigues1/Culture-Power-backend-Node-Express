import { UserModel } from '../schemas/user.schema';
import { IUserDTO, IUser } from '../entities/users';
import { IProduct, IProductDTO } from '../entities/product';
import { ProductModel } from '../schemas/product.schema';
import { string } from 'yup';

export class ProductRepository{
  async save<IProduct>(name: string, value: number, amount: number, description: string, photo: string) {
    
    return await ProductModel.create<IProductDTO>({
      name,
      value,
      amount,
      description,
      photo
    });
  }
  
  async findByProducts () {
    return await ProductModel.find();
  }
  async findById (_id: string){
    return await ProductModel.findById(_id)
  }
}