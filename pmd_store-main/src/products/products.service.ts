import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class ProductsService {
    getProducts(): string[]{
        return['cars','bids']
    }
    getAllProducts(): string[]{
        return
    }
    getAllPrices(): string[]{
        return
    }
    postProducts(): string[]{

        return
    }
    postAllProducts(): string[]{
        return
    }
    postAllPrices(): string[]{
        return ['avion']
    }
    saveProduct(product: {}) {
        //save product to data base
        console.log('product saved')
        const productSaved = {
            id: '1',
            ...product
        }
        return productSaved
    }

}
