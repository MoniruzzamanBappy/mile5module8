const products = ['iPhone 11 [64GB]',
    'iPhone 11 [128GB]',
    'iPhone 12[128GB]',
    'iPhone 13 Pro  [256GB]',
    'Macbook 16" 2021 M1 pro [16/1TB]',
    'iPad 9th gen wifi [256GB]',
    'Oneplus 9 [8+128GB]',
    'Oneplus 9 Pro [12+256GB]',
    'Z fold 3 [12+256GB]',
    'Poco x3  Pro[6+128GB',
    'Redmi 10 Prime [6/128GB]',
    'A52s 5G (8/128) GB',
    'Redmi Note 10 Pro Max 6/128',
    'Realme C11 2021 [2+32]',
    'Realme Narzo 50i [4+64]',
    'Nokia G20 [4/64GB]',
    'Moto e7 plus [4/64]',
    'Hot 11 Play (4/128)'];

const search = 'iphone';
let output = [];
let output1 = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        output.push(product);
    }
}

console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(search.toLowerCase()) != -1) {
        output1.push(product);
    }
}

console.log(output1);