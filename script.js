/* ---------- data ---------- */
const petData = [
  {
    id: 1,
    name: "Otis",
    breed: "Beagle",
    category: "dog",
    tag: "014",
    age: "1.5 yrs",
    fee: 120,
    rating: 4.8,
    status: "available",
    desc: "Loves long sniffs and short naps. Great with kids and other dogs.",
    color: "#2B4C7E",
    image: "assets/otis.png",
    temperament: ["Friendly", "Playful", "Inquisitive", "Social"],
    health: ["Vaccinated", "Neutered", "Microchipped"],
    size: "Medium",
    gender: "Male",
    longDesc: "Otis is a delightful young Beagle who is full of curiosity and affection. He loves exploring trails, sniffing out new scents, and curling up next to you for a cozy afternoon nap. Otis gets along fabulously with other canine friends and is exceptionally gentle with children. He is fully potty-trained and knows basic commands like sit and stay."
  },
  {
    id: 2,
    name: "Mochi",
    breed: "Pomeranian",
    category: "dog",
    tag: "027",
    age: "1 yr",
    fee: 150,
    rating: 4.6,
    status: "pending",
    desc: "A fluffy shadow who follows you from room to room.",
    color: "#D9A02E",
    image: "assets/mochi.png",
    temperament: ["Loyal", "Lively", "Affectionate", "Alert"],
    health: ["Vaccinated", "Neutered"],
    size: "Small",
    gender: "Female",
    longDesc: "Mochi is a tiny ball of pure joy and fluff. True to her name, she is sweet-tempered and loves to stay close to her favorite human's heels. She has a spunky personality, enjoys playing with small squeaky toys, and will happily sit on your lap for hours. Mochi is ideal for apartment living and thrives in environments where she gets lots of attention."
  },
  {
    id: 3,
    name: "Biscuit",
    breed: "Golden Retriever",
    category: "dog",
    tag: "031",
    age: "2 yrs",
    fee: 140,
    rating: 5.0,
    status: "available",
    desc: "Tennis balls are his love language.",
    color: "#4B7B4E",
    image: "assets/biscuit.png",
    temperament: ["Outgoing", "Energetic", "Trustworthy", "Gentle"],
    health: ["Vaccinated", "Neutered", "Microchipped", "Dewormed"],
    size: "Large",
    gender: "Male",
    longDesc: "Biscuit is the quintessential Golden Retriever: enthusiastic, loving, and completely obsessed with playing fetch. He is extremely patient, making him a perfect companion for families with children. He loves water, long walks, and cuddling on the sofa. Biscuit is highly intelligent, eager to please, and already well-socialized."
  },
  {
    id: 4,
    name: "Luna",
    breed: "Tabby Shorthair",
    category: "cat",
    tag: "008",
    age: "3 yrs",
    fee: 90,
    rating: 4.7,
    status: "available",
    desc: "Curls up on warm laptops and cold hearts alike.",
    color: "#2B4C7E",
    image: "assets/luna.png",
    temperament: ["Independent", "Calm", "Observant", "Snuggly"],
    health: ["Vaccinated", "Spayed", "Microchipped"],
    size: "Medium",
    gender: "Female",
    longDesc: "Luna is a beautiful silver-and-grey Tabby who appreciates the quiet life. When she is not observing the household from her favorite perch, she is looking for a warm lap or laptop keyboard to lay on. She has a calm, reassuring presence and enjoys gentle chin scratches. Luna would fit perfectly in a calm household."
  },
  {
    id: 5,
    name: "Sable",
    breed: "Russian Blue",
    category: "cat",
    tag: "019",
    age: "4 yrs",
    fee: 110,
    rating: 4.9,
    status: "adopted",
    desc: "Quiet, dignified, and silently judges your decor.",
    color: "#C1432E",
    image: "assets/sable.png",
    temperament: ["Gentle", "Reserved", "Quiet", "Smart"],
    health: ["Vaccinated", "Spayed", "Microchipped"],
    size: "Medium",
    gender: "Female",
    longDesc: "Sable is an elegant Russian Blue with a stunning plush coat and striking emerald-green eyes. She is initially reserved with strangers but becomes deeply attached to her caretakers. She enjoys quiet puzzle toys and climbing to high viewing positions. Sable is neat, quiet, and exceptionally clean."
  },
  {
    id: 6,
    name: "Pepper",
    breed: "Domestic Longhair",
    category: "cat",
    tag: "022",
    age: "6 mo",
    fee: 80,
    rating: 4.5,
    status: "available",
    desc: "Kitten energy in a very small, very loud package.",
    color: "#D9A02E",
    image: "assets/pepper.png",
    temperament: ["Curious", "Vocal", "Playful", "Silly"],
    health: ["Vaccinated", "Neutered"],
    size: "Small",
    gender: "Male",
    longDesc: "Pepper is a bundle of endless kitten antics. He is extremely vocal and will chirp, meow, and purr to let you know he is in the room. He loves chasing laser pointers, climbing scratching posts, and falling asleep in funny, contorted positions. He has gorgeous long fur that will require regular, gentle brushing."
  },
  {
    id: 7,
    name: "Clover",
    breed: "Holland Lop",
    category: "rabbit",
    tag: "041",
    age: "8 mo",
    fee: 60,
    rating: 4.4,
    status: "available",
    desc: "Floppy ears, zero chill, excellent at zoomies.",
    color: "#4B7B4E",
    image: "assets/clover.png",
    temperament: ["Spunky", "Fast", "Playful", "Cheerful"],
    health: ["Neutered"],
    size: "Small",
    gender: "Male",
    longDesc: "Clover is an active young Holland Lop rabbit with floppy ears and a bold, outgoing personality. He is not one to sit still for long; he loves exploring card boxes, leaping off cushions (performing classic rabbit 'binkies'), and searching for sweet hay treats. He is litterbox trained and very clean."
  },
  {
    id: 8,
    name: "Hazel",
    breed: "Dutch Rabbit",
    category: "rabbit",
    tag: "044",
    age: "1 yr",
    fee: 65,
    rating: 4.3,
    status: "pending",
    desc: "Polite, tidy, and surprisingly opinionated about lettuce.",
    color: "#2B4C7E",
    image: "assets/hazel.png",
    temperament: ["Docile", "Sweet", "Quiet", "Polite"],
    health: ["Spayed"],
    size: "Small",
    gender: "Female",
    longDesc: "Hazel is a gorgeous black-and-white Dutch rabbit. She is gentle-natured, easy to handle, and enjoys sitting quietly next to you while being pet on the forehead. She is quite meticulous about her space and is very well-behaved. She gets very excited about fresh herbs like parsley and romaine lettuce."
  },
  {
    id: 9,
    name: "Kiwi",
    breed: "Green Cheek Conure",
    category: "parrot",
    tag: "052",
    age: "2 yrs",
    fee: 200,
    rating: 4.6,
    status: "available",
    desc: "Whistles the intro to every song you hum nearby.",
    color: "#D9A02E",
    image: "assets/kiwi.png",
    temperament: ["Talkative", "Clever", "Cuddly", "Mischievous"],
    health: ["Healthy vet check"],
    size: "Small",
    gender: "Male",
    longDesc: "Kiwi is a colorful, intelligent Green Cheek Conure who loves to be the center of attention. He is a fast learner, capable of mimicking sounds, and loves to cuddle right under your chin when he is relaxed. He requires an active owner who can provide him with plenty of out-of-cage time, fresh fruits, and engaging puzzle toys."
  }
];

