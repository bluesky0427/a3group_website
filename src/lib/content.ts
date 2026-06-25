import {
  ConsultingIcon,
  CodeIcon,
  AutomationIcon,
  TransformIcon,
  CollaborationIcon,
  TalentIcon,
  NewBusinessIcon,
} from "@/components/Icons";
import type { ComponentType, SVGProps } from "react";

export type Service = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/** The seven service areas, shared by the Home preview and What We Do page. */
export const services: Service[] = [
  {
    title: "IT Consulting",
    icon: ConsultingIcon,
    description:
      "We help businesses understand how technology can support their operations, improve efficiency, and create new opportunities. Our consulting approach focuses on practical solutions, clear planning, and long-term value.",
  },
  {
    title: "Software Development",
    icon: CodeIcon,
    description:
      "We design and build software solutions that help businesses solve problems, automate work, manage information, and serve their users more effectively. Our work can include web applications, business systems, internal tools, integrations, and digital platforms.",
  },
  {
    title: "Business Automation",
    icon: AutomationIcon,
    description:
      "We help organizations reduce repetitive manual work by introducing automation, process improvement, and digital workflows. By improving how work is done, businesses can save time, reduce errors, and focus more on growth.",
  },
  {
    title: "Digital Transformation",
    icon: TransformIcon,
    description:
      "We support businesses that want to modernize their systems, operations, and ways of working. Digital transformation is not only about adopting new tools — it is about using technology to improve how people, processes, and systems work together.",
  },
  {
    title: "Cross-Industry Collaboration",
    icon: CollaborationIcon,
    description:
      "We connect people from different fields, industries, and backgrounds to create new business opportunities. By combining different skills and perspectives, we help build projects and ideas that would be difficult for one person or one field to create alone.",
  },
  {
    title: "Talent and Skill Empowerment",
    icon: TalentIcon,
    description:
      "We believe everyone has skills and potential. A3 Technology Group helps people recognize their abilities, think proactively, and use their skills to create value for themselves, their communities, and the enterprise.",
  },
  {
    title: "New Business Creation",
    icon: NewBusinessIcon,
    description:
      "We support the development of new ideas, projects, and business models by combining technology, people, and practical execution. Our goal is to help transform potential into real opportunity.",
  },
];

/** Short service labels used for compact previews and the contact dropdown context. */
export const serviceLabels = services.map((s) => s.title);
