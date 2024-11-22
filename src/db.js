const mysql = require('mysql2/promise');

// Configuración de la base de datos (ajusta según tus credenciales)
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'parking_system'
});

module.exports = pool;