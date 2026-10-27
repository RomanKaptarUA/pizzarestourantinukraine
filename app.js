const pizzas = [
  {
    id: "margherita",
    name: "Margherita",
    subtitle: { en: "The queen of Naples", uk: "Королева Неаполя" },
    ingredients: { en: "San Marzano tomato, fior di latte, basil, olive oil", uk: "Сан-Марцано, фіор ді латте, базилік, оливкова олія" },
    price: 245,
    category: "classic",
    badge: { en: "Bestseller", uk: "Бестселер" },
    image: "photo-1579751626657-72bc17010498",
  },
  {
    id: "diavola",
    name: "Diavola",
    subtitle: { en: "For the bold", uk: "Для сміливих" },
    ingredients: { en: "Tomato sauce, fior di latte, spicy salami, honey", uk: "Томатний соус, фіор ді латте, салямі пікканте, мед" },
    price: 315,
    category: "spicy",
    badge: { en: "A little heat", uk: "З перчинкою" },
    image: "photo-1513104890138-7c749659a591",
  },
  {
    id: "quattro-formaggi",
    name: "Quattro Formaggi",
    subtitle: { en: "A symphony of cheese", uk: "Сирна симфонія" },
    ingredients: { en: "Mozzarella, gorgonzola, provolone, parmesan, pear", uk: "Моцарела, горгонзола, проволоне, пармезан, груша" },
    price: 335,
    category: "classic",
    badge: { en: "", uk: "" },
    image: "photo-1571407970349-bc81e7e96d47",
  },
  {
    id: "ortolana",
    name: "Ortolana",
    subtitle: { en: "A garden in the sun", uk: "Город на сонці" },
    ingredients: { en: "Zucchini, aubergine, roasted peppers, olives, stracciatella", uk: "Цукіні, баклажан, печений перець, оливки, страчатела" },
    price: 295,
    category: "vegetarian",
    badge: { en: "Meat-free", uk: "Без м’яса" },
    image: "photo-1574071318508-1cdbab80d002",
  },
  {
    id: "prosciutto-funghi",
    name: "Prosciutto & Funghi",
    subtitle: { en: "A perfect pairing", uk: "Гриби люблять шинку" },
    ingredients: { en: "Tomato sauce, fior di latte, prosciutto cotto, mushrooms", uk: "Томатний соус, фіор ді латте, прошуто котто, печериці" },
    price: 305,
    category: "classic",
    badge: { en: "", uk: "" },
    image: "photo-1571066811602-716837d681de",
  },
  {
    id: "marinara",
    name: "Marinara",
    subtitle: { en: "Simple. Perfect.", uk: "Проста. Ідеальна." },
    ingredients: { en: "San Marzano tomato, garlic, oregano, olive oil, basil", uk: "Сан-Марцано, часник, орегано, оливкова олія, базилік" },
    price: 195,
    category: "vegetarian",
    badge: { en: "Vegan", uk: "Веганська" },
    image: "photo-1579751626657-72bc17010498",
  },
  {
    id: "capricciosa",
    name: "Capricciosa",
    subtitle: { en: "A little bit of everything", uk: "Трохи всього" },
    ingredients: { en: "Ham, artichokes, mushrooms, olives, fior di latte", uk: "Шинка, артишоки, печериці, оливки, фіор ді латте" },
    price: 325,
    category: "classic",
    badge: { en: "", uk: "" },
    image: "photo-1513104890138-7c749659a591",
  },
  {
    id: "nduja",
    name: "’Nduja & Miele",
    subtitle: { en: "Fire & honey", uk: "Вогонь та мед" },
    ingredients: { en: "’Nduja, mozzarella, tomato, honey, chilli flakes", uk: "’Ндуджа, моцарела, томат, мед, пластівці чилі" },
    price: 335,
    category: "spicy",
    badge: { en: "Spicy", uk: "Гостра" },
    image: "photo-1574071318508-1cdbab80d002",
  },
  {
    id: "burrata",
    name: "Burrata e Pesto",
    subtitle: { en: "A taste of summer", uk: "Літній настрій" },
    ingredients: { en: "Basil pesto, cherry tomatoes, burrata, parmesan, rocket", uk: "Песто з базиліку, чері, бурата, пармезан, рукола" },
    price: 355,
    category: "vegetarian",
    badge: { en: "A favourite", uk: "Улюбленець" },
    image: "photo-1571407970349-bc81e7e96d47",
  },
  {
    id: "calzone",
    name: "Calzone",
    subtitle: { en: "A little secret inside", uk: "Секрет усередині" },
    ingredients: { en: "Ricotta, salami, ham, tomato, fior di latte", uk: "Рикота, салямі, шинка, томат, фіор ді латте" },
    price: 315,
    category: "classic",
    badge: { en: "", uk: "" },
    image: "photo-1571066811602-716837d681de",
  },
  {
    id: "napoletana",
    name: "Napoletana",
    subtitle: { en: "Sea and sunshine", uk: "Море й сонце" },
    ingredients: { en: "San Marzano tomato, anchovies, capers, olives, oregano", uk: "Сан-Марцано, анчоуси, каперси, оливки, орегано" },
    price: 285,
    category: "classic",
    badge: { en: "", uk: "" },
    image: "photo-1579751626657-72bc17010498",
  },
  {
    id: "patate",
    name: "Patate & Rosmarino",
    subtitle: { en: "A little comfort", uk: "Теплий затишок" },
    ingredients: { en: "Potato, rosemary, fior di latte, parmesan, garlic", uk: "Картопля, розмарин, фіор ді латте, пармезан, часник" },
    price: 275,
    category: "vegetarian",
    badge: { en: "Meat-free", uk: "Без м’яса" },
    image: "photo-1574071318508-1cdbab80d002",
  },
];

