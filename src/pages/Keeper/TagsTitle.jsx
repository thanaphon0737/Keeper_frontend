function TagsTitle({tags,onUpdate}) {
  
  return (
    <div className="flex gap-2">
        { tags.map(tag => (
            <button className="border-1 p-1 rounded-lg"
            name="tagName"
            value={tag.name}
            onClick={e => {onUpdate(e.target.value)}}
            >
                {tag.name}
            </button>
        ))}
    </div>
  )
}
export default TagsTitle