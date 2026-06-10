export default function Logo({ className = "h-8" }) {
  return (
    <svg viewBox="0 0 140 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(15, 5) skewX(-22)">
        {/* Nested SVG to clip stroke spikes, creating perfect flat geometric tops and bottoms */}
        <svg x="0" y="0" width="130" height="30" viewBox="0 0 130 30" overflow="hidden">
          <g fill="none" stroke="currentColor" strokeWidth="9.5" strokeLinejoin="miter" strokeMiterlimit="10">
            {/* N */}
            <polyline points="4.75,30 4.75,0 21.75,30 21.75,0" />
            
            {/* I */}
            <line x1="34.75" y1="0" x2="34.75" y2="30" />
            
            {/* VA Ligature: Continuous zig-zag line matching the image */}
            <polyline points="47.75,0 64.75,30 81.75,0 98.75,30" />
          </g>
          
          {/* Custom Wavy Crossbar for A */}
          <path d="M 70.75,16 Q 85,16, 98,24 Q 106,28, 115,14 Q 106,32, 93,26 Q 83,21, 70.75,22 Z" fill="currentColor" />
        </svg>
      </g>
    </svg>
  )
}
