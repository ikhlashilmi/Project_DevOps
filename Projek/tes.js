const books = [
  {
    title: "The Maze Runner",
    author: "James Dashner",
    description: "A dystopian novel about a group of teens who find themselves trapped in a mysterious and deadly maze.",
    price: 140000,
    image_url: "COVER BUKU/The Maze Runner.png",
    recommended: false,
    genres: ["fiction", "adventure"]
},
{
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description: "The first book in the Harry Potter series, introducing the young wizard Harry Potter and his adventures at Hogwarts.",
    price: 150000,
    image_url: "COVER BUKU/Harry Potter and the Philosopher's Stone.png",
    recommended: false,
    genres: ["fiction", "fantasy"]
},
{
    title: "Divergent",
    author: "Veronica Roth",
    description: "A dystopian novel set in a future society divided into factions based on virtues, following the story of a young girl who doesn't fit into any one group.",
    price: 130000,
    image_url: "COVER BUKU/Divergent.png",
    recommended: false,
    genres: ["fiction", "adventure"]
},
{
    title: "Dilan 1990",
    author: "Pidi Baiq",
    description: "A popular Indonesian novel about the love story between Dilan and Milea during their high school years in 1990.",
    price: 125000,
    image_url: "COVER BUKU/Dilan 1990.png",
    recommended: false,
    genres: ["fiction", "romance"]
},
{
    title: "Sherlock Holmes: The Complete Novels and Stories",
    author: "Arthur Conan Doyle",
    description: "A collection of all the classic detective stories featuring Sherlock Holmes and Dr. Watson.",
    price: 180000,
    image_url: "COVER BUKU/Sherlock Holmes The Complete Novels and Stories.png",
    recommended: false,
    genres: ["fiction", "mystery"]
},
{
    title: "The Hunger Games Mockingjay",
    author: "Suzanne Collins",
    description: "A dystopian novel about a televised fight to the death involving teens from different districts of a post-apocalyptic society.",
    price: 135000,
    image_url: "COVER BUKU/The Hunger Games Mockingjay.png",
    recommended: false,
    genres: ["fiction", "adventure"]
},
{
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    author: "Rick Riordan",
    description: "A fantasy novel about a boy who discovers he is the son of a Greek god and embarks on a journey to prevent a war among the gods.",
    price: 145000,
    image_url: "COVER BUKU/Percy Jackson & the Olympians The Lightning Thief.png",
    recommended: false,
    genres: ["fiction", "fantasy"]
},
{
    title: "Twilight",
    author: "Stephenie Meyer",
    description: "A young adult fantasy romance novel about a teenage girl who falls in love with a vampire.",
    price: 140000,
    image_url: "COVER BUKU/Twilight.png",
    recommended: false,
    genres: ["fiction", "romance"]
},
{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel set in the American South, exploring themes of racial injustice and moral growth through the eyes of a young girl.",
    price: 140000,
    image_url: "COVER BUKU/To Kill a Mockingbird.png",
    recommended: false,
    genres: ["fiction", "classic"]
},
{
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "A mystery thriller novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum and discovers a trail of hidden secrets.",
    price: 160000,
    image_url: "COVER BUKU/The Da Vinci Code.png",
    recommended: false,
    genres: ["fiction", "mystery", "thriller"]
},
{
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    description: "A satirical romantic comedy novel that follows the lives of wealthy families in Singapore and the cultural clash between old money and new.",
    price: 160000,
    image_url: "COVER BUKU/Crazy Rich Asians.png",
    recommended: false,
    genres: ["fiction", "romance", "comedy"]
},
{
    title: "War of the Worlds",
    author: "H.G. Wells",
    description: "A science fiction novel about an alien invasion of Earth, narrated by an unnamed protagonist who struggles to survive as humanity faces extinction.",
    price: 125000,
    image_url: "COVER BUKU/War of the Worlds.png",
    recommended: false,
    genres: ["fiction", "science fiction"]
},
{
    title: "The Naughty Spectre",
    author: "L. Catalian",
    description: "'The Naught Spectre' is a gripping supernatural thriller that delves into the eerie mysteries of a small, haunted town.",
    price: 119000,
    image_url: "COVER BUKU/The Naughty Spectre.png",
    recommended: true,
    genres: ["fiction", "mystery"]
},
{
    title: "We Could Be Heroes",
    author: "Margaret Finnegan",
    description: "We Could Be Heroes is an inspiring tale of ordinary people rising to extraordinary challenges. When a group of unlikely friends discovers their hidden talents, they unite to make a lasting impact on their community and prove that anyone can be a hero",
    price: 123000,
    image_url: "COVER BUKU/We Could Be Heroes.png",
    recommended: false,
    genres: ["fiction", "adventure"]
},
{
    title: "The Legend Of Skeleton Man",
    author: "Joseph Bruhac",
    description: "'The Legend of Skeleton Man' is a chilling adventure that follows a group of friends who uncover the dark secrets of a long-forgotten legend. As they delve into the mystery, they must confront their deepest fears to survive the sinister presence of Skeleton Man.",
    price: 143000,
    image_url: "COVER BUKU/The Legend Of Skeleton Man.png",
    recommended: false,
    genres: ["fiction", "adventure", "Mystery"]
},
{
    title: "The Rambling",
    author: "Jimmy Cajoleas",
    description: "'The Rambling' is a gripping mystery thriller that follows a troubled detective who stumbles upon a series of cryptic clues leading to an underground network of secrets. As he delves deeper into the labyrinth of lies, he must navigate danger and deception to uncover the truth before it consumes him.",
    price: 150000,
    image_url: "COVER BUKU/The Rambling.png",
    recommended: false,
    genres: ["fiction", "Thriller", "Mystery"]
},
{
    title: "NightBooks",
    author: "J.A White",
    description: "'NightBooks' is a captivating mystery fiction novel that centers around a young boy who discovers a hidden library filled with eerie, magical books. As he unravels the secrets within their pages, he must confront a sinister force that blurs the line between reality and the stories he reads.",
    price: 119000,
    image_url: "COVER BUKU/NightBooks.png",
    recommended: false,
    genres: ["fiction", "Mystery"]
},
{
    title: "Onibi : Diary Of a Yokai Ghost Hunter",
    author: "Atelier Sento",
    description: "'Onibi: Diary of a Yokai Ghost Hunter' is an exhilarating adventure mystery that follows a determined ghost hunter as she navigates Japan's supernatural realm. Armed with ancient knowledge and modern courage, she uncovers the chilling mysteries of yokai spirits while battling her own inner demons.",
    price: 125000,
    image_url: "COVER BUKU/Onibi Diary Of a Yokai Ghost Hunter.png",
    recommended: false,
    genres: ["fiction", "Adventure","Mystery"]
},
{
    title: "SkyBorn : Sparrow Rising",
    author: "Jessica Khoury",
    description: "'SkyBorn: Sparrow Rising' is a pulse-pounding adventure fiction that follows a fearless pilot navigating through a war-torn sky realm. As she faces perilous missions and formidable enemies, she must harness her skills and courage to defy the odds and soar towards victory.",
    price: 165000,
    image_url: "COVER BUKU/SkyBorn Sparrow Rising.png",
    recommended: false,
    genres: ["fiction", "Adventure","Action"]
},
{
    title: "Scavengger",
    author: "Darrey Simpson",
    description: "'Scavengger' is a thrilling action-adventure fiction that plunges readers into a post-apocalyptic world where scavengers compete fiercely for survival. Amidst treacherous landscapes and rival factions, one scavenger must rely on wit, cunning, and daring to secure rare resources and navigate deadly encounters.",
    price: 1210000,
    image_url: "COVER BUKU/Scavengger.png",
    recommended: false,
    genres: ["fiction", "Adventure", "Action"]
},
{
    title: "The Crimes of Steamfield",
    author: "Alberto Rey",
    description: "'The Crimes of Steamfield' is a gripping adventure fiction that blends action with intricate puzzles, as a resourceful detective uncovers a series of enigmatic crimes in the steam-powered city of Steamfield. With each clue leading deeper into a web of deceit and danger, the detective must unravel the mysteries before they tear the city apart.",
    price: 1210000,
    image_url: "COVER BUKU/The Crimes of Steamfield.png",
    recommended: false,
    genres: ["fiction", "Adventure", "Action", "Puzzle"]
},
{
    title: "Story Collector",
    author: "Kristin O’donnelltubb",
    description: "'Story Collector' is a captivating fiction adventure that intertwines puzzle-solving with thrilling exploration. Follow a determined protagonist who embarks on a quest to gather lost tales scattered across mystical realms, encountering challenges that test both wit and courage along the way.",
    price: 1210000,
    image_url: "COVER BUKU/Story Collector.png",
    recommended: false,
    genres: ["fiction", "Adventure", "Puzzle"]
},
// Tambahkan data buku lainnya di sini
];

