import { BitNobContainer, BitNobLink, getLayout, Page } from "components"
import { useEffect, useRef, useState } from "react"
import { aboutPageData } from "static";
import { FaFacebook, FaPaperPlane, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const User = ({ 
    activeUser, 
    user,
    setUser })=> (
    <div 
        onMouseEnter={()=> {
            setUser(user);
        }}
        onMouseOut={()=> setUser({...user, locked: true})}
        className={`userAvatar md:h-12 md:w-14 lg:w-20 lg:h-20 2xl:h-28 2xl:w-28 transition-all duration-200 p-1 border-2 rounded-full border-transparent ${activeUser?.id === user?.id ? ' border-bitGreen-200 bg-white' : '' }`}>
        <img src={user?.avatar || '/images/person.png'} alt={user?.name} className="max-w-full h-auto" />
    </div>
)

const AboutUs = ()=> {
    let event;
    const [user, setUser] = useState(null)
    const [position, setPosition] = useState({})
    const positionRef = useRef(null)
    const { welcome, values, mission, join, team } = aboutPageData
    const icons = {
        facebook: <FaFacebook />,
        twitter: <FaTwitter />,
        instagram: <FaInstagram />,
        email: <FaPaperPlane />,
        linkedin: <FaLinkedinIn />,
    }

    useEffect(()=> {
        if(typeof window !== 'undefined'){ 
            event = document.addEventListener('mousemove', (e)=> {
                positionRef.current = {
                    x: e.pageX,
                    y: e.offsetY
                };

                setPosition({
                    x: e.pageX,
                    y: e.offsetY
                })
            })
        }

        return ()=> removeEventListener('mousemove', event)
    },[])

    useEffect(()=> {
        if(user?.locked) removeEventListener('mousemove', event)
    }, [user])


    return(
        <Page title="About Us">
            <div className=" mt-12 lg:mt-24">
                <div className="relative">
                    <BitNobContainer>
                        <div className="max-w-xl 2xl:max-w-2xl mx-auto lg:absolute top-0 left-1/2 transform lg:-translate-x-1/2 text-center">
                            <div className="max-w-md mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{welcome.heading}</h2>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{welcome.description}</p>
                            </div>
                            <div className="z-50 relative">
                                <img src={welcome.cover} />
                            </div>
                        </div>
                    </BitNobContainer>
                    <img src={welcome.bg} className="absolute z-10 top-1/4 lg:static" />
                </div>

                <div className="mt-10 md:mt-40 2xl:mt-20">
                    <BitNobContainer>
                        <div className="bg-bitGreen-50 rounded-2xl p-6 lg:p-12 text-center">
                            <div className="max-w-xl mx-auto">
                                <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{values.heading}</h2>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{values.description}</p>
                                <p className=" md:text-md my-4 font-quicksand text-bitGray-200">These 5 values form the Acronym <b>PILOT</b></p>
                            </div>
                            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-3 lg:gap-5 xl:grid-cols-3 text-left mb-10 max-w-7xl mx-auto">
                                {
                                    Object.values(values.dataList).map((v, i)=> (
                                        <div key={i} className="flex items-center flex-col space-y-5">
                                            {
                                                v.map(({title, description, icon})=> (
                                                    <div key={title} className={`${ title === "Integrity" ? "bg-white shadow-xl" : ""} space-y-4 p-8 hover:bg-white hover:shadow-xl flex-1 cursor-default transition-all duration-400 rounded-2xl xl:max-w-sm`}>
                                                        <span className=" -ml-3 block w-min">{icon}</span>
                                                        <h4 className="font-bold text-black text-lg xl:text-xl font-gordita">{title}</h4>
                                                        <p className="text-bitGray-200 pb-4 text-xs lg:text-sm md:pb-2 block font-quicksand">{description}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
                <div className="mt-10 md:mt-40 2xl:mt-20">
                    <BitNobContainer>
                        <div className="max-w-2xl mx-auto text-center border-b pb-20">
                            <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{mission.heading}</h2>
                            <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{mission.description}</p>
                        </div>
                    </BitNobContainer>
                </div>
                <div className="mt-14 pt-6 pb-20 bg-gradient-to-b from-white via-bitGreen-100">
                    <BitNobContainer>
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="font-black text-2xl md:text-3xl xl:text-4xl font-gordita">{team.heading}</h2>
                            <p className=" md:text-md my-4 font-quicksand text-bitGray-200">{team.description}</p>
                        </div>
                        <div className="relative flex flex-col space-y-5 md:space-y-12 items-center mt-8">
                            {
                                Object.values(team.images).map(a => (
                                    <div className="flex space-x-2 md:space-x-6 lg:space-x-10 items-center" key={a}>
                                        {a.map((v => (
                                            <User 
                                                activeUser={user} 
                                                setUser={setUser} 
                                                user={v} 
                                                key={v} />
                                        )))}
                                    </div>
                                ))
                            }
                            <div 
                                style={{
                                    visibility: user ? "visible" : "hidden",
                                    top: (user?.locked ? positionRef.y : position.y - 20) + 'px',
                                    left: (user?.locked ? positionRef.x : position.x - 200) + 'px',
                                }}
                                onMouseEnter={()=> setUser({...user, locked: true})}
                                className="bg-black absolute transition-all top-0 duration-300 p-4 px-6 text-center rounded-2xl">
                                <h2 className="font-black text-white text-xs md:text-sm font-gordita">{user?.name}</h2>
                                <p className="text-2xs font-bold mt-1 uppercase text-bitGreen-400 font-quicksand">{user?.title}</p>
                                <p className="mt-6 text-xs text-gray-200 w-60 mx-auto font-quicksand">{user?.description}</p>
                                <div className="flex pt-4 pb-2 space-x-4 justify-center items-center">
                                    {
                                        Object.entries(user?.social || {})?.map(([platform, link]) => (
                                            <BitNobLink to={link}>
                                                <span className="text-bitGreen-200 text-xs">
                                                    {icons[platform]}
                                                </span>
                                            </BitNobLink>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </BitNobContainer>
                </div>
            </div>
        </Page>
    )
}


AboutUs.getLayout = getLayout
export default AboutUs