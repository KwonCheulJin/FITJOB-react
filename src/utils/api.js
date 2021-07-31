const apiKey = 'f658225c-bbff-4520-a93e-16c72a8e066c'


export const getCatBreeds = async (currentPage, limit = 5) => {
  if (typeof currentPage !== 'number') {
    throw new Error('getCatsBreeds 함수의 currentpage 파라미터는 number이어야 합니다.');
  }
  if (typeof limit !== 'number') {
    throw new Error('getCatsBreeds 함수의 limit 파라미터는 number이어야 합니다.');
  }

  const res = await fetch(`https://api.thecatapi.com/v1/breeds?page=${currentPage}&limit=${limit}`, {
    headers: {
      'x-api-key': apiKey
    }
  })

  const breeds = await res.json();

  return breeds;
}

export const catApiUrl = 'https://api.thecatapi.com/v1'
export const catHeaders = {
  'x-api-key': apiKey,
}