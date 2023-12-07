
const Button = ({ label, white, onClick }) => {
  return (
    <button onClick={onClick} className={`flex justify-center items-center gap-2 px-7 py-3 text-sm rounded-full font-semibold ${white ? 'text-brightred bg-white hover:text-hoverwhite' : 'bg-brightred text-verypalered hover:bg-hoverwhite'} z-10`}>
      {label}
    </button>
  )
}

export default Button