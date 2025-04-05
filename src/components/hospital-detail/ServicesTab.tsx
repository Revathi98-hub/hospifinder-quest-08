
interface ServicesTabProps {
  services: string[];
}

const ServicesTab = ({ services }: ServicesTabProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Services Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="glass p-4 rounded-lg flex items-center space-x-3"
          >
            <div className="w-2 h-2 rounded-full bg-medical-500"></div>
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTab;
