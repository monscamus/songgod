import SocialIcon from './SocialIcons'
import Link from "next/link";
export default function Footer() {

  return (
    <div className="">
      Want to be the first to see what&apos;s new? Follow 
      <Link href="https://www.instagram.com/alexcochranwriter/ " target="_blank" className='px-2'>@alexcochranwriter</Link>on 
      Instagram or <Link href="https://twitter.com/cannotbegrouped" target="_blank" className='px-2'>@cannotbegrouped</Link> on X/Twitter.
      
    </div>
  )
}
