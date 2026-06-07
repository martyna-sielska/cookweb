/* =============================================
   COOKWEB – SCRIPT
   ============================================= */

const ui = {
  backBtn:     'Back to Recipes',
  ingredients: 'Ingredients',
  instructions:'Instructions',
  print:       'Print',
  servings:    'servings',
  viewRecipe:  'View Recipe',
};

const recipes = {
  1: {
    id:1,
    title:"Cinnamon Rolls",
    image:"assets/cinnamonroll.png",
    time:"30 min", riseTime:"1h 30 min", bakeTime:"20 min", servings:24,
    description:"Cinnamon rolls swirled with cinnamon and sugar.",
    ingredientGroups:[
      { name:"Leaven", items:[
        "10g dried yeast",
        "2 tbsp all-purpose flour (30g)",
        "2 tbsp sugar",
        "5 tbsp warm milk"
      ]},
      { name:"Yeast Dough", items:[
        "3 cups all-purpose flour (480g)",
        "½ cup warm milk (125ml)",
        "3 egg yolks",
        "80g butter (less than half a stick)",
        "6 tbsp sugar (90g)"
      ]},
      { name:"Filling", items:[
        "30g softened butter",
        "2 tbsp cinnamon",
        "4 tbsp sugar"
      ]},
      { name:"Additions", items:[
        "Milk for brushing the rolls before baking"
      ]}
    ],
    steps:[
      "Make the starter: In one bowl, combine 5 tablespoons of warm (not hot) milk, 2 tablespoons of all-purpose flour, 10g of dried yeast, and 2 tablespoons of caster sugar. Mix and set aside for 20 min until foamy.",
      "Combine the remaining ingredients: Sift three cups of cake flour (about 480 grams) into a larger bowl. Add a pinch of salt and three egg yolks. Pour six tablespoons of sugar into the bowl. Pour in 80 grams of melted and cooled butter and half a cup of slightly warm milk. Finally, pour in the leavening mixture.",
      "Knead the dough: Mix everything together with a wooden spoon or silicone spatula. Transfer the bowl with the dough to a stand mixer fitted with a dough hook. Knead the dough for at least 10 minutes. After kneading, the dough should be uniform, smooth, and elastic. You can also knead the dough by hand.",
      "Set aside to rise: Leave the kneaded dough in the bowl. Cover it with a cotton cloth or plastic wrap. Set aside in a warm place to rise for about 60–70 minutes. The dough should triple in size.",
      "Divide the risen dough into two equal pieces. Cover one with a cloth to prevent it from drying out. Roll out the other piece of dough into an elongated loaf, approximately 20 x 30 cm.",
      "Using a pastry brush, brush the entire surface of the dough with very soft butter (half of the 30 grams of filling ingredients). Next, sprinkle in one tablespoon of cinnamon (or more if desired). Finally, sprinkle sugar over the entire surface of the dough.",
      "Start rolling the yeast dough. Use a sharp knife to cut out strips about 1 cm wide.",
      "After placing the rolls on a baking tray, set them aside to rise for about 20 minutes. Set the oven to approximately 175°C with the top-bottom baking option, or 160°C with a fan. Brush the rolls with a little warm milk just before placing the tray in the oven.",
      "Bake for about 17–20 minutes, until the rolls are nicely golden brown. Then repeat with a second batch. Enjoy!"
    ]
  },
  2: {
    id:2,
    title:"Pancakes",
    image:"assets/pancakes.png",
    time:"25m", servings:"8–10",
    description:"Pancakes with dusting of powdered sugar.",
    ingredients:[
      "1¼ cup flour","1 egg",
      "1¼ cup buttermilk","¼ cup icing sugar",
      "1 heaped tsp baking powder","1 tsp baking soda",
      "¼ cup vegetable oil","Pinch of salt"
    ],
    steps:[
      "In a blender, blend all ingredients until smooth, similar to heavy cream.",
      "Heat a frying pan over medium heat and fry the pancakes on both sides.",
      "Serve with maple syrup, butter, or sugar."
    ],
    note:"Fry pancakes until bubbles appear on the surface. Fry on the other side for another ±30 seconds."
  },
  3: {
    id:3,
    title:"Chocolate Chip Muffins",
    image:"assets/muffin.png",
    time:"40m", servings:12,
    description:"Golden muffins bursting with melted chocolate chips.",
    ingredients:[
      "2 cups all-purpose flour (320 g)","2 tsp baking powder",
      "½ tsp baking soda","Small pinch of salt",
      "200 g chopped chocolate","2 eggs",
      "200 ml milk","1 cup sugar",
      "1 packet vanillin sugar (optional)","½ cup melted butter or vegetable oil"
    ],
    steps:[
      "Preheat the oven to 180°C. Prepare a 12-cup muffin tin and line the cavities with cupcake liners.",
      "Sift the flour into a bowl along with the baking powder, baking soda, and salt, and mix thoroughly.",
      "Add the finely chopped chocolate or chocolate chips and mix again.",
      "In a second bowl, beat the eggs, milk, sugar, vanilla sugar, and oil or melted butter. Mix thoroughly, for example, with a whisk.",
      "Pour the mixture into the bowl with the dry ingredients and gently and slowly mix with a spoon until combined (mix just until all the raw flour is removed).",
      "Spoon the batter into the muffin tin and bake in the oven. Bake for about 20–25 minutes, or until a toothpick inserted into the muffin comes out dry."
    ]
  },
  4: {
    id:4,
    title:"Oatmeal Cookies",
    image:"assets/oatmealcookies.png",
    time:"10 min", bakeTime:"20 min", servings:20,
    description:"Golden and crispy oatmeal cookies.",
    ingredients:[
      "1½ cup oatmeal (200 g)","½ stick soft butter (100 g)",
      "4 tbsp sugar (60 g)","2 medium eggs",
      "1 leveled tsp baking powder",
      "2 heaped tbsp all-purpose flour (up to 45 g)"
    ],
    steps:[
      "In the bowl mix 1½ cup of oatmeals, 4 tablespoons of sugar, 2 heaped tablespoons of all-purpose flour and leveled teaspoon of baking powder (you can also add a little pinch of cinnamon).",
      "To the same bowl add 2 eggs and half a stick of soft butter. Mix until thick.",
      "Line a baking sheet with parchment paper. Scoop walnut-sized portions of the dough, roll them into balls, and flatten them onto the paper.",
      "Place on the middle rack and bake at 180°C (top/bottom heat) for 15–20 minutes, until golden brown."
    ],
    note:"The thinner the cookies, the crispier they will be."
  },
  5: {
    id:5,
    title:"Banana Bread",
    image:"assets/bananabread.png",
    time:"15 min", bakeTime:"55 min", servings:8,
    description:"Moist and tender banana bread with a golden crust — perfect for overripe bananas.",
    ingredients:[
      "3 very ripe bananas","1½ cups all-purpose flour (190 g)",
      "¾ cup sugar (150 g)","2 eggs",
      "⅓ cup melted butter (75 g)","1 tsp baking soda",
      "Pinch of salt","1 tsp vanilla extract"
    ],
    steps:[
      "Preheat oven to 175°C. Grease a loaf pan with butter.",
      "Mash the bananas with a fork until smooth.",
      "Mix in melted butter, sugar, eggs, and vanilla extract.",
      "Add flour, baking soda, and salt. Stir until just combined — do not overmix.",
      "Pour the batter into the prepared loaf pan.",
      "Bake for 50–60 minutes, until a toothpick inserted in the center comes out clean.",
      "Cool in the pan for 10 minutes, then turn out onto a wire rack."
    ],
    note:"The riper the bananas, the sweeter and more flavourful the bread."
  },
  6: {
    id:6,
    title:"Naleśniki",
    image:"assets/nalesniki.png",
    time:"35m", servings:8,
    description:"Paper-thin crepes with Nutella, fresh strawberries, and a sprinkle of sugar.",
    ingredients:[
      "1 cup all-purpose flour","2 large eggs",
      "½ cup milk","½ cup water",
      "2 tbsp melted butter","Pinch of salt","1 tsp vanilla extract",
      "Nutella or jam to fill","Fresh strawberries sliced",
      "Powdered sugar to dust","Whipped cream (optional)"
    ],
    steps:[
      "Blend flour, eggs, milk, water, melted butter, salt, and vanilla until smooth. Rest 30 minutes.",
      "Heat a non-stick crepe pan over medium-high heat and lightly butter.",
      "Pour about 3 tablespoons of batter and quickly swirl to coat the pan thinly.",
      "Cook 1–2 minutes until the edges start to lift and the top looks set.",
      "Flip with a thin spatula and cook another 30 seconds.",
      "Stack crepes between pieces of parchment to prevent sticking.",
      "Spread Nutella, add strawberries, fold in quarters, and dust with powdered sugar."
    ]
  }
};