const statusStyles = {
  available: { label: "Available", color: "#4B7B4E" },
  pending:   { label: "Visit pending", color: "#D9A02E" },
  adopted:   { label: "Adopted", color: "#C1432E" }
};

/* ---------- state ---------- */
const state = {
  category: "all",
  query: "",
  favorites: new Set(),
  shortlist: new Set(),
  showFavoritesOnly: false
};

const grid = document.getElementById("grid");

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function cardTemplate(pet, index) {
  const tilt = [-2, 1, -1.5, 2, -1, 1.5][index % 6];
  const isFav = state.favorites.has(pet.id);
  const isShort = state.shortlist.has(pet.id);
  const s = statusStyles[pet.status];

  return `
    <article class="tag-card fade-in relative bg-white dark:bg-zinc-900 border-2 border-ink/10 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden flex flex-col cursor-pointer"
              style="transform: rotate(${tilt}deg);" data-id="${pet.id}">
      <span class="punch-hole absolute top-3 left-6 w-4 h-4 rounded-full bg-paper dark:bg-zinc-950 z-10"></span>

      <button class="favorite-btn absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800/90 flex items-center justify-center border-2 ${isFav ? 'border-stampred' : 'border-ink/10 dark:border-white/10'} hover:scale-110 active:scale-95 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-denim"
              data-id="${pet.id}" aria-pressed="${isFav}" aria-label="Toggle favorite for ${pet.name}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? '#C1432E' : 'none'}" stroke="#C1432E" stroke-width="2">
          <path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2 5 5.6 5 8 5 10 6.5 12 9c2-2.5 4-4 6.4-4 3.6 0 5.2 3.6 3.6 6.7C19.5 16.1 12 21 12 21z"/>
        </svg>
      </button>

      <div class="relative h-64 overflow-hidden bg-paper2 dark:bg-zinc-850">
        <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover object-[center_25%] transition-transform duration-700 hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <span class="stamp absolute bottom-3 left-3 font-mono text-[10px] font-bold uppercase border-2 px-2 py-0.5 rounded-sm bg-white/95 dark:bg-zinc-900/95 shadow-sm"
              style="color:${s.color}; border-color:${s.color};">${s.label}</span>
      </div>

      <div class="border-t-2 border-dashed border-ink/15 dark:border-white/15 mx-4"></div>

      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-baseline gap-2">
            <h3 class="font-serif text-xl leading-tight text-ink dark:text-paper">${pet.name}</h3>
            <span class="font-mono text-[11px] text-ink/40 dark:text-paper/40 whitespace-nowrap">TAG #${pet.tag}</span>
          </div>
          <p class="font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-paper/50 mt-0.5">${pet.breed} · ${pet.age}</p>
          <p class="text-sm text-ink/75 dark:text-paper/75 mt-2.5 leading-snug">${pet.desc}</p>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <span class="text-mustard text-sm" aria-label="Rating ${pet.rating} of 5">${starString(pet.rating)} <span class="text-ink/40 dark:text-paper/40 text-xs">${pet.rating}</span></span>
            <span class="font-mono text-xs bg-denim/10 dark:bg-mustard/10 text-denim dark:text-mustard px-2 py-1 rounded-full">$${pet.fee} fee</span>
          </div>

          <div class="border-t border-ink/10 dark:border-white/10 mt-3 pt-3">
            <label class="flex items-center gap-2 text-sm text-ink/75 dark:text-paper/75 cursor-pointer select-none">
              <input type="checkbox" class="shortlist-checkbox w-4 h-4 rounded-sm border-2 border-ink/15 dark:border-white/15 cursor-pointer" data-id="${pet.id}" ${isShort ? "checked" : ""} />
              <span>Shortlist for a visit</span>
            </label>
          </div>
        </div>
      </div>
    </article>`;
}

