

type Props = {
    title : string
}

const Header = ({title}: Props) => {
  return (
    <div className='px-2  py-4 border-b'>
        <div className="container">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Header