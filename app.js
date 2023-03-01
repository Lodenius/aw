const activityBtn = document.getElementById('activity-btn');
const registerBtn = document.getElementById('register-btn');
const activityEl = document.getElementById('activity');

let participants = [];

// Fetch data from API
async function fetchData() {
  try {
    const res = await fetch('activities.json');
    const data = await res.json();

    getActivity(data);
  } catch (error) {
    console.error(error);
  }
}

// Get random activity
function getActivity(data) {
  let activities = [];

  data.forEach(activity => {
    activities.push(activity.name);
  });

  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  activityEl.textContent = randomActivity;
}

// Add participant to list
function addParticipant(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  participants.push(nameInput.value);
  nameInput.value = '';
  console.log(participants);
  renderParticipantList();
}

// Render participants to UI
function renderParticipantList() {
  const participantListEl = document.getElementById('participants-list');

  const participantList = participants
    .map(participant => `<p>${participant}</p>`)
    .join(' ');
  participantListEl.innerHTML = `
  <h3>Participants</h3>
  <p>${participantList}</p>
  `;
}

// Event listeners
activityBtn.addEventListener('click', fetchData);
registerBtn.addEventListener('click', addParticipant);
