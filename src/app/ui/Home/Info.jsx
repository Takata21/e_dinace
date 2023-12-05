export function Info({ info, title }) {
  return (
    <div className=" text-white/60">
      <div className="p-2 rounded-sm">
        <span className="text-xs flex gap-1 items-center">
          {title}: {info}
        </span>
      </div>
    </div>
  )
}
