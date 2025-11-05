"use client";

import { useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/Header";
import FavoriteButton from "@/components/FavoriteButton";
import RecipeMeta from "@/components/RecipeMeta";
import LoadingSpinner from "@/components/LoadingSpinner";
import EmptyState from "@/components/EmptyState";
import { useRecipes } from "@/hooks/useRecipes";

export default function RecipeDetail() {
  const router = useRouter();
  const params = useParams();
  const { recipes, loading, error } = useRecipes();

  const recipe = useMemo(() => {
    return recipes.find((r) => r.id === params.id);
  }, [recipes, params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          title="Recipe Details"
          leftButton={{ label: "← Back", onClick: () => router.back() }}
        />
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header
          title="Recipe Details"
          leftButton={{ label: "← Back", onClick: () => router.back() }}
        />
        <EmptyState
          message={error || "Recipe not found"}
          actionLabel="Go Back"
          onAction={() => router.back()}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Recipe Details"
        leftButton={{ label: "← Back", onClick: () => router.back() }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Recipe Image */}
          <div className="relative h-64 md:h-96">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <FavoriteButton
                recipeId={recipe.id}
                size="lg"
                className="bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition"
              />
            </div>
          </div>

          {/* Recipe Content */}
          <div className="p-6 md:p-8">
            {/* Title and Meta Info */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {recipe.name}
              </h1>
              <div className="text-gray-600">
                <RecipeMeta
                  recipe={recipe}
                  size="lg"
                  showCuisine={true}
                  showIngredientsCount={true}
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-2">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cooking Steps */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="pl-2 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Nutrition Benefits */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Nutrition Benefits
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {recipe.nutritionBenefits}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
