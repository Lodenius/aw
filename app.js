const activityBtn = document.getElementById('activity-btn');
const registerBtn = document.getElementById('register-btn');
const activityEl = document.getElementById('activity');

const checkboxInside = document.getElementById('inside');
const checkboxOutside = document.getElementById('outside');

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
  let insideActivities = [];
  let outsideActivities = [];

  data.forEach(activity => {
    if (activity.location === 'inside') {
      insideActivities.push(activity.name);
    } else {
      outsideActivities.push(activity.name);
    }
  });

  if (checkboxInside.checked) {
    activityEl.style.visibility = 'visible';
    activityEl.textContent =
      insideActivities[Math.floor(Math.random() * insideActivities.length)];
  } else if (checkboxOutside.checked) {
    activityEl.style.visibility = 'visible';
    activityEl.textContent =
      outsideActivities[Math.floor(Math.random() * outsideActivities.length)];
  }
}

// Add participant to list
function addParticipant(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');

  if (nameInput.value) {
    participants.push(nameInput.value);
    nameInput.value = '';
    console.log(participants);
    renderParticipantList();
  }
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
