const TransactionIcon = props => (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d)">
            <rect x="12" y="4" width="48" height="48" rx="12" fill="#23E0A2" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M39.7551 17.9455C39.7551 20.7326 42.0179 22.992 44.8091 22.992C45.1164 22.9905 45.423 22.961 45.725 22.9039V32.9088C45.725 37.1179 43.2421 39.6081 39.0268 39.6081H29.8459C25.6195 39.6081 23.1367 37.1179 23.1367 32.9088V23.7413C23.1367 19.5322 25.6195 17.0199 29.8459 17.0199H39.8434C39.7841 17.3249 39.7545 17.6348 39.7551 17.9455ZM37.1292 30.6938L40.7155 26.0659V26.0439C41.0226 25.6313 40.9442 25.0496 40.539 24.7327C40.3428 24.5813 40.0936 24.5157 39.8482 24.551C39.6028 24.5863 39.3822 24.7194 39.2369 24.92L36.2133 28.8096L32.7705 26.099C32.5739 25.9458 32.3239 25.8782 32.0768 25.9114C31.8297 25.9446 31.6064 26.0757 31.4573 26.2753L27.7496 31.0574C27.6193 31.2198 27.5492 31.4222 27.551 31.6303C27.5295 32.051 27.7951 32.4331 28.1973 32.5601C28.5995 32.687 29.0369 32.5268 29.2614 32.1703L32.3622 28.1595L35.8051 30.859C36.0009 31.0169 36.2526 31.0885 36.5023 31.0573C36.752 31.0261 36.9783 30.8949 37.1292 30.6938Z" fill="white" />
        <ellipse opacity="0.4" cx="45.0982" cy="17.6472" rx="3.13726" ry="3.13725" fill="white" />
        <defs>
            <filter id="filter0_d" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.177188 0 0 0 0 0.272812 0 0 0 0 0.241443 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>
)

export default TransactionIcon