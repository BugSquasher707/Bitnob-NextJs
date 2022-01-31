import { HeartIcon, IntegrityIcon, LeadershipIcon, OwnershipIcon, TeamworkIcon,  } from 'public'

const aboutPageData = {
    welcome: {
        heading: "Welcome to the World of Bitcoin!",
        description: "Begin your journey with us today.",
        bg: "/images/aboutus-cover.png",
        cover: "/images/about-us-phone.png"
    },
    values: {
        heading: "Our Values",
        description: `Our values are the bedrock for all that we do at Bitnob - And that’s why we have 5 Values that form the basis of our identity, and guide our interactions with customers, investors, stakeholders and the general public. These values are  Passion, Integrity, Leadership, Ownership and Teamwork.`,
        dataList: {
            group1: [
                {
                    title: "Low Ego",
                    icon: <HeartIcon />,
                    description: `We care deeply, 
                    `
                },
                {
                    title: "Ownership",
                    icon: <OwnershipIcon />,
                    description: `Every Bitnobber is capable and willing to take the responsibility needed to make every dream a success.
                    `
                },
            ],
            group2: [
                {
                    title: "Integrity",
                    icon: <IntegrityIcon />,
                    description: `At Bitnob, Integrity forms the core of everything we do and this reflects on every Bitnobber and what we do as a company.`
                },
            ],
            group3: [
                {
                    title: "Grit",
                    icon: <LeadershipIcon />,
                    description: `Bitnobbers are leaders in every sense of the word, taking charge every day and leading individually and as a team to solve problems and create lasting solutions.`
                },
                {
                    title: "Crazy",
                    icon: <TeamworkIcon />,
                    description: `As a company, we have big dreams and these dreams are fueled by the work we do as a team. Our success as a company is greatly hinged on our collective intelligence as a team.`
                },
                
            ]
            
        }
    },
    mission: {
        heading: "Our Mission",
        description: `At Bitnob, we have one single Mission, which is making it easy for every african and african business to connect with the bitcoin blockchain.`
    },
    join: {
        heading: "Join the Team",
        description: `Since we are a 100% distributed team, you can work from anywhere. No need to move for a  job. We are  proud of a culture of communication, collaboration, trust and kindness.
        `,
        image: '/svgs/team-avatar.svg'
    }
}

export default aboutPageData;