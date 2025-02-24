import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import NavbarHome from "../../../components/NavbarHome/NavbarHome";
import styles from "./MiniForum.module.css";

const posts = [
  {
    id: 1,
    user: "CodeCraftMaster",
    title: "Extensão VS Code: IA Local 🔥",
    content:
      "Desenvolvi uma extensão que permite usar IA localmente no VS Code! Ela melhora a produtividade sem depender de servidores externos.",
    details:
      "Explico como desenvolvi a extensão, os desafios enfrentados e como você pode instalá-la e testá-la.",
    upvotes: 14,
    comments: [
      { user: "TechSavvyDev", text: "Isso parece incrível! Como funciona?" },
      { user: "CodeExplorer", text: "Tem código disponível no GitHub?" },
    ],
    category: "IA",
  },
  {
    id: 2,
    user: "CyberVulpes",
    title: "Começando na carreira tech 💼",
    content:
      "Quais são os primeiros passos para conseguir um trabalho remoto na área de tecnologia? Dicas e experiências são bem-vindas!",
    details:
      "Compartilhe sua trajetória! Dicas sobre portfólio, networking, e onde encontrar oportunidades são muito bem-vindas.",
    upvotes: 5,
    comments: [
      {
        user: "DevOnTheRise",
        text: "Também estou nessa fase, ansioso pelas respostas!",
      },
    ],
    category: "Carreira",
  },
  {
    id: 3,
    user: "BitCoder2279",
    title: "Lista, Pilha e Fila em C++ 📚",
    content:
      "Estou com dificuldades para implementar essas estruturas em C++. Alguém pode me ajudar a entender melhor?",
    details:
      "Se você já trabalhou com estruturas de dados, compartilhe dicas sobre implementação, melhores práticas e armadilhas comuns!",
    upvotes: 6,
    comments: [
      {
        user: "DataStructuresGuru",
        text: "Já tentou usar ponteiros para manipular as estruturas?",
      },
    ],
    category: "Desenvolvimento",
  },
];

export default function MiniForum() {
  const [expandedPost, setExpandedPost] = useState(null);
  const [newComment, setNewComment] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "IA", // Categoria padrão
  });

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
      setNewComment((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const newPostData = {
      id: posts.length + 1,
      user: "Você",
      title: newPost.title,
      content: newPost.content,
      details: "Detalhes sobre a nova dúvida.",
      upvotes: 0,
      comments: [],
      category: newPost.category,
    };
    posts.push(newPostData);
    setNewPost({ title: "", content: "", category: "IA" }); // Resetar o formulário
  };

  const categories = [
    "Todos",
    "IA",
    "Desenvolvimento",
    "Mobile",
    "Carreira",
    "DevOps",
  ];

  const filteredPosts =
    selectedCategory === "Todos"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <NavbarHome />
      <div className={styles.container}>
        <h1 className={styles.title}>Mini Fórum</h1>

        <div className={styles.filter}>
          <label htmlFor="category">Filtrar por categoria:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.select}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.posts}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`${styles.card} ${
                expandedPost === post.id ? styles.expanded : ""
              }`}
            >
              <div
                className={styles.header}
                onClick={() => togglePost(post.id)}
              >
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

        <form onSubmit={handleNewPostSubmit} className={styles.newPostForm}>
          <input
            type="text"
            name="title"
            placeholder="Título da dúvida"
            value={newPost.title}
            onChange={handleNewPostChange}
            className={styles.newPostInput}
            required
          />
          <textarea
            name="content"
            placeholder="Descreva sua dúvida..."
            value={newPost.content}
            onChange={handleNewPostChange}
            className={styles.newPostTextarea}
            required
          />
          <select
            name="category"
            value={newPost.category}
            onChange={handleNewPostChange}
            className={styles.newPostSelect}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.newPostButton}>
            Enviar Dúvida
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
}
