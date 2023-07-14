FROM node:20 AS builder

WORKDIR /src

# copy the files over
COPY angular.json .
COPY package-lock.json .
COPY package.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.spec.json .

COPY src src

# install angular cli
RUN npm install -g @angular/cli
RUN npm ci
RUN ng build

FROM nginx:1.25

COPY --from=builder /src/dist/day34-http /usr/share/nginx/html
