
const Button = ({ label, white }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-3 border text-sm rounded-full ${white ? 'text-brightred border-white bg-white' : 'bg-brightred border-brightred text-white'}  z-10`}>
      {label}
    </button>
  )
}

export default Button