const reviews = [
  {
    reviewer: "Kokoh Mahdi",
    reviewer_image: "icon/ReviewKokoh.jpg",
    rating: 3,
    review: "Mixed Feelings about Dilan 1990",
    review_description: "Dilan 1990 is a nostalgic trip back to high school days with its ups and downs. While it captures the teenage spirit and romance effectively, the storyline feels predictable at times. It's a decent read but doesn't stand out in its genre."
  },
  {
    reviewer: "Ervin",
    reviewer_image: "icon/ReviewErvin.jpg",
    rating: 5,
    review: "Thrilling Adventure in The Maze Runner",
    review_description: "The Maze Runner is an exhilarating and gripping tale that keeps you on the edge of your seat. With its fast-paced plot and well-developed characters, it's a must-read for fans of dystopian fiction. The story is packed with twists and turns that keep you guessing until the very end."
  }

  // Tambahkan data ulasan lainnya di sini
];

const genreImages = {
  "fiction": "icon/fiction.png",
  "classic": "icon/classic.png",
  "Fantasy": "icon/Fantasy.png",
  "dystopian": "icon/dystopian.png",
  "romance": "icon/romance.png",
  "mystery": "icon/mystery.png",
  "horror": "icon/horror.png",
}

const accounts = {
  "user1": {
    email: "admin@gmail.com",
    password: "Admin@0000",
    role: "admin",
    name: "Muhammad Akram Daffa",
    image_url: "icon/profile (black).png",
    address: "Jl. Raya Bogor No. 123, Bogor, Jawa Barat",
    phone: "081234567890"
  },
  "user2": {
    email: "user@gmail.com",
    password: "user@0000",
    role: "user",
    name: "Pradika Giza Adara",
    image_url: "icon/profile (black).png",
    address: "Jl. Raya Bogor No. 456, Bogor, Jawa Barat",
    phone: "081987654320"
  } 
  // add another account by using register
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page');
  const profileLink = document.querySelector('.profile-link');
  const userProfile = document.querySelector('.user-profile');
  const cartLink = document.querySelector('.cart-link');
  const otherContainer = document.querySelector('.other-container');
  const logOut = document.getElementById('logout-button');
  const searchInput = document.querySelector('.input__search');
  const searchResults = document.getElementById('search-results');

  if (cartLink && otherContainer) {
    cartLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      otherContainer.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
      if (!cartLink.contains(event.target) && event.target !== cartLink) {
        otherContainer.classList.remove('show');
      }
    });
  }

  if (profileLink && userProfile) {
    profileLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      userProfile.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
      if (!userProfile.contains(event.target) && event.target !== profileLink) {
        userProfile.classList.remove('show');
      }
    });

    logOut.addEventListener('click', () => {
      localStorage.removeItem('currentUser'); // Remove user data from local storage
      window.location.href = 'Login.html'; // Redirect to login page
    });
  }

  if (page === 'home') {
    initializeHomePage();
  } else if (page === 'login') {
    initializeLoginPage();
  } else if (page === 'profile') {
    initializeProfilePage();
  } else if (page === 'detail') {
    initializeDetailPage();
  } else if (page === 'cart') {
    initializeCartPage();
  } else if (page === 'payment') {
    initializePaymentPage();
  } else if (page === 'review') {
    initializeReviewPage();
  } else if (page === 'invoice') {
    initializeInvoicePage();
  }

  // Search functionality
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      searchResults.innerHTML = '';

      if (query) {
        searchResults.style.display = 'block'; // Show results when there is a query
        const filteredBooks = books.filter(book =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query)
        );

        filteredBooks.forEach(book => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result-item');
          resultItem.innerHTML = `
            <img src="${book.image_url}" alt="${book.title}">
            <div class="result-details">
              <span class="result-title">${truncateString(book.title, 20)}</span>
              <span class="result-author">${book.author}</span>
              <span class="result-price">Rp${book.price.toLocaleString()}</span>
            </div>
          `;
          resultItem.addEventListener('click', () => {
            window.location.href = `detail.html?title=${encodeURIComponent(book.title)}`;
          });
          searchResults.appendChild(resultItem);
        });
      } else {
        searchResults.style.display = 'none'; // Hide results when query is empty
      }
    });

    searchInput.addEventListener('focus', function() {
      if (this.value) {
        searchResults.style.display = 'block'; // Show results when input is focused and has a value
      }
    });

    searchInput.addEventListener('blur', function() {
      // Hide results when input loses focus
      setTimeout(() => {
        searchResults.style.display = 'none';
      }, 200); // Delay to allow click event on result items
    });
  }
});

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