const $ = id => document.getElementById(id);

// ── Gallery render ──
function renderGallery() {
  const grid = $('recipesGrid');
  grid.innerHTML = '';
  Object.values(recipes).forEach(r => {
    const imgHtml = r.image
      ? `<img src="${r.image}" alt="${r.title}" class="card-sticker" />`
      : `<div class="card-sticker-ph" style="background:${r.phColor}"></div>`;
    const article = document.createElement('article');
    article.className = 'recipe-card';
    article.innerHTML = `
      <h2 class="card-title">${r.title}</h2>
      <div class="card-sticker-area">${imgHtml}</div>
      <p class="card-desc">${r.description}</p>
      <button class="btn-view" data-id="${r.id}">${ui.viewRecipe}</button>
    `;
    grid.appendChild(article);
  });
}

// ── Navbar scroll ──
window.addEventListener("scroll", () => {
  $("navbar").classList.toggle("scrolled", window.scrollY > 10);
});

// ── View switching ──
function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showGallery() { showView("galleryView"); }

// ── Recipe detail ──
function showRecipe(id) {
  const r = recipes[id];
  if (!r) return;

  const heroHtml = r.image
    ? `<div class="recipe-hero-sticker"><img src="${r.image}" alt="${r.title}" /></div>`
    : `<div class="recipe-hero-ph" style="background:${r.phColor}"></div>`;

  const ingHtml = r.ingredientGroups
    ? r.ingredientGroups.map(g => `
        <li class="ing-group-header">${g.name}</li>
        ${g.items.map(i => `<li>${i}</li>`).join("")}
      `).join("")
    : r.ingredients.map(i => `<li>${i}</li>`).join("");

  const stepHtml = r.steps.map((s, i) =>
    `<li><span class="step-num">${i+1}</span><span>${s}</span></li>`
  ).join("");

  const extraStats = [
    r.riseTime ? `<span><i class="fas fa-hourglass-half"></i> ${r.riseTime}</span>` : '',
    r.bakeTime  ? `<span><i class="fas fa-fire"></i> ${r.bakeTime}</span>` : ''
  ].join('');

  $("recipeContent").innerHTML = `
    <button class="back-btn" onclick="showGallery()">
      <i class="fas fa-arrow-left"></i> ${ui.backBtn}
    </button>
    ${heroHtml}
    <h2 class="recipe-name">${r.title}</h2>
    <div class="recipe-stats">
      <span><i class="fas fa-clock"></i> ${r.time}</span>
      ${extraStats}
      <span><i class="fas fa-utensils"></i> ${r.servings} ${ui.servings}</span>
    </div>
    <p class="recipe-desc-text">${r.description}</p>
    <h3 class="recipe-h4">${ui.ingredients}</h3>
    <ul class="ing-list">${ingHtml}</ul>
    <h3 class="recipe-h4">${ui.instructions}</h3>
    <ol class="steps-list">${stepHtml}</ol>
    ${r.note ? `<p class="recipe-note"><i class="fas fa-lightbulb"></i> ${r.note}</p>` : ''}
    <div class="recipe-actions">
      <button class="btn-print" onclick="window.print()"><i class="fas fa-print"></i> ${ui.print}</button>
    </div>
  `;

  $("recipeView").querySelector(".recipe-bg").classList.add("gingham");
  showView("recipeView");
}

// ── Delegated clicks ──
document.addEventListener("click", e => {
  const viewBtn = e.target.closest(".btn-view");
  if (viewBtn) { showRecipe(parseInt(viewBtn.dataset.id)); return; }
});

// ── Init ──
renderGallery();