const combos = [
  {
    id: "date-night",
    name: { en: "Date Night", uk: "Побачення вдвох" },
    description: { en: "Two pizzas, one tiramisu, and no reason to share.", uk: "Дві піци, тірамісу — і жодної причини ділитися." },
    contents: { en: "Margherita · Diavola · Tiramisu", uk: "Маргарита · Діавола · Тірамісу" },
    originalPrice: 740,
    price: 629,
    image: "photo-1513104890138-7c749659a591",
  },
  {
    id: "tavolo-four",
    name: { en: "Tavolo for Four", uk: "Компанія з чотирьох" },
    description: { en: "Four crowd-pleasers, a big salad, and the table is yours.", uk: "Чотири улюблені піци, великий салат — стіл уже ваш." },
    contents: { en: "4 classic pizzas · House salad", uk: "4 класичні піци · Фірмовий салат" },
    originalPrice: 1420,
    price: 1190,
    image: "photo-1579751626657-72bc17010498",
  },
  {
    id: "solo-ritual",
    name: { en: "Solo Ritual", uk: "Вечір для себе" },
    description: { en: "One lovely pizza, a little something sweet, all yours.", uk: "Улюблена піца й десерт. Нікому нічого не винні." },
    contents: { en: "Margherita · Tiramisu · San Pellegrino", uk: "Маргарита · Тірамісу · San Pellegrino" },
    originalPrice: 485,
    price: 399,
    image: "photo-1574071318508-1cdbab80d002",
  },
];

