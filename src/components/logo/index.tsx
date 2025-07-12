interface LogoProps{
    className?:string;
}

export function Logo({className}:LogoProps){
    return (
        <svg
            width="157"
            height="40"
            viewBox="0 0 157 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <text
                fill="white"
                xmlSpace="preserve"
                style={{whiteSpace: 'pre'}}
                font-family="Inter"
                font-size="25"
                font-weight="800"
                letter-spacing="-0.005em"
            >
                <tspan x="0" y="35.0909">
                    RoastUI
                </tspan>
            </text>
            <path
                d="M136.374 25.9998C136.374 20.7758 140.828 16.4998 146.374 16.4998C151.92 16.4998
                156.374 20.7758 156.374 25.9998C156.374 31.2238 151.92 35.4998 146.374 35.4998C140.828
                35.4998 136.374 31.2238 136.374 25.9998Z"
                stroke="#53A5DF"
            />
            <path
                d="M130.621 6.35895L142.434 26.8204L118.808 26.8204L130.621 6.35895Z"
                stroke="#D7DB2B"
            />
            <rect
                x="122.468"
                y="35.3946"
                width="16.4147"
                height="16.4147"
                transform="rotate(-165 122.468 35.3946)"
                stroke="#0C9866"
                />
        </svg>
    );
}