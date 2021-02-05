let initialState = [
    {
        id: 1,
        name: 'giày cao su',
        image: 'https://salt.tikicdn.com/cache/w444/ts/product/d6/06/1f/b9dc869179ec4f518b1bdd5029f9583b.jpg',
        price: 20000,
        inventory: 10
    },
    {
        id: 2,
        name: 'giày cao su 2',
        image: 'https://giaydepnamdinh.com/wp-content/uploads/2019/04/gi%E1%BA%A7y-th%E1%BB%9Di-trang-F1-%C4%91en-h%E1%BB%8Da-ti%E1%BA%BFt-h%C3%ACnh-h%E1%BB%8Dc-1-copy.jpg',
        price: 20000,
        inventory: 19
    },
    {
        id: 3,
        name: 'giày cao su 2',
        image: 'https://cf.shopee.vn/file/e65e148ce6a9eef57621921f41cf66ef',
        price: 20000,
        inventory: 21
    },
  
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;