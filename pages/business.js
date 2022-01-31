import { BitNobButton, BitNobContainer, getLayout, Page } from 'components'
import Image from 'next/image'
import { useState } from 'react'
import { businessPageData } from 'static'
import styles from 'styles/Business.module.css'
import {
	CogIcon,
	InvoiceIcon,
	PeopleIcon,
	TicketIcon,
	TransactionIcon,
	WalletIcon,
} from 'public'

const Business = () => {
	const [active, setActive] = useState(0)
	const { section1, section2, reviews, section3, dataList } = businessPageData

	const handleSlide = (dir) => {
		if (dir) {
			setActive(active < reviews.length ? active + 1 : active)
		} else {
			setActive(active > 0 ? active - 1 : active)
		}
	}

	return (
		<Page title='Bitnob for Business'>
			<div className='z-0'>
				<div className='pt-6 bg-white'>
					<BitNobContainer>
						<div className='mt-10 xl:mt-20 text-center'>
							<div>
								<h2 className='font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-gordita'>
									{section1.heading}
								</h2>
								<p className=' text-2xs md:text-md mt-2 mb-10 font-quicksand text-bitGray-300'>
									{section1.description}
								</p>
								<BitNobButton className='my-6 mb-2 py-3 md:py-auto max-w-xs w-max mx-auto' asLink="https://app.bitnob.co">
									Get Started
								</BitNobButton>
							</div>
							<div className='mt-16 mb-20 relative md:mt-10'>
								<img
									src={section1.cover}
									objectFit='contain'
									width='1500'
									height='1200'
									priority
								/>
							</div>
						</div>
					</BitNobContainer>
				</div>
				<BitNobContainer>
					<div className='text-center mx-auto -mt-14 lg:-mt-20'>
						<div className='max-w-5xl mx-auto'>
							<h2 className='font-bold text-lg md:text-2xl font-gordita'>
								{section2.heading}
							</h2>
							<p className='text-2xs mt-4 md:text-lg font-quicksand text-bitGray-200'>
								{section2.description}
							</p>
						</div>
					</div>
				</BitNobContainer>

				<div className='mt-16 sm:mt-10'>
					<div className='bg-none sm:bg-abstract-bg-1 bg-no-repeat sm:py-24'>
						<BitNobContainer
							className={'flex items-center sm:flex-row flex-col-reverse'}>
							<div className='flex-1'>
								<img src='/svgs/payment-form.svg' className='w-450 h-450' />
							</div>

							<div className='flex-1 space-y-6'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/ticket.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Payment Links &amp; Processing
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Easily get paid using the Bitnob hosted checkout tool by
									generating and sharing payment links with your clients.
								</p>
							</div>
						</BitNobContainer>
					</div>

					<div className='bg-none sm:bg-abstract-bg-2 bg-no-repeat bg-right sm:py-24 mb-16'>
						<BitNobContainer
							className={'flex items-center flex-col sm:flex-row'}>
							<div className='sm:w-400 space-y-6 mb-4'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/transactions.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Transactions
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Get a bird's eye view of transaction details and account
									overview in a single, beautiful dashboard.
								</p>
							</div>

							<div className='flex-1'>
								<img
									src='/images/business_transactions.png'
									className='w-full'
								/>
							</div>
						</BitNobContainer>
					</div>

					<div className='bg-none sm:bg-abstract-bg-3 bg-no-repeat sm:py-24 mb-16'>
						<BitNobContainer
							className={'flex items-center sm:flex-row flex-col-reverse'}>
							<div className='flex-1 flex items-center justify-center'>
								<img src='/svgs/new-invoice.svg' className='w-300 h-300' />
							</div>

							<div className='flex-1 space-y-6'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/paper.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Invoices
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Share invoices with your clients and get paid in stablecoins
									or bitcoin (on-chain and lightning).
								</p>
							</div>
						</BitNobContainer>
					</div>

					<div className='bg-none sm:bg-abstract-bg-2 bg-no-repeat bg-right sm:py-24 mb-16'>
						<BitNobContainer
							className={'flex items-center flex-col sm:flex-row'}>
							<div className='sm:w-400 space-y-6 mb-4'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/three-users.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Customers
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Manage your customers in one place, blacklist fraudulent
									customers and view customer's transaction details.
								</p>
							</div>

							<div className='flex-1'>
								<img src='/svgs/customer-form.svg' className='w-full' />
							</div>
						</BitNobContainer>
					</div>

					<div className='bg-none sm:bg-abstract-bg-4 bg-no-repeat sm:py-24 mb-16'>
						<BitNobContainer
							className={'flex items-center sm:flex-row flex-col-reverse'}>
							<div className='flex-1'>
								<img src='/images/new_api_popup.png' className='sm:w-500' />
							</div>

							<div className='flex-1 space-y-6'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/connect.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Easy Integration
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Quickly use our plugins to go live in minutes on platforms
									like Woocommerce, WHMCS, and more. Plug and play!
								</p>
							</div>
						</BitNobContainer>
					</div>

					<div className='bg-none sm:bg-abstract-bg-3 bg-no-repeat bg-right sm:py-24 mb-16'>
						<BitNobContainer
							className={'flex items-center flex-col sm:flex-row'}>
							<div className='flex-1 space-y-6 mb-4'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/setting.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Customize Your Payouts
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand sm:w-400'>
									Decide how you want all your Bitcoin payments to be settled.
									If you want your payments to be instantly converted into USD,
									you set it up. Want 50% of all your payments to be instantly
									converted to USD, use the split payments option.
								</p>
							</div>

							<div className='flex-1'>
								<img
									src='/images/split_payment_form.png'
									className='w-full sm:w-450'
								/>
							</div>
						</BitNobContainer>
					</div>

					<div className='sm:py-24'>
						<BitNobContainer
							className={'flex items-center sm:flex-row flex-col-reverse'}>
							<div className='flex-1'>
								<img
									src='/images/team_management.png'
									className='w-full sm:w-500'
								/>
							</div>

							<div className='flex-1 space-y-6 mb-4'>
								<div className='w-12 h-12 bg-bitGreen-300 flex items-center justify-center rounded-12'>
									<img src='/svgs/add-user.svg' />
								</div>

								<h4 className='font-bold text-black text-md lg:text-2xl whitespace-pre font-gordita'>
									Team Management
								</h4>

								<p className='text-bitGray-300 text-xs md:text-sm block font-quicksand'>
									Set up multiple roles with special privileges, collaborate
									with others to manage your business effortlessly.
								</p>
							</div>
						</BitNobContainer>
					</div>
				</div>

				<div className='mt-10'>
					<BitNobContainer>
						<div
							className={`max-w-7xl mx-auto flex flex-col items-center overflow-hidden lg:overflow-visible pb-0 pt-14 lg:pt-20 px-6 relative rounded-2xl bg-left bg-cover ${styles.business_foot}`}>
							<div className=' max-w-4xl text-center mx-auto lg:mx-0'>
								<h1 className='text-black pb-2 leading-tight text-xl sm:text-2xl md:text-3xl font-gordita font-bold'>
									{section3.title}
								</h1>
								<BitNobButton
									className='w-min flex justify-center mx-auto my-6 text-white whitespace-pre'
									variant='black'
									asLink='https://app.bitnob.co'>
									Get Started
								</BitNobButton>
							</div>
							<img
								src={section3.cover}
								alt='app'
								className=' md:-mb-2 lg:-mb-0 '
							/>
						</div>
					</BitNobContainer>
				</div>
			</div>
		</Page>
	)
}

Business.getLayout = getLayout
export default Business
