const tickerTrack = document.querySelector(".ticker div");

if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}

const revealItems = document.querySelectorAll(
  ".section-heading, .feature-strip article, .studio-panel, .business-card-wrap, .contact-section > div, .reveal"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -70px"
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

const momentsCarousel = document.querySelector("[data-moments]");

if (momentsCarousel) {
  const photos = Array.from(momentsCarousel.querySelectorAll("[data-moment-photo]"));
  const copies = Array.from(momentsCarousel.querySelectorAll("[data-moment-copy]"));
  const previousButton = momentsCarousel.querySelector("[data-moment-prev]");
  const nextButton = momentsCarousel.querySelector("[data-moment-next]");
  let activeMoment = 0;
  let autoplayTimer;

  const setMoment = (nextIndex) => {
    const total = photos.length;

    if (!total) return;

    activeMoment = (nextIndex + total) % total;
    const previousIndex = (activeMoment - 1 + total) % total;
    const nextPhotoIndex = (activeMoment + 1) % total;

    photos.forEach((photo, index) => {
      photo.classList.toggle("is-active", index === activeMoment);
      photo.classList.toggle("is-prev", index === previousIndex);
      photo.classList.toggle("is-next", index === nextPhotoIndex);
    });

    copies.forEach((copy, index) => {
      copy.classList.toggle("is-active", index === activeMoment);
    });
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
    }
  };

  const goPrevious = () => {
    setMoment(activeMoment - 1);
    stopAutoplay();
  };

  const goNext = () => {
    setMoment(activeMoment + 1);
    stopAutoplay();
  };

  previousButton?.addEventListener("click", goPrevious);
  nextButton?.addEventListener("click", goNext);

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goPrevious();
    if (event.key === "ArrowRight") goNext();
  });

  setMoment(0);
  autoplayTimer = window.setInterval(() => {
    setMoment(activeMoment + 1);
  }, 5000);
}

