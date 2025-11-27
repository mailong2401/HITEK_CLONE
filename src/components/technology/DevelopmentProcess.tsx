// components/technology/DevelopmentProcess.tsx
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";



const DevelopmentProcess = () => {
  const { t } = useLanguage();
  const process = [
  {
    step: t(`technology.developmentProcess.steps.${0}.step`),
    title: t(`technology.developmentProcess.steps.${0}.title`),
    description: t(`technology.developmentProcess.steps.${0}.description`)
  },
  {
    step: t(`technology.developmentProcess.steps.${1}.step`),
    title: t(`technology.developmentProcess.steps.${1}.title`),
    description: t(`technology.developmentProcess.steps.${1}.description`)
  },
  {
    step: t(`technology.developmentProcess.steps.${2}.step`),
    title: t(`technology.developmentProcess.steps.${2}.title`),
    description: t(`technology.developmentProcess.steps.${2}.description`)
  },
  {
    step: t(`technology.developmentProcess.steps.${3}.step`),
    title: t(`technology.developmentProcess.steps.${3}.title`),
    description: t(`technology.developmentProcess.steps.${3}.description`)
  }
];
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("technology.developmentProcess.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("technology.developmentProcess.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