function emptyState() {
  return `
    <div class="col-span-full text-center py-16 bg-white/40 dark:bg-zinc-900/40 rounded-2xl border-2 border-dashed border-ink/10 dark:border-white/10 px-6">
      <svg width="48" height="48" viewBox="0 0 100 100" class="mx-auto mb-4 opacity-40 text-denim dark:text-mustard"><circle cx="50" cy="60" r="26" fill="currentColor"/><ellipse cx="26" cy="34" rx="11" ry="15" fill="currentColor"/><ellipse cx="74" cy="34" rx="11" ry="15" fill="currentColor"/></svg>
      <p class="font-serif text-xl mb-2 text-ink dark:text-paper">No cards match your search.</p>
      <p class="text-ink/60 dark:text-paper/60 text-sm mb-6">Try adjusting filters, tags, or search query.</p>
      <button id="clearFiltersBtn" class="font-mono text-xs uppercase tracking-widest bg-ink dark:bg-paper text-paper dark:text-ink px-5 py-2.5 rounded-full hover:bg-denim dark:hover:bg-mustard transition-colors">Clear filters</button>
    </div>`;
}

function applyFilters() {
  const q = state.query.trim().toLowerCase();
  const filtered = petData.filter(p => {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const matchesQuery = q === "" || p.name.toLowerCase().includes(q) || p.breed.toLowerCase().includes(q);
    const matchesFavorites = !state.showFavoritesOnly || state.favorites.has(p.id);
    return matchesCategory && matchesQuery && matchesFavorites;
  });
  render(filtered);
}

function render(list) {
  grid.innerHTML = list.length ? list.map((p, i) => cardTemplate(p, i)).join("") : emptyState();
  document.getElementById("resultCount").textContent = `${list.length} of ${petData.length} cards`;

  const clearBtn = document.getElementById("clearFiltersBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.query = "";
      state.category = "all";
      state.showFavoritesOnly = false;
      document.getElementById("searchInput").value = "";
      document.getElementById("heroSearchInput").value = "";
      setActiveChip("all");
      updateFavBtnState();
      applyFilters();
    });
  }
}

