FROM node:20 

# Create a working dir
WORKDIR /src

# Copy the source files
COPY main.js .
COPY metrics.js .
COPY package.json .
COPY package-lock.json .

COPY public public 
COPY views views 

# Install packages
RUN npm ci

ENV PORT=3000
ENV INSTANCE_NAME="My Dov Bear app"
ENV INSTANCE_HASH=abc123

EXPOSE ${PORT}

ENTRYPOINT node main.js