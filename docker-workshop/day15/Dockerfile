# create an image based off this image
FROM maven:3.8-openjdk-18-slim AS builder

# create a directory and cd into the directory
WORKDIR /src

# everything after WORKDIR is now in /src

# copy files
COPY pom.xml .
COPY mvnw .
COPY mvnw.cmd .

# copy directories
COPY src src

# compile the Java program
RUN mvn package -Dmaven.test.skip=true

# RUN the application
FROM openjdk:18-slim

WORKDIR /src

# copy the compiled JAR file over to this new container
COPY --from=builder /src/target/day15-0.0.1-SNAPSHOT.jar .

ENV SERVER_PORT=8080

EXPOSE ${SERVER_PORT}

ENTRYPOINT java -jar day15-0.0.1-SNAPSHOT.jar