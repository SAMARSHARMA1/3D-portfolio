<<<<<<< HEAD
import { mySocials } from "../constants"
const Footer = () => {
  return <section className="flex flex-wrap items-center
  justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
    <div className=" mb-4 bg-gradiant-to-r from-transparent
    via-neutral-700 to-transparent h-[1px] w-full "/>
    <div className="flex gap-2">
        <p>Term & condition</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>
    <div className="flex gap-3">{mySocials.map((social,index)=>(
        <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name}/>
        </a>
    ))}

    </div>
    <p>© 2025 Samar. All rights reserved.</p>
  </section>
}

=======
import { mySocials } from "../constants"
const Footer = () => {
  return <section className="flex flex-wrap items-center
  justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
    <div className=" mb-4 bg-gradiant-to-r from-transparent
    via-neutral-700 to-transparent h-[1px] w-full "/>
    <div className="flex gap-2">
        <p>Term & condition</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>
    <div className="flex gap-3">{mySocials.map((social,index)=>(
        <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name}/>
        </a>
    ))}

    </div>
    <p>© 2025 Samar. All rights reserved.</p>
  </section>
}

>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
export default Footer