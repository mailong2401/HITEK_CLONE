import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface DevelopmentProcessProps {
  process: ProcessStep[];
}

const DevelopmentProcess = ({ process }: DevelopmentProcessProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Quy trình phát triển</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi tuân theo quy trình phát triển chuyên nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors"
            >
              <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
