export default function Button({ children, variant }) {
  return (
    <button
      className={
        variant === 'primary'
          ? 'text-plack rounded bg-yellow py-2 px-4 font-leading font-semibold text-black shadow-md hover:shadow-lg'
          : ''
      }
    >
      {children}
    </button>
  )
}
