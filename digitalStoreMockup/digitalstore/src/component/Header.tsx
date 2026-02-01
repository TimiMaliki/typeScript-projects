

type Props = {
    title : string
}

const Header = ({title}: Props) => {
  return (
    <div className='px-2  py-4 w-full border-b'>
        <div className="container">
            <p className="text-3xl font-bold text-black ml-3">{title}</p>
        </div>
    </div>
  )
}

export default Header