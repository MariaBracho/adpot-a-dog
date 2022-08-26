import { Helmet } from 'react-helmet'

export default function TitleLoadAndDescription ({ loader, title }) {
  const nameOfPage = `${title} | Adopt a dog`
  const loaderPage = '...cargando'

  const isLoader = loader ? loaderPage : nameOfPage
  return (
    <Helmet>
      <title>{isLoader}</title>
      <meta name="description" content={title} />
    </Helmet>
  )
}
