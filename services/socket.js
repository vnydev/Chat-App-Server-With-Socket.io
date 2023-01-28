const { createServer } = require('http')
const { Server } = require('socket.io')
const httpServer = createServer()

const Socket_Port = 8080

const initSocket = () => {

    const io = new Server(httpServer, {
        path: '/io/',
        cors: {
            origin: ['http://localhost:8000', 'http://localhost:3001'],
            methods: ['GET', 'POST'],
            credentials: true,
        },
        transports: ['polling', 'websocket'],
        pingInterval: 60000,
        pingTimeout: 45000,
    })

    io.on('connection', (socket) => {
        console.log("ok! connected", socket.id)
        
        socket.on('Create_Room', (room) => {
            console.log('create room ', room)
            socket.join(room)
        })
        socket.on('Join_Room', (data) => {
            console.log('join room ', data)
        })
        socket.on('Delete_Room', (data) => {
            console.log('delete room ', data)
        })

        socket.on('disconnecting', () => {
            console.log("Rooms ", socket.rooms)
        })

        socket.on('disconnect', (e) => {
            console.log("disconnect", e)
        })
    })
    
   

    httpServer.listen(Socket_Port, () => console.log(`Socket is running on ${Socket_Port}`))
}

module.exports = initSocket