const productGrid = document.querySelector("#productGrid");
const productDetails = [
  {
    title: "Aqua Esports Jersey",
    type: "Esports team jersey",
    detail: "Light aqua esports jersey with EA Sports front mark, player name/number back print, and geometric sleeve panels.",
    closeups: ["CLOSE UP (12).png", "CLOSE UP (13).png", "CLOSE UP (14).png"]
  },
  {
    title: "STEM Xplore Polo",
    type: "STEM club polo",
    detail: "Cream and navy STEM Xplore polo with gold typography, floral sleeve pattern, and a clean academic club finish.",
    closeups: ["CLOSE UP (15).png", "CLOSE UP (16).png"]
  },
  {
    title: "Help For Hope Tee",
    type: "Charity event tee",
    detail: "Warm cream-to-coral Help For Hope tee with orange collar, soft gradient body, and charity event statement print.",
    closeups: ["CLOSE UP (25).png", "CLOSE UP (26).png", "CLOSE UP (27).png"]
  },
  {
    title: "Burgundy V-Neck Jersey",
    type: "Campus jersey design",
    detail: "Cream and burgundy V-neck jersey with maroon trim, front crest placement, and matching sleeve detail.",
    closeups: ["CLOSE UP (28).png", "CLOSE UP (29).png"]
  },
  {
    title: "Jasmine Name Set",
    type: "Custom name jersey",
    detail: "White, brown, and pink custom name jersey with bold 07 back number and clean sponsor-style front layout.",
    closeups: ["CLOSE UP (32).png"]
  },
  {
    title: "Purple Tiger Jersey",
    type: "Sport club jersey",
    detail: "Purple and yellow JSP tiger jersey with bold mascot graphics, V-neck collar, and athletic sleeve pattern.",
    closeups: ["CLOSE UP (30).png", "CLOSE UP (31).png"]
  },
  {
    title: "Blue Stripe Atletigo",
    type: "Football jersey",
    detail: "White and royal blue striped football jersey with gold crest embroidery and classic vertical stripe styling.",
    closeups: ["CLOSE UP (36).png"]
  },
  {
    title: "Black Blue Atletigo",
    type: "Football jersey",
    detail: "Black and blue Atletigo jersey with gold crest, dark V-neck collar, and large gold back number treatment.",
    closeups: ["CLOSE UP (33).png", "CLOSE UP (34).png", "CLOSE UP (35).png"]
  },
  {
    title: "Fun Run Jersey",
    type: "Running event tee",
    detail: "Navy fun run jersey with decorative tonal pattern, yellow cuff detail, and bold event logo on the chest.",
    closeups: ["CLOSE UP (41).png", "CLOSE UP (42).png"]
  },
  {
    title: "Sulam Green Polo",
    type: "Education polo shirt",
    detail: "Green SULAM polo with black collar, multi-color education logo, and Physical & Health Education back text.",
    closeups: ["CLOSE UP (43).png", "CLOSE UP (44).png"]
  },
  {
    title: "Fact Crew Polo",
    type: "Crew polo shirt",
    detail: "Black, white, and red Fact Crew polo with button collar, sleeve stripe, Malaysian flag detail, and crest patch.",
    closeups: ["CLOSE UP (10).png", "CLOSE UP (11).png"]
  },
  {
    title: "Angsana Black Jersey",
    type: "Campus sport jersey",
    detail: "Black, white, and teal Angsana jersey with sharp panel lines, striped hem detail, and sporty V-neck collar.",
    closeups: ["CLOSE UP (38).png", "CLOSE UP (39).png", "CLOSE UP (40).png"]
  },
  {
    title: "Tutti Frutti Squad",
    type: "Pastel team jersey",
    detail: "Pastel blue and pink squad jersey with playful geometric panels, back number print, and light teamwear styling.",
    closeups: []
  },
  {
    title: "OPEMS Beige Polo",
    type: "Administration polo",
    detail: "Beige OPEMS polo with brown collar, floral background pattern, sleeve flags, and department text on the back.",
    closeups: ["CLOSE UP (4).png", "CLOSE UP (5).png", "CLOSE UP (6).png"]
  },
  {
    title: "Fesko Brown Polo",
    type: "Event polo shirt",
    detail: "Brown and cream FESKO polo with white collar, curved chest logo, and clean back-name customization area.",
    closeups: ["CLOSE UP (7).png", "CLOSE UP (8).png", "CLOSE UP (9).png"]
  },
  {
    title: "Sarawak Council Polo",
    type: "Committee polo",
    detail: "Black and red UiTM Sarawak council polo with pocket detail, official crest, and back committee wording.",
    closeups: ["CLOSE UP (23).png", "CLOSE UP (24).png"]
  },
  {
    title: "FSI Synergy Jersey",
    type: "Purple team jersey",
    detail: "Purple FSI Synergy jersey with white sleeve trim, black side graphics, and bold 24/25 back number style.",
    closeups: ["CLOSE UP (21).png", "CLOSE UP (22).png"]
  },
  {
    title: "Smiles Beyond Walls",
    type: "Community event tee",
    detail: "Light blue Smiles Beyond Walls tee with handprint graphics, soft educational event artwork, and clean sleeve trim.",
    closeups: ["CLOSE UP (19).png", "CLOSE UP (20).png"]
  },
  {
    title: "Journalism Maroon Jersey",
    type: "Faculty jersey",
    detail: "Maroon Journalism UiTM Shah Alam jersey with tonal swirl pattern, cream panels, and faculty identity graphics.",
    closeups: ["CLOSE UP (17).png", "CLOSE UP (18).png"]
  },
  {
    title: "Occupational Therapy Jersey",
    type: "Faculty jersey",
    detail: "Cream and maroon Occupational Therapy jersey with geometric pattern, LSA neck label, and faculty back text.",
    closeups: ["CLOSE UP (2).png", "CLOSE UP (3).png", "CLOSE UP.png"]
  }
];

if (productGrid && !productGrid.querySelector("[data-product-open]")) {
  const products = Array.from({ length: 20 }, (_, item) => {
    const index = item + 1;
    const product = productDetails[item];
    const title = product.title;
    const type = product.type;
    const detail = product.detail;
    const closeups = product.closeups.map((file) => `assets/closeups/${file}`);
    const src = `assets/products/product-${String(index).padStart(2, "0")}.png`;

    return { index, src, title, type, detail, closeups };
  });

  productGrid.innerHTML = products
    .map(
      ({ index, src, title, type, detail, closeups }) => `
        <article class="product-card reveal is-visible">
          <button
            type="button"
            class="product-open"
            data-product-open
            data-title="${title}"
            data-type="${type}"
            data-detail="${detail}"
            data-closeups="${closeups.join("|")}"
            data-src="${src}"
            aria-label="View close-up photos of ${title}"
          >
            <div class="product-image-wrap">
              <img src="${src}" alt="${title} by LS Apparel" loading="lazy" />
              <span class="product-index">${String(index).padStart(2, "0")}</span>
              <span class="quick-view">View close-up</span>
            </div>
            <div class="product-info">
              <div>
                <h3>${title}</h3>
                <span>${type}</span>
              </div>
            </div>
          </button>
        </article>
      `
    )
    .join("");
}

