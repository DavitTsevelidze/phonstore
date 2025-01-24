export interface Product {
    id: number | string,
    title: string,
    category: string,
    discountPercentage: string[] | number,
   rating: number,
   stock: number,
    description: string,
    price: number | string,
    brand: string,
   onSale:boolean,
   Sale: any | undefined,
    thumbnail:string,
    images:string[] | any,
    color: any,

}
