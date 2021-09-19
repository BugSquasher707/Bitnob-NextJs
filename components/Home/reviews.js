import { homeData } from 'static';
import { BitNobContainer } from '../';
import { Quote, Dots, ArrowOutline } from "public";
import styles from 'styles/Home.module.css';

const Reviews = props => {
    const { reviews } = homeData;

    return(
        <div className={`mt-40 bg-gradient-to-b from-white via-green-100  relative ${styles.reviews}`}>
            <BitNobContainer>
            <div className="max-w-2xl text-center mx-auto"> 
                <div className="text-center">
                <h2 className="font-bold leading-tight text-5xl text-black font-gordita mb-2">{reviews.heading}</h2>
                <p className="text-md text-gray-200 font-quicksand">{reviews.description}</p>
                </div>
                <div className="relative mt-28 flex mx-auto max-w-2xl">
                {
                    reviews.comments.map(({description, position, author}, i)=> {
                    const styles = {
                        top: `${i * 35}px`,
                        zIndex: reviews.comments.length - i,
                        transform: `scale(${1 - i/10})`,
                        opacity: `1 - ${i/10}`,
                        boxShadow:"0px 18px 52.8537px rgba(63, 177, 181, 0.16)"
                    }

                    return (
                        <div style={styles} className="text-center absolute rounded-xl bg-white p-12 py-9 flex flex-col items-center">
                        <Quote className="absolute transform scale-75 -top-1" />
                        
                        <p className="text-xl mt-8 text-gray-300 font-quicksand">{description}</p>
                        <span className="block mt-12 text-lg">
                            <b>{author}</b> - <span>{position}</span>
                        </span>
                        </div>
                    )
                    })
                }
                <Dots className="absolute -top-8 -right-32" />
                <Dots variant="green" className="absolute top-52 -left-28" />
                </div>
                <div className=" absolute transform left-1/2 -translate-x-1/2 space-x-10 -bottom-10 flex w-full max-w-sm justify-center items-center mt-20">
                    <ArrowOutline role="button" tabIndex="0" className="transform scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                    <ArrowOutline role="button" tabIndex="0" className="transform -rotate-180 scale-75 transition-all duration-100 hover:shadow-md rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                </div>
                {
                    reviews.assets.map((a, i)=> {
                    const loci = {
                        0: {top:"10%", left:"15%"},
                        1: {top:"10%", right:"23%"},
                        2: {top:"50%", right:"5%"},
                        3: {bottom:"0%", right:"12%"},
                        4: {bottom:"0", left:"14%"},
                        5: {top:"45%", left:"5%"},
                    }

                    return <img src={a} style={loci?.[i]} alt="avatar" className="absolute z-30" />
                    })
                }
            </div>
            </BitNobContainer>
        </div>
    )
}

export default Reviews