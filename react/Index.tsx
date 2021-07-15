import { useQuery } from 'react-apollo'
import QUERY_VALUE from './graphql/types/productView.gql'

const HelloData = () => {
  const { loading, error, data } = useQuery(QUERY_VALUE)

  if (loading) {
    return 'Loading…'
  }
  if (error) {
    return `Error ${error}`
  }
  console.log(data)
  return `Done fetching ${data.product.items[0].name} + ${data.product.items[0].sellers[0].commertialOffer.ListPrice}`
}

export default HelloData