const activityBtn = document.getElementById('activity-btn');
const categoryBtn = document.getElementById('category-btn');
const categoryEl = document.getElementById('category');
const activityEl = document.getElementById('activity');

let categories = [];
let activities = [];

// Fetch data from API
async function fetchData() {
  try {
    const res = await fetch('activities.json');
    const data = await res.json();

    console.log(data);

    getCategory(data);
    // getActivity(data);
  } catch (error) {
    console.error(error);
  }
}

// Get random category
function getCategory(data) {
  data.forEach(activity => {
    categories.push(activity.categories);
    console.log(activity.categories);
  });

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  console.log(randomCategory);
  categoryEl.textContent = randomCategory;
}

// Event listeners
categoryBtn.addEventListener('click', fetchData);
