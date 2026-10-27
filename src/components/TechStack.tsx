import type { ReactNode } from "react";
import { techStack } from "../data/portfolio";
import {
  CppIcon,
  TsIcon,
  JsIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
  MongoIcon,
  LinuxIcon,
} from "./Icons";
import "./TechStack.css";

const techIcons: Record<string, ReactNode> = {
  "C++": <CppIcon size={16} />,
  "C++ (C++17)": <CppIcon size={16} />,
  TypeScript: <TsIcon size={16} />,
  JavaScript: <JsIcon size={16} />,
  React: <ReactIcon size={16} />,
  "Next.js": <NextjsIcon size={16} />,
  "Next.js 16 (App Router)": <NextjsIcon size={16} />,
  "Node.js": <NodeIcon size={16} />,
  MongoDB: <MongoIcon size={16} />,
  "Linux Systems": <LinuxIcon size={16} />,
  "Linux CLI & Bash": <LinuxIcon size={16} />,
};

export default function TechStack() {
  return (
    <section className="section" id="techstack" aria-label="Technical Toolbox">
      <div className="container">
        <p className="section-label">
          <span className="section-label__dot" />
          Technical Toolbox
        </p>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-subtitle">
          Languages, systems primitives, backend frameworks, and developer tools
          applied across my projects and coursework.
        </p>

        <div className="tech__grid">
          {techStack.map((category) => (
            <div key={category.category} className="tech__category">
              <div className="tech__category-header">
                <h3 className="tech__category-title">{category.category}</h3>
                <span className="tech__category-count">{category.items.length}</span>
              </div>
              <div className="tech__items">
                {category.items.map((item) => {
                  const icon = techIcons[item];
                  return (
                    <span key={item} className="tech__item">
                      {icon && <span className="tech__item-icon">{icon}</span>}
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
