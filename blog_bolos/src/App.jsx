import { useState } from "react";
import "./App.css";

function App() {
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const receitas = [
    {
      id: "milho",
      nome: "Bolo de Milho",
      imagem: "https://media.istockphoto.com/id/1318334402/pt/foto/delicious-corn-cake-on-table-typical-brazilian-cake.jpg?b=1&s=612x612&w=0&k=20&c=SBA7JJT2i3Hvx7tI1soQv8FnIdgrdEd7Ij6QfgZz_u0=",
      ingredientes: [
        "1 lata de milho",
        "1 lata de leite",
        "1 lata de açúcar",
        "1 lata de fubá",
        "3 ovos",
        "1 colher de fermento"
      ],
      preparo:
        "Preaqueça o forno a 180°C e unte uma forma com manteiga e fubá (ou farinha de trigo). No liquidificador, bata os ovos, o óleo, o leite e o milho verde escorrido por 2 a 3 minutos, até triturar bem. Acrescente o açúcar e o flocão de milho (ou fubá) e bata novamente até obter uma massa homogênea. Adicione o fermento em pó e misture rapidamente apenas para incorporar. Despeje a massa na forma (ela fica mais líquida mesmo) e leve ao forno por cerca de 40 a 50 minutos, até dourar. Espere amornar antes de desenformar e servir."
    },
    {
      id: "chocolate",
      nome: "Bolo de Chocolate",
      imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      ingredientes: [
        "2 xícaras de farinha",
        "1 xícara de chocolate em pó",
        "1 xícara de açúcar",
        "3 ovos",
        "1 xícara de leite",
        "1 colher de fermento"
      ],
      preparo:
        "Preaqueça o forno a 180°C e unte uma forma com manteiga e farinha de trigo. No liquidificador ou em uma tigela, bata os ovos, o óleo e o leite até misturar bem. Acrescente o açúcar, o chocolate em pó e a farinha de trigo, misturando até obter uma massa lisa e homogênea. Adicione o fermento em pó e mexa delicadamente apenas para incorporar. Despeje a massa na forma untada e leve ao forno por cerca de 35 a 45 minutos, ou até que, ao espetar um palito, ele saia limpo. Espere amornar antes de desenformar e servir"
    },
    {
      id: "cenoura",
      nome: "Bolo de Cenoura",
      imagem: "https://media.istockphoto.com/id/1313708591/pt/foto/carrot-cake-with-chocolate-icing-brazilian-cake.jpg?b=1&s=612x612&w=0&k=20&c=IBjf8Qkym9jzGmgkSBfgDv8_wsnnPJKM-ftYWr5nK0A=",
      ingredientes: [
        "3 cenouras",
        "3 ovos",
        "1 xícara de óleo",
        "2 xícaras de açúcar",
        "2 xícaras de farinha",
        "1 colher de fermento"
      ],
      preparo:
        "Preaqueça o forno a 180°C e unte uma forma com manteiga e farinha de trigo. No liquidificador, bata as cenouras picadas, os ovos e o óleo até obter uma mistura lisa. Transfira para uma tigela e acrescente o açúcar e a farinha de trigo, misturando até formar uma massa homogênea. Adicione o fermento em pó e mexa delicadamente para incorporar. Despeje a massa na forma untada e leve ao forno por cerca de 35 a 45 minutos, ou até que, ao espetar um palito, ele saia limpo. Espere amornar antes de desenformar e, se desejar, finalize com cobertura de chocolate."
      }
  ];

  if (!receitaSelecionada) {
    return (
      <div className="container">
        <h1 className="titulo">🍰 Blog de Receitas</h1>

        <div className="grid">
          {receitas.map((bolo) => (
            <div key={bolo.id} className="card">
              <img src={bolo.imagem} alt={bolo.nome} />
              <h2>{bolo.nome}</h2>
              <button onClick={() => setReceitaSelecionada(bolo)}>
                Ver Receita
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="receita-card">
        <img src={receitaSelecionada.imagem} alt={receitaSelecionada.nome} />
        <h1>{receitaSelecionada.nome}</h1>

        <h3>Ingredientes:</h3>
        <ul>
          {receitaSelecionada.ingredientes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Modo de Preparo:</h3>
        <p>{receitaSelecionada.preparo}</p>

        <button onClick={() => setReceitaSelecionada(null)}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default App;