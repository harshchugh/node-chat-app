
    var socket = io();

    socket.on('connect', function(){
      console.log('Connected to server.');


    socket.emit('createEmail',{
      to:'abc@123.com',
      text:'Hi There How are you?'
    });
    socket.emit('createMessage',{
      from:'Chang',
      text:'Yup I am doing good.'
    });

  });

  socket.on('newMessage', function(msg){
    console.log('NewMessage :', msg);
  });

    socket.on('disconnect', function(){
      console.log('Disconnected from server');
    });

    socket.on('newEmail', function(email){
      console.log('New email', email);
    });
