
const Button = ({ label }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-3 border text-sm rounded-full bg-brightred border-brightred text-white z-10`}>
      {label}
    </button>
  )
}

export default Button