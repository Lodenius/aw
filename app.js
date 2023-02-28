const activityBtn = document.getElementById('activity-btn');
const categoryEl = document.getElementById('category');
const activityEl = document.getElementById('activity');

let activities = [];

// Fetch data from API
async function fetchData() {
  try {
    const res = await fetch('activities.json');
    const data = await res.json();

    getCategory(data);
  } catch (error) {
    console.error(error);
  }
}

// Get random category
function getCategory(data) {
  data.forEach(activity => {
    activities.push(activity.name);
  });

  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  activityEl.textContent = randomActivity;
}

// Event listeners
activityBtn.addEventListener('click', fetchData);