function initializeLoginPage(){
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = loginForm.email.value;
      const password = loginForm.password.value;

      if (!validateEmail(email)) {
        loginMessage.textContent = 'Invalid email format.';
        return;
      }

      let validUser = false;
      for (const user in accounts) {
          if (accounts[user].email === email && accounts[user].password === password) {
              validUser = true;
              localStorage.setItem('currentUser', JSON.stringify(accounts[user]));
              window.location.href = 'Home.html'; // Redirect to the main page or dashboard
              break;
          }
      }
      if (!validUser) {
          loginMessage.textContent = 'Invalid email or password.';
      }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

function initializeRegisterPage(){
  const registerForm = document.getElementById('register-form');
  const registerMessage = document.getElementById('register-message');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    if (!validateEmail(email)) {
      registerMessage.textContent = 'Invalid email format.';
      return;
    }

    if (!validatePassword(password)) {
        registerMessage.textContent = 'Password must be at least 8 characters long, include a symbol, a number, an uppercase and a lowercase letter.';
        return;
    }

    if (password !== confirmPassword) {
      registerMessage.textContent = 'Passwords do not match.';
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      registerMessage.textContent = 'Invalid phone number format. Please use a valid phone number format.';
      return;
    }
  
    for (const user in accounts) {
        if (accounts[user].email === email) {
            registerMessage.textContent = 'Email is already registered.';
            return;
        }
    }
      
      // Add the new user to accounts (for demonstration purposes, this won't persist)
    const newUserKey = `user${Object.keys(accounts).length + 1}`;
    accounts[newUserKey] = {
        email: email,
        password: password,
        role: 'user',
        Name: fullName,
        image_url: 'icon/profile (black).png',
        address: address,
        phone: phoneNumber
    };
      
    // Redirect to the login page after successful registration
    window.location.href = 'login.html';
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      return passwordRegex.test(password);
  }

  function validatePhoneNumber(phoneNumber) {
    // Phone number regex: accepts digits, optional '+' at start, and optional '-' in between
    const phoneRegex = /^[+]?\d+(?:-?\d+)*$/;
    return phoneRegex.test(phoneNumber);
  }
}

function initializeProfilePage(){
  const profileDisplay = document.getElementById('profile-container');
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if(user){
    const {email, name, image_url, address, phone} = user;
    console.log(email, name, image_url, address, phone);
    profileDisplay.innerHTML = `
    <div class="profile-image">
      <img style="width:250px; height:250px; margin-right: 20px;" src="${image_url}" alt="Profile Image">
    </div>
    <div class="profile-info">
      <h2 style="margin-bottom: 12px;" class="name">${name}</h2>
      <p style="margin-bottom: 12px;" class="email">Email: ${email}</p>
      <p style="margin-bottom: 12px;" class="address">Address: ${address}</p>
      <p style="margin-bottom: 12px;" class="phone-number">Phone Number: ${phone}</p>
    </div>
    
    `;

    // CSS inline untuk tata letak
    profileDisplay.style.display = 'flex';
    profileDisplay.style.alignItems = 'center';
    profileDisplay.style.justifyContent = 'center';
    profileDisplay.style.padding = '20px';

    const profileInfo = profileDisplay.querySelector('.profile-info');
    profileInfo.style.textAlign = 'left';
    profileInfo.style.marginRight = '20px';

    const profileImage = profileDisplay.querySelector('.profile-image');
    profileImage.style.textAlign = 'right';
  } else {
    profileDisplay.textContent = 'Please login to view your profile.';
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.classList.add('login-button');
    loginButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
    profileDisplay.appendChild(loginButton);

    // CSS inline untuk tata letak ketika tidak ada pengguna yang masuk
    profileDisplay.style.display = 'flex';
    profileDisplay.style.alignItems = 'center';
    profileDisplay.style.justifyContent = 'center';
    profileDisplay.style.textAlign = 'center';
  }
}


