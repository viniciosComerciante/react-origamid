import React from "react";
import { useParams } from "react-router";
import styles from "./Produto.module.css";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Ranek | Esse é um produto ${produto.nome}`}
      ></Head>

      <div>
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt={foto.descricao} key={foto.src} />
        ))}
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
