import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./MiniForum.module.css";

const posts = [
  {
    id: 1,
    user: "Plotozoario",
    title: "Extensão VS Code: IA Local 🔥",
    content:
      "Desenvolvi uma extensão que permite usar IA localmente no VS Code! Ela melhora a produtividade sem depender de servidores externos.",
    details:
      "Explico como desenvolvi a extensão, os desafios enfrentados e como você pode instalá-la e testá-la.",
    upvotes: 14,
    comments: [
      { user: "DevMaster", text: "Isso parece incrível! Como funciona?" },
      { user: "CodeLover", text: "Tem código disponível no GitHub?" },
    ],
  },
  {
    id: 2,
    user: "Vulpes-Canis",
    title: "Começando na carreira tech 💼",
    content:
      "Quais são os primeiros passos para conseguir um trabalho remoto na área de tecnologia? Dicas e experiências são bem-vindas!",
    details:
      "Compartilhe sua trajetória! Dicas sobre portfólio, networking, e onde encontrar oportunidades são muito bem-vindas.",
    upvotes: 5,
    comments: [
      {
        user: "JuniorDev",
        text: "Também estou nessa fase, ansioso pelas respostas!",
      },
    ],
  },
  {
    id: 3,
    user: "Inner_Bit_2279",
    title: "Lista, Pilha e Fila em C++ 📚",
    content:
      "Estou com dificuldades para implementar essas estruturas em C++. Alguém pode me ajudar a entender melhor?",
    details:
      "Se você já trabalhou com estruturas de dados, compartilhe dicas sobre implementação, melhores práticas e armadilhas comuns!",
    upvotes: 6,
    comments: [
      {
        user: "CodeHelper",
        text: "Já tentou usar ponteiros para manipular as estruturas?",
      },
    ],
  },
  {
    id: 4,
    user: "DevExplorer",
    title: "Minha jornada aprendendo Flutter 🚀",
    content:
      "Estou começando a aprender Flutter e queria saber quais são as melhores práticas para quem está começando.",
    details:
      "Quais dicas você tem para iniciantes em Flutter? Compartilhe links úteis, tutoriais, ou experiências de quem já passou por isso.",
    upvotes: 12,
    comments: [
      {
        user: "FlutterFan",
        text: "Não se esqueça de usar o Hot Reload! Ajuda muito no desenvolvimento.",
      },
      {
        user: "CodeArtist",
        text: "Estude bem a documentação oficial, tem muitos recursos lá.",
      },
    ],
  },
  {
    id: 5,
    user: "TechGuru",
    title: "DevOps e Automação no Desenvolvimento 🌐",
    content:
      "Como implementar práticas de DevOps em um time pequeno? Quais ferramentas são essenciais para começar a automatizar processos?",
    details:
      "Vamos discutir as melhores ferramentas e práticas para adotar DevOps em pequenos projetos e como elas podem aumentar a produtividade.",
    upvotes: 9,
    comments: [
      {
        user: "OpsMaster",
        text: "Terraform e Jenkins são ferramentas que não podem faltar.",
      },
      {
        user: "AutomateGeek",
        text: "Comece com CI/CD básico, depois expanda conforme o time cresce.",
      },
    ],
  },
  {
    id: 6,
    user: "CodeScribe",
    title: "Aprendendo Machine Learning com Python 🤖",
    content:
      "Estou começando a explorar o Machine Learning com Python. Quais bibliotecas vocês recomendam para projetos iniciais?",
    details:
      "Discussão sobre as bibliotecas mais populares como Scikit-Learn, TensorFlow e PyTorch. Qual delas você acha mais acessível para iniciantes?",
    upvotes: 7,
    comments: [
      {
        user: "MLMaster",
        text: "Scikit-Learn é ótimo para começar, tem muitos tutoriais disponíveis.",
      },
      {
        user: "AIWizard",
        text: "Para algo mais avançado, vá de TensorFlow ou PyTorch, mas comece devagar.",
      },
    ],
  },
];

export default function MiniForum() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [newComment, setNewComment] = useState({}); // Armazena o novo comentário para cada post

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const handleCommentChange = (postId, value) => {
    setNewComment((prev) => ({ ...prev, [postId]: value }));
  };

  const handleCommentSubmit = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (newComment[postId]) {
      post.comments.push({ user: "Você", text: newComment[postId] });
      setNewComment((prev) => ({ ...prev, [postId]: "" })); // Limpa o campo de entrada
    }
  };

  return (
    <div className={styles.container}>
      <NavbarHome />
      <h1 className={styles.title}>Mini Fórum</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={`${styles.card} ${
              expandedPost === post.id ? styles.expanded : ""
            }`}
          >
            <div className={styles.header} onClick={() => togglePost(post.id)}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              {expandedPost === post.id ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </div>
            <p className={styles.postContent}>{post.content}</p>

            <div className={styles.actions}>
              <button className={styles.button}>
                <ThumbsUp size={18} /> {post.upvotes}
              </button>
              <button className={styles.button}>
                <MessageCircle size={18} /> {post.comments.length}
              </button>
              <button className={styles.button}>
                <Share2 size={18} /> Compartilhar
              </button>
            </div>

            {expandedPost === post.id && (
              <div className={styles.details}>
                <p>{post.details}</p>
                <div className={styles.comments}>
                  <h3>Comentários:</h3>
                  {post.comments.map((comment, index) => (
                    <p key={index} className={styles.comment}>
                      <strong>{comment.user}:</strong> {comment.text}
                    </p>
                  ))}
                </div>
                <div className={styles.commentInput}>
                  <input
                    type="text"
                    placeholder="Digite seu comentário..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    className={styles.input}
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className={styles.button}
                  >
                    Comentar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
