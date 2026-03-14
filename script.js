// Collection of healthy meal ideas for the interactive generator.
const mealIdeas = [
  "Grilled chicken quinoa bowl with cucumber, tomato, and lemon yogurt sauce",
  "Veggie stir-fry with tofu, broccoli, bell peppers, and brown rice",
  "Lentil soup with spinach and a side of whole-grain toast",
  "Baked salmon with roasted sweet potatoes and green beans",
  "Chickpea avocado wrap with mixed greens and tahini dressing",
  "Greek yogurt parfait with berries, oats, and chia seeds",
  "Turkey and hummus lettuce wraps with carrot sticks",
  "Mushroom and spinach omelet with a side salad"
];

// Grabs button and output elements from the page.
const mealBtn = document.getElementById("mealBtn");
const mealOutput = document.getElementById("mealOutput");

// Generates and displays a random meal idea when the button is clicked.
mealBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * mealIdeas.length);
  mealOutput.textContent = mealIdeas[randomIndex];
});
