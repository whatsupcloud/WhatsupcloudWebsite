import accenture from "../assets/logos/accenture.svg";
import aws from "../assets/logos/aws.svg";
import capgemini from "../assets/logos/capgemini.svg";
import cognizant from "../assets/logos/cognizant.svg";
import googleCloud from "../assets/logos/google-cloud.svg";
import hcltech from "../assets/logos/hcltech.svg";
import ibm from "../assets/logos/ibm.svg";
import infosys from "../assets/logos/infosys.svg";
import microsoft from "../assets/logos/microsoft.svg";
import oracle from "../assets/logos/oracle.svg";
import tcs from "../assets/logos/tcs.svg";
import techmahindra from "../assets/logos/techmahindra.svg";
import wipro from "../assets/logos/wipro.svg";
import SectionTitle from "./SectionTitle.jsx";

const logos = [
  ["AWS", aws],
  ["Google Cloud", googleCloud],
  ["Microsoft", microsoft],
  ["IBM", ibm],
  ["Oracle", oracle],
  ["TCS", tcs],
  ["Infosys", infosys],
  ["Wipro", wipro],
  ["Accenture", accenture],
  ["Capgemini", capgemini],
  ["Cognizant", cognizant],
  ["HCLTech", hcltech],
  ["Tech Mahindra", techmahindra]
];

export default function LogoRibbon({ compact = false }) {
  return (
    <section className={compact ? "" : "section"}>
      <div className="container-max">
        <SectionTitle
          eyebrow="Industry Ecosystem"
          title="Technology and career ecosystem learners prepare for"
          text="Training paths are aligned with cloud platforms, enterprise tools and hiring-market role expectations."
          center
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map(([name, src]) => (
            <div key={name} className="grid min-h-24 place-items-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              <img src={src} alt={`${name} logo`} loading="lazy" decoding="async" className="max-h-10 max-w-28 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
