
import { motion } from "framer-motion";

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  isLoaded: boolean;
}

const HowItWorksSection = ({ isLoaded }: HowItWorksSectionProps) => {
  const steps: StepItem[] = [
    {
      step: "1",
      title: "Search",
      description: "Enter your location or healthcare need to find hospitals near you."
    },
    {
      step: "2",
      title: "Compare",
      description: "Browse detailed profiles, ratings, services, and reviews."
    },
    {
      step: "3",
      title: "Choose",
      description: "Select the hospital that best meets your specific healthcare needs."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -inset-40 bg-blue-50/50 rounded-[100%] blur-3xl -z-10"></div>
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-2 relative">
            <span className="relative inline-block">
              How It Works
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </span>
          </h2>
          <p className="text-muted-foreground mb-10 text-center max-w-2xl">
            Find your ideal healthcare provider in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-xl text-center shadow-lg border border-blue-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center mx-auto mb-6 font-semibold text-xl shadow-md">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
