import { Injectable, numberAttribute, Service } from '@angular/core';


export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    desc: string;
    image: string;
    category: string;
    quantity: number;
    discount: number;
}

const ImageUrl = 'src\\app\\img\\400x400.svg';
// const ImageUrl = 'https://placehold.co/400x400?text=Product';

@Injectable({
    providedIn: 'root'
})

export class Product {




    private categories: string[] = [
        'BathAccessories',  // 0
        'Clothing',         // 1
        'Sports',           // 2
        'Furniture',        // 3
        'Food',             // 4
        'Electronics',      // 5
        'Books',            // 6
        'Toys',             // 7
        'Beauty',           // 8
        'Auto',             // 9
        'Home',             // 10
    ];

    private products: ProductInterface[] = [
        { id: 1, title: 'Гель для душа', price: 650, desc: 'Ну помыться можно будет', image: ImageUrl, category: 'BathAccessories', quantity: 10, discount: 0 },
        { id: 2, title: 'Шампунь против перхоти', price: 480, desc: 'Чистая голова без белых хлопьев', image: ImageUrl, category: 'BathAccessories', quantity: 0, discount: 10 },
        { id: 3, title: 'Зубная паста отбеливающая', price: 320, desc: 'Белоснежная улыбка за 2 недели', image: ImageUrl, category: 'BathAccessories', quantity: 40, discount: 5 },
        { id: 4, title: 'Мыло жидкое кокосовое', price: 210, desc: 'Пахнет отпуском', image: ImageUrl, category: 'BathAccessories', quantity: 60, discount: 0 },
        { id: 5, title: 'Полотенце махровое', price: 890, desc: 'Мягкое, как облако', image: ImageUrl, category: 'BathAccessories', quantity: 15, discount: 15 },
        { id: 6, title: 'Халат банный', price: 1990, desc: 'Почувствуй себя в отеле 5 звёзд', image: ImageUrl, category: 'Clothing', quantity: 8, discount: 20 },
        { id: 7, title: 'Тапочки домашние', price: 550, desc: 'Тёплые и уютные', image: ImageUrl, category: 'Clothing', quantity: 0, discount: 0 },
        { id: 8, title: 'Футболка хлопковая', price: 1200, desc: 'Базовая белая футболка', image: ImageUrl, category: 'Clothing', quantity: 50, discount: 10 },
        { id: 9, title: 'Джинсы классические', price: 3500, desc: 'Синие, прямые, на все случаи', image: ImageUrl, category: 'Clothing', quantity: 20, discount: 25 },
        { id: 10, title: 'Куртка зимняя', price: 8900, desc: 'Не замёрзнешь даже в -30', image: ImageUrl, category: 'Clothing', quantity: 7, discount: 30 },
        { id: 11, title: 'Носки (5 пар)', price: 450, desc: 'Комплект на неделю', image: ImageUrl, category: 'Clothing', quantity: 100, discount: 0 },
        { id: 12, title: 'Шарф вязаный', price: 780, desc: 'Мягкий и тёплый', image: ImageUrl, category: 'Clothing', quantity: 0, discount: 5 },
        { id: 13, title: 'Кроссовки беговые', price: 5600, desc: 'Лёгкие и дышащие', image: ImageUrl, category: 'Sports', quantity: 12, discount: 15 },
        { id: 14, title: 'Коврик для йоги', price: 1400, desc: 'Нескользящее покрытие', image: ImageUrl, category: 'Sports', quantity: 22, discount: 0 },
        { id: 15, title: 'Гантели 5 кг (пара)', price: 2200, desc: 'Для домашних тренировок', image: ImageUrl, category: 'Sports', quantity: 9, discount: 10 },
        { id: 16, title: 'Скакалка', price: 350, desc: 'Кардио без зала', image: ImageUrl, category: 'Sports', quantity: 45, discount: 0 },
        { id: 17, title: 'Бутылка для воды', price: 590, desc: 'Спортивная, 1 литр', image: ImageUrl, category: 'Sports', quantity: 0, discount: 5 },
        { id: 18, title: 'Стол обеденный', price: 7900, desc: 'Дубовый, раскладной', image: ImageUrl, category: 'Furniture', quantity: 4, discount: 20 },
        { id: 19, title: 'Стул мягкий', price: 2400, desc: 'С обивкой из велюра', image: ImageUrl, category: 'Furniture', quantity: 16, discount: 0 },
        { id: 20, title: 'Диван трёхместный', price: 34900, desc: 'Угловой, с механизмом', image: ImageUrl, category: 'Furniture', quantity: 3, discount: 25 },
        { id: 21, title: 'Шкаф-купе', price: 18900, desc: 'Зеркальные двери', image: ImageUrl, category: 'Furniture', quantity: 5, discount: 15 },
        { id: 22, title: 'Кровать двуспальная', price: 15900, desc: 'С ортопедическим основанием', image: ImageUrl, category: 'Furniture', quantity: 6, discount: 10 },
        { id: 23, title: 'Тумба прикроватная', price: 3200, desc: 'С двумя ящиками', image: ImageUrl, category: 'Furniture', quantity: 0, discount: 0 },
        { id: 24, title: 'Полка настенная', price: 1100, desc: 'Деревянная, 3 уровня', image: ImageUrl, category: 'Furniture', quantity: 25, discount: 5 },
        { id: 25, title: 'Кресло-качалка', price: 6700, desc: 'Для уютных вечеров', image: ImageUrl, category: 'Furniture', quantity: 8, discount: 10 },
        { id: 26, title: 'Яблоки Гренни Смит (1 кг)', price: 180, desc: 'Свежие, кисло-сладкие', image: ImageUrl, category: 'Food', quantity: 200, discount: 0 },
        { id: 27, title: 'Бананы (1 кг)', price: 120, desc: 'Спелые, сладкие', image: ImageUrl, category: 'Food', quantity: 150, discount: 5 },
        { id: 28, title: 'Молоко 3,2% (1 л)', price: 95, desc: 'Пастеризованное', image: ImageUrl, category: 'Food', quantity: 300, discount: 0 },
        { id: 29, title: 'Хлеб бородинский', price: 55, desc: 'Свежая выпечка', image: ImageUrl, category: 'Food', quantity: 80, discount: 0 },
        { id: 30, title: 'Сыр Российский (200 г)', price: 320, desc: 'Полутвёрдый', image: ImageUrl, category: 'Food', quantity: 70, discount: 10 },
        { id: 31, title: 'Кофе зерновой (250 г)', price: 890, desc: 'Арабика, средняя обжарка', image: ImageUrl, category: 'Food', quantity: 40, discount: 15 },
        { id: 32, title: 'Чай зелёный (100 пак.)', price: 450, desc: 'С жасмином', image: ImageUrl, category: 'Food', quantity: 55, discount: 0 },
        { id: 33, title: 'Шоколад молочный', price: 110, desc: 'Плитка 90 г', image: ImageUrl, category: 'Food', quantity: 0, discount: 5 },
        { id: 34, title: 'Макароны спагетти', price: 130, desc: 'Из твёрдых сортов', image: ImageUrl, category: 'Food', quantity: 90, discount: 0 },
        { id: 35, title: 'Масло оливковое (500 мл)', price: 640, desc: 'Extra Virgin', image: ImageUrl, category: 'Food', quantity: 35, discount: 10 },
        { id: 36, title: 'Смартфон 128 ГБ', price: 24990, desc: '6.5", 50 Мп, 5000 мАч', image: ImageUrl, category: 'Electronics', quantity: 15, discount: 15 },
        { id: 37, title: 'Ноутбук 15.6"', price: 54900, desc: '16 ГБ RAM, SSD 512 ГБ', image: ImageUrl, category: 'Electronics', quantity: 8, discount: 20 },
        { id: 38, title: 'Наушники беспроводные', price: 3990, desc: 'TWS, шумоподавление', image: ImageUrl, category: 'Electronics', quantity: 30, discount: 10 },
        { id: 39, title: 'Умные часы', price: 8990, desc: 'AMOLED, GPS, пульсометр', image: ImageUrl, category: 'Electronics', quantity: 0, discount: 25 },
        { id: 40, title: 'Планшет 10.1"', price: 17990, desc: '64 ГБ, Wi-Fi', image: ImageUrl, category: 'Electronics', quantity: 12, discount: 5 },
        { id: 41, title: 'Клавиатура механическая', price: 4500, desc: 'RGB-подсветка', image: ImageUrl, category: 'Electronics', quantity: 22, discount: 0 },
        { id: 42, title: 'Мышь беспроводная', price: 1290, desc: 'Беспроводная, 4000 DPI', image: ImageUrl, category: 'Electronics', quantity: 45, discount: 10 },
        { id: 43, title: 'Монитор 24"', price: 12900, desc: 'IPS, 75 Гц, Full HD', image: ImageUrl, category: 'Electronics', quantity: 0, discount: 15 },
        { id: 44, title: 'Пауэрбанк 20000 мАч', price: 2490, desc: 'Быстрая зарядка 22.5 Вт', image: ImageUrl, category: 'Electronics', quantity: 35, discount: 0 },
        { id: 45, title: 'Колонка Bluetooth', price: 3200, desc: 'Водозащита IPX7', image: ImageUrl, category: 'Electronics', quantity: 20, discount: 20 },
        { id: 46, title: 'Книга "Мастер и Маргарита"', price: 590, desc: 'М. Булгаков, твёрдый переплёт', image: ImageUrl, category: 'Books', quantity: 25, discount: 0 },
        { id: 47, title: 'Книга "1984"', price: 480, desc: 'Дж. Оруэлл, антиутопия', image: ImageUrl, category: 'Books', quantity: 0, discount: 10 },
        { id: 48, title: 'Книга "Гарри Поттер"', price: 750, desc: 'Дж. Роулинг, 1 часть', image: ImageUrl, category: 'Books', quantity: 40, discount: 5 },
        { id: 49, title: 'Атлас мира', price: 1200, desc: 'Большой иллюстрированный', image: ImageUrl, category: 'Books', quantity: 10, discount: 0 },
        { id: 50, title: 'Книга "Дюна"', price: 690, desc: 'Ф. Герберт, фантастика', image: ImageUrl, category: 'Books', quantity: 18, discount: 15 },
        { id: 51, title: 'Конструктор 500 деталей', price: 2400, desc: 'Для детей 6+', image: ImageUrl, category: 'Toys', quantity: 0, discount: 10 },
        { id: 52, title: 'Кукла мягкая', price: 1200, desc: 'Высота 40 см', image: ImageUrl, category: 'Toys', quantity: 15, discount: 0 },
        { id: 53, title: 'Машинка радиоуправляемая', price: 3500, desc: 'Скорость до 20 км/ч', image: ImageUrl, category: 'Toys', quantity: 12, discount: 20 },
        { id: 54, title: 'Пазл 1000 деталей', price: 890, desc: 'Пейзаж', image: ImageUrl, category: 'Toys', quantity: 0, discount: 0 },
        { id: 55, title: 'Мяч футбольный', price: 1400, desc: 'Размер 5, тренировочный', image: ImageUrl, category: 'Toys', quantity: 20, discount: 5 },
        { id: 56, title: 'Крем для лица увлажняющий', price: 990, desc: 'С гиалуроновой кислотой', image: ImageUrl, category: 'Beauty', quantity: 35, discount: 15 },
        { id: 57, title: 'Помада матовая', price: 650, desc: 'Оттенок нюд', image: ImageUrl, category: 'Beauty', quantity: 50, discount: 0 },
        { id: 58, title: 'Тушь для ресниц', price: 780, desc: 'Объём и длина', image: ImageUrl, category: 'Beauty', quantity: 0, discount: 10 },
        { id: 59, title: 'Парфюм женский 50 мл', price: 4500, desc: 'Цветочный аромат', image: ImageUrl, category: 'Beauty', quantity: 14, discount: 25 },
        { id: 60, title: 'Лак для ногтей', price: 290, desc: 'Долговременное покрытие', image: ImageUrl, category: 'Beauty', quantity: 60, discount: 0 },
        { id: 61, title: 'Масло для волос', price: 540, desc: 'Питание и блеск', image: ImageUrl, category: 'Beauty', quantity: 33, discount: 5 },
        { id: 62, title: 'Масло моторное 5W-30 (4 л)', price: 2900, desc: 'Синтетическое', image: ImageUrl, category: 'Auto', quantity: 18, discount: 10 },
        { id: 63, title: 'Щётки стеклоочистителя', price: 1200, desc: 'Комплект 2 шт.', image: ImageUrl, category: 'Auto', quantity: 25, discount: 0 },
        { id: 64, title: 'Ароматизатор в салон', price: 350, desc: 'Запах ванили', image: ImageUrl, category: 'Auto', quantity: 0, discount: 5 },
        { id: 65, title: 'Держатель для телефона', price: 690, desc: 'Магнитный, на дефлектор', image: ImageUrl, category: 'Auto', quantity: 0, discount: 15 },
        { id: 66, title: 'Компрессор автомобильный', price: 2100, desc: 'Насос 12В', image: ImageUrl, category: 'Auto', quantity: 0, discount: 20 },
        { id: 67, title: 'Чехлы на сиденья', price: 3500, desc: 'Универсальные, ткань', image: ImageUrl, category: 'Auto', quantity: 10, discount: 0 },
        { id: 68, title: 'Свеча ароматическая', price: 590, desc: 'Лаванда', image: ImageUrl, category: 'Home', quantity: 45, discount: 0 },
        { id: 69, title: 'Подушка декоративная', price: 890, desc: '45x45, велюр', image: ImageUrl, category: 'Home', quantity: 32, discount: 10 },
        { id: 70, title: 'Плед флисовый', price: 1600, desc: '150x200, тёплый', image: ImageUrl, category: 'Home', quantity: 20, discount: 15 },
        { id: 71, title: 'Ваза стеклянная', price: 750, desc: 'Высота 25 см', image: ImageUrl, category: 'Home', quantity: 0, discount: 0 },
        { id: 72, title: 'Набор посуды (12 пр.)', price: 3900, desc: 'Керамика, 4 персоны', image: ImageUrl, category: 'Home', quantity: 12, discount: 25 },
        { id: 73, title: 'Кофеварка капельная', price: 4500, desc: 'На 12 чашек', image: ImageUrl, category: 'Home', quantity: 14, discount: 10 },
        { id: 74, title: 'Пылесос вертикальный', price: 8900, desc: 'Беспроводной, 2 в 1', image: ImageUrl, category: 'Home', quantity: 10, discount: 20 },
        { id: 75, title: 'Утюг с парогенератором', price: 5400, desc: 'Мощность 2600 Вт', image: ImageUrl, category: 'Home', quantity: 11, discount: 5 },
        { id: 76, title: 'Кружка керамическая', price: 380, desc: '350 мл, принт', image: ImageUrl, category: 'Home', quantity: 0, discount: 0 },
        { id: 77, title: 'Штора блэкаут', price: 2200, desc: '200x260, тёмная', image: ImageUrl, category: 'Home', quantity: 0, discount: 10 },
        { id: 78, title: 'Коврик придверный', price: 690, desc: 'Влаговпитывающий', image: ImageUrl, category: 'Home', quantity: 28, discount: 0 },
        { id: 79, title: 'Зарядка USB-C 65 Вт', price: 2100, desc: 'GaN, компактная', image: ImageUrl, category: 'Electronics', quantity: 33, discount: 15 },
        { id: 80, title: 'Веб-камера Full HD', price: 3200, desc: 'Автофокус, микрофон', image: ImageUrl, category: 'Electronics', quantity: 19, discount: 0 },
        { id: 81, title: 'Рюкзак городской', price: 2500, desc: '20 л, водозащитный', image: ImageUrl, category: 'Clothing', quantity: 24, discount: 10 },
        { id: 82, title: 'Кепка бейсболка', price: 690, desc: 'Хлопок, регулируемая', image: ImageUrl, category: 'Clothing', quantity: 40, discount: 0 },
        { id: 83, title: 'Перчатки кожаные', price: 1800, desc: 'Зимние, размер M', image: ImageUrl, category: 'Clothing', quantity: 0, discount: 20 },
        { id: 84, title: 'Пижама женская', price: 2100, desc: 'Хлопок, размер S', image: ImageUrl, category: 'Clothing', quantity: 18, discount: 15 },
        { id: 85, title: 'Свитер с горлом', price: 2900, desc: 'Шерсть мериноса', image: ImageUrl, category: 'Clothing', quantity: 0, discount: 25 },
        { id: 86, title: 'Крем для рук', price: 320, desc: 'Питательный, 75 мл', image: ImageUrl, category: 'Beauty', quantity: 65, discount: 0 },
        { id: 87, title: 'Гель для умывания', price: 540, desc: 'Для проблемной кожи', image: ImageUrl, category: 'BathAccessories', quantity: 48, discount: 10 },
        { id: 88, title: 'Скраб для тела', price: 690, desc: 'Кофейный', image: ImageUrl, category: 'BathAccessories', quantity: 0, discount: 5 },
        { id: 89, title: 'Средство для бритья', price: 420, desc: 'С алоэ вера', image: ImageUrl, category: 'BathAccessories', quantity: 55, discount: 0 },
        { id: 90, title: 'Кондиционер для белья', price: 380, desc: '1 л, свежесть', image: ImageUrl, category: 'Home', quantity: 0, discount: 0 },
        { id: 91, title: 'Средство для мытья посуды', price: 290, desc: '500 мл, лимон', image: ImageUrl, category: 'Home', quantity: 88, discount: 5 },
        { id: 92, title: 'Мяч для йоги (фитбол)', price: 990, desc: 'Диаметр 65 см', image: ImageUrl, category: 'Sports', quantity: 20, discount: 10 },
        { id: 93, title: 'Эспандер кистевой', price: 250, desc: 'Регулируемая нагрузка', image: ImageUrl, category: 'Sports', quantity: 0, discount: 0 },
        { id: 94, title: 'Термос 1 л', price: 1500, desc: 'Нержавеющая сталь', image: ImageUrl, category: 'Home', quantity: 24, discount: 15 },
        { id: 95, title: 'Блендер погружной', price: 3200, desc: 'Мощность 800 Вт', image: ImageUrl, category: 'Home', quantity: 13, discount: 20 },
        { id: 96, title: 'Микроволновка 20 л', price: 6900, desc: 'Гриль, 700 Вт', image: ImageUrl, category: 'Home', quantity: 7, discount: 10 },
        { id: 97, title: 'Тостер на 2 ломтика', price: 2400, desc: '7 режимов', image: ImageUrl, category: 'Home', quantity: 0, discount: 0 },
        { id: 98, title: 'Электрочайник 1.7 л', price: 1900, desc: 'Сталь, автоотключение', image: ImageUrl, category: 'Home', quantity: 21, discount: 5 },
        { id: 99, title: 'Книга рецептов', price: 890, desc: 'Домашняя кухня, 200 рецептов', image: ImageUrl, category: 'Books', quantity: 17, discount: 0 },
        { id: 100, title: 'Настольная лампа LED', price: 1600, desc: 'Регулировка яркости, USB', image: ImageUrl, category: 'Home', quantity: 0, discount: 30 },
    ];
    private cart: ProductInterface[] = [];



    getProducts(): ProductInterface[] {
        return this.products;
    }
    getProductsFromCart(): ProductInterface[] {
        return this.cart;
    }
    getProductsByCategory(category: string): ProductInterface[] {
        return this.products.filter(p => p.category == category);
    }
    getProductsByTitle(title: string): ProductInterface[] {
        return this.products.filter(p => p.title.includes(title));
    }

    addProducts(title: string, category: string, price: number, desc: string, image: string, quantity: number, discount: 30): void {

        !this.categories.includes(category) ? this.categories.push(category) : null;
        const newProduct = {
            id: Date.now(),
            title: title,
            category: category,
            price: price,
            desc: desc,
            image: image ? image : ImageUrl,
            quantity: quantity ? quantity : 0,
            discount: discount ? discount : 0,
        };
        this.products.push(newProduct);
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(t => t.id !== id);
    }
    deleteProductFromCart(id: number): void {
        this.cart = this.cart.filter(t => t.id !== id);
    }

    addProductToCart(id: number): void {
        const product = this.products.find(p => p.id === id);
        if (product) {
            this.cart.push(product);
        }
    }


}



