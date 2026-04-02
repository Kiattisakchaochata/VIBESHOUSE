export type MenuItem = {
  id: string;
  category: string;
  nameTh: string;
  nameEn: string;
  price: number;
  image: string;
};

export type MenuCategory = {
  id: string;
  labelTh: string;
  labelEn: string;
};

export const menuCategories: MenuCategory[] = [
  { id: "pizza", labelTh: "พิซซ่า", labelEn: "Pizza" },
  { id: "noodle", labelTh: "เส้น", labelEn: "Noodle" },
  { id: "steak", labelTh: "สเต๊ก", labelEn: "Steak" },
  { id: "drinks", labelTh: "เครื่องดื่ม", labelEn: "Drinks" },
  { id: "snacks", labelTh: "ของทานเล่น", labelEn: "Snacks" },
  { id: "rice", labelTh: "ข้าว", labelEn: "Rice" },
  { id: "yum", labelTh: "ยำ", labelEn: "Yum" },
  { id: "fried", labelTh: "ทอด", labelEn: "Fried" },
];

export const menuItems: MenuItem[] = [
  {
    id: "pizza-1",
    category: "pizza",
    nameTh: "พิซซ่าฮาวายเอี้ยน",
    nameEn: "Hawaiian Pizza",
    price: 259,
    image: "/images/menu/pizza-1.jpg",
  },
  {
    id: "pizza-2",
    category: "pizza",
    nameTh: "พิซซ่าซีฟู้ด",
    nameEn: "Seafood Pizza",
    price: 289,
    image: "/images/menu/pizza-2.jpg",
  },
  {
    id: "pizza-3",
    category: "pizza",
    nameTh: "พิซซ่าชีส",
    nameEn: "Cheese Pizza",
    price: 229,
    image: "/images/menu/pizza-3.jpg",
  },
  {
    id: "pizza-4",
    category: "pizza",
    nameTh: "พิซซ่าไส้กรอก",
    nameEn: "Sausage Pizza",
    price: 249,
    image: "/images/menu/pizza-4.jpg",
  },
  {
    id: "pizza-5",
    category: "pizza",
    nameTh: "พิซซ่าไส้กรอก",
    nameEn: "Sausage Pizza",
    price: 249,
    image: "/images/menu/pizza-5.jpg",
  },
  
  {
    id: "pizza-6",
    category: "pizza",
    nameTh: "พิซซ่าไส้กรอก",
    nameEn: "Sausage Pizza",
    price: 249,
    image: "/images/menu/pizza-6.jpg",
  },
  {
    id: "pizza-7",
    category: "pizza",
    nameTh: "พิซซ่าไส้กรอก",
    nameEn: "Sausage Pizza",
    price: 249,
    image: "/images/menu/pizza-7.jpg",
  },
  {
    id: "pizza-8",
    category: "pizza",
    nameTh: "พิซซ่าไส้กรอก",
    nameEn: "Sausage Pizza",
    price: 249,
    image: "/images/menu/pizza-8.jpg",
  },

  {
    id: "noodle-1",
    category: "noodle",
    nameTh: "สปาเกตตีเบคอนพริกแห้ง",
    nameEn: "Spaghetti with Bacon & Dried Chili",
    price: 179,
    image: "/images/menu/noodle-1.jpg",
  },

  {
    id: "noodle-2",
    category: "noodle",
    nameTh: "สปาเกตตีเบคอนพริกแห้ง",
    nameEn: "Spaghetti with Bacon & Dried Chili",
    price: 179,
    image: "/images/menu/noodle-2.jpg",
  },
{
    id: "noodle-3",
    category: "noodle",
    nameTh: "สปาเกตตีเบคอนพริกแห้ง",
    nameEn: "Spaghetti with Bacon & Dried Chili",
    price: 179,
    image: "/images/menu/noodle-3.jpg",
  },

{
    id: "noodle-4",
    category: "noodle",
    nameTh: "สปาเกตตีเบคอนพริกแห้ง",
    nameEn: "Spaghetti with Bacon & Dried Chili",
    price: 179,
    image: "/images/menu/noodle-4.jpg",
  },

  {
    id: "steak-1",
    category: "steak",
    nameTh: "สเต๊กหมูพริกไทยดำ",
    nameEn: "Black Pepper Pork Steak",
    price: 249,
    image: "/images/menu/steak-1.jpg",
  },

{
    id: "steak-2",
    category: "steak",
    nameTh: "สเต๊กหมูพริกไทยดำ",
    nameEn: "Black Pepper Pork Steak",
    price: 249,
    image: "/images/menu/steak-2.jpg",
  },

{
    id: "steak-3",
    category: "steak",
    nameTh: "สเต๊กหมูพริกไทยดำ",
    nameEn: "Black Pepper Pork Steak",
    price: 249,
    image: "/images/menu/steak-3.jpg",
  },

  {
    id: "steak-4",
    category: "steak",
    nameTh: "สเต๊กหมูพริกไทยดำ",
    nameEn: "Black Pepper Pork Steak",
    price: 249,
    image: "/images/menu/steak-4.jpg",
  },

  {
    id: "drinks-1",
    category: "drinks",
    nameTh: "เบียร์สด",
    nameEn: "Draft Beer",
    price: 129,
    image: "/images/menu/drinks-1.jpg",
  },

{
    id: "drinks-2",
    category: "drinks",
    nameTh: "เบียร์สด",
    nameEn: "Draft Beer",
    price: 129,
    image: "/images/menu/drinks-2.jpg",
  },


  {
    id: "drinks-3",
    category: "drinks",
    nameTh: "เบียร์สด",
    nameEn: "Draft Beer",
    price: 129,
    image: "/images/menu/drinks-3.jpg",
  },

  {
    id: "drinks-4",
    category: "drinks",
    nameTh: "เบียร์สด",
    nameEn: "Draft Beer",
    price: 129,
    image: "/images/menu/drinks-4.jpg",
  },

  {
    id: "snacks-1",
    category: "snacks",
    nameTh: "เฟรนช์ฟรายส์",
    nameEn: "French Fries",
    price: 99,
    image: "/images/menu/snacks-1.jpg",
  },

{
    id: "snacks-2",
    category: "snacks",
    nameTh: "เฟรนช์ฟรายส์",
    nameEn: "French Fries",
    price: 99,
    image: "/images/menu/snacks-2.jpg",
  },

  {
    id: "snacks-3",
    category: "snacks",
    nameTh: "เฟรนช์ฟรายส์",
    nameEn: "French Fries",
    price: 99,
    image: "/images/menu/snacks-3.jpg",
  },

  {
    id: "snacks-4",
    category: "snacks",
    nameTh: "เฟรนช์ฟรายส์",
    nameEn: "French Fries",
    price: 99,
    image: "/images/menu/snacks-4.jpg",
  },

  {
    id: "rice-1",
    category: "rice",
    nameTh: "ข้าวผัดกุ้ง",
    nameEn: "Shrimp Fried Rice",
    price: 149,
    image: "/images/menu/rice-1.jpg",
  },

  {
    id: "rice-2",
    category: "rice",
    nameTh: "ข้าวผัดกุ้ง",
    nameEn: "Shrimp Fried Rice",
    price: 149,
    image: "/images/menu/rice-2.jpg",
  },

  {
    id: "rice-3",
    category: "rice",
    nameTh: "ข้าวผัดกุ้ง",
    nameEn: "Shrimp Fried Rice",
    price: 149,
    image: "/images/menu/rice-3.jpg",
  },

  {
    id: "rice-4",
    category: "rice",
    nameTh: "ข้าวผัดกุ้ง",
    nameEn: "Shrimp Fried Rice",
    price: 149,
    image: "/images/menu/rice-4.jpg",
  },

  {
    id: "yum-1",
    category: "yum",
    nameTh: "ยำวุ้นเส้นทะเล",
    nameEn: "Spicy Seafood Glass Noodle Salad",
    price: 169,
    image: "/images/menu/yum-1.jpg",
  },
  {
    id: "fried-1",
    category: "fried",
    nameTh: "ไก่ทอดซอสเกาหลี",
    nameEn: "Korean Fried Chicken",
    price: 189,
    image: "/images/menu/fried-1.jpg",
  },
];