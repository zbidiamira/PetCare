// Product data for PetCare Market

export const products = [
  // Dog Products
  { id: 1, name: 'Premium Dog Food - Chicken & Rice', price: 49.99, originalPrice: 59.99, rating: 4.8, reviews: 234, image: '🦴', category: 'Dogs', subcategory: 'Food', badge: 'Best Seller', description: 'High-quality protein-rich dog food made with real chicken and wholesome rice. Perfect for adult dogs of all breeds.', inStock: true, quantity: 150 },
  { id: 2, name: 'Dog Grooming Kit Pro', price: 45.99, originalPrice: null, rating: 4.9, reviews: 312, image: '✨', category: 'Dogs', subcategory: 'Grooming', badge: 'Top Rated', description: 'Complete grooming kit with brushes, nail clippers, and shampoo. Keep your furry friend looking their best!', inStock: true, quantity: 89 },
  { id: 3, name: 'Interactive Dog Ball', price: 24.99, originalPrice: 29.99, rating: 4.7, reviews: 156, image: '⚽', category: 'Dogs', subcategory: 'Toys', badge: 'Sale', description: 'Self-rolling smart ball that keeps your dog entertained for hours. Durable and waterproof design.', inStock: true, quantity: 200 },
  { id: 4, name: 'Orthopedic Dog Bed - Large', price: 89.99, originalPrice: 109.99, rating: 4.9, reviews: 445, image: '🛏️', category: 'Dogs', subcategory: 'Beds', badge: 'Popular', description: 'Memory foam dog bed with removable, washable cover. Perfect for senior dogs or dogs with joint issues.', inStock: true, quantity: 67 },
  { id: 5, name: 'Retractable Dog Leash', price: 19.99, originalPrice: null, rating: 4.6, reviews: 178, image: '🦮', category: 'Dogs', subcategory: 'Accessories', badge: null, description: '16ft retractable leash with ergonomic handle and one-button brake system. Strong enough for large breeds.', inStock: true, quantity: 320 },
  { id: 6, name: 'Dental Chew Treats (30 Pack)', price: 15.99, originalPrice: 19.99, rating: 4.8, reviews: 267, image: '🦷', category: 'Dogs', subcategory: 'Treats', badge: 'Sale', description: 'Vet-recommended dental chews that clean teeth and freshen breath while your dog enjoys a tasty treat.', inStock: true, quantity: 500 },
  { id: 7, name: 'Waterproof Dog Jacket', price: 34.99, originalPrice: null, rating: 4.7, reviews: 134, image: '🧥', category: 'Dogs', subcategory: 'Clothing', badge: 'New', description: 'Keep your pup warm and dry with this stylish, waterproof jacket. Reflective strips for night walks.', inStock: true, quantity: 145 },
  { id: 8, name: 'Smart Dog Feeder', price: 129.99, originalPrice: 149.99, rating: 4.8, reviews: 89, image: '🤖', category: 'Dogs', subcategory: 'Tech', badge: 'Best Seller', description: 'Automatic pet feeder with app control, portion control, and scheduled feeding. Never miss a meal!', inStock: true, quantity: 45 },

  // Cat Products
  { id: 9, name: 'Cozy Cat Bed - Donut Style', price: 35.99, originalPrice: null, rating: 4.9, reviews: 189, image: '🛏️', category: 'Cats', subcategory: 'Beds', badge: 'New', description: 'Ultra-soft, self-warming donut bed that provides security and comfort for anxious cats.', inStock: true, quantity: 230 },
  { id: 10, name: 'Premium Cat Food - Salmon', price: 39.99, originalPrice: 45.99, rating: 4.8, reviews: 345, image: '🐟', category: 'Cats', subcategory: 'Food', badge: 'Best Seller', description: 'Grain-free cat food with real salmon as the first ingredient. Rich in omega fatty acids.', inStock: true, quantity: 180 },
  { id: 11, name: 'Multi-Level Cat Tree', price: 79.99, originalPrice: 99.99, rating: 4.7, reviews: 267, image: '🌳', category: 'Cats', subcategory: 'Furniture', badge: 'Popular', description: '5-level cat tree with scratching posts, hammock, and cozy hideaway. Perfect for multiple cats!', inStock: true, quantity: 56 },
  { id: 12, name: 'Interactive Laser Toy', price: 18.99, originalPrice: null, rating: 4.6, reviews: 198, image: '🔴', category: 'Cats', subcategory: 'Toys', badge: null, description: 'Automatic laser pointer with random patterns to keep your cat active and entertained.', inStock: true, quantity: 340 },
  { id: 13, name: 'Self-Cleaning Litter Box', price: 199.99, originalPrice: 249.99, rating: 4.9, reviews: 156, image: '🚽', category: 'Cats', subcategory: 'Litter', badge: 'Top Rated', description: 'Revolutionary self-cleaning litter box with odor control and waste drawer. Connects to your phone!', inStock: true, quantity: 34 },
  { id: 14, name: 'Catnip Toys Set (5 Pack)', price: 12.99, originalPrice: null, rating: 4.8, reviews: 423, image: '🌿', category: 'Cats', subcategory: 'Toys', badge: null, description: 'Assorted catnip toys including mice, balls, and fish shapes. 100% organic catnip inside.', inStock: true, quantity: 600 },
  { id: 15, name: 'Cat Grooming Brush', price: 14.99, originalPrice: 17.99, rating: 4.7, reviews: 234, image: '🪮', category: 'Cats', subcategory: 'Grooming', badge: 'Sale', description: 'Self-cleaning slicker brush that removes loose fur and prevents matting. Gentle on skin.', inStock: true, quantity: 280 },
  { id: 16, name: 'Window Cat Perch', price: 29.99, originalPrice: null, rating: 4.8, reviews: 167, image: '🪟', category: 'Cats', subcategory: 'Furniture', badge: 'New', description: 'Suction cup window perch that holds up to 40 lbs. Let your cat enjoy bird watching!', inStock: true, quantity: 190 },

  // Bird Products
  { id: 17, name: 'Interactive Bird Toy Set', price: 15.99, originalPrice: 19.99, rating: 4.7, reviews: 98, image: '🎯', category: 'Birds', subcategory: 'Toys', badge: 'Sale', description: 'Colorful bird toys with bells, mirrors, and chewing materials. Keeps birds mentally stimulated.', inStock: true, quantity: 156 },
  { id: 18, name: 'Premium Bird Seed Mix', price: 24.99, originalPrice: null, rating: 4.8, reviews: 187, image: '🌾', category: 'Birds', subcategory: 'Food', badge: 'Best Seller', description: 'Nutritious blend of seeds, dried fruits, and nuts. Suitable for parrots, cockatiels, and more.', inStock: true, quantity: 234 },
  { id: 19, name: 'Spacious Bird Cage', price: 89.99, originalPrice: 109.99, rating: 4.6, reviews: 78, image: '🏠', category: 'Birds', subcategory: 'Cages', badge: 'Popular', description: 'Large flight cage with multiple perches, feeding cups, and easy-clean bottom tray.', inStock: true, quantity: 45 },
  { id: 20, name: 'Bird Bath & Fountain', price: 22.99, originalPrice: null, rating: 4.7, reviews: 134, image: '💧', category: 'Birds', subcategory: 'Accessories', badge: null, description: 'Automatic bird bath with gentle fountain. Encourages healthy bathing habits.', inStock: true, quantity: 120 },

  // Fish Products
  { id: 21, name: 'Aquarium Filter Pro', price: 89.99, originalPrice: null, rating: 4.6, reviews: 156, image: '🌊', category: 'Fish', subcategory: 'Equipment', badge: null, description: 'High-performance canister filter for tanks up to 75 gallons. Ultra-quiet operation.', inStock: true, quantity: 67 },
  { id: 22, name: 'LED Aquarium Light', price: 45.99, originalPrice: 54.99, rating: 4.8, reviews: 212, image: '💡', category: 'Fish', subcategory: 'Lighting', badge: 'Sale', description: 'Full spectrum LED light with sunrise/sunset simulation. Promotes plant and coral growth.', inStock: true, quantity: 89 },
  { id: 23, name: 'Premium Fish Food Flakes', price: 12.99, originalPrice: null, rating: 4.7, reviews: 345, image: '🐠', category: 'Fish', subcategory: 'Food', badge: null, description: 'Color-enhancing fish food flakes for tropical freshwater fish. High protein formula.', inStock: true, quantity: 400 },
  { id: 24, name: 'Aquarium Decoration Set', price: 34.99, originalPrice: 39.99, rating: 4.5, reviews: 167, image: '🏝️', category: 'Fish', subcategory: 'Decor', badge: 'New', description: 'Complete decoration set with plants, rocks, and hideaway cave. Creates a natural habitat.', inStock: true, quantity: 178 },
  { id: 25, name: 'Water Testing Kit', price: 19.99, originalPrice: null, rating: 4.9, reviews: 234, image: '🧪', category: 'Fish', subcategory: 'Maintenance', badge: 'Top Rated', description: 'Complete water testing kit for pH, ammonia, nitrite, and nitrate. Essential for healthy fish!', inStock: true, quantity: 300 },

  // Small Pets Products
  { id: 26, name: 'Hamster Exercise Wheel', price: 24.99, originalPrice: 29.99, rating: 4.8, reviews: 78, image: '🎡', category: 'Small Pets', subcategory: 'Exercise', badge: 'Popular', description: 'Silent spinner wheel with solid running surface. Safe for hamsters and gerbils.', inStock: true, quantity: 210 },
  { id: 27, name: 'Guinea Pig Hay Feeder', price: 18.99, originalPrice: null, rating: 4.7, reviews: 123, image: '🌾', category: 'Small Pets', subcategory: 'Feeders', badge: null, description: 'Mess-free hay feeder that keeps hay fresh and clean. Easy to refill and mount.', inStock: true, quantity: 167 },
  { id: 28, name: 'Rabbit Hutch Indoor', price: 119.99, originalPrice: 139.99, rating: 4.8, reviews: 89, image: '🏡', category: 'Small Pets', subcategory: 'Housing', badge: 'Sale', description: 'Spacious indoor rabbit hutch with play area. Includes ramp and hideaway space.', inStock: true, quantity: 34 },
  { id: 29, name: 'Small Pet Bedding (10L)', price: 14.99, originalPrice: null, rating: 4.6, reviews: 267, image: '🛏️', category: 'Small Pets', subcategory: 'Bedding', badge: null, description: 'Paper-based, dust-free bedding. Super absorbent and odor controlling.', inStock: true, quantity: 450 },
  { id: 30, name: 'Hamster Tunnel System', price: 32.99, originalPrice: 37.99, rating: 4.8, reviews: 145, image: '🕳️', category: 'Small Pets', subcategory: 'Toys', badge: 'New', description: 'Expandable tunnel system with multiple configurations. Hours of exploration fun!', inStock: true, quantity: 134 },

  // Reptiles Products
  { id: 31, name: 'Reptile Heat Lamp', price: 29.99, originalPrice: null, rating: 4.7, reviews: 156, image: '☀️', category: 'Reptiles', subcategory: 'Heating', badge: 'Best Seller', description: 'Ceramic heat emitter for reptile terrariums. 24-hour heat source without light.', inStock: true, quantity: 189 },
  { id: 32, name: 'Terrarium Starter Kit', price: 149.99, originalPrice: 179.99, rating: 4.8, reviews: 67, image: '🦎', category: 'Reptiles', subcategory: 'Habitats', badge: 'Popular', description: 'Complete 20-gallon terrarium kit with substrate, decor, and lighting. Perfect for beginners!', inStock: true, quantity: 28 },
  { id: 33, name: 'Reptile Calcium Supplement', price: 9.99, originalPrice: null, rating: 4.9, reviews: 234, image: '💊', category: 'Reptiles', subcategory: 'Health', badge: 'Top Rated', description: 'Essential calcium powder with vitamin D3. Prevents metabolic bone disease.', inStock: true, quantity: 380 },
  { id: 34, name: 'Live Crickets Food (100ct)', price: 8.99, originalPrice: null, rating: 4.5, reviews: 312, image: '🦗', category: 'Reptiles', subcategory: 'Food', badge: null, description: 'Live gut-loaded crickets for reptiles and amphibians. Various sizes available.', inStock: true, quantity: 200 },
];

