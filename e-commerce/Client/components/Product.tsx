import type { IProduct } from '../model/IProduct'

interface Props {
    product:IProduct
}


export default function Product({product}: Props) {
    return (
      <>
        {product.isActive ?
         ( <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          ): (
            <>
              <h3>{product.name}</h3>
              <p style={{color:'red'}}>Bu ürün aktif değil</p>
            </>
          )
        }
      </>
    );
  }