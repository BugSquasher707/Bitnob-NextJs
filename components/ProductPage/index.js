import { BitNobButton, BitNobContainer, PreFooter } from 'components'
import Image from 'next/image'
import React from 'react'
import styles from 'styles/ProductPage.module.css'

const ProductPage = ({ heading, subHeading, dataList, adjust, children }) => {
	const icons = {
		'Savings': 'group-saving.png',
		'Lightning Network': 'lightning-address.png',
		'Virtual Dollar Cards': 'virtual-dollar-card.png',
		'NobCredit': 'nob-credit.png',
	}

	return (
		<div>
			<div
				className={`mt-10 relative flex flex-col lg:flex-row flex-nowrap ${styles.hero}`}>
				<BitNobContainer className='flex-1'>
					<div className='flex flex-col-reverse lg:flex-row justify-between '>
						<div className=' lg:mr-14 xl:mr-20 2xl:mr-40 max-w-md 2xl:max-w-lg'>
							<div className='hidden lg:block'>
								<div className='-ml-2'>
									<Image
										src={`/images/${icons[heading]}`}
										width='55'
										height='55'
										alt={heading}
									/>
								</div>
								<h1 className=' text-bitGray-400 mt-1 mb-4 lg:mb-2 leading-tight text-2xs md:text-sm lg:text-md font-gordita font-semibold'>
									{subHeading}
								</h1>
								<h1 className='text-bitGray-400 leading-tight text-2xl xl:text-4xl 2xl:text-5xl font-gordita font-bold'>
									{heading}
								</h1>
							</div>

							<div
								className={`space-y-12 items-center ${
									adjust ? 'mt-40 lg:mt-12' : 'md:mt-12'
								}`}>
								{dataList?.map(({ title, description }) => (
									<div key={title}>
										<h1 className='text-bitGray-400 mb-4 leading-tight text-xs md:text-md font-gordita font-bold'>
											{title}
										</h1>
										<p className=' pt-2 text-2xs md:text-sm opacity-80 md:opacity-95 text-bitGray-300'>
											{description}
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='w-full'>{children}</div>
						<div className='z-10'>
							<div className='mb-10 mobile block lg:hidden'>
								<h1 className='lg:hidden text-bitGray-400 mt-1 mb-4 lg:mb-2 leading-tight text-2xs md:text-md font-gordita font-semibold'>
									{subHeading}
								</h1>
								<h1 className='text-bitGray-400 leading-tight text-2xl xl:text-4xl 2xl:text-5xl font-gordita font-bold'>
									{heading}
								</h1>
							</div>
						</div>
					</div>
				</BitNobContainer>
			</div>
			{heading === 'Savings' ? (
				<BitNobContainer
					className={'mt-12 flex flex-col sm:flex-row justify-start'}>
					<a
						href='https://dca.bitnob.com/'
						className='w-full sm:w-252 text-center mb-4 sm:mb-0 mr-8 py-4 bg-bitGreen-300 rounded-12 text-bitGray-700 font-bold'
						target='_blank'>
						See DCA Calculator
					</a>
				</BitNobContainer>
			) : (
				''
			)}
			<PreFooter />
		</div>
	)
}

export default ProductPage
