const BreedsList = ({ breeds }) => {

  if (typeof breeds !== 'object') {
    throw new Error('breeds가 object props로 전달되지 않았습니다.')
  }

  return (
    <ul>
      {breeds.map((cat, index) => (
        <li className="Cat" key={`${cat.id}-${index}`}>
          <span>Name: {cat.name}</span>
          <span>Origin: {cat.origin}</span>
          <span>Description: {cat.description}</span>
          <span>
            Wiki:{' '}
            <a href={cat.wikipedia_url} target="_blank">
              {cat.wikipedia_url}
            </a>
          </span>
          <img className="Image" src={cat.image ? cat.image.url : null} />
        </li>
      ))}
    </ul>
  )
}

export default BreedsList
