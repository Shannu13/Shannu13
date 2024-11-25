import React from 'react'

const AnimeDeveloperGirl = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="400" fill="#f3e5f5" />

      {/* Desk */}
      <rect x="50" y="300" width="300" height="20" fill="#b562d6" />

      {/* Laptop */}
      <rect x="150" y="250" width="120" height="80" fill="#cd5ff8" />
      <rect x="150" y="320" width="120" height="10" fill="#b562d6" />

      {/* Screen content */}
      <text x="170" y="290" fill="#ffffff" fontSize="10">
        const dev = () =&gt; {'{'}
      </text>
      <text x="180" y="305" fill="#ffffff" fontSize="10">
        console.log("Hello!");
      </text>
      <text x="170" y="320" fill="#ffffff" fontSize="10">
        {'}'}
      </text>

      {/* Girl's body */}
      <path d="M200 330 Q230 280 260 330" fill="#cd5ff8" />

      {/* Girl's head */}
      <circle cx="230" cy="220" r="40" fill="#fce4ec" />

      {/* Girl's hair */}
      <path d="M190 220 Q230 140 270 220" fill="#b562d6" />
      <path d="M200 260 Q230 220 260 260" fill="#b562d6" />

      {/* Girl's eyes */}
      <ellipse cx="215" cy="215" rx="5" ry="7" fill="#b562d6" />
      <ellipse cx="245" cy="215" rx="5" ry="7" fill="#b562d6" />

      {/* Girl's mouth */}
      <path d="M225 235 Q230 240 235 235" stroke="#b562d6" strokeWidth="2" />

      {/* Girl's arms */}
      <path d="M200 280 Q180 300 160 320" stroke="#fce4ec" strokeWidth="10" strokeLinecap="round" />
      <path d="M260 280 Q240 300 220 320" stroke="#fce4ec" strokeWidth="10" strokeLinecap="round" />

      {/* Floating code elements */}
      <text x="50" y="50" fill="#b562d6" fontSize="14" fontWeight="bold">
        &lt;code&gt;
      </text>
      <text x="320" y="380" fill="#cd5ff8" fontSize="14" fontWeight="bold">
        &lt;/code&gt;
      </text>
      <text x="300" y="100" fill="#b562d6" fontSize="12">
        npm install
      </text>
      <text x="70" y="150" fill="#cd5ff8" fontSize="12">
        git commit -m "✨"
      </text>
    </svg>
  )
}

export default AnimeDeveloperGirl
