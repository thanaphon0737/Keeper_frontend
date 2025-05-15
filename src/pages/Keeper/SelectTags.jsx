function SelectTags({tags, onUpdate}) {
    const handdleClick = (e) => {
        // console.log(e.target)
        const tagId = e.target.value
        onUpdate(tagId)
    }
  return (
    <div className="flex gap-2"> 
        {tags.map(tag => (
            <button className="border-1 p-1 rounded-lg" name="tagId" value={tag.id} type="button" onClick={handdleClick}>
                {tag.name}
            </button>
        ))}
    </div>
  )
}
export default SelectTags