interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    const products: Product[] = [];
    return new Promise(function (resolve) {
        resolve(products);
    });
}

/*
interface ProductDetail {
    //product를 재활용 할 수 없다 -> product 의 일부지만, 새로 인터페이스를 만들어야한다
    id: number;
    name: string;
    price: number;
}

function displayProductDetail(shoppingItem: ProductDetail) {
    //목록에 있는 데이터가 모두 있는것은 아니다 -> 인터페이스 모양이 다를 수 있다.

}
 */
//특정 샆뭄의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
    //Pick을 사용하여, 재활용이 필요한 타입만 꺼낼 수 있다.
}

interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 12342223333,
    company: '내 방'
}
const chingtao: Omit<AddressBook, 'address' | 'company'> = {
    name: '중국집',
    phone: 44455557777
}
/*
interface UpdateProduct{
    id?: number;
    name?: string;
    price?: number;
    brand?: string;
    stock?: number;
}

//특정 상품 정보를 업데이트(갱신 )하는 함수 (patch 메서드)
//Product를 파라미터로 받게 되면, 필요한 것만 입력받아 업데이트를 할 수없다.
function updateProductItem(productItem: UpdateProduct) {

}
 */
type UpdateProduct = Partial<Product> //Partial를 사용하면, Product을 속성을 모두 옵셔널로 받게 된다.
function updateProductItem(productItem: UpdateProduct) {

}


//유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

/*
interface UserProfileUpdate {
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}
 */

//#1
type UserProfileUpdate = {
    username?: UserProfile['username']; //위에 정의된 속성을 그대로 사용할 수 있다
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

//#2
type UserProfileUpdate2 = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p] //맵드 타입이라고 한다
}

//#3
//type UserProfileKeys = keyof UserProfile
type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

//#4 -> 모든 타입이 가능하도록 적용(partial)
type Subset<T> = {
    [p in keyof T]?: T[p]
}