const translations = {
  en: {
    navLabel: "Main navigation",
    navMenu: "Menu",
    navAbout: "Our story",
    navVisit: "Find us",
    orderNow: "Order now",
    cart: "Cart",
    openCart: "Open your cart",
    heroImageAlt: "Freshly baked Neapolitan pizza topped with basil",
    heroEyebrow: "Naples, Italy · made with love in Ukraine",
    heroTitle: "Pizza<br />with a little <em>character.</em>",
    heroDescription: "The fire is crackling. The dough has been rising for 48 hours. Then come honest Italian ingredients and a little bit of magic.",
    heroCta: "Find your pizza",
    heroNote: "Slow dough.<br />Fast love.",
    marqueeLabel: "Buon appetito — pizza, wine and good company",
    menuEyebrow: "The menu · straight from the oven",
    menuTitle: "Find your <em>slice.</em>",
    menuAside: "48-hour sourdough.<br />Fired at 450°C.",
    filterLabel: "Filter menu",
    filterAll: "All pizzas",
    filterClassic: "Classics",
    filterSpicy: "A little heat",
    filterVegetarian: "Meat-free",
    pizzaCount: (count) => count === 1 ? "pizza" : "pizzas",
    aboutImageAlt: "A pizzaiolo hand-stretching fresh dough",
    aboutEyebrow: "A little about us",
    aboutTitle: "More than pizza.<br /><em>A whole story.</em>",
    aboutParagraphOne: "We fell for Naples — its lively little streets, simple food and people who always make room for one more at the table. Forno is our invitation to pull up a chair.",
    aboutParagraphTwo: "Sourdough we feed every day. San Marzano tomatoes. Mozzarella from a small local dairy. Nothing extra — good things don't need dressing up.",
    aboutLink: "Come say hello",
    visitEyebrow: "Save yourself a seat",
    visitTitle: "The oven is <em>on.</em>",
    address: "Address",
    hours: "Hours",
    hoursValue: "Daily · 12 pm–10 pm",
    callUs: "Give us a ring",
    backToTop: "Forno — back to top",
    footerNote: "Made with love and a little olive oil.",
    cartEyebrow: "Still hot",
    cartTitle: "Your cart",
    closeCart: "Close cart",
    cartEmpty: "Just the smell of good plans so far.<br />Pick a pizza from the menu!",
    total: "Total",
    checkout: "Continue to checkout",
    checkoutEyebrow: "One last thing",
    checkoutTitle: "Where to?",
    closeForm: "Close form",
    name: "Your name",
    phone: "Phone number",
    deliveryAddress: "Delivery address",
    demoNote: "Portfolio demo — online payment and delivery aren't connected yet.",
    confirmOrder: "Place your order",
    addToOrder: "Add to order",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    languageLabel: "Choose language",
    languageEnglish: "English",
    languageUkrainian: "Українська",
    comboEyebrow: "A little more, a little less",
    comboTitle: "The good stuff.<br /><em>Bundled.</em>",
    comboIntro: "Our favourite things, already paired and priced as a treat. Fixed just the way we love them.",
    comboFineprint: "Set menus are fixed and can’t be customised. The good deal is already baked in.",
    comboAdd: "Get this set",
    originalPriceLabel: "Usually",
    comboSavings: "SAVE",
    comboTagline: "A FORNO SET MENU",
    addedToCart: (name) => `${name} added to your cart`,
    thankYou: (name) => `Thanks, ${name}! This is a demo order — real delivery can be connected next.`,
  },
  uk: {
    navLabel: "Головна навігація",
    navMenu: "Меню",
    navAbout: "Хто ми",
    navVisit: "Знайти нас",
    orderNow: "Замовити",
    cart: "Кошик",
    openCart: "Відкрити кошик",
    heroImageAlt: "Щойно спечена неаполітанська піца з базиліком",
    heroEyebrow: "Неаполь, Італія · з любов’ю в Україні",
    heroTitle: "Піца,<br />що має <em>характер.</em>",
    heroDescription: "Дрова потріскують. Тісто дозріває 48 годин. А далі — тільки справжні італійські продукти й трохи магії.",
    heroCta: "Обрати свою піцу",
    heroNote: "Повільне тісто.<br />Швидка любов.",
    marqueeLabel: "Buon appetito — піца, вино, хороша компанія",
    menuEyebrow: "Меню · з печі, з любов’ю",
    menuTitle: "Обери свій <em>шматочок.</em>",
    menuAside: "Тісто на заквасці, 48 годин дозрівання.<br />Випікаємо при 450°C.",
    filterLabel: "Фільтр меню",
    filterAll: "Усі піци",
    filterClassic: "Класика",
    filterSpicy: "З перчинкою",
    filterVegetarian: "Без м’яса",
    pizzaCount: (count) => {
      const lastTwoDigits = count % 100;
      const lastDigit = count % 10;
      if (lastDigit === 1 && lastTwoDigits !== 11) return "піца";
      if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) return "піци";
      return "піц";
    },
    aboutImageAlt: "Піцайоло готує тісто вручну",
    aboutEyebrow: "Хто ми такі",
    aboutTitle: "Не просто піца.<br /><em>Ціла історія.</em>",
    aboutParagraphOne: "Ми закохалися в Неаполь — у його гамірні вулички, просту їжу й людей, які завжди знайдуть місце ще для одного за столом. Forno — це наше запрошення сісти ближче.",
    aboutParagraphTwo: "Закваска, яку годуємо щодня. Помідори San Marzano. Моцарела від маленької сироварні. Нічого зайвого — бо хорошим речам не потрібні прикраси.",
    aboutLink: "Заходь знайомитись",
    visitEyebrow: "Знайди свій столик",
    visitTitle: "Піч уже <em>гаряча.</em>",
    address: "Адреса",
    hours: "Години",
    hoursValue: "Щодня · 12:00–22:00",
    callUs: "Подзвонити нам",
    backToTop: "Forno — на початок",
    footerNote: "Зроблено з любов’ю та оливковою олією.",
    cartEyebrow: "Ще гаряча",
    cartTitle: "Твій кошик",
    closeCart: "Закрити кошик",
    cartEmpty: "Тут поки що пахне тільки планами.<br />Обери піцу з меню!",
    total: "Разом",
    checkout: "Перейти до замовлення",
    checkoutEyebrow: "Останній крок",
    checkoutTitle: "Куди везти?",
    closeForm: "Закрити форму",
    name: "Твоє ім’я",
    phone: "Номер телефону",
    deliveryAddress: "Адреса доставки",
    demoNote: "Демо-замовлення для портфоліо — оплати й доставки тут поки немає.",
    confirmOrder: "Підтвердити замовлення",
    addToOrder: "Додати до замовлення",
    decreaseQuantity: "Зменшити кількість",
    increaseQuantity: "Збільшити кількість",
    languageLabel: "Оберіть мову",
    languageEnglish: "English",
    languageUkrainian: "Українська",
    comboEyebrow: "Більше смаку — менше ціни",
    comboTitle: "Усе найкраще.<br /><em>В одному наборі.</em>",
    comboIntro: "Наші улюблені поєднання за особливою ціною. Склад фіксований — так, як задумав піцайоло.",
    comboFineprint: "Склад наборів фіксований і не змінюється. Знижка вже врахована в ціні.",
    comboAdd: "Обрати набір",
    originalPriceLabel: "Звичайна ціна",
    comboSavings: "ЕКОНОМІЯ",
    comboTagline: "НАБІР ВІД FORNO",
    addedToCart: (name) => `${name} додано до кошика`,
    thankYou: (name) => `Дякуємо, ${name}! Це демонстраційне замовлення — далі можна під’єднати реальну доставку.`,
    languageLabel: "Switch to English",
    languageTitle: "Switch to English",
  },
};