function initializeHomePage() {
  displayBooks('recommended-books', books.filter(book => book.recommended));
  displayBooks('all-books-list', books);
  displayReviews('reviews-list', reviews);
  displayGenres();
  displayFeaturedGenres();
};

function initializeDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const bookTitle = params.get('title');
  const book = books.find(b => b.title === bookTitle);

  if (book) {
    displayBookDetail(book);
    displayRelatedBooksCarousel(books.filter(b => b !== book));
  } else {
    document.getElementById('book-detail-content').textContent = 'Book not found';
  }
}

function initializeCartPage() {
  displayCartItems();
  displayCartRelatedBooksCarousel(books);
}

function initializePaymentPage(){
  displayPaymentItems();
}

function initializeInvoicePage(){
  displayInvoice();
}

function initializeReviewPage(){
  displayReview();
}

// for homepage
function displayBooks(elementId, books) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';

  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('product');
    
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('img__product__container');

    const bookImage = document.createElement('img');
    bookImage.src = book.image_url;
    bookImage.alt = book.title;
    bookImage.classList.add('img__product');
    
    const descDiv = document.createElement('div');
    descDiv.classList.add('desc__product');
    
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    
    const bookPrice = document.createElement('p');
    bookPrice.textContent = `Rp. ${book.price}`;
    
    imageDiv.appendChild(bookImage);
    descDiv.appendChild(bookTitle);
    descDiv.appendChild(bookPrice);
    bookItem.appendChild(imageDiv);
    bookItem.appendChild(descDiv);
    
    bookItem.addEventListener('click', () => {
      window.location.href = `detail.html?title=${encodeURIComponent(book.title)}`;
    });

    container.appendChild(bookItem);
  });
}

function displayReviews(elementId, reviews) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';

  reviews.forEach(review => {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('testimonial__item');

    const divSection = document.createElement('div');
    divSection.classList.add('head__section__reviewer');
    
    const reviewHead = document.createElement('div');
    reviewHead.classList.add('testimonial__head');
    reviewHead.textContent = review.review;
    
    const reviewDesc = document.createElement('p');
    reviewDesc.classList.add('testimonial__desc');
    reviewDesc.textContent = review.review_description;

    const line = document.createElement('hr');
    line.classList.add('divider__testimony');
    
    const reviewer = document.createElement('div');
    reviewer.classList.add('testimonial__reviewer');

    const profileImage = document.createElement('div');
    profileImage.classList.add('profile__img');

    const reviewerImage = document.createElement('img');
    reviewerImage.src = review.reviewer_image;
    reviewerImage.alt = review.reviewer;
    reviewerImage.classList.add('img__reviewer');

    const profileName = document.createElement('div');
    profileName.classList.add('desc__profile__reviewer');

    const reviewerName = document.createElement('div');
    reviewerName.classList.add('name__riviewer');
    reviewerName.textContent = review.reviewer;

    divSection.appendChild(reviewHead);
    divSection.appendChild(reviewDesc);
    reviewer.appendChild(profileImage);
    profileImage.appendChild(reviewerImage);
    reviewer.appendChild(profileName);
    profileName.appendChild(reviewerName);
    reviewItem.appendChild(divSection);
    reviewItem.appendChild(line);
    reviewItem.appendChild(reviewer);
    
    container.appendChild(reviewItem);
  });
}

function displayGenres() {
  const genreList = document.getElementById('genre-list');
  const genres = ['all', ...Array.from(new Set(books.flatMap(book => book.genres)))]; // Include 'all' genre
  genreList.innerHTML = '';
  genres.forEach(genre => {
    const genreItem = document.createElement('li');
    genreItem.classList.add('hover-underline-animation');
    genreItem.dataset.genre = genre;
    genreItem.textContent = genre === 'all' ? 'Genre' : genre.charAt(0).toUpperCase() + genre.slice(1);
    
    genreItem.addEventListener('click', (event) => {
      document.querySelectorAll('.genre-list li').forEach(item => item.classList.remove('active'));
      genreItem.classList.add('active');

      const selectedGenre = event.target.dataset.genre;
      const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genres.includes(selectedGenre));
      displayBooks('all-books-list', filteredBooks);
    });

    genreList.appendChild(genreItem);
  });
  
  // Set 'all' genre as active by default
  genreList.querySelector('[data-genre="all"]').classList.add('active');
}

function displayFeaturedGenres() {
  const featuredGenreTopList = document.getElementById('top-featured-genre-list');
  const featuredGenreBottomList = document.getElementById('bottom-featured-genre-list');
  const popularGenres = ['fiction', 'Fantasy', 'dystopian', 'classic']; // Genre yang populer atau ingin diiklankan
  
  featuredGenreTopList.innerHTML = '';
  featuredGenreBottomList.innerHTML = '';

  // Menambahkan genre ke bagian atas featured genre
  popularGenres.slice(0, 4).forEach(genre => {
      const genreItem = createFeaturedGenreItem(genre);

      featuredGenreTopList.appendChild(genreItem);
  });

  // Menambahkan genre ke bagian bawah featured genre
  popularGenres.slice(4, 7).forEach(genre => {
      const genreItem = createFeaturedGenreItem(genre);
      featuredGenreBottomList.appendChild(genreItem);
  });
}

