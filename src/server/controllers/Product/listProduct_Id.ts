import { ProductService } from '../../services/productService'
import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export async function listProductId (req: Request, res: Response) {
  const productService = new ProductService()
  const { _id } = req.params

  const products = await productService.ListProductId(_id)

  console.log()
  return res.status(StatusCodes.ACCEPTED).json({ products })
}
