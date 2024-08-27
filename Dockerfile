# Utiliza una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en la imagen Docker
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main"]