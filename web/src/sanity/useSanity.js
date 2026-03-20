import { useState, useEffect } from 'react'
import { client } from './client'

export function useSanityQuery(query, fallback = null) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) return
    client
      .fetch(query)
      .then((result) => {
        setData(result || fallback)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err)
        setError(err)
        setData(fallback)
        setLoading(false)
      })
  }, [query])

  return { data, loading, error }
}
