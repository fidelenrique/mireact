/**
 * Ligne article dans un tableau à 2 colonnes (nom / prix)
 * @param {{name: string, stocked: boolean, price: string}} article
 * @returns {JSX.Element}
 * @constructor
 */
export function ArticleRow ({article}) {
    const style = article.stocked ? undefined : {color: 'red'}

    return <tr>
        <td style={style}>{article.name}</td>
        <td>{article.price}</td>
    </tr>
}