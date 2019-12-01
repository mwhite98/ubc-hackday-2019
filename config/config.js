// require('dotenv').config();


const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    app: {
        port: 5000,
        secret: 'secret',
    },
    db: {
        host: 'localhost',
        port: 80,
        name: 'lhd',
        user: 'root',
        pass: '',
    }
};

// const config = {
//     dev,
// };


module.exports = dev;