const createImageCard = ({ src, alt, label, className = "image-frame", index = 1 }) => `
  <figure class="${className} reveal is-visible">
    <a href="${src}" target="_blank" rel="noopener noreferrer" aria-label="Open ${alt}">
      <img src="${src}" alt="${alt}" loading="lazy" />
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </a>
  </figure>
`;

const sizingGrid = document.querySelector("#sizingGrid");

if (sizingGrid && !sizingGrid.children.length) {
  sizingGrid.innerHTML = Array.from({ length: 10 }, (_, item) => {
    const index = item + 1;
    const src = `assets/sizing/size-${String(index).padStart(2, "0")}.png`;

    return createImageCard({
      src,
      alt: `LS Apparel sizing chart ${index}`,
      index
    });
  }).join("");
}

const priceListGrid = document.querySelector("#priceListGrid");

if (priceListGrid && !priceListGrid.children.length) {
  priceListGrid.innerHTML = Array.from({ length: 4 }, (_, item) => {
    const index = item + 1;
    const src = `assets/pricing/price-${String(index).padStart(2, "0")}.png`;

    return createImageCard({
      src,
      alt: `LS Apparel price list ${index}`,
      className: "price-list-frame",
      index
    });
  }).join("");
}

const eventGrid = document.querySelector("#eventGrid");

if (eventGrid && !eventGrid.children.length) {
  const eventSources = [
    "assets/events/event-01.png",
    "assets/events/event-02.png",
    "assets/events/event-03.png",
    "assets/events/event-04.png",
    "assets/events/event-05.png",
    "assets/events/event-06.png",
    "assets/events/Event-07.png",
    "assets/events/Event-08.png",
    "assets/events/Event-09.png"
  ];

  eventGrid.innerHTML = eventSources.map((src, item) => {
    const index = item + 1;

    return createImageCard({
      src,
      alt: `LS Apparel event photo ${index}`,
      label: `Event photo ${index}`,
      className: `event-frame event-frame--${index}`,
      index
    });
  }).join("");
}

const productModal = document.querySelector("[data-product-modal]");
const modalTitle = productModal?.querySelector("#modalTitle");
const modalType = productModal?.querySelector("[data-modal-type]");
const modalMain = productModal?.querySelector("[data-modal-main]");
const modalCloseupOne = productModal?.querySelector("[data-modal-closeup-one]");
const modalCloseupTwo = productModal?.querySelector("[data-modal-closeup-two]");
const modalCloseupThree = productModal?.querySelector("[data-modal-closeup-three]");
const closeModalButtons = productModal?.querySelectorAll("[data-modal-close]");

const setModalImage = (image, src, alt) => {
  if (!image) return;

  image.src = src;
  image.alt = alt;
  image.dataset.hdSrc = src;
};

const setCloseupImage = (image, src, alt) => {
  const frame = image?.closest(".closeup-frame");

  if (!image || !frame) return;

  if (!src) {
    frame.classList.add("is-hidden");
    image.removeAttribute("src");
    image.alt = "";
    return;
  }

  frame.classList.remove("is-hidden");
  setModalImage(image, src, alt);
};

const openProductModal = (button) => {
  if (!productModal) return;

  const title = button.dataset.title || "LSA Drop";
  const type = button.dataset.type || "Custom apparel design";
  const detail = button.dataset.detail || "Custom clothing design with LS Apparel finishing.";
  const src = button.dataset.src;
  const closeups = (button.dataset.closeups || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!src) return;

  if (modalTitle) modalTitle.textContent = title;
  if (modalType) modalType.textContent = `${type}. ${detail}`;
  setModalImage(modalMain, src, `${title} full clothing design`);
  setCloseupImage(modalCloseupOne, closeups[0] || src, `${title} close-up detail 1`);
  setCloseupImage(modalCloseupTwo, closeups[1], `${title} close-up detail 2`);
  setCloseupImage(modalCloseupThree, closeups[2], `${title} close-up detail 3`);

  productModal.hidden = false;
  document.body.classList.add("modal-open");
};

const closeProductModal = () => {
  if (!productModal) return;

  productModal.hidden = true;
  document.body.classList.remove("modal-open");
};

document.querySelectorAll("[data-product-open]").forEach((button) => {
  button.addEventListener("click", () => openProductModal(button));
});

closeModalButtons?.forEach((button) => {
  button.addEventListener("click", closeProductModal);
});

productModal?.querySelectorAll(".modal-gallery img").forEach((image) => {
  image.addEventListener("click", () => {
    if (image.dataset.hdSrc) {
      window.open(image.dataset.hdSrc, "_blank", "noopener,noreferrer");
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && productModal && !productModal.hidden) {
    closeProductModal();
  }
});
