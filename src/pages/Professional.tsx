import Card from '../components/Card';

const bulletedContent = {
  AA: [
    `•	Experience with Spotify’s Backstage framework and front-end development with ReactJS and backend with Typescript. `,
    `•	Experience working with Material UI and leveraging its UI elements. `,
    `•	Developing backend micro-service applications and scripts using Python.`,
    `•	Developing terraform modules for Microsoft Azure PaaS resource offerings.`,
    `•	Developing a cli natively in Golang to provide easier interaction with Terraform modules created to provision Azure resources.`,
    `•	Administering AKS and in-house Kubernetes clusters.`,
    `•	Administering Continuous Delivery for Kubernetes environments using Argo CD.`,
    `•	Developing custom resources and operators using Python’s Kopf.`,
    `•	Developing GitHub actions to handle Continuous Integration and testing, linting and deploying web applications.`,
    `•	Administering and troubleshooting service meshes using Kuma.`,
    `•	Developing and managing code base for Infrastructure as Code using Puppet Enterprise and Puppet Opensource.`,
    `•	Lead an effort to migrate the usage of Puppet from Enterprise version to Opensource.`,
    `•	Administered application servers made from Linux/Windows OS in in-house datacenters using Puppet Enterprise and Puppet Opensource.`,
  ],
  GBIT: [
    `•	Developing and managing code base for Infrastructure as Code using Puppet Enterprise.`,
    `•	Administered application servers made from Linux/Windows OS in in-house datacenters using Puppet Enterprise.`,
    `•	Developing Terraform modules to provision Microsoft Azure resources.`,
    `•	Developing applications and scrips using Python. Adopted a UI application for Puppet Opensource written in Python and further customized it for internal use-cases.`,
    `•	Experience with developing scripts using Ruby.`,
    `•	Setting up CI/CD pipelines using Jenkins.`,
  ],
  SMS: [
    `•	Administering, configuring, and supporting RHEL 6/7 Linux servers used for Big-Data analytics.`,
    `•	Using Infrastructure as Code practices streamline server build processes and promote automation.`,
    `•	Developing Puppet Enterprise code base to configure RHEL Linux instances.`,
    `•	Developing an External node Classifier (ENC) that can be used to classify servers with Puppet code and developing a MySQL backend that ENC queries to classify nodes.`,
    `•	Developing scripts using Python to handle managing web-proxy configurations on servers.`,
    `•	Leveraging existing code bases built with StackIQ and SaltStack to develop IaC strategies and code using Puppet Enterprise.`,
    `•	Developing rpm packages to configure servers.`,
    `•	Developing code using Python’s AWS boto3 SDK to handle various IaaS and PaaS tasks within AWS.`,
    `•	Developing code in Perl and Python that interfaces with a third-party order management application.`,
    `•	Developing Ansible playbooks to handle server configuration and other scripting related tasks.`,
    `•	Administering Linux servers and ensuring they are patched as per cycle.`,
    `•	Developing bash scripts to automate order processing.`,
    `•	Developing queries and store processes to query relational data in Oracle DB.`,
    `•	IaC using Chef to maintain configuration of Linux servers.`,
    `•	Setting up vRealize Automation Center (vRAC) blueprints and workflows to provide self-service Infrastructure services to customers.`,
    `•	Setting up and administering Jenkins servers.`,
    `•	Setting up Splunk infrastructure.`,
    `•	Managing vCenter environments.`,
  ],
};

const Professional: React.FC = () => {
  return (
    <>
      <Card
        title={`American Airlines, Fort Worth – TX - Apr 2021 - Current
    
`}
        content={`
    Team Lead, IT Infrastructure / Sr. DevOps Engineer`}
        bulletedContent={bulletedContent.AA}
      />
      <Card
        title={`Global Bridge Infotech Inc. - Oct 2017 – Mar 2021
`}
        content={`
        American Airlines Inc, Fort Worth – TX (Client) - Sr. DevOps Engineer`}
        bulletedContent={bulletedContent.GBIT}
      />
      <Card
        title={`Server Management Services LLC. - Aug 2013 – Sep 2017
    
`}
        content={`
    Sr. DevOps Engineer`}
        bulletedContent={bulletedContent.SMS}
      />
    </>
  );
};

export default Professional;
