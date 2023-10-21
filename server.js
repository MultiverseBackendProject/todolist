const { db } = require('./server/db');
const app = require('./server/app')

const PORT = process.env.PORT || 3000;

const init = async () => {
    try {
        await db.sync();
        
        app.listen(PORT, () => {
            db.sync();
            console.log(`Server running on port: http://localhost:${PORT}`);
          });
    } catch (error) {
        console.log('Error starting server: ', error)
    }
};

init();