function setActiveChip(category) {
  document.querySelectorAll(".filter-chip").forEach(chip => {
    const active = chip.dataset.category === category;
    if (active) {
      chip.className = "filter-chip font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-denim dark:border-mustard bg-denim dark:bg-mustard text-paper dark:text-ink whitespace-nowrap transition-all shadow-sm";
    } else {
      chip.className = "filter-chip font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full border-2 border-ink/15 dark:border-white/15 bg-white dark:bg-zinc-800 text-ink/70 dark:text-paper/70 whitespace-nowrap transition-all hover:border-denim dark:hover:border-mustard";
    }
  });
}

function updateFavCount() {
  document.getElementById("favCount").textContent = state.favorites.size;
}

function updateFavBtnState() {
  const btn = document.getElementById("favBtn");
  if (state.showFavoritesOnly) {
    btn.classList.add("border-stampred", "bg-stampred/10");
  } else {
    btn.classList.remove("border-stampred", "bg-stampred/10");
  }
}

function updateShortlistPill() {
  const pill = document.getElementById("shortlistPill");
  const count = state.shortlist.size;
  document.getElementById("shortlistCount").textContent = count;
  if (count > 0) {
    pill.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  } else {
    pill.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }
}

/* ---------- Modal & Drawer Systems ---------- */

const detailsModal = document.getElementById("detailsModal");
const detailsModalContent = document.getElementById("detailsModalContent");

