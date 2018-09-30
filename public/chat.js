var socket = io();

socket.on('connect', () => {
    // console.log('connetion made to server..');
});

// Query Dom
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit event
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('focusin', () => {
    socket.emit('typing', handle.value);
});

message.addEventListener('focusout', () => {
    socket.emit('notTyping');
});

// listen event
socket.on('chat', (data) => {
    output.innerHTML += `<p><strong>${data.handle}</strong> : ${data.message}</p>`
});

socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em>${data} is typing...</em></p>`;
});

socket.on('notTyping', () => {
    feedback.innerHTML = '';
});