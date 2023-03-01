const activityBtn = document.getElementById('activity-btn');
const registerBtn = document.getElementById('register-btn');
const activityEl = document.getElementById('activity');

let activities = [];
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

function renderParticipantList() {
  const participantListEl = document.getElementById('participants-list');
  const participantList = participants
  .map(participant => {
      return `<p>${participant}</p>`;
    })
    .join(' ');
  participantListEl.innerHTML = participantList;
}

// Event listeners
activityBtn.addEventListener('click', fetchData);
registerBtn.addEventListener('click', addParticipant);