function createFeaturedGenreItem(genre) {
  const genreItem = document.createElement('li');
  genreItem.classList.add('genres','title__genres');
  genreItem.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
  
  // Menambahkan gambar yang mewakili genre
  const genreImage = document.createElement('img');
  genreImage.src = genreImages[genre]; // Ganti path sesuai dengan struktur folder Anda
  genreImage.classList.add('img__icon');
  genreImage.alt = genre;
  genreItem.prepend(genreImage);
  
  genreItem.addEventListener('click', () => {
      scrollToProductSection(genre);
  });

  return genreItem;
}

function scrollToProductSection(genre) {
  document.getElementById('all-books').scrollIntoView({ behavior: 'smooth' });
  const genreItem = document.querySelector(`#genre-list li[data-genre="${genre.toLowerCase()}"]`);
  if (genreItem) {
      genreItem.click();
  }
}

// for detail page
function displayBookDetail(book) {
  const bookDetailContainer = document.getElementById('book-detail-content');
  bookDetailContainer.innerHTML = '';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img__product');

  const bookImage = document.createElement('img');
  bookImage.src = book.image_url;
  bookImage.alt = book.title;

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('product__info');

  const bookTitle = document.createElement('h1');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = `Author: ${book.author}`;

  const descriptionSection = document.createElement('div');
  descriptionSection.classList.add('description__section');

  const btnInfo = document.createElement('button');
  btnInfo.id = 'additional-info-btn';
  btnInfo.textContent = 'Info Product';
  btnInfo.classList.add('page__number', 'active');

  const btnDescription = document.createElement('button');
  btnDescription.id = 'description-btn';
  btnDescription.textContent = 'Description';
  btnDescription.classList.add('page__number');

  const infoContent = document.createElement('div');
  infoContent.id = 'additional-info-content';
  infoContent.classList.add('detail__desc');

  const bookPrice = document.createElement('p');
  bookPrice.classList.add('book-price');
  bookPrice.textContent = `Price: Rp. ${book.price}`;

  const genreList = document.createElement('dl');
  genreList.classList.add('genre__list');
  genreList.textContent = 'Genres: ';
  book.genres.forEach(genre => {
    const genreItem = document.createElement('dt');
    genreItem.textContent = genre;
    genreList.appendChild(genreItem);
  });

  const purchaseCard = document.createElement('div');
  purchaseCard.classList.add('purchase__card');
  purchaseCard.innerHTML = `
    <div class="quantity__selector">
      <button id="minus-btn">-</button>
      <input type="number" id="quantity" value="1" min="1">
      <button id="plus-btn">+</button>
    </div>
    <button id="add-to-cart-btn">Add to Cart</button>
    <button id="buy-btn">Buy</button>
  `;

  const descContent = document.createElement('div');
  descContent.id = 'description-content';
  descContent.classList.add('detail__desc');
  descContent.style.display = 'none';
  descContent.innerHTML = `<p>${book.description}</p>`;

  imageContainer.appendChild(bookImage);
  infoContainer.appendChild(bookTitle);
  infoContainer.appendChild(bookAuthor);
  descriptionSection.appendChild(btnInfo);
  descriptionSection.appendChild(btnDescription);
  infoContent.appendChild(bookPrice);
  infoContent.appendChild(genreList);
  descriptionSection.appendChild(infoContent);
  descriptionSection.appendChild(descContent);
  infoContainer.appendChild(descriptionSection);
  bookDetailContainer.appendChild(imageContainer);
  bookDetailContainer.appendChild(infoContainer);
  bookDetailContainer.appendChild(purchaseCard);

  // Tab Switch Event Listeners
  btnDescription.addEventListener('click', function () {
    // Show description content
    descContent.style.display = 'block';
    infoContent.style.display = 'none';

    // Activate description button
    btnDescription.classList.add('active');
    btnInfo.classList.remove('active');
  });

  btnInfo.addEventListener('click', function () {
    // Show additional info content
    infoContent.style.display = 'block';
    descContent.style.display = 'none';

    // Activate additional info button
    btnInfo.classList.add('active');
    btnDescription.classList.remove('active');
  });

  // Quantity Selector Functionality
  const minusBtn = document.getElementById('minus-btn');
  const plusBtn = document.getElementById('plus-btn');
  const quantityInput = document.getElementById('quantity');

  minusBtn.addEventListener('click', () => {
    if (quantityInput.value > 1) {
      quantityInput.value--;
    }
  });

  plusBtn.addEventListener('click', () => {
    quantityInput.value++;
  });

  const addToCartBtn = purchaseCard.querySelector('#add-to-cart-btn');
  const buyBtn = purchaseCard.querySelector('#buy-btn');

  addToCartBtn.addEventListener('click', function() {
    addToCart(book, quantityInput.value);
  });

  buyBtn.addEventListener('click', function() {
    addToCart(book, quantityInput.value);
    window.location.href = 'Cart.html';
  });
}

