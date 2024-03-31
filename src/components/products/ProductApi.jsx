import { useEffect, useState } from "react";

export function ProductApi() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://starshopsf7.localhost/api/products/')

        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Chargement en cours...</div>;
  if (error) return <div>Erreur : {error.message}</div>;
  if (!data) return <div>Aucune donnée disponible</div>;

  return (JSON.stringify(data, null, 2));
}