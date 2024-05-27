import { ProductsService } from './products.service';
import { request } from 'http';
import { Response } from 'express';
import { Get, Query, Header, Controller, Post, Body, Res,Req, HttpStatus, Param, Logger, UseInterceptors, UploadedFile } from '@nestjs/common';


@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService){}

    // @Get('/allproducts')
    // getProducts(@Req() request: Request, @Res() response:Response): string[] {
    //     if(!request['age']) {
    //         response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
    //     }
    //     return this.productsService.getProducts()
    // }
    // @Post()
    // postProducts(@Req() request: Request, @Res() response:Response): string {
    //     console.log(request['body'])
    //     if(!request['age']) {
    //         response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
    //     }
    // }

    // @Post()
    // getProducts(@Req() request: Request, @Res() response:Response, @Body() body: []): string[] {
    //     console.log(body)
    //     if ( body['pName'] && body['pType']) {
    //         const productSaved= this.productsService.saveProduct(body)
    //         response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
    //     } else if (!body['pName']){
    //         response.status(HttpStatus.BAD_REQUEST).send("Name is empty");
    //     } else if (!body['pType']){
    //         response.status(HttpStatus.BAD_REQUEST).send("Type is empty");
    //     } else {
    //         response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
    //     }
        
    //     return this.productsService.getProducts()
    // }

    @Get('/allproducts')
    getAllProducts() : string[] {
        return this.productsService.getAllProducts()
    }

    @Get('/product/name/:name')
    getProductById(@Param('name') pName:string) : string {
        return 'Hello ' + pName
    }
    @Post()
    getProducts(@Res() response:Response, @Body() body: []): Response {
        console.log(body)
        if ( body['pName'] && body['pType']) {
            const productSaved= this.productsService.saveProduct(body)
            return response.status(HttpStatus.OK).send(JSON.stringify(productSaved))
        } else {
            response.status(HttpStatus.BAD_REQUEST).send("This is a Bad request");
        }
    }
}
