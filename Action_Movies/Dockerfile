FROM maven:3.6.3 AS maven

WORKDIR /usr/src/app
COPY . /usr/src/app
# Compile and package the application to an executable JAR
RUN mvn package 

FROM openjdk:14-alpine
#You can either declare it in a Dockerfile, which means each time a container is started from the image, the volume is created (empty),
VOLUME /tmp
# WORKDIR /opt/app
ARG JAR_FILE=target/*.jar
COPY --from=maven /usr/src/app/${JAR_FILE} app.jar
EXPOSE 9000
ENTRYPOINT [ "java","-jar","/app.jar" ]




# FROM openjdk:14-alpine

# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# EXPOSE 9000
# ENTRYPOINT [ "java","-jar","app.jar" ]

###############################
# FROM maven:3.8.2-jdk-8
# WORKDIR /app
# COPY . .
# RUN mvn clean install
# CMD mvn spring-boot:run