const languageStorageKey = "forno-language";
const supportedLanguages = ["en", "uk"];
const savedLanguage = localStorage.getItem(languageStorageKey);
let currentLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : "en";
let activeFilter = "all";
const cart = new Map();
const pizzaGrid = document.querySelector("#pizza-grid");
const cartDialog = document.querySelector("#cart-dialog");
const checkoutDialog = document.querySelector("#checkout-dialog");
const toast = document.querySelector("#toast");
let toastTimeout;

const USD_EXCHANGE_RATE = 40;
const displayAmount = (price) => currentLanguage === "en"
  ? Math.round((price / USD_EXCHANGE_RATE) * 100) / 100
  : price;
const formatAmount = (amount) => currentLanguage === "en"
  ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  : `${new Intl.NumberFormat("uk-UA").format(amount)} ₴`;
const formatPrice = (price) => formatAmount(displayAmount(price));

function renderPizzas(filter = activeFilter) {
  activeFilter = filter;
  const visiblePizzas = filter === "all"
    ? pizzas
    : pizzas.filter((pizza) => pizza.category === filter);

  document.querySelector("#menu-count").textContent =
    `${String(visiblePizzas.length).padStart(2, "0")} ${translations[currentLanguage].pizzaCount(visiblePizzas.length)}`;
  pizzaGrid.innerHTML = visiblePizzas.map((pizza, index) => `
    <article class="pizza-card">
      <div class="pizza-photo">
        <img
          src="https://images.unsplash.com/${pizza.image}?auto=format&fit=crop&w=800&q=80"
          alt="${currentLanguage === "en" ? "Pizza" : "Піца"} ${pizza.name}"
          loading="lazy"
        />
        ${pizza.badge[currentLanguage] ? `<span class="pizza-badge">${pizza.badge[currentLanguage]}</span>` : ""}
        <span class="pizza-number">0${index + 1}</span>
      </div>
      <div class="pizza-info">
        <div class="pizza-title-row">
          <div><h3>${pizza.name}</h3><span class="pizza-subtitle">${pizza.subtitle[currentLanguage]}</span></div>
          <span class="pizza-price">${formatPrice(pizza.price)}</span>
        </div>
        <p class="pizza-ingredients">${pizza.ingredients[currentLanguage]}</p>
        <button class="add-button" type="button" data-add="${pizza.id}" aria-label="${translations[currentLanguage].addToOrder}: ${pizza.name}">
          ${translations[currentLanguage].addToOrder} <span aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  `).join("");
}

