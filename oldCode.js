$(() => {
  let socket = io.connect();
  let $messageForm = $('#messageForm');
  let $message = $('#message');
  let $chat = $('#chat');
  let $messageArea = $('#messageArea');
  let $userFormArea = $('#userFormArea');
  let $userForm = $('#userForm');
  let $users = $('#users');
  let $username = $('#username');

  // Submit Username Callback
  let submitUsernameCB = e => {
    e.preventDefault();
    socket.emit('new user', $username.val(), data => {
      if (data) {
        $userFormArea.hide();
        $messageArea.show();
      }
    });
    $username.val('');
  };

  $userForm.submit(submitUsernameCB);

  // Submit Message Callback
  let submitMessageCB = e => {
    e.preventDefault();
    socket.emit('send message', $message.val());
    $message.val('');
  };

  $messageForm.submit(submitMessageCB);

  $('body').keypress(e => {
    if (e.which !== 13) return;
    
    if (!e.target.value) return;
    
    let messageDisplayValue = $messageArea.css('display');

    if (messageDisplayValue === 'none') {
      submitUsernameCB(e);
    } else if (messageDisplayValue === 'block') {
      submitMessageCB(e);
    }
  });


  socket.on('get users', data => {
    let html = '';
    for (let i = 0; i < data.length; i += 1) {
      html += `<li class='list-group-item'>${ data[i] }</li>`;
    }

    $users.html(html);
  });

  socket.on('new message', data => {
    $('#chat').prepend(`<div class='well'><strong>${ data.username }</strong>: ${ data.message }</div class='list-group-item'>`);
  });
});