import React, { useState } from "react";

const data = [
  {
    question: "Order Acceptance & Contract Formation",
    answer: `
All purchase orders, whether submitted electronically, in writing, or verbally, shall only become binding contracts upon Awwal Textiles' issuance of a formal written order confirmation.

These Terms & Conditions shall exclusively govern all transactions, superseding any conflicting terms in Customer's purchase documentation unless expressly agreed in writing by an authorized Awwal Textiles director.

 No modifications to these terms shall be valid unless:
(a) Made in writing
(b) Signed by authorized representatives of both parties
(c) Specifically referencing the clauses being modified
    `
  },
  {
    question: "Pricing Structure & Payment Terms",
    answer: `
 Pricing is based on:
- Current raw material market rates
- Prevailing labor costs
- Energy and transportation expenses
- Currency exchange rates

 Price validity:
- Standard quotations: 30 days
- Custom project quotes: 15 business days
- Rush order pricing requires immediate confirmation

 Payment schedule:
- 50% non-refundable deposit
- 30% midpoint payment
- 20% before shipment
- Final payment must clear before dispatch

 Approved credit terms:
- Net 30 days (subject to credit check)
- Signed credit agreement
- Max credit limit per quarter

 Late payment provisions:
- 1.5% monthly interest
- Additional 2% monthly service charge
- Suspension after 45 days overdue
    `
  },
  {
    question: "Product Specifications & Tolerances",
    answer: `
 Standards:
- Industry benchmark compliance
- International textile standards
- Third-party testing available

 Variances:
- ΔE<2.0 color tolerance
- ±3% dimension tolerance
- ±5% weight variance
- ±1cm pattern alignment

 Customer responsibilities:
- Approve prototypes and color standards
- Verify measurements
- Approve final design
    `
  },
  {
    question: "Production Timeline & Delivery Terms",
    answer: `
 Standard schedule:
- Samples: 10–15 days
- Bulk: 30–45 days
- Inspection: 3–5 days
- Packing/shipping: 2–3 days

 Expedited services:
- 15-day rush (+35% premium)
- 7-day emergency (+50% premium)
- Weekend/holiday (+100% surcharge)

 Shipping:
- Export packaging
- Customs documents
- Tracking provided
    `
  },
  {
    question: "Quality Assurance Protocol",
    answer: `
 Inspection:
- 3 in-process checks
- 100% final inspection
- Random batch sampling

 Quality limits:
- Minor: ≤3%
- Major: ≤0.5%
- Critical: 0%

 Claims:
- Written notice within 7 days
- Include defect images
- Keep original packaging
    `
  },
  {
    question: "Returns, Replacements & Warranty",
    answer: `
 Non-conforming goods:
- Replacement or credit
- Return shipping covered
- Priority reproduction

 Customer-caused returns:
- 25% restocking fee
- Prepaid freight
- Original condition
- 30-day window

 Warranty:
- 12 months against defects
- Excludes wear/misuse
- Void if altered
    `
  },
  {
    question: "Intellectual Property Protection",
    answer: `
 Ownership:
- Customer designs remain theirs
- Awwal patterns remain ours
- Hybrid designs by agreement

 Restrictions:
- No reproduction
- No reverse engineering
- No subcontracting without approval
    `
  },
  {
    question: "Liability Framework",
    answer: `
 Direct damages:
- Limited to order value

 Indirect damages:
- No liability for lost profits, delays, or consequential loss

 Force majeure:
- Disasters, government actions, labor disputes, supply chain failures
    `
  },
  {
    question: "Environmental & Social Compliance",
    answer: `
 Sustainability:
- OEKO-TEX materials
- REACH compliance
- Water recycling
- Energy-efficient production

 Ethics:
- Fair wages
- Safe conditions
- No child labor
- No forced labor
    `
  },
  {
    question: "Dispute Resolution Process",
    answer: `
 Negotiation: 30-day period

Mediation: ICC rules

 Arbitration: Binding, in English
    `
  },
  {
    question: "General Contract Provisions",
    answer: `
 Entire agreement  
 Severability  
 No third-party beneficiaries  
 Waiver of jury trial  
 Attorney fees clause
    `
  },
  {
    question: "Customer Service Commitment",
    answer: `
 Support:
- Account manager
- Technical specialist
- QA liaison
- Logistics coordinator

 Guarantees:
- 4-hour response
- 24/7 emergency contact
- Quarterly reviews
- Continuous improvement
    `
  },
  {
    question: "Contract Administration",
    answer: `
 Notices:
- In writing
- Registered mail
- Email copies allowed

 Amendments:
- Written agreement
- Both signatures
- Version control
    `
  }
];

const Terms = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-full mx-auto p-6 bg-transparent rounded-lg shadow-lg shodow-black">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[inter] text-gray-900 mb-6 sm:mb-8">
        Terms & Conditions
      </h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-800 rounded-lg p-5 transition-all duration-300 ${
              openIndex === index ? "bg--gray-800 shadow-md" : ""
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-xl sm:text-2xl font-semibold text-gray-800 hover:text--gray-200"
            >
              <span>{item.question}</span>
              <span className="text--gray-800 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-pre-line ${
                openIndex === index ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-600 font-sans text-md sm:text-lg leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
