import Produto from '../components/Produto'
import { useGetProductsQuery } from '../store'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <h1>Carregando...</h1>
  } else {
    return (
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    )
  }
}

export default ProdutosComponent
