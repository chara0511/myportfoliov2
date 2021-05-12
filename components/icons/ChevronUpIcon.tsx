const ChevronUpIcon = ({ ...props }) => {
  return (
    <svg
      role="img"
      aria-label="ChevronUp icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  )
}

export default ChevronUpIcon
