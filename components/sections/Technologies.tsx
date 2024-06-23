import React from "react";
import Section from "../ui/PortfolioSection";
import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "/assets/tech/javascript.svg" },
  { name: "TypeScript", icon: "/assets/tech/typescript.svg" },
  { name: "React", icon: "/assets/tech/react.svg" },
  { name: "Redux", icon: "/assets/tech/redux.svg" },
  { name: "Redux Saga", icon: "/assets/tech/redux-saga.svg" },
  { name: "Framer Motion", icon: "/assets/tech/framer.svg" },
  { name: "Tailwind", icon: "/assets/tech/tailwind.svg" },
  { name: "React Native", icon: "/assets/tech/react.svg" },
  { name: "HTML", icon: "/assets/tech/html.svg" },
  { name: "CSS", icon: "/assets/tech/css.svg" },
  { name: "LESS", icon: "/assets/tech/less.svg" },
  { name: "BEM", icon: "/assets/tech/bem.svg" },
  { name: "Node.js", icon: "/assets/tech/node-js.svg" },
  { name: "Express.js", icon: "/assets/tech/express.svg" },
  { name: "NestJS", icon: "/assets/tech/nestjs.svg" },
  { name: "MongoDB", icon: "/assets/tech/mongo.svg" },
  { name: "MySQL", icon: "/assets/tech/mysql.svg" },
  { name: "PostgreSQL", icon: "/assets/tech/postgresql.svg" },
  { name: "Sequelize", icon: "/assets/tech/sequelize.svg" },
  { name: "Sequelize", icon: "/assets/tech/typeorm.svg" },
  { name: "Java", icon: "/assets/tech/java.svg" },
  { name: "Spring Boot", icon: "/assets/tech/spring.svg" },
  { name: "Redis", icon: "/assets/tech/redis.svg" },
  { name: "Kafka", icon: "/assets/tech/kafka.svg" },
  { name: "Temporal", icon: "/assets/tech/temporal.svg" },
  { name: "Vscode", icon: "/assets/tech/vscode.svg" },
  { name: "Git", icon: "/assets/tech/git.svg" },
  { name: "Postman", icon: "/assets/tech/postman.svg" },
  { name: "Swagger", icon: "/assets/tech/swagger.svg" },
  { name: "Metabase", icon: "/assets/tech/metabase.svg" },
];

const Technologies = () => {
  return (
    <Section id="tech" header="Tools and Technologies">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-10 gap-5 max-lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex justify-center items-center bg-gradient-to-br from-zinc-800 to-zinc-950 z-10 rounded-md p-2 relative"
            >
              {tech.name === "React Native" && (
                <div className="absolute right-0 left-0 top-0 text-xs text-zinc-100 bg-cyan-600 text-center rounded-sm">
                  React Native
                </div>
              )}
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Technologies;
