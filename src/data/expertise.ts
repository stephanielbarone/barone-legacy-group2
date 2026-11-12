export interface ExpertiseTopic {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const expertiseTopics: ExpertiseTopic[] = [
  {
    slug: "business-continuity",
    title: "Business Continuity",
    description: "Key person insurance and buy-sell agreement funding.",
    introduction:
      "Business continuity planning prepares a company to keep operating when an owner, partner, or other essential person can no longer contribute. It connects the business’s financial resources with a practical plan for unexpected change.",
    sections: [
      {
        heading: "Common planning tools",
        paragraphs: [
          "Key person coverage can provide funds to help a business manage the financial disruption caused by the death of a person whose knowledge, relationships, or leadership are especially important. A buy-sell agreement can set out how an owner’s interest may be transferred, while insurance may be one way to fund that agreement.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "A continuity plan can help protect business value, support employees and customers, and give owners’ families more clarity about what happens next. Coverage amounts, agreement terms, ownership, and tax treatment should be coordinated with legal, tax, and financial professionals and reviewed when the business changes.",
        ],
      },
    ],
  },
  {
    slug: "executive-solutions",
    title: "Executive Solutions",
    description: "Compensation planning and specialized employee benefits.",
    introduction:
      "Executive solutions bring together compensation, benefits, and protection for an organization’s leaders. The goal is to make these arrangements work alongside the organization’s broader financial and talent strategy.",
    sections: [
      {
        heading: "What these solutions can include",
        paragraphs: [
          "Depending on the organization and applicable rules, a package may include salary, incentives, retirement benefits, or insurance benefits. Employers should clearly understand eligibility, funding, vesting, costs, and how each benefit is treated for tax and employment purposes.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "For an executive, benefits can affect retirement readiness, family protection, and overall cash flow. For an employer, a well-documented plan can support recruitment and retention while keeping costs and obligations visible. Plan design should be reviewed with qualified tax, legal, and benefits professionals.",
        ],
      },
    ],
  },
  {
    slug: "succession-planning",
    title: "Succession Planning",
    description: "Coordinating ownership and leadership transitions.",
    introduction:
      "Succession planning prepares for a future change in business ownership or leadership. That change may involve a family member, co-owner, employee, or outside buyer, and the best path depends on the people and business involved.",
    sections: [
      {
        heading: "Plan for the transition",
        paragraphs: [
          "A succession plan can clarify who may take over, when a transition could happen, how the business will be valued, and how the departing owner may be paid. It can also address leadership responsibilities, decision-making, and the needs of family members or other stakeholders.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "For owners, a transition can affect personal retirement income, estate plans, taxes, and family wealth. Coordinating a written plan with business documents, insurance funding where appropriate, and professional advice can reduce uncertainty. Plans should be revisited as the business and owners’ goals evolve.",
        ],
      },
    ],
  },
  {
    slug: "income-optimization",
    title: "Income Optimization",
    description: "Planning retirement cash flow around your needs and resources.",
    introduction:
      "Income optimization is the process of coordinating available resources to support spending goals over time. In retirement, this often means understanding when income begins, how dependable it is, and how it may respond to inflation, taxes, and market changes.",
    sections: [
      {
        heading: "Build a retirement income picture",
        paragraphs: [
          "A plan may consider Social Security, pensions, savings, investments, and other income sources alongside expected expenses. Comparing timing and withdrawal approaches can help identify gaps and show how different choices affect cash flow. No strategy can remove every risk or guarantee a particular outcome.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "A retirement income plan connects saving and investing decisions to the day-to-day purpose of the money. It can be adjusted as health, markets, tax rules, and personal priorities change. Individual tax and investment decisions should be reviewed with appropriately qualified professionals.",
        ],
      },
    ],
  },
  {
    slug: "wealth-preservation",
    title: "Wealth Preservation",
    description: "Planning to protect assets and manage financial risks.",
    introduction:
      "Wealth preservation focuses on protecting the resources a person or family has built while preparing for future needs. It considers risks that could disrupt a financial plan, such as unexpected expenses, loss of income, liability, or changes in tax and estate circumstances.",
    sections: [
      {
        heading: "Consider risks and safeguards",
        paragraphs: [
          "Depending on a household’s situation, planning may include appropriate insurance, emergency savings, thoughtful investment diversification, and coordination of legal and estate documents. Each tool addresses different risks; insurance, for example, has policy limits, exclusions, costs, and conditions.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "Preservation strategies help connect protection decisions to long-term goals such as retirement, family support, and giving. Tax planning and asset protection depend on individual circumstances and applicable law, so they should be coordinated with licensed tax and legal professionals rather than treated as guaranteed results.",
        ],
      },
    ],
  },
  {
    slug: "specialized-strategies",
    title: "Specialized Strategies",
    description:
      "Planning that reflects women’s financial needs and charitable goals.",
    introduction:
      "Specialized strategies recognize that financial plans should reflect each person’s goals, responsibilities, and circumstances. This can include planning for women’s financial priorities as well as deciding how charitable giving fits within a household’s resources and values.",
    sections: [
      {
        heading: "Plan around individual circumstances",
        paragraphs: [
          "Career changes, caregiving, differences in earnings, health needs, and expected longevity can all shape saving, insurance, and retirement decisions. Discussing these possibilities openly can help build a plan that remains useful through different stages of life.",
        ],
      },
      {
        heading: "Connect giving to the bigger picture",
        paragraphs: [
          "Charitable goals may be part of a budget, an annual giving plan, or longer-term estate planning. The appropriate approach depends on the donor’s financial capacity, the organization, and current rules. A financial plan can help weigh giving priorities alongside other commitments, with tax questions reviewed by a qualified professional.",
        ],
      },
    ],
  },
  {
    slug: "wealth-transfer",
    title: "Wealth Transfer",
    description: "Coordinating estate plans and beneficiary arrangements.",
    introduction:
      "Wealth transfer planning considers how assets may pass to loved ones or organizations during life or after death. It aims to make a person’s wishes clear and coordinate financial arrangements with the appropriate estate documents.",
    sections: [
      {
        heading: "Coordinate the moving parts",
        paragraphs: [
          "A plan may involve wills, trusts, account ownership, beneficiary designations, lifetime gifts, and insurance. These pieces do not automatically work together: beneficiary designations and asset titles can affect how property transfers, so they should be checked against current estate documents and intentions.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "Planning for a transfer can help families prepare for liquidity needs, care for dependents, and communicate responsibilities. Tax treatment and estate laws vary by location and individual circumstances. An estate attorney and tax professional can help ensure that documents and strategies are appropriate and up to date.",
        ],
      },
    ],
  },
  {
    slug: "family-protection",
    title: "Family Protection",
    description: "Preparing for mortgage payments and loss of family income.",
    introduction:
      "Family protection planning asks how a household would manage financially if someone became ill, disabled, or died. It starts with the people who depend on the household’s income and the expenses that would continue.",
    sections: [
      {
        heading: "Estimate the protection need",
        paragraphs: [
          "A review may consider a mortgage, other debts, childcare, education goals, everyday expenses, existing savings, and benefits already available. Life or disability insurance may help address some needs, but coverage amounts, eligibility, exclusions, and policy terms differ.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "Protection decisions should fit a family’s budget and work alongside emergency savings, workplace benefits, and longer-term goals. Needs can change after events such as a new child, a home purchase, a job change, or a debt being paid off, so periodic reviews are useful.",
        ],
      },
    ],
  },
  {
    slug: "charitable-legacy",
    title: "Charitable Legacy",
    description: "Aligning charitable gifts with your values and financial plan.",
    introduction:
      "A charitable legacy is a plan for supporting causes that matter to you, either during your lifetime or through your estate. It connects your giving intentions with your other financial priorities.",
    sections: [
      {
        heading: "Ways to plan charitable giving",
        paragraphs: [
          "Some people give regularly from their income; others consider a larger gift, a bequest in estate documents, or another giving arrangement. The options have different costs, requirements, and effects on the donor and recipient, so it is important to understand the details before proceeding.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "A giving plan can help balance charitable goals with household needs, retirement income, and commitments to family. Potential tax treatment depends on the gift, recipient, timing, and current law. Consult a tax professional and estate attorney before relying on tax outcomes or changing legal documents.",
        ],
      },
    ],
  },
  {
    slug: "policy-design",
    title: "Policy Design",
    description: "Understanding life insurance types and their trade-offs.",
    introduction:
      "Policy design means matching a life insurance policy’s structure and features to a clearly defined need. The right comparison is about more than the policy name: costs, guarantees, flexibility, and how long coverage is needed all matter.",
    sections: [
      {
        heading: "Understand the main policy types",
        paragraphs: [
          "Term insurance generally covers a defined period. Whole life is designed for lifelong coverage and may include guaranteed cash value under its terms. Universal life offers flexible features subject to policy conditions, while indexed universal life credits interest using an index-based formula and does not directly invest in that index. Policies differ, and illustrations are not guarantees unless explicitly stated.",
        ],
      },
      {
        heading: "How it fits financial planning",
        paragraphs: [
          "Coverage can be considered alongside family income needs, debts, estate goals, and affordability. Review premiums, policy charges, guarantees, exclusions, cash-value assumptions, and what happens if payments or loans change. A licensed professional can explain product details and alternatives before an application or replacement.",
        ],
      },
    ],
  },
  {
    slug: "management",
    title: "Management",
    description: "Reviewing coverage, beneficiaries, and potential replacements.",
    introduction:
      "Policy management keeps insurance information current as a person’s family, finances, and needs change. It includes understanding the policy in force and checking whether its purpose still matches the owner’s priorities.",
    sections: [
      {
        heading: "What to review",
        paragraphs: [
          "A review can check the policy owner and insured person, beneficiaries, coverage amount, premium schedule, guarantees, and any loans or withdrawals. Major life events are also a reason to confirm that beneficiary choices and contact information are current.",
        ],
      },
      {
        heading: "Be careful when replacing a policy",
        paragraphs: [
          "A new policy may involve fresh underwriting, new costs, surrender charges, different guarantees, or a new contestability period. The existing policy should generally remain in force until replacement coverage is approved and active, if replacement is appropriate. Compare the full terms and consult qualified professionals about tax or legal questions.",
        ],
      },
    ],
  },
];
