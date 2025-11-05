# Personal Recipe Book

A modern, responsive web application for browsing and discovering recipes from around the world. Built with Next.js 14 and Tailwind CSS.

## Features

- **Home Screen**: Beautiful landing page with background image, login functionality, and cuisine category navigation
- **Recipe Dashboard**: Browse all recipes with advanced search and filtering options
- **Search & Filter**: 
  - Search recipes by name or description
  - Filter by meal type (breakfast, lunch, dinner, dessert, snack)
  - Filter by cooking time (under 30 min, 30-60 min, over 60 min)
- **Multiple View Modes**:
  - **Grid View**: Compact tile layout with flip-on-hover animation
  - **List View**: Detailed vertical layout with full recipe information
- **Responsive Design**: 
  - Mobile: List view only
  - Tablet: Both list and grid views
  - Desktop: Toggle between list and grid views
- **Favorites**: Save your favorite recipes (stored in local storage)
- **Category Pages**: Browse recipes by cuisine (Italian, Indian, Chinese, Thai, Mexican, American)
- **Recipe Details**: Full recipe view with ingredients, steps, and nutritional information
- **Pagination**: Efficient browsing of large recipe collections

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── category/[cuisine]/    # Cuisine category pages
│   ├── dashboard/              # Main recipe dashboard
│   ├── recipe/[id]/           # Individual recipe detail pages
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   └── RecipeCard.tsx         # Reusable recipe card component
├── data/
│   └── recipes.json           # Sample recipe data
├── lib/
│   └── utils.ts               # Utility functions (favorites, filtering)
└── types/
    └── recipe.ts              # TypeScript type definitions
```

## Recipe Data Structure

Each recipe follows this JSON structure:

```json
{
  "id": "0001",
  "name": "Recipe Name",
  "image": "image-url",
  "ingredients": ["ingredient1", "ingredient2"],
  "ingredientsCount": "2",
  "steps": ["step1", "step2"],
  "time": "30",
  "difficulty": "Medium",
  "type": "dinner",
  "cuisine": "Italian",
  "description": "Recipe description",
  "nutritionBenefits": "Nutritional benefits"
}
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management and side effects

## Features in Detail

### Flip Card Animation
In grid view, hovering over a recipe card flips it to reveal the recipe description on the back, creating an interactive browsing experience.

### Favorites System
Favorites are stored in browser localStorage, allowing users to save recipes across sessions without a backend.

### Responsive Breakpoints
- Mobile (< 768px): List view only
- Tablet (768px - 1024px): Both views available
- Desktop (> 1024px): Full functionality with view toggle

## Sample Recipes

The application comes pre-loaded with 16 sample recipes across 6 cuisines:
- Italian (Spaghetti Carbonara, Margherita Pizza, Tiramisu)
- Indian (Chicken Tikka Masala, Butter Chicken, Gulab Jamun)
- Chinese (Kung Pao Chicken, Sweet and Sour Pork)
- Thai (Pad Thai, Tom Kha Gai)
- Mexican (Chicken Fajitas, Guacamole)
- American (Eggs Benedict, French Toast, Chocolate Chip Cookies, Caesar Salad)

## License

This project is open source and available for personal use.

