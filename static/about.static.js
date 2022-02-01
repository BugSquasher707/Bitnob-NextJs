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
        description: `Our values are the bedrock for all that we do at Bitnob - And that’s why we have 5 Values that form the basis of our identity, and guide our interactions with customers, investors, stakeholders and the general public. These values are  Low Ego, Ownershop, Grit, Integrity and Crazy.`,
        dataList: {
            group1: [
                {
                    title: "Low Ego",
                    icon: <HeartIcon />,
                    description: `We care deeply, and never feel too important to show up and serve our collegues & customers.
                    `
                },
                {
                    title: "Ownership",
                    icon: <OwnershipIcon />,
                    description: `We are accountable to ourselves and others, we take responsibility and go the extra mile to deliever results
                    `
                },
            ],
            group2: [
                {
                    title: "Integrity",
                    icon: <IntegrityIcon />,
                    description: `We hold ourselves to high standards, and we consistently uphold transparency and truth.`
                },
            ],
            group3: [
                {
                    title: "Grit",
                    icon: <LeadershipIcon />,
                    description: `We don't stop, we don't quit, we keep finding new ways to accomplish our mission.`
                },
                {
                    title: "Crazy",
                    icon: <TeamworkIcon />,
                    description: `We think limitless, there is no box. We break barriers and do the impossible.`
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