export interface Testimonial {
    quote: string
    name: string
    role: string
    company: string
    projectType: string
    avatar: string
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "Rubicon's blockchain expertise helped us launch our DeFi protocol 3 months ahead of schedule. Their technical depth in Solidity and security best practices is unmatched. They became an extension of our core team.",
        name: "Andrew Maurer",
        role: "",
        company: "Rise",
        projectType: "Smart Contract Development",
        avatar: "/assets/images/andrewm.jpg",
    },
    {
        quote:
            "Rubicon provides top talent, flexibility, and seamless collaboration. Their team is skilled, reliable, and committed to success. A great partner for scaling efficiently. Highly recommended!.",
        name: "Raama Khrishna",
        role: "",
        company: "Quadrant Technologies",
        projectType: "AI Systems & Automation",
        avatar: "/assets/images/ramakrishna.jpeg",
    },
    {
        quote:
            "I would highly recommend Rubicon to anyone looking for top engineering talent. The team is professional, knowledgeable, and truly cares about delivering great results for their clients. Thank you for a job well done!.",
        name: "David Lane",
        role: "",
        company: "SITickets",
        projectType: "Full-stack Development",
        avatar: "/assets/images/1664750929341.jpeg",
    },
    {
        quote:
            "Rubicon is a team of rockstars who are an absolute pleasure to work with. They hit the ground running day one and continue to go above and beyond. I couldn't recommend them more highly!.",
        name: "John Crain",
        role: "CEO",
        company: "Superrare",
        projectType: "Blockchain + Full-stack",
        avatar: "/assets/images/JOHN-CRAIN-CEO-SUPERRARE-1.jpg",
    },
]
