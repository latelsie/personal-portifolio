import {CONTACT} from'../constants'

const Contact =()=>{
    return(
        <div className=" border-t border-stone-900 ph-20">
      <h2 className="my-10 text-center text-4xl ">
                Get In Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="pb-4">
            {CONTACT.address}
        </p>
        <p className='my-4'>
            {CONTACT.phoneNo}
        </p>
        <a href='mailto:tonaelsie31@gmail.com' className='border-b'>
    {CONTACT.email}
        </a>

      </div>
        </div>
    )
}
export default Contact