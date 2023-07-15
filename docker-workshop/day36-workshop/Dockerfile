######## Build Angular ###############
FROM node:20 AS ng-builder

WORKDIR /src

COPY weather-client/angular.json .
COPY weather-client/package.json .
COPY weather-client/package-lock.json .
COPY weather-client/tsconfig.app.json .
COPY weather-client/tsconfig.json .
COPY weather-client/tsconfig.spec.json .
COPY weather-client/src src

RUN npm i -g @angular/cli
RUN npm ci
RUN ng build

######## Build Spring Boot ###############
FROM maven:3-eclipse-temurin-20 AS sb-builder

WORKDIR /src

COPY weather-server/mvnw .
COPY weather-server/mvnw.cmd .
COPY weather-server/pom.xml .
COPY weather-server/src src

COPY --from=ng-builder /src/dist/weather-client src/main/resources/static/

RUN mvn package -Dmaven.test.skip=true

######## Assemble Application ###############
FROM openjdk:20-slim

WORKDIR /app

COPY --from=sb-builder /src/target/weather-server-0.0.1-SNAPSHOT.jar weather-server.jar

ENV OPENWEATHERMAP_KEY=API_KEY
ENV PORT=8080

ENTRYPOINT SERVER_PORT=${PORT} java -jar weather-server.jar