function addToCart(book, quantity) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.title === book.title);

  if (existingItem) {
    existingItem.quantity += parseInt(quantity, 10);
  } else {
    cart.push({ ...book, quantity: parseInt(quantity, 10) });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${book.title} has been added to your cart.`);
}

function displayRelatedBooksCarousel(relatedBooks) {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev-btn'); 
  const nextBtn = document.querySelector('.carousel-btn.next-btn');
  let currentIndex = 0;

  carouselTrack.innerHTML = '';

  relatedBooks.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('carousel-item');

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('container-image');

      const bookImage = document.createElement('img');
      bookImage.src = book.image_url;
      bookImage.alt = book.title;
      bookImage.classList.add('img__product');

      const bookTitle = document.createElement('p');
      bookTitle.textContent = book.title;

      imageContainer.appendChild(bookImage);
      bookItem.appendChild(imageContainer);
      bookItem.appendChild(bookTitle);

      bookItem.addEventListener('click', () => {
        window.location.href = `detail.html?title=${encodeURIComponent(book.title)}`;
      });  

      carouselTrack.appendChild(bookItem);
  });

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentIndex < carouselTrack.children.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });

  function updateCarousel() {
      const slideWidth = carouselTrack.children[0].getBoundingClientRect().width;
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  updateCarousel();
}

// for cart page
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContent = document.getElementById('cart-list');
  cartContent.innerHTML = '';

  if (cart.length === 0) {
    cartContent.textContent = 'Your cart is empty.';
    return;
  }

  const cartList = document.createElement('div');
  cartList.classList.add('cart__list');

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart__item');

    const itemCheckbox = document.createElement('input');
    itemCheckbox.type = 'checkbox';
    itemCheckbox.classList.add('select-item');
    itemCheckbox.addEventListener('change', updateTotalPrice);

    const itemImage = document.createElement('img');
    itemImage.src = item.image_url;
    itemImage.alt = item.title;
    itemImage.classList.add('cart__item__image');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('cart__item__info');

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Rp. ${item.price}`;
    itemPrice.classList.add('item-price');

    const itemQuantity = document.createElement('div');
    itemQuantity.classList.add('cart__item__quantity');
    itemQuantity.innerHTML = `
      <button class="minus-btn">-</button>
      <input type="number" class="quantity" value="${item.quantity}" min="1">
      <button class="plus-btn">+</button>
    `;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
      removeFromCart(item.title);
      updateTotalPrice();
    });

    itemQuantity.querySelector('.minus-btn').addEventListener('click', () => {
      const quantityInput = itemQuantity.querySelector('.quantity');
      if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateCartItem(item.title, quantityInput.value);
        updateTotalPrice();
      }
    });

    itemQuantity.querySelector('.plus-btn').addEventListener('click', () => {
      const quantityInput = itemQuantity.querySelector('.quantity');
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateCartItem(item.title, quantityInput.value);
      updateTotalPrice();
    });

    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(itemPrice);
    itemInfo.appendChild(itemQuantity);
    itemInfo.appendChild(removeButton);
    cartItem.appendChild(itemCheckbox);
    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemInfo);
    cartList.appendChild(cartItem);
  });

  cartContent.appendChild(cartList);

  const selectAllCheckbox = document.getElementById('select-all-items');
  const itemCheckboxes = document.querySelectorAll('.select-item');

  selectAllCheckbox.addEventListener('change', function () {
    const isChecked = selectAllCheckbox.checked;
    itemCheckboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
    });
    updateTotalPrice();
  });

  itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const allChecked = Array.from(itemCheckboxes).every(checkbox => checkbox.checked);
      selectAllCheckbox.checked = allChecked;
      updateTotalPrice();
    });
  })
  
    const buyBtn = document.getElementById('buy-btn');
    buyBtn.addEventListener('click', () => {
      proceedToPayment();
    });
  
  updateTotalPrice();
}

// Function to update cart item quantity
function updateCartItem(title, quantity) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(item => item.title === title);

  if (item) {
    item.quantity = parseInt(quantity, 10);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
  }
}

// Function to remove item from cart
function removeFromCart(title) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.title !== title);

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
}

// Function to update total price based on selected items
function updateTotalPrice() {
  const itemCheckboxes = document.querySelectorAll('.select-item');
  let totalPrice = 0;

  itemCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const cartItem = checkbox.closest('.cart__item');
      const itemPriceString = cartItem.querySelector('.item-price').textContent.trim();
      const itemPrice = parseFloat(itemPriceString.replace('Rp. ', '').replace(',', ''));
      const itemQuantity = parseInt(cartItem.querySelector('.quantity').value, 10);
      totalPrice += itemPrice * itemQuantity;
    }
  });

  document.getElementById('total-price').textContent = `${totalPrice.toLocaleString()}`;
}

function proceedToPayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const selectedItems = document.querySelectorAll('.select-item:checked');
  const selectedCartItems = [];

  selectedItems.forEach(checkbox => {
    const selectedItem = cart.find(item => item.title === checkbox.parentElement.querySelector('h3').textContent);
    if (selectedItem) {
      selectedCartItems.push(selectedItem);
    }
  });

  if (selectedCartItems.length === 0) {
    alert('Please select at least one item to proceed to payment.');
    return;
  }

  localStorage.setItem('selectedItems', JSON.stringify(selectedCartItems));
  window.location.href = 'payment.html';
}

function displayCartRelatedBooksCarousel(relatedBooks) {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  carouselTrack.innerHTML = ''; // Clear any existing content

  // Filter out books that are already in the cart
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const booksNotInCart = relatedBooks.filter(book => {
    return !cartItems.some(item => item.title === book.title);
  });

  booksNotInCart.forEach((book) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('carousel-item');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('container-image');

    const bookImage = document.createElement('img');
    bookImage.src = book.image_url;
    bookImage.alt = book.title;
    bookImage.classList.add('img__product');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;

    imageContainer.appendChild(bookImage);
    bookItem.appendChild(imageContainer);
    bookItem.appendChild(bookTitle);

    bookItem.addEventListener('click', () => {
      window.location.href = `detail.html?title=${encodeURIComponent(book.title)}`;
    });

    carouselTrack.appendChild(bookItem);
  });

  // Update carousel navigation functionality
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselTrack.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const slideWidth = carouselTrack.children[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  updateCarousel();
}

