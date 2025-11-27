// components/technology/TechnologyTabs.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";




const TechnologyTabs = () => {
  const { t } = useLanguage();

  const technologies = {
  frontend: {
    title: "Front-end Development",
    description: t("technology.technologyTabs.tabs.frontend.description"),
    items: [
      {
        name: "ReactJS",
        description: t(`technology.technologyTabs.tabs.frontend.items.${0}.description`),
        icon: "⚛️",
        features: ["Component-based", "Virtual DOM", "Reusable Components"]
      },
      {
        name: "Angular",
        description: t(`technology.technologyTabs.tabs.frontend.items.${1}.description`),
        icon: "🅰️",
        features: ["Two-way Data Binding", "Dependency Injection", "Modular Architecture"]
      },
      {
        name: "Vue.js",
        description: t(`technology.technologyTabs.tabs.frontend.items.${2}.description`),
        icon: "📊",
        features: ["Reactive Data Binding", "Component System", "Vue Router"]
      },
      {
        name: "TypeScript",
        description: t(`technology.technologyTabs.tabs.frontend.items.${3}.description`),
        icon: "🔷",
        features: ["Static Typing", "Better IntelliSense", "Enhanced Refactoring"]
      }
    ]
  },
  backend: {
    title: "Back-end Development",
    description: t(`technology.technologyTabs.tabs.backend.description`),
    items: [
      {
        name: "Node.js",
        description: t(`technology.technologyTabs.tabs.backend.items.${0}.description`),
        icon: "🟢",
        features: ["Non-blocking I/O", "Event-driven", "NPM Ecosystem"]
      },
      {
        name: ".NET Core",
        description: t(`technology.technologyTabs.tabs.backend.items.${1}.description`),
        icon: "🔷",
        features: ["Cross-platform", "High Performance", "Enterprise Ready"]
      },
      {
        name: "Java Spring",
        description: t(`technology.technologyTabs.tabs.backend.items.${2}.description`),
        icon: "☕",
        features: ["Dependency Injection", "AOP", "Spring Boot"]
      },
      {
        name: "Python Django",
        description: t(`technology.technologyTabs.tabs.backend.items.${3}.description`),
        icon: "🐍",
        features: ["Rapid Development", "Secure", "Scalable"]
      }
    ]
  },
  mobile: {
    title: "Mobile Development",
        description: t(`technology.technologyTabs.tabs.mobile.description`),
    items: [
      {
        name: "React Native",
        description: t(`technology.technologyTabs.tabs.mobile.items.${0}.description`),
        icon: "📱",
        features: ["Cross-platform", "Native Performance", "Hot Reload"]
      },
      {
        name: "Flutter",
        description: t(`technology.technologyTabs.tabs.mobile.items.${1}.description`),
        icon: "🎯",
        features: ["Single Codebase", "Fast Development", "Beautiful UI"]
      },
      {
        name: "iOS Swift",
        description: t(`technology.technologyTabs.tabs.mobile.items.${2}.description`),
        icon: "🍎",
        features: ["Performance", "Safety", "Modern Syntax"]
      },
      {
        name: "Android Kotlin",
        description: t(`technology.technologyTabs.tabs.mobile.items.${3}.description`),
        icon: "🤖",
        features: ["Concise", "Safe", "Interoperable"]
      }
    ]
  },
  database: {
    title: "Database & Cloud",
    description: t(`technology.technologyTabs.tabs.database.description`),
    items: [
      {
        name: "MongoDB",
        description: t(`technology.technologyTabs.tabs.database.items.${0}.description`),
        icon: "🍃",
        features: ["Document-based", "Scalable", "Flexible Schema"]
      },
      {
        name: "PostgreSQL",
        description: t(`technology.technologyTabs.tabs.database.items.${1}.description`),
        icon: "🐘",
        features: ["ACID Compliance", "Extensible", "JSON Support"]
      },
      {
        name: "AWS",
        description: t(`technology.technologyTabs.tabs.database.items.${2}.description`),
        icon: "☁️",
        features: ["Scalable", "Secure", "Global Infrastructure"]
      },
      {
        name: "Azure",
        description: t(`technology.technologyTabs.tabs.database.items.${3}.description`),
        icon: "🔷",
        features: ["Hybrid Cloud", "AI Integration", "Enterprise Focus"]
      }
    ]
  },
  blockchain: {
    title: "Blockchain & AI",
    description: t(`technology.technologyTabs.tabs.blockchain.description`),
    items: [
      {
        name: "Ethereum",
        description: t(`technology.technologyTabs.tabs.blockchain.items.${0}.description`),
        icon: "⛓️",
        features: ["Smart Contracts", "DApps", "DeFi"]
      },
      {
        name: "Solidity",
        description: t(`technology.technologyTabs.tabs.blockchain.items.${1}.description`),
        icon: "📝",
        features: ["Static Typing", "Inheritance", "Libraries"]
      },
      {
        name: "Machine Learning",
        description: t(`technology.technologyTabs.tabs.blockchain.items.${2}.description`),
        icon: "🧠",
        features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
      },
      {
        name: "IoT",
        description: t(`technology.technologyTabs.tabs.blockchain.items.${3}.description`),
        icon: "📡",
        features: ["Real-time Data", "Sensor Networks", "Edge Computing"]
      }
    ]
  }
};

  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t(`technology.technologyTabs.title`)}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t(`technology.technologyTabs.subtitle`)}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(technologies).map((techKey) => (
            <button
              key={techKey}
              onClick={() => setActiveTab(techKey)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === techKey
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {technologies[techKey].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {technologies[activeTab].title}
            </h3>
            <p className="text-muted-foreground">
              {technologies[activeTab].description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies[activeTab].items.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{tech.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {tech.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyTabs;
