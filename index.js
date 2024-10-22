require('dotenv').config(); // Cargar variables de entorno desde .env
const express = require('express');
const readline = require('readline');

const app = express();
const port = 3000;

// Historial de conversación
let conversationHistory = [];

// Función para realizar búsquedas en Serper utilizando fetch
async function searchQuery(query) {
    const API_KEY = process.env.SERPER_API_KEY; // Accedemos a la clave desde process.env
    const url = 'https://google.serper.dev/search';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': API_KEY
            },
            body: JSON.stringify({ q: query })
        });
        const data = await response.json();
        return data.organic; // Devolvemos los resultados orgánicos de la búsqueda
    } catch (error) {
        console.error('Error en la búsqueda:', error);
    }
}

// Interfaz de lectura en consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que gestiona el flujo de conversación en consola
function askQuestion() {
    rl.question('Usuario: ', async (question) => {
        conversationHistory.push({ role: 'user', message: question });

        console.log('Chatbot: ** Búsqueda en internet **');

        // Realiza la búsqueda en Serper y obtiene los 5 primeros enlaces
        const searchResults = await searchQuery(question);

        if (searchResults && searchResults.length > 0) {
            let streamingResponse = '';
            let sources = [];

            for (let i = 0; i < Math.min(5, searchResults.length); i++) {
                const result = searchResults[i];
                streamingResponse += `Encontré información relevante en ${result.title}\n`;
                sources.push(result.link);
            }

            // Mostrar respuesta progresiva (streaming)
            process.stdout.write(`Chatbot: ${streamingResponse}`);

            // Citar las fuentes
            console.log('\nReferencias:');
            sources.forEach((source, index) => {
                console.log(`${index + 1}. ${source}`);
            });

            // Guardar la respuesta del chatbot en el historial
            conversationHistory.push({ role: 'bot', message: streamingResponse });

        } else {
            console.log('Chatbot: No encontré resultados relevantes.');
        }

        askQuestion(); // Permite seguir con la conversación
    });
}

// Iniciar la consola
askQuestion();

// Inicializar el servidor (si fuera necesario más adelante)
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
