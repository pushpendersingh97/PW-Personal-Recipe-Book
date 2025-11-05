"use client";

import { Recipe } from "@/types/recipe";
import { useRouter } from "next/navigation";
import FavoriteButton from "./FavoriteButton";
import RecipeMeta from "./RecipeMeta";

interface RecipeCardProps {
  recipe: Recipe;
  viewMode: "list" | "grid";
}

export default function RecipeCard({ recipe, viewMode }: RecipeCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/recipe/${recipe.id}`);
  };

  if (viewMode === "list") {
    return (
      <div
        onClick={handleCardClick}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:shadow-xl hover:scale-[1.02] mb-4"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 h-48">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-gray-800">
                {recipe.name}
              </h3>
              <FavoriteButton recipeId={recipe.id} size="md" />
            </div>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <RecipeMeta recipe={recipe} size="sm" showCuisine={true} />
          </div>
        </div>
      </div>
    );
  }

  // Grid view with flip card
  return (
    <div onClick={handleCardClick} className="flip-card h-80 cursor-pointer">
      <div className="flip-card-inner h-full">
        {/* Front of card */}
        <div className="flip-card-front bg-white rounded-lg shadow-md overflow-hidden h-full">
          <div className="relative h-full">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                  {recipe.name}
                </h3>
                <div className="flex-shrink-0 ml-2">
                  <FavoriteButton recipeId={recipe.id} size="md" />
                </div>
              </div>
              <RecipeMeta recipe={recipe} size="sm" showCuisine={false} />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-md overflow-hidden h-full flex items-center justify-center p-4">
          <div className="text-white text-center">
            <p className="text-sm line-clamp-6">{recipe.description}</p>
            <div className="mt-4 text-xs opacity-90 flex flex-col items-center gap-2">
              <button
                className="group flex items-center gap-1 text-white text-xs font-medium relative focus:outline-none"
                tabIndex={-1}
                aria-label="View full recipe"
                style={{ pointerEvents: "none" }}
              >
                <span
                  className="underline decoration-white decoration-2 underline-offset-4 group-hover:decoration-4 transition-all"
                  style={{ pointerEvents: "auto" }}
                >
                  View Recipe
                </span>
                <svg
                  className="ml-1 w-4 h-4 stroke-white group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h8m0 0l-3-3m3 3l-3 3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
