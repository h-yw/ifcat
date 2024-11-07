interface Props {
  title: string
  content: string[]
}
export default function Poetry({ title, content }: Props) {
  return (
    <div className="w-full text-center">
      <hr className="my-2" />
      <div className="">
        <h4>{title}</h4>
        <div className="mt-4">
          {content.map((line, index) => (
            <p className="mb-0 mt-0" key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
