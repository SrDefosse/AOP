import { motion } from "framer-motion";
import {
  SiFigma,
  SiNotion,
  SiAsana,
  SiGoogle,
  SiMeta,
  SiTrello,
  SiN8N,
  SiClickup
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { TbBrandOpenai, TbBrandFramer, TbSparkles } from "react-icons/tb";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

interface ToolIconProps {
  icon: React.ReactNode;
  name: string;
  delay?: number;
}

function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/90 font-medium text-sm tracking-wide drop-shadow">
          {skill}
        </span>
        <span className="text-white/80 text-sm font-semibold drop-shadow">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2 shadow-inner backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          className="bg-gradient-to-r from-white/70 to-white/50 h-2 rounded-full shadow-sm backdrop-blur-sm"
          style={{
            background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 100%)`
          }}
        />
      </div>
    </motion.div>
  );
}

function ToolIcon({ icon, name, delay = 0 }: ToolIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="group relative"
    >
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                      flex items-center justify-center border border-white/30
                      hover:bg-white/30 cursor-pointer">
        <div className="text-white/80 text-2xl group-hover:text-white transition-colors drop-shadow">
          {icon}
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      text-xs text-white/90 whitespace-nowrap font-medium drop-shadow">
        {name}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const strategicSkills = [
    { skill: "Brand Strategy", percentage: 95 },
    { skill: "Storytelling", percentage: 90 },
    { skill: "IA Generativa", percentage: 85 },
    { skill: "UX Writing", percentage: 88 },
    { skill: "Marketing Automation", percentage: 92 },
    { skill: "Content Strategy", percentage: 94 }
  ];

  const tools = [
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiAsana />, name: "Asana" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiGoogle />, name: "Google" },
    { icon: <SiMeta />, name: "Meta" },
    { icon: <FaMicrosoft />, name: "Microsoft" },
    { icon: <SiClickup />, name: "ClickUp" },
    { icon: <SiN8N />, name: "N8N" },
    { icon: <SiTrello />, name: "Trello" },
    { icon: <TbSparkles />, name: "Sora" },
    { icon: <TbBrandFramer />, name: "Midjourney" },
    { icon: <TbBrandOpenai />, name: "ChatGPT" },
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 lg:py-24 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4 drop-shadow-lg">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/40 mx-auto rounded-full shadow-lg"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills Estratégicos */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20
                          hover:bg-white/15 transition-all duration-300 hover:shadow-3xl
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:rounded-2xl before:pointer-events-none">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-white mb-8 tracking-wide drop-shadow-lg"
            >
              Skills Estratégicos
            </motion.h3>
            <div>
              {strategicSkills.map((item, index) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  percentage={item.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20
                          hover:bg-white/15 transition-all duration-300 hover:shadow-3xl
                          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:rounded-2xl before:pointer-events-none">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold text-white mb-8 tracking-wide drop-shadow-lg"
            >
              Herramientas
            </motion.h3>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <ToolIcon
                  key={tool.name}
                  icon={tool.icon}
                  name={tool.name}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
