// NOTE: To vs. Broadcast: To sends to everyone, broadcast sends to
// everyone except the user who sent it

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.set('view engine', 'hbs')
app.use('/static', express.static('static'))

app.get('/', function(req, resp) {
  resp.render('chat.hbs')
})

io.on('connection', function(client) {
  console.log('Connected!')

  client.on('disconnect', function() {
    console.log('Exited!')
  })

  // BROADCAST TO EVERYONE
  // client.on('incoming', function(msg) {
  //   io.emit('chat-msg', msg) // could do client.emit to only show message to self
  // })

  // MAKE CHAT ROOMS
  client.on('join-room', function(room) {
    client.join(room, function() {
      console.log(client.rooms)
      io.to(room).emit('chat-msg', '*** New User Joined ***')
    })
  })
  client.on('incoming', function(msg) {
    io.to(msg.room).emit('chat-msg', msg.msg)
  })
})

http.listen(8000, function() {
  console.log('Listening on port 8000.')
})