function openPetDetails(id) {
  const pet = petData.find(p => p.id === id);
  if (!pet) return;

  const isFav = state.favorites.has(pet.id);
  const isShort = state.shortlist.has(pet.id);
  const s = statusStyles[pet.status];

  detailsModalContent.innerHTML = `
    <div class="relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full mx-4 border-2 border-ink/10 dark:border-white/10 scale-up flex flex-col md:flex-row">
      <button onclick="closePetDetails()" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors font-sans text-lg">&times;</button>
      
      <!-- Left side: image -->
      <div class="relative md:w-1/2 h-72 md:h-auto overflow-hidden bg-paper2 dark:bg-zinc-800">
        <img src="${pet.image}" alt="${pet.name}" class="w-full h-full object-cover object-[center_25%]" />
        <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
        <span class="stamp absolute bottom-4 left-4 font-mono text-xs font-bold uppercase border-2 px-3 py-1 rounded bg-white/95 dark:bg-zinc-900/95" style="color:${s.color}; border-color:${s.color};">${s.label}</span>
      </div>

      <!-- Right side: details -->
      <div class="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-baseline mb-1">
            <h2 class="font-serif text-3xl text-ink dark:text-paper leading-tight">${pet.name}</h2>
            <span class="font-mono text-xs text-ink/40 dark:text-paper/40">TAG #${pet.tag}</span>
          </div>
          <p class="font-mono text-xs uppercase tracking-widest text-denim dark:text-mustard mb-4">${pet.breed} · ${pet.age}</p>
          
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-ink/5 dark:bg-white/10 text-ink/70 dark:text-paper/70">${pet.gender}</span>
            <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-ink/5 dark:bg-white/10 text-ink/70 dark:text-paper/70">${pet.size} Size</span>
            <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-denim/10 text-denim dark:text-mustard px-2 py-0.5 rounded dark:bg-mustard/10">$${pet.fee} fee</span>
          </div>

          <p class="text-sm text-ink/80 dark:text-paper/80 leading-relaxed mb-4">${pet.longDesc}</p>
          
          <h4 class="font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-2">Traits & Temperament</h4>
          <div class="flex flex-wrap gap-1 mb-4">
            ${pet.temperament.map(t => `<span class="text-xs px-2 py-1 rounded-full border border-ink/10 dark:border-white/10 bg-paper dark:bg-zinc-800 text-ink/70 dark:text-paper/70">${t}</span>`).join("")}
          </div>

          <h4 class="font-mono text-[10px] uppercase tracking-wider text-ink/40 dark:text-paper/40 mb-2">Health Log</h4>
          <div class="flex flex-wrap gap-1 mb-4">
            ${pet.health.map(h => `<span class="text-[10px] px-2 py-0.5 rounded bg-clover/10 text-clover dark:text-emerald-400 font-mono">✓ ${h}</span>`).join("")}
          </div>
        </div>

        <div class="flex gap-2 border-t border-ink/10 dark:border-white/10 pt-4 mt-2">
          <button onclick="toggleFavFromModal(${pet.id})" class="flex-1 py-2.5 border-2 border-stampred rounded-full text-xs font-mono uppercase tracking-widest text-stampred hover:bg-stampred/5 transition-colors flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav ? '#C1432E' : 'none'}" stroke="#C1432E" stroke-width="2"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.6 2 5 5.6 5 8 5 10 6.5 12 9c2-2.5 4-4 6.4-4 3.6 0 5.2 3.6 3.6 6.7C19.5 16.1 12 21 12 21z"/></svg>
            ${isFav ? 'Favorited' : 'Favorite'}
          </button>
          
          <button id="modalShortlistBtn" onclick="toggleShortlistFromModal(${pet.id})" class="flex-[1.5] py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-paper dark:text-ink ${isShort ? 'bg-ink dark:bg-paper' : 'bg-denim dark:bg-mustard'} hover:opacity-90 transition-all">
            ${isShort ? 'Remove Shortlist' : 'Add to Shortlist'}
          </button>
        </div>
      </div>
    </div>
  `;
  detailsModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

window.closePetDetails = function() {
  detailsModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

window.toggleFavFromModal = function(id) {
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  updateFavCount();
  applyFilters();
  openPetDetails(id); // reload modal content to reflect updated state
};

window.toggleShortlistFromModal = function(id) {
  state.shortlist.has(id) ? state.shortlist.delete(id) : state.shortlist.add(id);
  updateShortlistPill();
  applyFilters();
  openPetDetails(id); // reload modal content to reflect updated state
};

// Handle closing modal when clicking outside
detailsModal.addEventListener("click", e => {
  if (e.target === detailsModal) closePetDetails();
});

// Scheduling Drawer controller
const bookingDrawer = document.getElementById("bookingDrawer");
const drawerItemsList = document.getElementById("drawerItemsList");

function openBookingDrawer() {
  if (state.shortlist.size === 0) return;
  drawerItemsList.innerHTML = Array.from(state.shortlist).map(id => {
    const pet = petData.find(p => p.id === id);
    if (!pet) return "";
    return `
      <div class="flex items-center gap-3 p-3 bg-paper dark:bg-zinc-800 rounded-xl border border-ink/5 dark:border-white/5">
        <img src="${pet.image}" alt="${pet.name}" class="w-12 h-12 object-cover rounded-lg" />
        <div class="flex-1">
          <p class="font-serif text-sm text-ink dark:text-paper font-semibold">${pet.name}</p>
          <p class="font-mono text-[10px] text-ink/50 dark:text-paper/50">${pet.breed} · TAG #${pet.tag}</p>
        </div>
        <button onclick="removeShortlistFromDrawer(${pet.id})" class="text-ink/40 dark:text-paper/40 hover:text-stampred dark:hover:text-stampred text-lg p-1">&times;</button>
      </div>
    `;
  }).join("");

  bookingDrawer.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

window.closeBookingDrawer = function() {
  bookingDrawer.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

window.removeShortlistFromDrawer = function(id) {
  state.shortlist.delete(id);
  updateShortlistPill();
  applyFilters();
  if (state.shortlist.size === 0) {
    closeBookingDrawer();
  } else {
    openBookingDrawer(); // reload list contents
  }
};

bookingDrawer.addEventListener("click", e => {
  if (e.target === bookingDrawer) closeBookingDrawer();
});

// Form Submission & Success Flow
const bookingForm = document.getElementById("bookingForm");
const successModal = document.getElementById("successModal");
const successShortlistSummary = document.getElementById("successShortlistSummary");

bookingForm.addEventListener("submit", e => {
  e.preventDefault();
  
  const name = document.getElementById("visitorName").value;
  const email = document.getElementById("visitorEmail").value;
  const date = document.getElementById("visitDate").value;
  const slot = document.getElementById("visitSlot").value;

  // Render summaries in Success modal
  successShortlistSummary.innerHTML = Array.from(state.shortlist).map(id => {
    const pet = petData.find(p => p.id === id);
    if (!pet) return "";
    return `
      <div class="flex flex-col items-center p-2 bg-paper dark:bg-zinc-800 rounded-xl border border-ink/5 dark:border-white/5">
        <img src="${pet.image}" alt="${pet.name}" class="w-16 h-16 object-cover rounded-lg mb-1" />
        <span class="font-serif text-xs text-ink dark:text-paper font-bold">${pet.name}</span>
        <span class="font-mono text-[9px] text-ink/40 dark:text-paper/40">#${pet.tag}</span>
      </div>
    `;
  }).join("");

  document.getElementById("successDate").textContent = new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById("successSlot").textContent = slot.charAt(0).toUpperCase() + slot.slice(1);
  document.getElementById("successName").textContent = name;

  // Clear shortlisted states
  state.shortlist.clear();
  updateShortlistPill();
  applyFilters();
  bookingForm.reset();

  closeBookingDrawer();
  
  // Show Success Modal
  successModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

window.closeSuccessModal = function() {
  successModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
};

successModal.addEventListener("click", e => {
  if (e.target === successModal) closeSuccessModal();
});

/* ---------- event delegation on grid ---------- */
grid.addEventListener("click", e => {
  const favBtn = e.target.closest(".favorite-btn");
  if (favBtn) {
    e.stopPropagation();
    const id = Number(favBtn.dataset.id);
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    updateFavCount();
    applyFilters();
    return;
  }

  const cb = e.target.closest(".shortlist-checkbox");
  if (cb) {
    e.stopPropagation();
    const id = Number(cb.dataset.id);
    cb.checked ? state.shortlist.add(id) : state.shortlist.delete(id);
    updateShortlistPill();
    return;
  }

  const card = e.target.closest(".tag-card");
  if (card) {
    const id = Number(card.dataset.id);
    openPetDetails(id);
  }
});

grid.addEventListener("change", e => {
  const cb = e.target.closest(".shortlist-checkbox");
  if (cb) {
    const id = Number(cb.dataset.id);
    cb.checked ? state.shortlist.add(id) : state.shortlist.delete(id);
    updateShortlistPill();
  }
});

/* ---------- chips ---------- */
document.querySelectorAll(".filter-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    state.category = chip.dataset.category;
    state.showFavoritesOnly = false;
    updateFavBtnState();
    setActiveChip(state.category);
    applyFilters();
  });
});

document.querySelectorAll(".hero-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    state.category = chip.dataset.category;
    state.showFavoritesOnly = false;
    updateFavBtnState();
    setActiveChip(state.category);
    document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
    applyFilters();
  });
});

