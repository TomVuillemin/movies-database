FROM maven:3-amazoncorretto-17
WORKDIR /usr/src/app

COPY pom.xml /usr/src/app/pom.xml
RUN mvn dependency:go-offline

COPY src/ /usr/src/app/src
RUN mvn package

CMD [ "sh", "-c", "mvn spring-boot:run" ]
