import React from 'react'
import {
  MetasploitIcon,
  NmapIcon,
  OwaspIcon,
  BurpIcon,
  NessusIcon,
  HashcatIcon,
  BashIcon,
  PowershellIcon,
  GhidraIcon,
  WiresharkIcon,
} from '/Components/st-icons.jsx'

export default function About() {
  return (
    <div>
      <h2>ABOUT ME</h2>
      <div className="whoami-container">
        <h4>I am a Full-Stack Web Developer and Offensive Cybersecurity Specialist who operates under two hats; builder and auditor.</h4>
        <p>My tech journey is driven by a passion for offensive cybersecurity and the need to know how things work under the hood. I have extensive hands-on experience pentesting virtual networks across Windows and Linux environments, allowing me to develop a structured methodology for real-world engagements.</p>
        <p>When off-the-shelf tools aren't enough, I build my own. I leverage Python for automation and scripting, and use C to interface with low-level system mechanics.</p>
        <p>Additionally, I develop full-stack web applications—combining responsive front-end design with flexible back-end architectures utilizing both SQL and NoSQL databases.</p>
      </div>
      
    </div>
  )
}

const webDevSkills = [
  { icon: 'devicon-html5-plain colored', label: 'HTML5' },
  { icon: 'devicon-css3-plain colored', label: 'CSS' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
  { icon: 'devicon-react-original colored', label: 'React' },
  { icon: 'devicon-nodejs-plain colored', label: 'NodeJS' },
  { icon: 'devicon-express-original colored', label: 'ExpressJS' },
  { icon: 'devicon-git-plain colored', label: 'Git' },
  { icon: 'devicon-php-plain colored', label: 'PHP' },
  { icon: 'devicon-mysql-original colored', label: 'MySQL' },
  { icon: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
  { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
  { icon: 'devicon-firebase-plain colored', label: 'Firebase' },
]

const cyberSkills = [
  { Icon: 'devicon-python-plain colored', label: 'Python', svg: false },
  { Icon: 'devicon-c-original colored', label: 'C', svg: false },
  { Icon: MetasploitIcon, label: 'Metasploit', svg: true },
  { Icon: NmapIcon, label: 'Nmap', svg: true },
  { Icon: OwaspIcon, label: 'Owasp Top 10', svg: true },
  { Icon: BurpIcon, label: 'Burp Suit', svg: true },
  { Icon: NessusIcon, label: 'Nessus', svg: true },
  { Icon: HashcatIcon, label: 'Hashcat', svg: true },
  { Icon: BashIcon, label: 'Bash', svg: true },
  { Icon: PowershellIcon, label: 'PowerShell', svg: true },
  { Icon: GhidraIcon, label: 'Ghidra', svg: true },
  { Icon: WiresharkIcon, label: 'Wireshark', svg: true },
]

function SkillBox({ icon, label, isSvg }) {
  return (
    <div className="st-box">
      {isSvg ? icon() : <i className={icon} />}
      <p>{label}</p>
    </div>
  )
}

export default function SkillsTools() {
  return (
    <section className="skillsNtools" id="skillsNtools">
      <h2>SKILLS & TOOLS</h2>
      <div className="st-compact-webdev">
        <h4>[ Full Stack Development ]</h4>
        {webDevSkills.map((skill) => (
          <SkillBox key={skill.label} icon={skill.icon} label={skill.label} isSvg={false} />
        ))}
      </div>

      <div className="st-compact-cysec">
        <h4>[ Offensive Cybersecurity & Pentesting ]</h4>
        {cyberSkills.map((skill) => (
          <SkillBox key={skill.label} icon={skill.Icon} label={skill.label} isSvg={skill.svg} />
        ))}
      </div>
    </section>
  )
}