// for payment page
function displayPaymentItems() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // Pre-fill the shipper form with the logged-in user's details
        document.getElementById('name').value = currentUser.name;
        document.getElementById('address').value = currentUser.address;
        document.getElementById('phone').value = currentUser.phone;
    }

    displayBookPayment();
    updateTotalPricePayment();

    const shipperForm = document.getElementById('shipper-form');
    shipperForm.addEventListener('input', saveShipperInformation);

    const shippingMethodSelect = document.getElementById('shipping-method');
    shippingMethodSelect.addEventListener('change', () => {
        updateTotalPricePayment(); // Memanggil fungsi updateTotalPricePayment saat metode pengiriman berubah
    });

    document.getElementById('cancel-button').addEventListener('click', () => {
        saveTransaction(true);
        window.location.href = 'cart.html'; // Redirect to cart page
    });

    document.getElementById('pay-button').addEventListener('click', () => {
        saveTransaction(false);
        window.location.href = 'Invoice.html'; // Redirect to invoice page
    });

    if (!localStorage.getItem('currentTransactionID')) {
      generateTransactionID();
  }
}

function saveShipperInformation() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  const transactionID = localStorage.getItem('currentTransactionID');
  if (transactionID) {
      const transactionData = {
          name: name,
          address: address,
          phone: phone
      };
      localStorage.setItem(transactionID, JSON.stringify(transactionData));
  }
}

function displayBookPayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const bookDetailContainer = document.getElementById('book-detail');

  bookDetailContainer.innerHTML = '';

  cart.forEach(item => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book__item');

      const bookImage = document.createElement('img');
      bookImage.src = item.image_url;
      bookImage.alt = item.title;

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book__info');

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = item.title;

      const bookPrice = document.createElement('p');
      bookPrice.textContent = `Rp. ${item.price}`;

       const bookQuantity = document.createElement('p');
      bookQuantity.textContent = `Quantity: ${item.quantity}`;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `Item Price: Rp. ${item.price * item.quantity}`;

      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(bookPrice);
      bookInfo.appendChild(bookQuantity);
      bookInfo.appendChild(itemPrice);
      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookInfo);
      bookDetailContainer.appendChild(bookItem);
  });
}

function calculateTotalPriceWithoutShipping() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalPrice = 0;

  cart.forEach(item => {
      totalPrice += item.price * item.quantity;
  });

  return totalPrice;
}


function updateTotalPricePayment() {
  console.log("Updating total price...");

    const totalPriceWithoutShipping = calculateTotalPriceWithoutShipping();
    console.log(`Total price before shipping: ${totalPriceWithoutShipping}`);

    const shippingMethod = document.getElementById('shipping-method').value;
    const shippingCost = shippingMethod === 'express' ? 37500 : 12500;
    console.log(`Shipping method: ${shippingMethod}, Shipping cost: ${shippingCost}`);

    const totalPrice = totalPriceWithoutShipping + shippingCost;
    console.log(`Total price after shipping: ${totalPrice}`);

    const totalPriceContainer = document.getElementById('total-price');
    totalPriceContainer.textContent = `Total Price: Rp. ${totalPrice.toLocaleString()}`;
}

function generateTransactionID() {
  let lastTransactionNumber = localStorage.getItem('lastTransactionNumber');
  if (!lastTransactionNumber) {
      lastTransactionNumber = 0;
  } else {
      lastTransactionNumber = parseInt(lastTransactionNumber);
  }

  lastTransactionNumber++;
  if (lastTransactionNumber > 999) {
      lastTransactionNumber = 1; // Reset to 1 if it exceeds 999
  }

  localStorage.setItem('lastTransactionNumber', lastTransactionNumber);

  const timestamp = Date.now();
  const transactionID = 'TX' + timestamp + String(lastTransactionNumber).padStart(3, '0');
  localStorage.setItem('currentTransactionID', transactionID);

  return transactionID;
}

function saveTransaction(isCancel) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedCartItems = [...cart];

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const shippingMethod = document.getElementById('shipping-method').value;
  const shippingCost = shippingMethod === 'express' ? 37500 : 12500;
  const totalPrice = selectedCartItems.reduce((total, item) => total + item.price * item.quantity, 0) + shippingCost;

  const transactionID = generateTransactionID();

  const transactionData = {
      id: transactionID,
      name: name,
      address: address,
      phone: phone,
      cart: selectedCartItems,
      shippingMethod: shippingMethod,
      shippingCost: shippingCost,
      totalPrice: totalPrice,
      date: new Date().toLocaleString()
  };

  let invoices = JSON.parse(localStorage.getItem('invoices')) || {};
  invoices[transactionID] = transactionData;
  localStorage.setItem('invoices', JSON.stringify(invoices));

  if (!isCancel) {
    // Jika bukan pembatalan, hapus item dari keranjang
    const remainingCartItems = cart.filter(item => !selectedCartItems.includes(item));
    localStorage.setItem('cart', JSON.stringify(remainingCartItems));
  }
}

function removeCurrentTransactionID() {
  localStorage.removeItem('currentTransactionID');
}

// Invoice Page
function getInvoices() {
  return JSON.parse(localStorage.getItem('invoices')) || {};
}

function getCurrentTransactionID() {
  return localStorage.getItem('currentTransactionID');
}

function getInvoiceDetails(transactionID) {
  const invoices = getInvoices();
  return invoices[transactionID];
}

