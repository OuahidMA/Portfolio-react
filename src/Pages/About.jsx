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
} from '../Components/st-icons.jsx'

const skillGroups = [
  {
    title: 'Frontend & Core',
    items: [
      { icon: 'devicon-html5-plain colored', label: 'HTML5' },
      { icon: 'devicon-css3-plain colored', label: 'CSS3' },
      { icon: 'devicon-javascript-plain colored', label: 'JavaScript' },
      { icon: 'devicon-react-original colored', label: 'React' },
      { icon: 'devicon-tailwindcss-plain colored', label: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: 'devicon-nodejs-plain colored', label: 'Node.js' },
      { icon: 'devicon-express-original colored', label: 'Express.js' },
      { icon: 'devicon-php-plain colored', label: 'PHP' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: 'devicon-mysql-plain colored', label: 'MySQL' },
      { icon: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
      { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
      { icon: 'devicon-firebase-plain colored', label: 'Firebase' },
    ],
  },
  {
    title: 'Version Control & Tools',
    items: [{ icon: 'devicon-git-plain colored', label: 'Git' }],
  },
]

const cyberSkills = [
  { devicon: 'devicon-python-plain colored', label: 'Python' },
  { devicon: 'devicon-c-original colored', label: 'C' },
  { Icon: MetasploitIcon, label: 'Metasploit' },
  { Icon: NmapIcon, label: 'Nmap' },
  { Icon: OwaspIcon, label: 'OWASP Top 10' },
  { Icon: BurpIcon, label: 'Burp Suite' },
  { Icon: NessusIcon, label: 'Nessus' },
  { Icon: HashcatIcon, label: 'Hashcat' },
  { Icon: BashIcon, label: 'Bash' },
  { Icon: PowershellIcon, label: 'PowerShell' },
  { Icon: GhidraIcon, label: 'Ghidra' },
  { Icon: WiresharkIcon, label: 'Wireshark' },
]

function DeviconTile({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-box bg-base-100 border border-base-300 p-4 hover:border-primary/50 hover:shadow-md transition-all">
      <i className={`${icon} text-5xl leading-none`} aria-hidden="true" />
      <p className="text-sm font-medium text-muted">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="bg-base-200 border-b border-base-300">
        <div className="max-w-6xl mx-auto px-6 py-16 animate-fade-in-up">
          <span className="badge badge-ghost badge-soft mb-4">/about</span>
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-muted leading-relaxed max-w-3xl">
            I am a Full-Stack Web Developer and Offensive Cybersecurity Specialist who operates
            under two hats: <span className="font-semibold">builder</span> and{' '}
            <span className="font-semibold">auditor</span>.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-lg">My Story</h2>
              <p className="text-muted leading-relaxed">
                My tech journey is driven by a passion for offensive cybersecurity and the need to
                know how things work under the hood. I have extensive hands-on experience pentesting
                virtual networks across Windows and Linux environments, allowing me to develop a
                structured methodology for real-world engagements.
              </p>
              <p className="text-muted leading-relaxed">
                When off-the-shelf tools aren&apos;t enough, I build my own. I leverage Python for
                automation and scripting, and use C to interface with low-level system mechanics.
                Additionally, I develop full-stack web applications — combining responsive front-end
                design with flexible back-end architectures utilizing both SQL and NoSQL databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold">Tech Stack</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body">
                  <h3 className="card-title text-base">{group.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                    {group.items.map((item) => (
                      <DeviconTile key={item.label} icon={item.icon} label={item.label} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title text-base">Offensive Cybersecurity &amp; Pentesting</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                {cyberSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-box bg-base-100 border border-base-300 hover:border-primary/50 transition-colors"
                  >
                    {skill.Icon ? (
                      <skill.Icon />
                    ) : (
                      <i className={`${skill.devicon} text-4xl leading-none`} aria-hidden="true" />
                    )}
                    <p className="text-xs text-center text-muted">{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}