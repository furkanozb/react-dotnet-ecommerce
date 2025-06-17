import type { IProduct } from '../model/IProduct'
import { Card, CardContent, CardMedia,Typography,CardActions,Button } from '@mui/material'
import { AddShoppingCart,Visibility } from '@mui/icons-material'

interface Props {
    product: IProduct
}


export default function Product({ product }: Props) {
    return (
        <Card>
            <CardMedia sx={{height:160,backgroundSize:"contain"}} image={`http://localhost:5183/images/${product.imageUrl}`} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2" color="text.secondary">{product.name}</Typography>
                <Typography variant="body2" color="secondary">{product.description}</Typography>
                <Typography variant="body2" color="secondary">{(product.price / 100).toFixed(2) }₺</Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' size="small" startIcon={<AddShoppingCart />} color="success">
                    Sepete Ekle
                </Button>
                <Button variant='outlined' size="small" startIcon={<Visibility />} color="primary">
                    Görüntüle
                </Button>
            </CardActions>
        </Card>
    );
}