/* ---------- search inputs (both hero + section, kept in sync) ---------- */
const searchInput = document.getElementById("searchInput");
const heroSearchInput = document.getElementById("heroSearchInput");

searchInput.addEventListener("input", e => {
  state.query = e.target.value;
  heroSearchInput.value = e.target.value;
  applyFilters();
});

heroSearchInput.addEventListener("input", e => {
  state.query = e.target.value;
  searchInput.value = e.target.value;
});

document.getElementById("heroSearchForm").addEventListener("submit", () => {
  state.query = heroSearchInput.value;
  searchInput.value = heroSearchInput.value;
  document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  applyFilters();
});

document.getElementById("clearShortlist").addEventListener("click", () => {
  state.shortlist.clear();
  updateShortlistPill();
  applyFilters();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("mobileNav").classList.toggle("hidden");
});

// Favorites Count button triggers filters
document.getElementById("favBtn").addEventListener("click", () => {
  state.showFavoritesOnly = !state.showFavoritesOnly;
  updateFavBtnState();
  if (state.showFavoritesOnly) {
    // Reset category chip
    setActiveChip("");
  } else {
    setActiveChip(state.category);
  }
  document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  applyFilters();
});

/* ---------- theme controls ---------- */
const themeBtn = document.getElementById("themeToggleBtn");
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved === "dark" || (!saved && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon();
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  }
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

// Open booking drawer click handlers
document.getElementById("favCount").parentElement.addEventListener("click", (e) => {
  // Let the fav toggle be handled unless we specifically want shortlist trigger. Wait, favCount button is for favorites.
});

document.getElementById("shortlistPill").addEventListener("click", (e) => {
  if (e.target.closest("#clearShortlist")) return; // handled by clear shortlist listener
  openBookingDrawer();
});

document.querySelector("a[href='#browse']").addEventListener("click", (e) => {
  // Add a click handler to "Start a visit" in header to open drawer if shortlist is active
  if (state.shortlist.size > 0) {
    e.preventDefault();
    openBookingDrawer();
  }
});

/* ---------- init ---------- */
initTheme();
setActiveChip("all");
updateFavCount();
updateShortlistPill();
applyFilters();
