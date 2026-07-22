import LegalPageLayout from '../components/LegalPageLayout'

const sections = [
  {
    heading: '1. Agreement to Terms',
    paragraphs: [
      'These Terms of Service ("Terms") govern access to and use of the AutomationGini platform (the "Platform"), operated by [INSERT LEGAL ENTITY NAME] ("AutomationGini," "we," "us"). By creating an account or otherwise using the Platform, you ("Customer," "you") agree to be bound by these Terms.',
      'If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity, in which case "you" refers to that entity.',
    ],
  },
  {
    heading: '2. Description of Service',
    paragraphs: [
      'AutomationGini provides a platform that enables Customers to discover local business leads, generate AI-powered demonstration content (including website previews, voice call demonstrations, chatbot demonstrations, and mobile app mockups), and build production deliverables for their own clients, including websites, voice agents, and chatbot subscriptions.',
      'The specific features, usage limits, and pricing available to you depend on your subscription plan, as described on our pricing page and incorporated into these Terms by reference.',
    ],
  },
  {
    heading: '3. Accounts',
    bullets: [
      'You must provide accurate, current information when creating an account and keep it up to date.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.',
      'Customers on Agency-tier plans may invite additional users ("Agents") to their workspace. The Customer is responsible for its Agents\u2019 compliance with these Terms.',
      'You must notify us promptly of any unauthorized use of your account.',
    ],
  },
  {
    heading: '4. Subscription Plans, Fees, and Billing',
    paragraphs: [
      'The Platform is offered on subscription plans described on our pricing page, including a Free plan with limited usage and paid plans (Trial, Starter, Professional, and custom Agency plans) with higher usage allowances. Usage limits are enforced in real time; exceeding your plan\u2019s allowance may require upgrading or result in restricted access to additional usage until your billing cycle resets.',
      'Paid subscriptions are billed in advance on a recurring basis via our payment processor, Stripe. Except as required by law or expressly stated otherwise, fees are non-refundable.',
      'We may change our fees on prospective notice. Continued use of the Platform after a fee change takes effect constitutes acceptance of the new fees.',
      'Certain deliverables (e.g., individual website builds, voice agent builds) are offered on a one-time fee basis in addition to your subscription, as described within the Platform at the time of purchase.',
    ],
  },
  {
    heading: '5. Acceptable Use',
    intro: 'You agree not to use the Platform to:',
    bullets: [
      'Violate any applicable law or regulation, including telemarketing, robocalling, and consumer protection laws (such as the U.S. Telephone Consumer Protection Act) applicable to the outbound voice calls and demo communications you generate and send.',
      'Contact any individual or business that has opted out of, or otherwise indicated they do not wish to receive, marketing or sales communications.',
      'Generate or send content that is fraudulent, deceptive, defamatory, or that misrepresents the sender\u2019s identity.',
      'Attempt to reverse-engineer, scrape (beyond the Platform\u2019s intended functionality), or interfere with the Platform\u2019s operation or security.',
      'Use the Platform to build products or services that directly compete with AutomationGini.',
      'Resell or sublicense access to the Platform itself (as distinct from reselling deliverables you build using the Platform for your own clients, which is expressly permitted).',
    ],
    paragraphs2: [
      'You are solely responsible for ensuring your use of the Platform, including any outbound calling, complies with the laws of every jurisdiction in which you operate and in which the businesses you contact are located.',
    ],
  },
  {
    heading: '6. Ownership and Intellectual Property',
    bullets: [
      'AutomationGini retains all rights, title, and interest in and to the Platform itself, including its underlying software, models, and infrastructure.',
      'As between you and AutomationGini, you own the deliverables generated for your specific clients through the Platform (e.g., a website built for a named client), subject to your compliance with these Terms and payment of applicable fees, and subject to the underlying rights of any third-party content (such as licensed stock imagery) incorporated into those deliverables.',
      'You grant AutomationGini a limited license to process the content and business information you submit solely for the purpose of providing the Platform to you.',
    ],
  },
  {
    heading: '7. Third-Party Services',
    paragraphs: [
      'The Platform relies on third-party AI models, communications, and data providers (including but not limited to Anthropic, Google, Vapi, Hunter.io, Pexels, and Stripe) to deliver its functionality. AutomationGini is not responsible for the acts, omissions, availability, or performance of these third parties, though we will make commercially reasonable efforts to maintain service continuity.',
    ],
  },
  {
    heading: '8. Disclaimers',
    paragraphs: [
      'THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. AI-GENERATED CONTENT MAY CONTAIN INACCURACIES; YOU ARE RESPONSIBLE FOR REVIEWING ALL CONTENT BEFORE USE OR DISTRIBUTION TO YOUR CLIENTS.',
    ],
  },
  {
    heading: '9. Limitation of Liability',
    paragraphs: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOMATIONGINI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, ARISING FROM YOUR USE OF THE PLATFORM. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.',
    ],
  },
  {
    heading: '10. Indemnification',
    paragraphs: [
      'You agree to indemnify and hold AutomationGini harmless from any claims, damages, or expenses arising from your use of the Platform, your violation of these Terms, or your violation of any applicable law, including in connection with outbound communications you send to leads.',
    ],
  },
  {
    heading: '11. Termination',
    paragraphs: [
      'You may cancel your subscription at any time through your account settings. We may suspend or terminate your access to the Platform for material breach of these Terms, including violations of the Acceptable Use section, with or without notice depending on severity.',
      'Upon termination, your right to access the Platform ceases; certain provisions of these Terms (including ownership, disclaimers, liability limitations, and indemnification) survive termination.',
    ],
  },
  {
    heading: '12. Governing Law and Disputes',
    paragraphs: [
      'These Terms are governed by the laws of [INSERT JURISDICTION], without regard to conflict-of-law principles.',
    ],
  },
  {
    heading: '13. Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. We will provide notice of material changes via email or in-Platform notice. Continued use of the Platform after changes take effect constitutes acceptance.',
    ],
  },
  {
    heading: '14. Contact',
    paragraphs: [
      'Questions about these Terms can be directed to [INSERT CONTACT EMAIL].',
    ],
  },
]

export default function Terms() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="[INSERT DATE]"
      notice="This page is a draft pending final legal review and has not yet been finalized. Bracketed placeholders will be completed before these terms are considered final."
      sections={sections}
    />
  )
}
