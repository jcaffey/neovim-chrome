// app state
const state = {
  selected: null,
};

// sockets
const socket = new WebSocket("http://localhost:8080");
socket.onmessage = (event) => {
  console.log(event.data);
  // update last selected textarea if one exists
  if (state.selected !== null) {
    state.selected.value = event.data;
  }
};

socket.onopen = (_event) => {
  console.log("connected");
};

// select text area
const inputs = document.querySelectorAll('textarea');
for (i=0; i < inputs.length; i++) {
  let text = inputs[i];
  text.addEventListener('click', (_e) => {
    state.selected = text;
  });
}
