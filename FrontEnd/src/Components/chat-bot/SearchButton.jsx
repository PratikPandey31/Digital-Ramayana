function SearchButton({ icon, onClick, disable }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className='size-9 rounded-full text-xl flex items-center justify-center border-2 border-slate-300 m-auto hover:bg-orange-200 active:bg-orange-300 disabled:bg-slate-300 disabled:cursor-not-allowed'
    >
      {icon}
    </button>
  )
}

export default SearchButton;