
function logo(){
    return(
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="60">
            <g transform="translate(0 10)">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#2563EB" stroke-width="3"/>
              <path stroke="#2563EB" stroke-width="3" d="m40 40 15 15"/>
              <circle cx="25" cy="25" r="6" fill="#22c55e"/>
              <path stroke="#22c55e" stroke-width="1.5" d="m19 20-4-5M31 20l4-5M19 30l-4 5M31 30l4 5"/>
            </g>
            <text x="70" y="30" fill="#1f2937" font-family="Arial, sans-serif" font-size="20">CodeInspects</text>
            <text x="70" y="50" fill="white" font-family="Arial, sans-serif" font-size="12">Automation Testing</text>
          </svg>
        </div>
    )
}

export default logo;