function renderCombos() {
  const copy = translations[currentLanguage];
  document.querySelector("#combo-grid").innerHTML = combos.map((combo, index) => `
    <article class="combo-card">
      <div class="combo-photo">
        <img src="https://images.unsplash.com/${combo.image}?auto=format&fit=crop&w=900&q=80" alt="${combo.name[currentLanguage]}" loading="lazy" />
        <span class="combo-discount">${copy.comboSavings} ${formatAmount(displayAmount(combo.originalPrice) - displayAmount(combo.price))}</span>
        <span class="combo-index">0${index + 1} / FORNO SET</span>
      </div>
      <div class="combo-card-copy">
        <span class="combo-tagline">${copy.comboTagline}</span>
        <h3>${combo.name[currentLanguage]}</h3>
        <p class="combo-description">${combo.description[currentLanguage]}</p>
        <div class="combo-includes">
          <span>${currentLanguage === "en" ? "IN THE SET" : "У НАБОРІ"}</span>
          <strong>${combo.contents[currentLanguage]}</strong>
        </div>
        <div class="combo-card-footer">
          <div class="combo-price">
            <span>${copy.originalPriceLabel} <s>${formatPrice(combo.originalPrice)}</s></span>
            <strong>${formatPrice(combo.price)}</strong>
          </div>
          <button class="button button-light" type="button" data-combo="${combo.id}">
            ${copy.comboAdd}<span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const cartItems = document.querySelector("#cart-items");
  const entries = Array.from(cart.values());
  const quantity = entries.reduce((sum, item) => sum + item.quantity, 0);
  const total = entries.reduce(
    (sum, item) => sum + displayAmount(item.pizza.price) * item.quantity,
    0,
  );

  document.querySelector("#cart-count").textContent = String(quantity);
  document.querySelector("#cart-empty").hidden = entries.length > 0;
  document.querySelector("#cart-footer").hidden = entries.length === 0;
  document.querySelector("#cart-total").textContent = formatAmount(total);
  cartItems.innerHTML = entries.map(({ pizza, quantity: itemQuantity }) => {
    const name = typeof pizza.name === "string" ? pizza.name : pizza.name[currentLanguage];
    const ingredients = typeof pizza.ingredients === "string"
      ? pizza.ingredients
      : pizza.ingredients[currentLanguage];
    return `
    <div class="cart-item">
      <div><strong>${name}</strong><span>${formatPrice(pizza.price)} · ${ingredients}</span></div>
      <div class="quantity-control" aria-label="${currentLanguage === "en" ? "Quantity of" : "Кількість"} ${name}">
        <button type="button" data-quantity="${pizza.id}" data-change="-1" aria-label="${translations[currentLanguage].decreaseQuantity}">−</button>
        <span>${itemQuantity}</span>
        <button type="button" data-quantity="${pizza.id}" data-change="1" aria-label="${translations[currentLanguage].increaseQuantity}">+</button>
      </div>
    </div>
  `;
  }).join("");
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "Forno — Pizza with a little character"
    : "Forno — піца, що має характер";
  document.querySelector('meta[name="description"]').content = currentLanguage === "en"
    ? "Forno — Neapolitan craft pizza: slow-fermented dough, seasonal ingredients and a menu made with love."
    : "Forno — реміснича піца з Неаполя: тісто на заквасці, сезонні продукти й велике меню.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderPizzas(activeFilter);
  renderCombos();
  renderCart();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderPizzas(button.dataset.filter);
  });
});

document.querySelector(".language-switch").addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button || button.dataset.language === currentLanguage) return;
  currentLanguage = button.dataset.language;
  localStorage.setItem(languageStorageKey, currentLanguage);
  applyLanguage(currentLanguage);
});

document.querySelector("#combo-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-combo]");
  if (!button) return;
  const combo = combos.find((item) => item.id === button.dataset.combo);
  if (!combo) return;
  const cartItem = {
    id: combo.id,
    name: combo.name,
    ingredients: combo.contents,
    price: combo.price,
  };
  const existing = cart.get(combo.id);
  cart.set(combo.id, { pizza: cartItem, quantity: (existing?.quantity || 0) + 1 });
  renderCart();
  showToast(translations[currentLanguage].addedToCart(combo.name[currentLanguage]));
});

pizzaGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;

  const pizza = pizzas.find((item) => item.id === button.dataset.add);
  if (!pizza) return;
  const existing = cart.get(pizza.id);
  cart.set(pizza.id, { pizza, quantity: (existing?.quantity || 0) + 1 });
  renderCart();
  showToast(translations[currentLanguage].addedToCart(pizza.name));
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;

  const item = cart.get(button.dataset.quantity);
  if (!item) return;
  const nextQuantity = item.quantity + Number(button.dataset.change);
  if (nextQuantity < 1) {
    cart.delete(button.dataset.quantity);
  } else {
    cart.set(button.dataset.quantity, { ...item, quantity: nextQuantity });
  }
  renderCart();
});

document.querySelector("#open-cart").addEventListener("click", () => {
  renderCart();
  cartDialog.showModal();
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => document.querySelector(`#${button.dataset.close}`).close());
});

document.querySelectorAll(".order-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector("#open-checkout").addEventListener("click", () => {
  cartDialog.close();
  checkoutDialog.showModal();
});

document.querySelector("#checkout-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get("name");
  document.querySelector("#form-message").textContent =
    translations[currentLanguage].thankYou(name);
  cart.clear();
  renderCart();
  form.reset();
  window.setTimeout(() => checkoutDialog.close(), 2800);
});

applyLanguage(currentLanguage);