export const categories = [
  { id: 'dogs', name: 'Dogs', icon: '🐕', color: '#f97316', bgColor: '#fff7ed', count: '2,450+', description: 'Food, toys, beds, grooming & more' },
  { id: 'cats', name: 'Cats', icon: '🐈', color: '#a855f7', bgColor: '#faf5ff', count: '1,890+', description: 'Everything for your feline friend' },
  { id: 'birds', name: 'Birds', icon: '🦜', color: '#22c55e', bgColor: '#f0fdf4', count: '560+', description: 'Cages, food, toys & accessories' },
  { id: 'fish', name: 'Fish', icon: '🐠', color: '#3b82f6', bgColor: '#eff6ff', count: '780+', description: 'Aquariums, filters & fish food' },
  { id: 'small-pets', name: 'Small Pets', icon: '🐹', color: '#ec4899', bgColor: '#fdf2f8', count: '420+', description: 'Hamsters, rabbits, guinea pigs' },
  { id: 'reptiles', name: 'Reptiles', icon: '🦎', color: '#14b8a6', bgColor: '#f0fdfa', count: '180+', description: 'Terrariums, heating & food' },
];

export const subcategories = {
  dogs: ['All', 'Food', 'Toys', 'Beds', 'Grooming', 'Accessories', 'Treats', 'Clothing', 'Tech'],
  cats: ['All', 'Food', 'Toys', 'Beds', 'Furniture', 'Grooming', 'Litter'],
  birds: ['All', 'Food', 'Toys', 'Cages', 'Accessories'],
  fish: ['All', 'Food', 'Equipment', 'Lighting', 'Decor', 'Maintenance'],
  'small-pets': ['All', 'Food', 'Housing', 'Bedding', 'Toys', 'Exercise', 'Feeders'],
  reptiles: ['All', 'Food', 'Habitats', 'Heating', 'Health'],
};

export const specialDeals = [
  { title: 'First Order Discount', description: '20% off your first purchase', code: 'WELCOME20', icon: '🎉' },
  { title: 'Free Shipping', description: 'On orders over $50', code: null, icon: '🚚' },
  { title: 'Subscribe & Save', description: 'Up to 35% on auto-deliveries', code: null, icon: '💝' },
];
