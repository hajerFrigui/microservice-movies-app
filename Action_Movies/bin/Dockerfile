FROM openjdk:14-alpine
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 7000
ENTRYPOINT [ "java","-jar","app.jar" ]