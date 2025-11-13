
import { products} from "./data.js";

for (let i=0;i<products.length;i++){
   
    const item_image_container= document.createElement('div');
    item_image_container.className='item-img-container';

    const image = document.createElement('img');
    image.className='item-img';
    image.src=`${products[i].image}`;
    item_image_container.appendChild(image);

    const product_name =document.createElement('h2');
    product_name.className='product-name';
    product_name.innerText=`${products[i].name}`;

    const product_description=document.createElement('p');
    product_description.className='product-description';
    product_description.innerText=`${products[i].description}`;
    const currency_type=document.createElement('div');
    currency_type.className='currency-type';
    currency_type.innerText=`${products[i].currency_type} `;
    const product_price=document.createElement('span');
    currency_type.appendChild(product_price)
    product_price.className='product-price';
    product_price.innerText=`${products[i].price}`;

    const add_to_cart_button=document.createElement('button');
    add_to_cart_button.className='add-to-cart-button';

    const material_symbol_outlined=document.createElement('span');
    material_symbol_outlined.className='material-symbols-outlined';
    add_to_cart_button.appendChild(material_symbol_outlined);
    material_symbol_outlined.innerText='add_shopping_cart';

    const product_card= document.createElement('div');
    product_card.className='product-card';
    product_card.value=`${products[i].id}`

    product_card.appendChild(item_image_container);
    product_card.appendChild(product_name);
    product_card.appendChild(product_description);
    product_card.appendChild(currency_type);
    product_card.appendChild(add_to_cart_button);
    const products_list=document.querySelector('.products-list');

    products_list.appendChild(product_card);
    product_card.addEventListener('click',redirecter);
    function redirecter(){
    location.href=`./product-detail.html?item_id=${product_card.value}`;
}
}
