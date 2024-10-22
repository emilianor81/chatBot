# Chatbot con Búsqueda en Internet y Respuestas en Streaming

Este es un chatbot simple que funciona desde la consola, realiza búsquedas en Internet utilizando la API de Serper.dev, y proporciona respuestas con las fuentes citadas. El chatbot mantiene un historial de conversación y da respuestas en tiempo real.

## Requisitos

- Node.js (Versión 18 o superior)
- Clave de API de [Serper.dev](https://serper.dev/)

## Instrucciones para la instalación

1. Clonar el repositorio en tu máquina local:

```bash
git clone https://github.com/emilianor81/chatBot.git
``` 

2. Acceder a la carpeta del proyecto:

```bash
cd nombre-repositorio
``` 


3. Instalar las dependencias:

```bash
npm install
``` 

4. Crear un archivo .env en la raíz del proyecto basado en el archivo .env.template:

```bash
cp .env.template .env
```


5. Abrir el archivo .env recién creado y agregar tu clave de API de Serper.dev:

```bash
SERPER_API_KEY=tu_api_key_aqui
``` 

Para obtener la api key: abre tu navegador y dirígete al sitio web oficial de Serper: ```https://serper.dev/``` `y sigue los pasos.



## Ejecución del proyecto

Para iniciar el chatbot, ejecuta el siguiente comando:


```bash
node index.js
``` 

El chatbot te permitirá interactuar con él a través de la consola y te dará respuestas basadas en búsquedas realizadas en Internet.



## Estructura del proyecto

index.js: Archivo principal que contiene el código del chatbot.
.env.template: Plantilla para las variables de entorno.
package.json: Dependencias y configuraciones del proyecto.


## Uso del Chatbot

Después de iniciar el chatbot, puedes hacer preguntas directamente en la consola. El chatbot buscará en Internet utilizando la API de Serper.dev y devolverá una respuesta con las fuentes citadas.

Ejemplo:

```bash
Usuario: ¿Cómo plantar un árbol de manzanas?
Chatbot: ** Búsqueda en internet **
Chatbot: Encontré información relevante en GardeningKnowHow, WikiHow, y otras fuentes.

Referencias:
1. https://gardeningknowhow.com/apple-tree
2. https://wikihow.com/plant-apple-trees
``` 

## Notas

Asegúrate de que tu archivo .env no se suba al repositorio. Ya está incluido en el archivo .gitignore.
Puedes obtener tu API Key de Serper.dev registrándote en Serper.dev.
