function TagsTitle({names}) {
  return (
    <div className="flex gap-2">
        { names.map(name => (
            <div className="border-1 p-1 rounded-lg">
                {name.name}
            </div>
        ))}
    </div>
  )
}
export default TagsTitle