import React, { useState, useEffect } from 'react';
import { Input } from './components/forms/Input';
import { Checkbox } from './components/forms/Checkbox';
import { ArticleCategoryRow } from './components/articles/ArticleCategoryRow';
import { ArticleRow } from './components/articles/ArticleRow';

function App() {
  // État pour stocker les données de l'API
  const [articles, setArticles] = useState([]);

  // Utilisez useEffect pour effectuer une requête à l'API lorsque le composant est monté
  useEffect(() => {
    fetch('http://starshopsf7.localhost/api/articles/')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []); // Les dépendances vides signifient que cela ne sera exécuté qu'une seule fois lors du montage initial

  /** init tableau */
  const [showStokedOnly, setShowStokedOnly] = useState(false)
  const [search, setSearch] = useState('')

  const visibleArticles = articles.filter(article => {
      if (showStokedOnly && !article.stocked) {
          return false
      }

      if (search && !article.name.includes(search)) {
          return false
      }

      return true
  })
  /** fin tableau */

  return <div className="container my-3">
  <SearchBar 
      search={search}
      onSearchChange={setSearch}
      showStokedOnly={showStokedOnly} 
      onStockedOnlyChange={setShowStokedOnly} 
  />
  <ArticleTable articles={visibleArticles} />
  </div>
}

function SearchBar ({showStokedOnly, onStockedOnlyChange, search, onSearchChange}) {
    return <div className="mb-3">
        <Input
            value={search}
            onChange={onSearchChange}
            placeholder="Rechercher..."
        />
        <Checkbox 
            id="stocked"
            checked={showStokedOnly}
            onChange={onStockedOnlyChange}
            label="N'afficher que les produits en stock"
        />
    </div>
}

function ArticleTable ({articles}) {
    const rows = []
    let lastCategory = null

    for (let article of articles) {
        if (article.category !== lastCategory) {
            rows.push(<ArticleCategoryRow key={article.category} name={article.category} />)
        }
        lastCategory = article.category
        rows.push(<ArticleRow article={article} key={article.name} />)
    }

    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>

        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export default App;
