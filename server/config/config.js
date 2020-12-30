// ==================
// Puerto
// ==================

process.env.PORT = process.env.PORT || 3000;


// ==================
// Entorno
// ==================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe-user:holacomoestas@cluster0.jnw8g.mongodb.net';
}

process.env.URLDB = urlDB;