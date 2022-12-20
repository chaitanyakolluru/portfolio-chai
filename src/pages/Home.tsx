import Card from '../components/Card';

interface CardDetails {
  title: string;
  content?: string[];
  bulletedContent?: string[];
}
const details: CardDetails[] = [
  {
    title: 'SUMMARY',
    bulletedContent: [
      `Motivated, self-learning, passionate engineer with a penchant for 
automation. DevOps Engineer with a strong background in System 
Administration of Linux servers, IaC and CI/CD, and with experience 
developing backend micro-service and web applications`,
    ],
  },
  {
    title: 'CERTIFICATIONS',
    bulletedContent: [
      `Certified Kubernetes Security Specialist`,
      `Certified Kubernetes Administrator`,
      `Puppet Certified Professional`,
    ],
  },
  {
    title: 'TECHNICAL EXPERTISE',
    bulletedContent: [
      'Programming Languages:  Typescript, ReactJS, Golang, Python.',
      'DevOps: Kubernetes, Kuma Service Mesh, Argo CD, Python Kopf, GitHub actions, Terraform, Docker, Helm, Ansible, Puppet, Chef, Jenkins.',
      'Cloud Services:  Microsoft Azure, AWS.',
      'Operating systems: RedHat Linux (RHEL 5/6), CentOS 6/7, Ubuntu 12/14.',
      'Scripting languages: Bash, Perl, Ruby.',
    ],
  },
  {
    title: 'EDUCATION',
    bulletedContent: [
      `Bachelor of Science in Electronics and Communication – JNTU Hyderabad – 2006 – 2010`,
      `Master of Science in Electrical Engineering – University of Missouri Kansas City – 2011 - 2012
  `,
    ],
  },
];

const Home: React.FC = () => {
  return (
    <>
      {details.map((item) => (
        <Card
          key={details.indexOf(item)}
          title={item.title}
          content={item.content}
          bulletedContent={item.bulletedContent}
        />
      ))}
    </>
  );
};

export default Home;
