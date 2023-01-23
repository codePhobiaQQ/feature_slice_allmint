import React from 'react'

interface BinanceTestSvgI {
  classing?: string
}

const BinanceTestSvg = ({ classing = '' }: BinanceTestSvgI) => {
  return (
    <svg
      className={`${classing} w_15 h_15`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#940000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5935 11.0634L14.1019 12.5675L10.0014 16.6638L5.90515 12.5675L7.41361 11.0634L10.0014 13.6512L12.5935 11.0634ZM10.0014 8.47132L11.5315 10.0014L10.0014 11.5316L8.47559 10.0058V10.0014L8.74434 9.7327L8.87438 9.60266L10.0014 8.47132ZM4.84317 8.49299L6.35162 10.0014L4.84317 11.5056L3.33472 9.99711L4.84317 8.49299ZM15.1596 8.49299L16.668 10.0014L15.1596 11.5056L13.6511 9.99711L15.1596 8.49299ZM10.0014 3.33478L14.0976 7.43101L12.5892 8.93946L10.0014 6.34735L7.41361 8.93513L5.90515 7.43101L10.0014 3.33478Z"
        fill="#F3BA2F"
      />
    </svg>
  )
}

export default BinanceTestSvg
