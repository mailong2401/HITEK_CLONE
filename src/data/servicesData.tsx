import { useLanguage } from "@/contexts/LanguageContext";

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  image: string;
}

export const useServicesData = () => {
  const { t } = useLanguage();

  // Map dữ liệu từ JSON sang Service interface với template string
  const services: Service[] = [
    {
      id: "custom-software",
      iconName: "Code2",
      title: t(`services.servicesList.${0}.title`),
      description: t(`services.servicesList.${0}.description`),
      fullDescription: t(`services.servicesList.${0}.fullDescription`),
      features: [
        t(`services.servicesList.${0}.features.${0}`),
        t(`services.servicesList.${0}.features.${1}`), 
        t(`services.servicesList.${0}.features.${2}`),
        t(`services.servicesList.${0}.features.${3}`),
        t(`services.servicesList.${0}.features.${4}`),
        t(`services.servicesList.${0}.features.${5}`)
      ],
      technologies: [".NET", "Java", "Python", "Node.js", "React", "Angular", "Vue.js"],
      image: "https://techvccloud.mediacdn.vn/thumb_w/650/2018/11/26/mainframe-image-shutterstock746652745-e1525253151433-15431997497441692234940.jpg"
    },
    {
      id: "long-term-software",
      iconName: "BarChart3",
      title: t(`services.servicesList.${1}.title`),
      description: t(`services.servicesList.${1}.description`),
      fullDescription: t(`services.servicesList.${1}.fullDescription`),
      features: [
        t(`services.servicesList.${1}.features.${0}`),
        t(`services.servicesList.${1}.features.${1}`), 
        t(`services.servicesList.${1}.features.${2}`),
        t(`services.servicesList.${1}.features.${3}`),
        t(`services.servicesList.${1}.features.${4}`),
        t(`services.servicesList.${1}.features.${5}`)
      ],
      technologies: ["Agile", "Scrum", "CI/CD", "Microservices", "DevOps", "Cloud Native"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
    },
    {
      id: "web-development",
      iconName: "Globe",
      title: t(`services.servicesList.${2}.title`),
      description: t(`services.servicesList.${2}.description`),
      fullDescription: t(`services.servicesList.${2}.fullDescription`),
      features: [
        t(`services.servicesList.${2}.features.${0}`),
        t(`services.servicesList.${2}.features.${1}`), 
        t(`services.servicesList.${2}.features.${2}`),
        t(`services.servicesList.${2}.features.${3}`),
        t(`services.servicesList.${2}.features.${4}`),
        t(`services.servicesList.${2}.features.${5}`)
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", ".NET", "PHP", "Laravel"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&h=400&fit=crop"
    },
    {
      id: "cloud-migration",
      iconName: "Cloud",
      title: t(`services.servicesList.${3}.title`),
      description: t(`services.servicesList.${3}.description`),
      fullDescription: t(`services.servicesList.${3}.fullDescription`),
      features: [
        t(`services.servicesList.${3}.features.${0}`),
        t(`services.servicesList.${3}.features.${1}`), 
        t(`services.servicesList.${3}.features.${2}`),
        t(`services.servicesList.${3}.features.${3}`),
        t(`services.servicesList.${3}.features.${4}`),
        t(`services.servicesList.${3}.features.${5}`)
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
    },
    {
      id: "mobile-app",
      iconName: "Smartphone",
      title: t(`services.servicesList.${4}.title`),
      description: t(`services.servicesList.${4}.description`),
      fullDescription: t(`services.servicesList.${4}.fullDescription`),
      features: [
        t(`services.servicesList.${4}.features.${0}`),
        t(`services.servicesList.${4}.features.${1}`), 
        t(`services.servicesList.${4}.features.${2}`),
        t(`services.servicesList.${4}.features.${3}`),
        t(`services.servicesList.${4}.features.${4}`),
        t(`services.servicesList.${4}.features.${5}`)
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Java", "Objective-C"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop"
    },
    {
      id: "software-testing",
      iconName: "TestTube2",
      title: t(`services.servicesList.${5}.title`),
      description: t(`services.servicesList.${5}.description`),
      fullDescription: t(`services.servicesList.${5}.fullDescription`),
      features: [
        t(`services.servicesList.${5}.features.${0}`),
        t(`services.servicesList.${5}.features.${1}`), 
        t(`services.servicesList.${5}.features.${2}`),
        t(`services.servicesList.${5}.features.${3}`),
        t(`services.servicesList.${5}.features.${4}`),
        t(`services.servicesList.${5}.features.${5}`)
      ],
      technologies: ["Selenium", "Jest", "Cypress", "JMeter", "Postman", "TestRail"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop"
    },
    {
      id: "outsourcing",
      iconName: "Users",
      title: t(`services.servicesList.${6}.title`),
      description: t(`services.servicesList.${6}.description`),
      fullDescription: t(`services.servicesList.${6}.fullDescription`),
      features: [
        t(`services.servicesList.${6}.features.${0}`),
        t(`services.servicesList.${6}.features.${1}`), 
        t(`services.servicesList.${6}.features.${2}`),
        t(`services.servicesList.${6}.features.${3}`),
        t(`services.servicesList.${6}.features.${4}`),
        t(`services.servicesList.${6}.features.${5}`)
      ],
      technologies: ["Project Management", "Team Building", "Quality Control", "Agile", "Scrum"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
    },
    {
      id: "offshore-center",
      iconName: "Building",
      title: t(`services.servicesList.${7}.title`),
      description: t(`services.servicesList.${7}.description`),
      fullDescription: t(`services.servicesList.${7}.fullDescription`),
      features: [
        t(`services.servicesList.${7}.features.${0}`),
        t(`services.servicesList.${7}.features.${1}`), 
        t(`services.servicesList.${7}.features.${2}`),
        t(`services.servicesList.${7}.features.${3}`),
        t(`services.servicesList.${7}.features.${4}`),
        t(`services.servicesList.${7}.features.${5}`)
      ],
      technologies: ["HR Management", "Infrastructure", "Operations", "Training", "Process Optimization"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop"
    },
    {
      id: "nearshore-software",
      iconName: "Server",
      title: t(`services.servicesList.${8}.title`),
      description: t(`services.servicesList.${8}.description`),
      fullDescription: t(`services.servicesList.${8}.fullDescription`),
      features: [
        t(`services.servicesList.${8}.features.${0}`),
        t(`services.servicesList.${8}.features.${1}`), 
        t(`services.servicesList.${8}.features.${2}`),
        t(`services.servicesList.${8}.features.${3}`),
        t(`services.servicesList.${8}.features.${4}`),
        t(`services.servicesList.${8}.features.${5}`)
      ],
      technologies: ["Nearshore Model", "Communication Tools", "Collaboration", "Project Management"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&h=400&fit=crop"
    },
    {
      id: "blockchain",
      iconName: "Lock",
      title: t(`services.servicesList.${9}.title`),
      description: t(`services.servicesList.${9}.description`),
      fullDescription: t(`services.servicesList.${9}.fullDescription`),
      features: [
        t(`services.servicesList.${9}.features.${0}`),
        t(`services.servicesList.${9}.features.${1}`), 
        t(`services.servicesList.${9}.features.${2}`),
        t(`services.servicesList.${9}.features.${3}`),
        t(`services.servicesList.${9}.features.${4}`),
        t(`services.servicesList.${9}.features.${5}`)
      ],
      technologies: ["Ethereum", "Solidity", "Web3", "Smart Contracts", "Hyperledger", "IPFS"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=400&fit=crop"
    },
    {
      id: "ai-ml",
      iconName: "Cpu",
      title: t(`services.servicesList.${10}.title`),
      description: t(`services.servicesList.${10}.description`),
      fullDescription: t(`services.servicesList.${10}.fullDescription`),
      features: [
        t(`services.servicesList.${10}.features.${0}`),
        t(`services.servicesList.${10}.features.${1}`), 
        t(`services.servicesList.${10}.features.${2}`),
        t(`services.servicesList.${10}.features.${3}`),
        t(`services.servicesList.${10}.features.${4}`),
        t(`services.servicesList.${10}.features.${5}`)
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=400&fit=crop"
    },
    {
      id: "devops",
      iconName: "Zap",
      title: t(`services.servicesList.${11}.title`),
      description: t(`services.servicesList.${11}.description`),
      fullDescription: t(`services.servicesList.${11}.fullDescription`),
      features: [
        t(`services.servicesList.${11}.features.${0}`),
        t(`services.servicesList.${11}.features.${1}`), 
        t(`services.servicesList.${11}.features.${2}`),
        t(`services.servicesList.${11}.features.${3}`),
        t(`services.servicesList.${11}.features.${4}`),
        t(`services.servicesList.${11}.features.${5}`)
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&h=400&fit=crop"
    }
  ];

  // Sử dụng stats từ JSON
  const stats = [
    { 
      number: t('stats.experience.number'), 
      label: t('stats.experience.label') 
    },
    { 
      number: t('stats.staff.number'), 
      label: t('stats.staff.label') 
    },
    { 
      number: t('stats.projects.number'), 
      label: t('stats.projects.label') 
    },
    { 
      number: t('stats.satisfied.number'), 
      label: t('stats.satisfied.label') 
    }
  ];

  // Process data với template string
  const process = [
    {
      step: "01",
      title: t(`services.process.${0}.title`),
      description: t(`services.process.${0}.description`)
    },
    {
      step: "02",
      title: t(`services.process.${1}.title`),
      description: t(`services.process.${1}.description`)
    },
    {
      step: "03",
      title: t(`services.process.${2}.title`),
      description: t(`services.process.${2}.description`)
    },
    {
      step: "04",
      title: t(`services.process.${3}.title`),
      description: t(`services.process.${3}.description`)
    }
  ];

  return {
    services,
    stats,
    process,
    sectionTitle: t('services.sectionTitle'),
    sectionDescription: t('services.sectionDescription')
  };
};

// Export mặc định cho các component sử dụng
export default useServicesData;