function createInvoice() {
  const transactionID = getCurrentTransactionID();
  if (!transactionID) {
      return null; // No current transaction ID found
  }

  const invoiceDetails = getInvoiceDetails(transactionID);
  if (!invoiceDetails) {
      return null; // No invoice details found for the transaction ID
  }
  invoiceDetails.cart

  const items = [];
  invoiceDetails.cart.forEach(item => {
    items.push({
      title: item.title,
      quantity: item.quantity,
      price: item.price
    });
  });

  const invoice = {
      id: invoiceDetails.id,
      name: invoiceDetails.name,
      address: invoiceDetails.address,
      phone: invoiceDetails.phone,
      items: items,
      shippingMethod: invoiceDetails.shippingMethod,
      shippingCost: invoiceDetails.shippingCost,
      totalPrice: invoiceDetails.totalPrice,
      date: invoiceDetails.date
  };
  console.log('Invoice details:', invoiceDetails);

  return invoice;
}

function displayInvoice() {
  const invoice = createInvoice();

  if (!invoice) {
      console.log('Invoice details not found.');
      return;
  }

  const invoiceNumberElement = document.getElementById('invoice-number');
  const invoiceNameElement = document.getElementById('invoice-name');
  const invoicePhoneElement = document.getElementById('invoice-phone');
  const invoiceAddressElement = document.getElementById('invoice-address');
  const invoiceDateElement = document.getElementById('invoice-date');
  const invoiceItemsElement = document.getElementById('invoice-items');
  const shippingMethodElement = document.getElementById('shipping-method');
  const shippingCostElement = document.getElementById('shipping-cost');
  const totalPriceElement = document.getElementById('total-price');
  const okButton = document.getElementById('ok-button');

  if (!invoiceNumberElement || !invoiceNameElement || !invoicePhoneElement ||
    !invoiceAddressElement || !invoiceDateElement || !invoiceItemsElement ||
    !shippingMethodElement || !shippingCostElement || !totalPriceElement) {
  console.error('One or more required elements not found.');
  return;
    }

  invoiceNumberElement.textContent = invoice.id;
  invoiceNameElement.textContent = invoice.name;
  invoicePhoneElement.textContent = invoice.phone;
  invoiceAddressElement.textContent = invoice.address;
  invoiceDateElement.textContent = invoice.date;
  shippingMethodElement.textContent = invoice.shippingMethod;
  shippingCostElement.textContent = `Rp. ${invoice.shippingCost.toLocaleString()}`;
  totalPriceElement.textContent = `Rp. ${invoice.totalPrice.toLocaleString()}`;
  invoiceItemsElement.innerHTML = ``; // Clear existing items
  
  console.log('Invoice items:', totalPriceElement);

  const itemContainer = document.createElement('div');
  itemContainer.classList.add('invoice-item');

  const titleElement = document.createElement('div');
  titleElement.textContent = "Title: ";

  const quantityElement = document.createElement('div');
  quantityElement.textContent = "Quantity: ";

  const priceElement = document.createElement('div');
  priceElement.textContent = "Price: ";

  const totalPriceBookElement = document.createElement('div');
  totalPriceBookElement.textContent = "Total Price: ";

  invoice.items.forEach(item => {
    const titleText = document.createElement('p');
    titleText.textContent = `${item.title}`;
    titleElement.appendChild(titleText);

    const quantity = document.createElement('p');
    quantity.textContent = `${item.quantity}`;
    quantityElement.appendChild(quantity);

    const price = document.createElement('p');
    price.textContent = `Rp. ${item.price.toLocaleString()}`;
    priceElement.appendChild(price);

    const totalPrice = document.createElement('p');
    totalPrice.textContent = `Rp. ${item.price * item.quantity.toLocaleString()}`;
    totalPriceBookElement.appendChild(totalPrice);
    console.log('Invoice items:', totalPrice);
    
    itemContainer.appendChild(titleElement);
    itemContainer.appendChild(quantityElement);
    itemContainer.appendChild(priceElement);
    itemContainer.appendChild(totalPriceBookElement);

    invoiceItemsElement.appendChild(itemContainer);
  });
 

  okButton.addEventListener('click', () => {
  window.location.href = 'Review.html';

  removeCurrentTransactionID();

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const updatedCart = cart.filter(item => !invoice.items.some(invoiceItem => invoiceItem.title === item.title));
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  }); 
}

function printInvoice() {
  window.print();
}

// Review Page
function displayReview() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  console.log(currentUser);
  if (!currentUser) {
    // Redirect to login if no user is logged in
    window.location.href = 'Login.html';
    return; // Exit function to prevent further execution
  }
  
  // Display user information in the user-info section
  const userInfo = document.getElementById('user-info');
  userInfo.innerHTML = ''; // Clear existing content
  
  const userImage = document.createElement('img');
  userImage.classList.add('user__image');
  userImage.id = 'user-image';
  userImage.src = currentUser.image_url;
  userImage.alt = 'User Image';
  userInfo.appendChild(userImage);
  
  const userName = document.createElement('div');
  userName.classList.add('user__name');
  userName.id = 'user-name';
  userName.textContent = currentUser.name;
  userInfo.appendChild(userName);
  
  const buyButton = document.getElementById('submit-button');
  buyButton.addEventListener('submit', (e) => {
    e.preventDefault();
    addReview(currentUser);
  });
  
  const cancelButton = document.getElementById('cancel-button');
  cancelButton.addEventListener('click', () => {
    window.location.href = 'Home.html';
  });
}
  
function addReview(currentUser) {
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('review').value;
  const experienceText = document.getElementById('review_description').value;

  const newReview = {
    userName: currentUser.name,
    userImage: currentUser.image_url,
    rating: rating,
    review: reviewText,
    experience: experienceText,
    date: new Date().toLocaleString()
  };

  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(newReview);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  alert('Review submitted successfully!');
  window.location.href = 'Home.html'; // Redirect to the main page or a confirmation page
}