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
    const data = res.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Get random category
function getCategory() {
  data.forEach(category => {
    categories.push(category);
  });

  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  categoryEl.textContent = randomCategory;
}

// Get random activity
function getActivity() {
  data.forEach(activity => {
    activities.push(activity);
  });

  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  activityEl.textContent = randomActivity;
}

// Event listeners
categoryBtn.addEventListener('click', getCategory);
activityBtn.addEventListener('click', getActivity);
