import { HiDownload } from 'react-icons/hi'
import { Button } from './Button'
import { portfolioData } from '../../data/portfolio'

interface ResumeDownloadButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  showIcon?: boolean
  label?: string
}

export function ResumeDownloadButton({
  size = 'md',
  variant = 'secondary',
  className,
  showIcon = true,
  label = 'Download Resume',
}: ResumeDownloadButtonProps) {
  return (
    <Button
      href={portfolioData.resumeUrl}
      download={portfolioData.resumeFileName}
      variant={variant}
      size={size}
      className={className}
    >
      {showIcon && <HiDownload className="h-5 w-5" />}
      {label}
    </Button>
  )
}
