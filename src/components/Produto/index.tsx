import { useDispatch, useSelector } from 'react-redux'
import { Produto, Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { addToFavorites } from '../../store/reducers/favorites'
import { RootReducer } from '../../store'
import {
  setFavoriteFalse,
  setFavoriteTrue
} from '../../store/reducers/favorite'
import { useState } from 'react'
import { addToCart } from '../../store/reducers/cart'

interface ProdutoComponentProps {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: ProdutoComponentProps) => {
  const isConditionTrue = useSelector(
    (state: RootReducer) => state.favorite.isConditionTrue
  )

  const [isFavorite, setIsFavorite] = useState(isConditionTrue)

  const dispatch = useDispatch()

  const favoriteItem = (produto: ProdutoType) => {
    dispatch(addToFavorites(produto))
    dispatch(isConditionTrue ? setFavoriteFalse() : setFavoriteTrue())
    setIsFavorite(!isConditionTrue)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoriteItem(produto)} type="button">
        {isFavorite ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addToCart(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
