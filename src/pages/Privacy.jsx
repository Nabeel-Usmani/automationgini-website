import LegalPageLayout from '../components/LegalPageLayout'

const sections = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'AutomationGini provides an AI-powered lead generation and client automation platform for marketing agencies and independent agents (our "Customers"). This Privacy Policy explains what personal data we collect, how we use it, who we share it with, and the choices available to you.',
      'This Policy applies to: (a) individuals who create an AutomationGini account ("Users"); (b) individuals whose information appears in leads generated through the Platform, typically representatives of local businesses discovered via public sources such as Google Maps ("Lead Contacts"); and (c) visitors to our marketing website.',
      'By using AutomationGini, you agree to the collection and use of information as described in this Policy. If you do not agree, please do not use the Platform.',
    ],
  },
  {
    heading: '2. Information We Collect',
    subs: [
      {
        heading: '2.1 Information Users Provide Directly',
        bullets: [
          'Account information: full name, email address, password (stored as a one-way cryptographic hash, never in plain text), phone number, and company name.',
          'Billing information: processed directly by our payment processor, Stripe. AutomationGini does not store full payment card numbers.',
          'Content you submit: custom website copy, logos, and other materials you upload when building deliverables for your clients.',
          'Communications: information you provide when contacting support or our in-platform chat assistant.',
        ],
      },
      {
        heading: '2.2 Information Collected About Lead Contacts',
        paragraphs: [
          'Our core Platform function is discovering local businesses using publicly available sources, principally the Google Places API. For each lead, we may collect and process: business name, address, phone number, website URL, category/niche, and publicly posted review data (star rating, review count).',
          'When a User initiates a demo voice call, we generate and may store a call recording and transcript for the purpose of enabling the User to review and share the demo. When a User initiates a demo chatbot or generates a website/app preview, the resulting content and any business information used to personalize it is stored on our systems.',
        ],
      },
      {
        heading: '2.3 Information Collected Automatically',
        bullets: [
          'Usage data: pages visited, features used, timestamps, and general activity logs, used for billing enforcement (plan usage caps) and product improvement.',
          'Device and log data: IP address, browser type, and approximate geographic location (country/region level), collected automatically, including at login for security and analytics purposes.',
        ],
      },
    ],
  },
  {
    heading: '3. How We Use Information',
    intro: 'We use the information described above to:',
    bullets: [
      'Provide, operate, and maintain the Platform, including generating AI-powered demos and deliverables.',
      'Process transactions and manage subscriptions.',
      'Enforce plan usage limits and prevent abuse.',
      'Communicate with Users about their account, including service updates and support.',
      'Improve and develop new features.',
      'Detect, investigate, and prevent fraudulent or unauthorized activity.',
      'Comply with legal obligations.',
    ],
  },
  {
    heading: '4. Legal Basis for Processing (EEA/UK Users)',
    paragraphs: [
      'Where the General Data Protection Regulation ("GDPR") applies, we rely on the following legal bases: performance of a contract (providing the Platform to Users); legitimate interests (improving the Platform, preventing fraud, and processing publicly available business information for B2B lead generation purposes); consent (where explicitly requested, such as certain marketing communications); and compliance with legal obligations.',
    ],
  },
  {
    heading: '5. Third-Party Service Providers',
    intro: 'We share information with the following categories of third-party processors, each engaged to perform a specific function on our behalf:',
    bullets: [
      'AI content and voice providers (Anthropic, Google, Vapi): process business and lead information to generate demo content, website copy, images, and voice conversations.',
      'Lead enrichment providers (Hunter.io, Google Places API): used to source and verify publicly available business contact information.',
      'Payment processing (Stripe): processes subscription payments; AutomationGini does not access or store full payment card details.',
      'Infrastructure and hosting (Render, and our underlying database providers): host the Platform and store data securely.',
      'Stock imagery (Pexels): supplies licensed stock photography used in generated demo content.',
    ],
  },
  {
    heading: '6. Data Retention',
    paragraphs: [
      'We retain Account information for as long as the account remains active, and for a reasonable period thereafter to comply with legal, tax, and accounting obligations.',
      'Free demo previews (websites, voice call recordings, chatbot sessions, app mockups) are retained for a limited period following generation unless converted to a paid deliverable, after which they are retained for the duration of the underlying client relationship.',
    ],
  },
  {
    heading: '7. International Data Transfers',
    paragraphs: [
      'AutomationGini and its service providers may process data in countries other than where a User or Lead Contact is located, including the United States. Where required by applicable law, we rely on appropriate safeguards for such transfers, such as Standard Contractual Clauses.',
    ],
  },
  {
    heading: '8. Your Rights',
    paragraphs: [
      'Depending on your location, you may have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict certain processing; request a portable copy of your data; and withdraw consent where processing is based on consent.',
      'To exercise these rights, contact us at [INSERT PRIVACY CONTACT EMAIL]. We will respond within the timeframe required by applicable law.',
      'If you are a Lead Contact whose business information appears in a demo generated by one of our Users and you wish to request removal, please contact us at the same address.',
    ],
  },
  {
    heading: '9. Data Security',
    paragraphs: [
      'We implement technical and organizational measures designed to protect personal data, including encrypted password storage, encrypted data transmission (TLS), role-based access controls, and tenant data isolation. No system is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '10. Children\u2019s Privacy',
    paragraphs: [
      'AutomationGini is a business-to-business platform not directed at, and not intended for use by, individuals under the age of 18. We do not knowingly collect personal information from children.',
    ],
  },
  {
    heading: '11. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Material changes will be notified to Users via email or in-Platform notice. Continued use of the Platform after changes take effect constitutes acceptance of the revised Policy.',
    ],
  },
  {
    heading: '12. Contact Us',
    paragraphs: [
      'Questions about this Privacy Policy or our data practices can be directed to support@automationgini.com',
    ],
  },
]

export default function Privacy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="[INSERT DATE]"
      notice="This page is a draft pending final legal review and has not yet been finalized. Bracketed placeholders will be completed before this policy is considered final."
      sections={sections}
    />
  )
}
