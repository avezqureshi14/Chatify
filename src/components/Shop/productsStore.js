// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
const productsArray = [
    {
        id: "price_1MGGwCSJVCB993v3OXGIB7VG",
        title: "Marlboro Premium Lights",
        image:"https://media.licdn.com/dms/image/C4D22AQHcqjz_DWBkEA/feedshare-shrink_800/0/1671305873470?e=1674086400&v=beta&t=qEwynCFwvVw-3u-mPiNNkdA7JlyvTN0ay4c4KN4UYmg",
        price: 30
    },
    {
        id: "price_1MGGxWSJVCB993v3BslrKNYG",
        title: "Treasurer Comfort Sticks",
        image:"https://media.licdn.com/dms/image/C4D22AQFkgDJZ6-VlWg/feedshare-shrink_800/0/1671306032430?e=1674086400&v=beta&t=hJVDeLyqCM98s89hImq6j2AFDkqtZq1U_buX1px6dAI",
        price: 90
    },
    {
        id: "price_1MGGxvSJVCB993v377gqDDZm",
        title: "Hemptrance Royal Ciggarattes",
        image:"https://media.licdn.com/dms/image/C4D22AQGDJM08mtrvuA/feedshare-shrink_800/0/1671306053544?e=1674086400&v=beta&t=_BXhFXIr90hliCKbN264DGj_jmGvDYFcQbOCqoaDEjo",
        price: 150
    }
];

function getProductsData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exists for ID " + id);
    }

    return productData;
}

export { productsArray, getProductsData };