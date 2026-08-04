import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'full' | 'mark-only';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
  theme = 'light',
}) => {
  // Height configurations
  const heightMap = {
    sm: 'h-9 sm:h-11',
    md: 'h-11 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-28',
  };

  const titleSizeMap = {
    sm: 'text-[13px] xs:text-[14px] sm:text-base font-extrabold',
    md: 'text-sm sm:text-base font-extrabold',
    lg: 'text-base sm:text-lg lg:text-xl font-extrabold',
    xl: 'text-lg sm:text-2xl font-extrabold',
  };

  const subtitleSizeMap = {
    sm: 'text-[8.5px] xs:text-[9.5px] sm:text-[10.5px]',
    md: 'text-[9.5px] sm:text-[10.5px]',
    lg: 'text-[10px] sm:text-xs',
    xl: 'text-xs sm:text-sm',
  };

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* SVG Vector Logo matching Pet Stop Clinic official branding */}
      <svg
        className={`${heightMap[size]} w-auto drop-shadow-xs flex-shrink-0 transition-all duration-300`}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Pet Stop Clinic Official Logo"
      >
        {/* Red Medical Cross Background */}
        <path
          d="M120 40 C120 33, 125 28, 132 28 H188 C195 28, 200 33, 200 40 V100 H260 C267 100, 272 105, 272 112 V168 C272 175, 267 180, 260 180 H200 V230 C200 237, 195 242, 188 242 H132 C125 242, 120 237, 120 230 V180 H60 C53 180, 48 175, 48 168 V112 C48 105, 53 100, 60 100 H120 V40 Z"
          fill="#C81D25"
        />

        {/* Stethoscope in White inside top arm */}
        <path
          d="M152 42 C152 42, 142 50, 142 62 C142 70, 148 76, 156 76 C162 76, 166 72, 166 66 C166 60, 160 56, 154 58 C150 60, 148 64, 150 68"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="166" cy="66" r="3.5" fill="#FFFFFF" />
        {/* Paw print in stethoscope loop */}
        <circle cx="156" cy="68" r="2" fill="#FFFFFF" />
        <circle cx="153" cy="65" r="1" fill="#FFFFFF" />
        <circle cx="156" cy="64" r="1" fill="#FFFFFF" />
        <circle cx="159" cy="65" r="1" fill="#FFFFFF" />

        {/* Parrot silhouette on branch inside cross */}
        <path
          d="M168 58 C172 54, 178 52, 182 56 C184 58, 184 62, 180 66 C176 70, 172 74, 170 82 C168 86, 164 92, 162 98 L160 102 L158 96 C158 88, 162 80, 166 72 Z"
          fill="#0E2338"
        />

        {/* Navy Blue Pet Silhouettes Layer */}

        {/* Dog Silhouette Right (German Shepherd) */}
        <path
          d="M182 82 C186 74, 192 70, 198 76 C202 80, 206 90, 210 100 C216 112, 222 125, 218 140 C216 148, 210 156, 212 165 C214 172, 216 180, 214 186 C210 188, 202 188, 198 186 C196 178, 198 170, 194 162 C190 154, 182 148, 178 140 C176 132, 178 120, 182 110 Z"
          fill="#0E2338"
        />

        {/* Dog/Retriever Silhouette Left */}
        <path
          d="M100 106 C105 100, 114 96, 122 102 C130 108, 138 116, 145 126 C155 140, 168 152, 180 162 C182 170, 182 180, 178 186 C170 188, 160 188, 152 184 C146 176, 142 168, 136 160 C126 150, 118 142, 108 132 C102 124, 98 114, 100 106 Z"
          fill="#0E2338"
        />

        {/* Cat Silhouette Center Front */}
        <path
          d="M118 138 C122 132, 128 130, 132 134 C136 138, 140 148, 142 158 C144 168, 148 176, 158 182 C160 186, 154 188, 146 188 C138 188, 130 186, 124 180 C120 172, 118 162, 116 152 Z"
          fill="#0E2338"
        />

        {/* Fish Bowl Right Front */}
        <path
          d="M160 162 C168 160, 176 162, 180 168 C184 174, 184 182, 178 186 C172 188, 164 188, 158 182 C154 176, 154 168, 160 162 Z"
          fill="#0E2338"
        />
        {/* Fish inside bowl in white */}
        <path
          d="M166 172 C170 170, 174 172, 176 174 C174 176, 170 178, 166 176 L164 178 L164 170 Z"
          fill="#FFFFFF"
        />

        {/* Red Ribbon Banner below cross */}
        <path
          d="M32 216 L62 202 L258 202 L288 216 L274 238 L258 232 L62 232 L46 238 Z"
          fill="#C81D25"
        />
        <path
          d="M58 202 L262 202 L252 232 L68 232 Z"
          fill="#C81D25"
          stroke="#A8141B"
          strokeWidth="1.5"
        />
        {/* Ribbon Fold shadow accents */}
        <path d="M46 238 L62 232 L62 244 Z" fill="#880E14" />
        <path d="M274 238 L258 232 L258 244 Z" fill="#880E14" />

        {/* White Text "PET STOP" inside ribbon */}
        <text
          x="160"
          y="224"
          fill="#FFFFFF"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="2.5"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          PET STOP
        </text>

        {/* Navy Blue Text "CLINIC" below ribbon */}
        <text
          x="160"
          y="262"
          fill="#0E2338"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="20"
          letterSpacing="4"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          CLINIC
        </text>
      </svg>

      {/* Brand Typography display beside logo */}
      {showSubtitle && variant === 'full' && (
        <div className={`flex flex-col justify-center text-left border-l pl-2 sm:pl-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <span className={`font-sans tracking-tight leading-none ${titleSizeMap[size]} ${isDark ? 'text-white' : 'text-[#0E2338]'}`}>
            PET STOP <span className={isDark ? 'text-red-400' : 'text-[#C81D25]'}>CLINIC</span>
          </span>
          <span className={`font-bold tracking-wider uppercase mt-0.5 sm:mt-1 whitespace-nowrap ${subtitleSizeMap[size]} ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            24/7 Veterinary Care
          </span>
        </div>
      )}
    </div>
  );
};
