
const PlayButton = props => (
    <svg width="282" height="283" viewBox="0 0 282 283" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d)">
            <ellipse cx="141" cy="137.5" rx="97" ry="97.5" fill="white" fillOpacity="0.2" />
            <path d="M237.5 137.5C237.5 191.074 194.293 234.5 141 234.5C87.7069 234.5 44.5 191.074 44.5 137.5C44.5 83.926 87.7069 40.5 141 40.5C194.293 40.5 237.5 83.926 237.5 137.5Z" stroke="white" />
        </g>
        <circle cx="141" cy="137.493" r="70" fill="white" />
        <path d="M154.188 138.449C154.063 138.575 153.595 139.11 153.156 139.554C150.594 142.334 143.906 146.881 140.407 148.272C139.875 148.494 138.532 148.967 137.812 149C137.125 149 136.468 148.84 135.843 148.525C135.061 148.084 134.438 147.387 134.093 146.566C133.874 145.998 133.529 144.291 133.529 144.26C133.187 142.396 133 139.365 133 136.014C133 132.826 133.187 129.919 133.467 128.024C133.498 127.99 133.843 125.874 134.218 125.148C134.905 123.821 136.249 123 137.687 123H137.812C138.749 123.031 140.718 123.854 140.718 123.883C144.031 125.274 150.561 129.601 153.187 132.477C153.187 132.477 153.928 133.217 154.249 133.678C154.75 134.341 155 135.162 155 135.983C155 136.9 154.719 137.752 154.188 138.449Z" fill="#181B1D" />
        <defs>
            <filter id="filter0_d" x="0" y="0" width="282" height="283" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="22" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>

)

export default PlayButton