export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image?: string;
  blurb?: string;
  description?: string;
  price?: string;
};

export const PRODUCT_CATEGORIES = [
  { name: "Nimble Drones", slug: "nimble-drones" },
  { name: "Educational Robots", slug: "educational" },
  { name: "Industrial Robots", slug: "industrial" },
  { name: "Service Robots", slug: "service" },
  { name: "Specialty Robots", slug: "specialty" },
  { name: "Accessories", slug: "accessories" },
] as const;

export const PRODUCTS: Product[] = [
  { id: "1", name: "Humanoid G1 (Base/EDU)", slug: "humanoid-g1-base-edu", category: "Educational", categorySlug: "educational", image: "/assets/products_shop_images/Humanoid_G1__BaseEDU__1.png", blurb: "Responsive humanoid kit with a rich sensor stack for education and R&D." },
  { id: "2", name: "Humanoid H1", slug: "humanoid-h1", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Humanoid_H1_1.png", blurb: "High-agility humanoid designed for demanding research workflows." },
  { id: "3", name: "Robodog Go2", slug: "robodog-go2-go2-w", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Robodog__Go2Go2-W__1.png", blurb: "Next-gen quadruped mobility with upgraded perception and range." },
  { id: "21", name: "Robodog AlienGo", slug: "robodog-aliengo", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Robodog_AlienGo_1.png", blurb: "Versatile quadruped robot for research and development." },
  { id: "22", name: "Robodog B2", slug: "robodog-b2", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Robodog_B2_1.png", blurb: "Industrial-grade quadruped for demanding applications." },
  { id: "4", name: "Nimble Base Kit", slug: "nimble-base-kit", category: "Nimble Drones", categorySlug: "nimble-drones", image: "/assets/products_shop_images/flapper-nimble-base-kit_1.png", blurb: "Biomimetic micro-drone platform with lighthouse-ready flight control." },
  { id: "5", name: "Delivery Robot (closed type)", slug: "delivery-robot-closed-type", category: "Service", categorySlug: "service", image: "/assets/products_shop_images/Delivery_Robot__closed_type__1.png", blurb: "Secure, autonomous indoor delivery with reliable navigation." },
  { id: "6", name: "Dual Arm Compound Robot", slug: "dual-arm-compound-robot", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/Dual_Arm_Compound_Robot.png", blurb: "Coordinated dual-arm manipulation for adaptive industrial tasks." },
  { id: "7", name: "Smart Forklift", slug: "smart-forklift", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/Smart_Forklift.png", blurb: "Autonomous pallet handling with configurable payload and safety." },
  { id: "8", name: "Mars Smartbot", slug: "mars-smartbot", category: "Service", categorySlug: "service", image: "/assets/products_shop_images/Mars_Smartbot_1.png", blurb: "Multi-modal service robot with expressive UI and modular payloads." },
  { id: "9", name: "Humanoid R1", slug: "humanoid-r1", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Humanoid_R1_1.png", blurb: "Advanced humanoid platform for research and development." },
  { id: "10", name: "Robodog Go1", slug: "robodog-go1", category: "Specialty", categorySlug: "specialty", image: "/assets/products_shop_images/Robodog_Go1_1.png", blurb: "Quadruped robot for research and exploration." },
  { id: "11", name: "Hotel Robot", slug: "hotel-robot", category: "Service", categorySlug: "service", image: "/assets/products_shop_images/Hotel_Robot_1.png", blurb: "Hospitality robot for guest services." },
  { id: "12", name: "Healthcare Robot", slug: "healthcare-robot", category: "Service", categorySlug: "service", image: "/assets/products_shop_images/Healthcare_Robot_1.png", blurb: "Medical assistance and care robot." },
  { id: "13", name: "Factory Delivery Robot", slug: "factory-delivery-robot", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/Factory_Delivery_Robot_1.png", blurb: "Autonomous factory logistics robot." },
  { id: "14", name: "L Lift AMR", slug: "l-lift-amr", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/L_Lift_AMR_1.png", blurb: "Automated material handling solution." },
  { id: "15", name: "Heavy Load AMR", slug: "heavy-load-amr", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/Heavy_Load_AMR_1.png", blurb: "Heavy-duty autonomous mobile robot." },
  { id: "16", name: "Sub Lift Robot", slug: "sub-lift-robot", category: "Industrial", categorySlug: "industrial", image: "/assets/products_shop_images/Sub_Lift_Robot_1.png", blurb: "Submarine-style lifting robot." },
  { id: "17", name: "Mini Pi Bipedal Robot", slug: "mini-pi-bipedal-robot", category: "Educational", categorySlug: "educational", image: "/assets/products_shop_images/Mini_Pi_Bipedal_Robot_1.png", blurb: "Compact bipedal robot for learning." },
  { id: "18", name: "Humanoid Oli", slug: "humanoid-oli", category: "Educational", categorySlug: "educational", image: "/assets/products_shop_images/Humanoid_Oli_1.png", blurb: "Educational humanoid platform." },
  { id: "19", name: "Humanoid Mini Hi", slug: "humanoid-mini-hi", category: "Educational", categorySlug: "educational", image: "/assets/products_shop_images/Humanoid_Mini_Hi_1.png", blurb: "Compact humanoid for labs." },
  { id: "20", name: "Gripper (RGI-100-30)", slug: "gripper-rgi-100-30", category: "Accessories", categorySlug: "accessories", image: "/assets/products_shop_images/Gripper_RGI_100_30_1.png", blurb: "High-precision robotic gripper." },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}
