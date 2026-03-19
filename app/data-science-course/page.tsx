"use client";
import { useState, useEffect, useRef, useCallback } from "react";

// ─── AUTH HELPER ──────────────────────────────────────────────────────────────
const getLoggedInUser = () => {
  try {
    const r = typeof window !== "undefined" ? localStorage.getItem("cosmos_user") : null;
    return r ? JSON.parse(r) : null;
  } catch { return null; }
};

// ─── SYLLABUS DATA ────────────────────────────────────────────────────────────
const SYLLABUS = [
  {
    id: "m1", title: "Python Foundations", icon: "🐍", color: "#3b82f6",
    chapters: [
      { id: "m1c1", title: "Variables & Data Types", topics: ["int, float, str, bool", "Type casting", "Variable naming rules", "Constants"] },
      { id: "m1c2", title: "Operators & Expressions", topics: ["Arithmetic operators", "Comparison operators", "Logical operators", "Bitwise operators"] },
      { id: "m1c3", title: "Control Flow", topics: ["if / elif / else", "Nested conditions", "Ternary expressions", "Match statement (3.10+)"] },
      { id: "m1c4", title: "Loops", topics: ["for loops", "while loops", "break / continue / pass", "Loop comprehensions"] },
      { id: "m1c5", title: "Functions", topics: ["def keyword", "Parameters & arguments", "*args and **kwargs", "Lambda functions"] },
      { id: "m1c6", title: "Strings Deep Dive", topics: ["String methods", "f-strings", "String slicing", "Regular expressions"] },
      { id: "m1c7", title: "Lists & Tuples", topics: ["List operations", "List methods", "Tuple immutability", "Packing/unpacking"] },
      { id: "m1c8", title: "Dictionaries & Sets", topics: ["dict methods", "set operations", "defaultdict", "Counter"] },
      { id: "m1c9", title: "File I/O", topics: ["open() / read() / write()", "Context managers", "CSV files", "JSON files"] },
      { id: "m1c10", title: "Error Handling", topics: ["try / except / finally", "Custom exceptions", "raise", "Logging"] },
    ]
  },
  {
    id: "m2", title: "NumPy & Pandas", icon: "📊", color: "#10b981",
    chapters: [
      { id: "m2c1", title: "NumPy Arrays", topics: ["ndarray creation", "Shape & reshape", "Indexing & slicing", "Broadcasting"] },
      { id: "m2c2", title: "NumPy Operations", topics: ["Arithmetic ops", "Statistical functions", "Linear algebra", "Random module"] },
      { id: "m2c3", title: "Pandas Series", topics: ["Series creation", "Index operations", "Boolean indexing", "apply()"] },
      { id: "m2c4", title: "Pandas DataFrame", topics: ["DataFrame creation", "read_csv / read_excel", "info() & describe()", "head() & tail()"] },
      { id: "m2c5", title: "Data Selection", topics: ["loc vs iloc", "Conditional selection", "MultiIndex", "at & iat"] },
      { id: "m2c6", title: "Data Cleaning", topics: ["Handling NaN", "fillna() & dropna()", "Duplicates", "Data type conversion"] },
      { id: "m2c7", title: "GroupBy & Aggregation", topics: ["groupby()", "agg() functions", "pivot_table()", "crosstab()"] },
      { id: "m2c8", title: "Merging & Joining", topics: ["merge() types", "concat()", "join()", "append()"] },
      { id: "m2c9", title: "Time Series", topics: ["DatetimeIndex", "resample()", "rolling()", "shift()"] },
      { id: "m2c10", title: "Data Export", topics: ["to_csv()", "to_excel()", "to_json()", "SQL export"] },
    ]
  },
  {
    id: "m3", title: "Data Visualization", icon: "📈", color: "#f59e0b",
    chapters: [
      { id: "m3c1", title: "Matplotlib Basics", topics: ["pyplot API", "Figure & Axes", "Line plots", "Saving figures"] },
      { id: "m3c2", title: "Matplotlib Customization", topics: ["Colors & styles", "Annotations", "Subplots", "Twinx axes"] },
      { id: "m3c3", title: "Seaborn Intro", topics: ["Statistical plots", "distplot / histplot", "countplot", "Themes"] },
      { id: "m3c4", title: "Seaborn Advanced", topics: ["heatmap()", "pairplot()", "FacetGrid", "clustermap()"] },
      { id: "m3c5", title: "Plotly Basics", topics: ["px.line / bar / scatter", "Interactive plots", "Hover data", "Layout config"] },
      { id: "m3c6", title: "Plotly Advanced", topics: ["Subplots", "3D plots", "Animations", "Dash intro"] },
      { id: "m3c7", title: "Chart Types Guide", topics: ["When to use bar vs line", "Pie chart pitfalls", "Box plots", "Violin plots"] },
      { id: "m3c8", title: "Storytelling with Data", topics: ["Color psychology", "Annotations strategy", "Audience alignment", "Dashboard design"] },
      { id: "m3c9", title: "Geographic Plots", topics: ["Folium maps", "Choropleth maps", "Plotly geo", "Geopandas intro"] },
      { id: "m3c10", title: "EDA Project", topics: ["Dataset exploration", "Missing value viz", "Correlation matrix", "Full EDA report"] },
    ]
  },
  {
    id: "m4", title: "Statistics & Math", icon: "📐", color: "#8b5cf6",
    chapters: [
      { id: "m4c1", title: "Descriptive Statistics", topics: ["Mean, median, mode", "Variance & std dev", "Skewness & kurtosis", "Percentiles"] },
      { id: "m4c2", title: "Probability Basics", topics: ["Sample space & events", "Conditional probability", "Bayes theorem", "Probability rules"] },
      { id: "m4c3", title: "Distributions", topics: ["Normal distribution", "Binomial distribution", "Poisson distribution", "Uniform distribution"] },
      { id: "m4c4", title: "Inferential Statistics", topics: ["Hypothesis testing", "p-values", "Confidence intervals", "t-tests"] },
      { id: "m4c5", title: "ANOVA & Chi-Square", topics: ["One-way ANOVA", "Two-way ANOVA", "Chi-square test", "F-statistics"] },
      { id: "m4c6", title: "Correlation", topics: ["Pearson correlation", "Spearman correlation", "Covariance", "Correlation heatmaps"] },
      { id: "m4c7", title: "Linear Algebra", topics: ["Vectors & matrices", "Matrix operations", "Eigenvalues", "SVD intro"] },
      { id: "m4c8", title: "Calculus for DS", topics: ["Derivatives basics", "Chain rule", "Gradients", "Optimization intuition"] },
      { id: "m4c9", title: "Information Theory", topics: ["Entropy", "KL Divergence", "Mutual information", "Cross entropy"] },
      { id: "m4c10", title: "SciPy for Stats", topics: ["scipy.stats module", "Distribution fitting", "Statistical tests", "Curve fitting"] },
    ]
  },
  {
    id: "m5", title: "Machine Learning Basics", icon: "🤖", color: "#ec4899",
    chapters: [
      { id: "m5c1", title: "ML Fundamentals", topics: ["Supervised vs unsupervised", "Training/test split", "Overfitting & underfitting", "Bias-variance tradeoff"] },
      { id: "m5c2", title: "Linear Regression", topics: ["Simple linear regression", "Multiple regression", "OLS method", "R² score"] },
      { id: "m5c3", title: "Logistic Regression", topics: ["Binary classification", "Sigmoid function", "Log loss", "Decision boundary"] },
      { id: "m5c4", title: "Decision Trees", topics: ["Gini impurity", "Information gain", "Tree depth", "Feature importance"] },
      { id: "m5c5", title: "Random Forests", topics: ["Bagging", "Feature randomness", "OOB score", "Feature importance"] },
      { id: "m5c6", title: "SVM", topics: ["Hyperplane", "Support vectors", "Kernel trick", "C & gamma params"] },
      { id: "m5c7", title: "KNN", topics: ["Distance metrics", "K selection", "Curse of dimensionality", "KD-tree"] },
      { id: "m5c8", title: "Naive Bayes", topics: ["Bayes theorem", "Gaussian NB", "Multinomial NB", "Text classification"] },
      { id: "m5c9", title: "Model Evaluation", topics: ["Confusion matrix", "Precision & recall", "F1 score", "ROC-AUC"] },
      { id: "m5c10", title: "Scikit-learn Workflow", topics: ["Pipeline API", "Cross-validation", "GridSearchCV", "Model persistence"] },
    ]
  },
  {
    id: "m6", title: "Advanced ML", icon: "🧠", color: "#06b6d4",
    chapters: [
      { id: "m6c1", title: "Ensemble Methods", topics: ["Boosting vs bagging", "AdaBoost", "Gradient Boosting", "Stacking"] },
      { id: "m6c2", title: "XGBoost & LightGBM", topics: ["XGBoost params", "LightGBM speed", "SHAP values", "Early stopping"] },
      { id: "m6c3", title: "Clustering", topics: ["K-Means", "DBSCAN", "Hierarchical clustering", "Silhouette score"] },
      { id: "m6c4", title: "Dimensionality Reduction", topics: ["PCA", "t-SNE", "UMAP", "LDA"] },
      { id: "m6c5", title: "Anomaly Detection", topics: ["Isolation Forest", "LOF", "One-class SVM", "Autoencoder approach"] },
      { id: "m6c6", title: "Time Series ML", topics: ["ARIMA", "SARIMA", "Prophet", "LSTM for TS"] },
      { id: "m6c7", title: "Feature Engineering", topics: ["Encoding techniques", "Scaling methods", "Feature creation", "Interaction features"] },
      { id: "m6c8", title: "Feature Selection", topics: ["Filter methods", "Wrapper methods", "RFECV", "Permutation importance"] },
      { id: "m6c9", title: "Hyperparameter Tuning", topics: ["RandomizedSearchCV", "Optuna", "Bayesian optimization", "Hyperband"] },
      { id: "m6c10", title: "ML Project Workflow", topics: ["Problem framing", "Data collection", "Experiment tracking", "Deployment checklist"] },
    ]
  },
  {
    id: "m7", title: "Deep Learning", icon: "🔮", color: "#f97316",
    chapters: [
      { id: "m7c1", title: "Neural Network Basics", topics: ["Perceptron", "Activation functions", "Forward pass", "Backpropagation"] },
      { id: "m7c2", title: "TensorFlow & Keras", topics: ["Sequential API", "Functional API", "Model compilation", "fit() & evaluate()"] },
      { id: "m7c3", title: "PyTorch Basics", topics: ["Tensor operations", "Autograd", "nn.Module", "Training loop"] },
      { id: "m7c4", title: "CNNs", topics: ["Convolution operation", "Pooling", "Famous architectures", "Transfer learning"] },
      { id: "m7c5", title: "RNNs & LSTMs", topics: ["Sequence modeling", "Vanishing gradient", "LSTM gates", "Bidirectional RNN"] },
      { id: "m7c6", title: "Transformers", topics: ["Attention mechanism", "Self-attention", "Encoder-decoder", "BERT & GPT intro"] },
      { id: "m7c7", title: "GANs", topics: ["Generator & discriminator", "Training GAN", "Mode collapse", "StyleGAN overview"] },
      { id: "m7c8", title: "Autoencoders", topics: ["Encoder-decoder", "Variational AE", "Denoising AE", "Applications"] },
      { id: "m7c9", title: "DL Optimization", topics: ["Adam & SGD", "Learning rate scheduling", "Batch normalization", "Dropout"] },
      { id: "m7c10", title: "DL Project", topics: ["Dataset pipeline", "Model checkpointing", "TensorBoard", "ONNX export"] },
    ]
  },
  {
    id: "m8", title: "NLP", icon: "💬", color: "#84cc16",
    chapters: [
      { id: "m8c1", title: "Text Preprocessing", topics: ["Tokenization", "Stemming & lemmatization", "Stop words", "Text normalization"] },
      { id: "m8c2", title: "Text Vectorization", topics: ["Bag of Words", "TF-IDF", "Word2Vec", "GloVe"] },
      { id: "m8c3", title: "Sentiment Analysis", topics: ["Lexicon-based", "ML-based", "VADER", "Fine-tuned BERT"] },
      { id: "m8c4", title: "Text Classification", topics: ["Naive Bayes for text", "SVM for text", "FastText", "BERT classification"] },
      { id: "m8c5", title: "Named Entity Recognition", topics: ["spaCy NER", "BiLSTM-CRF", "Hugging Face NER", "Custom NER training"] },
      { id: "m8c6", title: "Topic Modeling", topics: ["LDA", "NMF", "BERTopic", "Coherence score"] },
      { id: "m8c7", title: "Language Models", topics: ["N-gram models", "Neural LM", "GPT series", "Prompt engineering"] },
      { id: "m8c8", title: "Machine Translation", topics: ["Seq2seq", "Attention in MT", "Transformers for MT", "BLEU score"] },
      { id: "m8c9", title: "Question Answering", topics: ["Extractive QA", "Generative QA", "RAG systems", "Evaluation"] },
      { id: "m8c10", title: "NLP Project", topics: ["End-to-end pipeline", "spaCy pipeline", "Hugging Face deploy", "API serving"] },
    ]
  },
  {
    id: "m9", title: "Data Engineering", icon: "⚙️", color: "#64748b",
    chapters: [
      { id: "m9c1", title: "SQL Foundations", topics: ["SELECT / WHERE / JOIN", "GROUP BY / HAVING", "Subqueries", "Window functions"] },
      { id: "m9c2", title: "Advanced SQL", topics: ["CTEs", "Stored procedures", "Indexes", "Query optimization"] },
      { id: "m9c3", title: "Databases", topics: ["PostgreSQL setup", "MySQL vs PostgreSQL", "SQLite for DS", "SQLAlchemy"] },
      { id: "m9c4", title: "NoSQL", topics: ["MongoDB basics", "Document model", "Aggregation pipeline", "Atlas intro"] },
      { id: "m9c5", title: "ETL Pipelines", topics: ["Extract, Transform, Load", "pandas ETL", "Apache Airflow intro", "Prefect intro"] },
      { id: "m9c6", title: "Data Warehousing", topics: ["OLAP vs OLTP", "Star schema", "Snowflake schema", "BigQuery intro"] },
      { id: "m9c7", title: "Apache Spark", topics: ["RDD vs DataFrame", "PySpark basics", "Spark SQL", "MLlib intro"] },
      { id: "m9c8", title: "Cloud for Data", topics: ["AWS S3 & Athena", "GCP BigQuery", "Azure Data Factory", "Databricks intro"] },
      { id: "m9c9", title: "Data Quality", topics: ["Data profiling", "Great Expectations", "dbt intro", "Data lineage"] },
      { id: "m9c10", title: "Streaming Data", topics: ["Kafka basics", "Spark Streaming", "Flink intro", "Real-time dashboards"] },
    ]
  },
  {
    id: "m10", title: "MLOps & Deployment", icon: "🚀", color: "#e11d48",
    chapters: [
      { id: "m10c1", title: "Model Serving", topics: ["Flask API", "FastAPI", "ONNX runtime", "TorchServe"] },
      { id: "m10c2", title: "Docker for ML", topics: ["Dockerfile", "docker-compose", "Container registry", "Multi-stage builds"] },
      { id: "m10c3", title: "MLflow", topics: ["Experiment tracking", "Model registry", "Projects", "Serving with MLflow"] },
      { id: "m10c4", title: "CI/CD for ML", topics: ["GitHub Actions", "DVC", "Model testing", "Automated retraining"] },
      { id: "m10c5", title: "Kubernetes for ML", topics: ["Pods & services", "Deployments", "KubeFlow", "Helm charts"] },
      { id: "m10c6", title: "Monitoring", topics: ["Data drift", "Model drift", "Evidently AI", "Prometheus + Grafana"] },
      { id: "m10c7", title: "Feature Stores", topics: ["Feast", "Hopsworks", "Online vs offline store", "Feature versioning"] },
      { id: "m10c8", title: "Model Explainability", topics: ["SHAP", "LIME", "Captum", "Grad-CAM"] },
      { id: "m10c9", title: "Responsible AI", topics: ["Bias detection", "Fairlearn", "Model cards", "GDPR compliance"] },
      { id: "m10c10", title: "Capstone Project", topics: ["End-to-end project", "Model training", "API deployment", "Dashboard"] },
    ]
  },
];

// ─── QUIZ POOLS (15 per chapter, sample shown for first 2 modules) ─────────────
const QUIZ_POOLS: Record<string, { q: string; options: string[]; ans: number }[]> = {};
SYLLABUS.forEach(mod => {
  mod.chapters.forEach(ch => {
    QUIZ_POOLS[ch.id] = Array.from({ length: 15 }, (_, i) => ({
      q: `${ch.title} — Question ${i + 1}: What is the correct concept?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      ans: i % 4,
    }));
  });
});

// ─── THREE.JS BACKGROUND ──────────────────────────────────────────────────────
function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let animId: number;
    const el = mountRef.current;
    if (!el) return;
    import("three").then((THREE) => {
      const W = el.clientWidth, H = el.clientHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
      camera.position.z = 80;
      const pts: THREE.Vector3[] = [];
      const speeds: number[] = [];
      for (let i = 0; i < 120; i++) {
        pts.push(new THREE.Vector3((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 100));
        speeds.push(0.002 + Math.random() * 0.003);
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.PointsMaterial({ color: 0x3b82f6, size: 0.8, transparent: true, opacity: 0.7 });
      const stars = new THREE.Points(geo, mat);
      scene.add(stars);
      let frame = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        frame++;
        stars.rotation.y += 0.0003;
        stars.rotation.x += 0.0001;
        renderer.render(scene, camera);
      };
      animate();
      const onResize = () => {
        const w = el.clientWidth, h = el.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      };
    }).catch(() => {});
    return () => { cancelAnimationFrame(animId); };
  }, []);
  return <div ref={mountRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ─── BODY CONTENT EDITOR ──────────────────────────────────────────────────────
const BodyContentEditor = ({ chapterId, chapterTitle, onClose }: { chapterId:string; chapterTitle:string; onClose:()=>void }) => {
  const storageKey = `ds_body_${chapterId}`;
  const [sections, setSections] = useState<{heading:string;text:string}[]>(() => {
    try { const s = localStorage.getItem(storageKey); return s ? JSON.parse(s).sections || [] : []; } catch { return []; }
  });
  const addSection = () => setSections(p => [...p, { heading:"New Section", text:"Enter content here..." }]);
  const update = (i:number, field:"heading"|"text", val:string) => {
    const s = [...sections]; s[i] = {...s[i],[field]:val}; setSections(s);
  };
  const remove = (i:number) => setSections(p => p.filter((_,idx)=>idx!==i));
  const save = () => {
    localStorage.setItem(storageKey, JSON.stringify({ sections }));
    onClose();
  };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:10001, padding:"20px", backdropFilter:"blur(8px)" }}>
      <div style={{ background:"#0d0d1a", border:"1px solid rgba(255,165,0,0.3)", borderRadius:"16px", width:"100%", maxWidth:"700px", maxHeight:"90vh", display:"flex", flexDirection:"column", boxShadow:"0 30px 80px rgba(0,0,0,0.7)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 24px", borderBottom:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,165,0,0.06)" }}>
          <div style={{ fontWeight:700, fontSize:"15px", color:"#ffa500" }}>✏️ Edit: {chapterTitle}</div>
          <button onClick={onClose} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.4)", cursor:"pointer", fontSize:"18px" }}>✕</button>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"20px", display:"flex", flexDirection:"column", gap:"14px" }}>
          {sections.map((sec, i) => (
            <div key={i} style={{ padding:"14px", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"10px", background:"rgba(255,255,255,0.02)", display:"flex", flexDirection:"column", gap:"8px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.3)", fontWeight:700 }}>Section {i+1}</span>
                <button onClick={() => remove(i)} style={{ padding:"2px 10px", border:"none", borderRadius:"5px", background:"rgba(255,107,107,0.1)", color:"#ff6b6b", cursor:"pointer", fontSize:"12px" }}>✕ Remove</button>
              </div>
              <input value={sec.heading} onChange={e=>update(i,"heading",e.target.value)} placeholder="Section heading" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:"6px", padding:"9px 12px", color:"white", fontSize:"14px", outline:"none", fontFamily:"inherit" }} />
              <textarea value={sec.text} onChange={e=>update(i,"text",e.target.value)} rows={4} placeholder="Section body content..." style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:"6px", padding:"9px 12px", color:"white", fontSize:"14px", outline:"none", resize:"vertical", fontFamily:"inherit", lineHeight:1.6 }} />
            </div>
          ))}
          <button onClick={addSection} style={{ padding:"10px", border:"1px dashed rgba(255,165,0,0.3)", borderRadius:"8px", background:"rgba(255,165,0,0.05)", color:"rgba(255,165,0,0.7)", cursor:"pointer", fontSize:"13px", fontWeight:600, fontFamily:"inherit" }}>
            + Add Section
          </button>
        </div>
        <div style={{ padding:"14px 24px", borderTop:"1px solid rgba(255,255,255,0.08)", display:"flex", justifyContent:"flex-end", gap:"10px" }}>
          <button onClick={onClose} style={{ padding:"9px 20px", borderRadius:"7px", border:"1px solid rgba(255,255,255,0.15)", background:"transparent", color:"rgba(255,255,255,0.6)", cursor:"pointer", fontSize:"13px", fontFamily:"inherit" }}>Cancel</button>
          <button onClick={save} style={{ padding:"9px 24px", borderRadius:"7px", border:"none", background:"linear-gradient(135deg,#ffa500,#ff6b00)", color:"white", fontWeight:700, cursor:"pointer", fontSize:"13px", fontFamily:"inherit" }}>💾 Save Content</button>
        </div>
      </div>
    </div>
  );
};

// ─── CHAPTER VIEW ─────────────────────────────────────────────────────────────
function ChapterView({ module: mod, chapter, onBack, onQuiz, isMaster = false }: {
  module: typeof SYLLABUS[0];
  chapter: typeof SYLLABUS[0]["chapters"][0];
  onBack: () => void;
  onQuiz: () => void;
  isMaster?: boolean;
}) {
  const [showEditor, setShowEditor] = useState(false);
  const storageKey = `ds_body_${chapter.id}`;

  const getSavedSections = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      const data = saved ? JSON.parse(saved) : null;
      return data?.sections?.filter((s: any) => s.text?.trim()) || [];
    } catch { return []; }
  };
  const [savedSections, setSavedSections] = useState(getSavedSections);

  const handleEditorClose = () => {
    setShowEditor(false);
    setSavedSections(getSavedSections());
  };

  return (
    <div style={{ padding: "28px 32px", color: "#e2e8f0" }}>
      {showEditor && <BodyContentEditor chapterId={chapter.id} chapterTitle={chapter.title} onClose={handleEditorClose} />}
      <button onClick={onBack} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#94a3b8", borderRadius: "8px", padding: "7px 16px", cursor: "pointer", marginBottom: "24px", fontSize: "13px" }}>
        ← Back to chapters
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
        <span style={{ fontSize: "28px" }}>{mod.icon}</span>
        <div>
          <div style={{ color: mod.color, fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{mod.title}</div>
          <h1 style={{ color: "#f1f5f9", fontFamily: "Rajdhani, sans-serif", fontSize: "26px", fontWeight: 700, margin: 0 }}>{chapter.title}</h1>
        </div>
      </div>

      {/* Topics Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px", margin: "24px 0" }}>
        {chapter.topics.map((topic, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${mod.color}30`, borderRadius: "10px", padding: "12px 14px", color: "#cbd5e1", fontSize: "14px" }}>
            <span style={{ color: mod.color, marginRight: "8px" }}>▸</span>{topic}
          </div>
        ))}
      </div>

      {/* Saved Body Content */}
      {savedSections.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <div style={{ color: "#64748b", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>LESSON CONTENT</div>
          {savedSections.map((sec: any, i: number) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px 20px", marginBottom: "12px" }}>
              {sec.heading && <h3 style={{ color: "#e2e8f0", fontFamily: "Rajdhani, sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 8px 0" }}>{sec.heading}</h3>}
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7", margin: 0, whiteSpace: "pre-wrap" }}>{sec.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Saved master body content */}
      {(() => {
        try {
          const saved = localStorage.getItem(`ds_body_${chapter.id}`);
          const data = saved ? JSON.parse(saved) : null;
          if (!data?.sections?.length) return null;
          return (
            <div style={{ marginBottom:"28px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"16px", padding:"8px 14px", background:"rgba(0,212,255,0.06)", borderRadius:"8px", border:"1px solid rgba(0,212,255,0.15)" }}>
                <span style={{ fontSize:"14px" }}>📖</span>
                <span style={{ fontSize:"12px", fontWeight:700, color:"#00d9ff", letterSpacing:"0.5px" }}>LESSON CONTENT</span>
              </div>
              {data.sections.map((sec: any, i: number) => (
                <div key={i} className="content-section">
                  <h3 className="section-heading">{sec.heading}</h3>
                  <p className="section-text">{sec.text}</p>
                </div>
              ))}
            </div>
          );
        } catch { return null; }
      })()}

      {/* Quiz CTA */}
      <div style={{ background: `linear-gradient(135deg, ${mod.color}15, ${mod.color}05)`, border: `1px solid ${mod.color}30`, borderRadius: "14px", padding: "22px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "16px" }}>Ready to test your knowledge?</div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>15 questions • Multiple choice</div>
        </div>
        <button onClick={onQuiz} style={{ background: `linear-gradient(135deg, ${mod.color}, ${mod.color}cc)`, border: "none", color: "#fff", borderRadius: "10px", padding: "12px 24px", cursor: "pointer", fontWeight: 700, fontSize: "15px" }}>
          Start Quiz →
        </button>
      </div>

      {/* Master Edit Panel */}
      {isMaster && (
        <div style={{ marginTop:"16px", padding:"20px", border:"1px solid rgba(255,165,0,0.25)", borderRadius:"12px", background:"rgba(255,165,0,0.05)" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
              <span style={{ fontSize:"22px" }}>✏️</span>
              <div>
                <div style={{ color:"#ffa500", fontWeight:700, fontSize:"14px" }}>Edit Topic Body Content</div>
                <div style={{ color:"rgba(255,255,255,0.4)", fontSize:"12px" }}>Master only — add/edit rich content sections for this chapter</div>
              </div>
            </div>
            <button
              onClick={() => setShowEditor(true)}
              style={{ padding:"10px 22px", border:"1px solid rgba(255,165,0,0.4)", borderRadius:"8px", background:"rgba(255,165,0,0.1)", color:"#ffa500", fontWeight:700, fontSize:"13px", cursor:"pointer", fontFamily:"inherit" }}
            >
              ✏️ Edit Body Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── QUIZ MODAL ────────────────────────────────────────────────────────────────
function QuizModal({ chapter, mod, onClose, onComplete }: {
  chapter: typeof SYLLABUS[0]["chapters"][0];
  mod: typeof SYLLABUS[0];
  onClose: () => void;
  onComplete: (score: number) => void;
}) {
  const questions = QUIZ_POOLS[chapter.id] || [];
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const perPage = 5;
  const totalPages = Math.ceil(questions.length / perPage);
  const pageQs = questions.slice(page * perPage, (page + 1) * perPage);
  const score = submitted ? questions.filter((q, i) => answers[i] === q.ans).length : 0;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div style={{ background: "#0f172a", border: `1px solid ${mod.color}40`, borderRadius: "18px", width: "100%", maxWidth: "680px", maxHeight: "85vh", overflowY: "auto", padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ color: mod.color, fontFamily: "Rajdhani, sans-serif", fontSize: "20px", margin: 0 }}>{chapter.title} Quiz</h2>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", borderRadius: "8px", padding: "6px 12px", cursor: "pointer" }}>✕</button>
        </div>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>{score >= 12 ? "🏆" : score >= 9 ? "🎯" : "📚"}</div>
            <div style={{ color: "#f1f5f9", fontSize: "28px", fontWeight: 700, fontFamily: "Rajdhani, sans-serif" }}>{score}/{questions.length}</div>
            <div style={{ color: "#64748b", marginTop: "8px" }}>{score >= 12 ? "Excellent!" : score >= 9 ? "Good job!" : "Keep practicing!"}</div>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px" }}>
              <button onClick={() => { setSubmitted(false); setAnswers({}); setPage(0); }} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" }}>Retry</button>
              <button onClick={() => onComplete(score)} style={{ background: `linear-gradient(135deg,${mod.color},${mod.color}cc)`, border: "none", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontWeight: 700 }}>Done ✓</button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "20px" }}>Page {page + 1}/{totalPages} · {Object.keys(answers).length}/{questions.length} answered</div>
            {pageQs.map((q, qi) => {
              const gi = page * perPage + qi;
              return (
                <div key={gi} style={{ marginBottom: "22px" }}>
                  <div style={{ color: "#e2e8f0", fontSize: "14px", marginBottom: "10px" }}><span style={{ color: mod.color }}>Q{gi + 1}.</span> {q.q}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {q.options.map((opt, oi) => (
                      <button key={oi} onClick={() => setAnswers(a => ({ ...a, [gi]: oi }))} style={{ background: answers[gi] === oi ? `${mod.color}25` : "rgba(255,255,255,0.05)", border: `1px solid ${answers[gi] === oi ? mod.color : "rgba(255,255,255,0.1)"}`, borderRadius: "8px", color: answers[gi] === oi ? mod.color : "#94a3b8", padding: "9px 12px", cursor: "pointer", textAlign: "left", fontSize: "13px" }}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} style={{ background: "rgba(255,255,255,0.08)", border: "none", color: page === 0 ? "#334155" : "#94a3b8", borderRadius: "8px", padding: "8px 16px", cursor: page === 0 ? "default" : "pointer" }}>← Prev</button>
              {page < totalPages - 1 ? (
                <button onClick={() => setPage(p => p + 1)} style={{ background: `${mod.color}20`, border: `1px solid ${mod.color}40`, color: mod.color, borderRadius: "8px", padding: "8px 16px", cursor: "pointer" }}>Next →</button>
              ) : (
                <button onClick={() => setSubmitted(true)} style={{ background: `linear-gradient(135deg,${mod.color},${mod.color}cc)`, border: "none", color: "#fff", borderRadius: "8px", padding: "8px 18px", cursor: "pointer", fontWeight: 700 }}>Submit Quiz</button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function DataScienceCoursePage() {
  const [activeModule, setActiveModule] = useState(SYLLABUS[0].id);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [quizChapter, setQuizChapter] = useState<typeof SYLLABUS[0]["chapters"][0] | null>(null);
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try { return new Set(JSON.parse(sessionStorage.getItem("ds_completed") || "[]")); } catch { return new Set(); }
  });
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const check = () => setCurrentUser(getLoggedInUser());
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  const isMaster = currentUser?.email === "master@gmail.com";

  const markComplete = (chId: string, score: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.add(chId);
      sessionStorage.setItem("ds_completed", JSON.stringify([...next]));
      return next;
    });
    setQuizChapter(null);
    setActiveChapter(null);
  };

  const currentMod = SYLLABUS.find(m => m.id === activeModule)!;
  const currentChapter = activeChapter ? currentMod.chapters.find(c => c.id === activeChapter) : null;

  const filteredModules = search
    ? SYLLABUS.map(m => ({ ...m, chapters: m.chapters.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.topics.some(t => t.toLowerCase().includes(search.toLowerCase()))) })).filter(m => m.chapters.length)
    : SYLLABUS;

  const totalChapters = SYLLABUS.reduce((a, m) => a + m.chapters.length, 0);
  const progress = Math.round((completed.size / totalChapters) * 100);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #020817; }
        .ds-page { min-height: 100vh; background: #020817; display: flex; flex-direction: column; font-family: 'Exo 2', sans-serif; position: relative; }
        .ds-header { position: relative; z-index: 10; padding: 24px 32px; border-bottom: 1px solid rgba(59,130,246,0.15); background: rgba(2,8,23,0.8); backdrop-filter: blur(20px); display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .ds-title { font-family: 'Rajdhani', sans-serif; font-size: 28px; font-weight: 700; background: linear-gradient(135deg,#3b82f6,#60a5fa,#93c5fd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        .ds-search { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #e2e8f0; padding: 9px 16px; font-size: 14px; font-family: 'Exo 2', sans-serif; outline: none; min-width: 220px; }
        .ds-search::placeholder { color: #475569; }
        .ds-body { display: flex; flex: 1; position: relative; z-index: 5; overflow: hidden; height: calc(100vh - 80px); }
        .ds-sidebar { width: 280px; min-width: 260px; border-right: 1px solid rgba(255,255,255,0.06); overflow-y: auto; padding: 16px 0; background: rgba(2,8,23,0.6); backdrop-filter: blur(20px); }
        .ds-sidebar::-webkit-scrollbar { width: 4px; } .ds-sidebar::-webkit-scrollbar-track { background: transparent; } .ds-sidebar::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 2px; }
        .ds-content { flex: 1; overflow-y: auto; background: rgba(2,8,23,0.5); }
        .ds-content::-webkit-scrollbar { width: 5px; } .ds-content::-webkit-scrollbar-track { background: transparent; } .ds-content::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.25); border-radius: 2px; }
        .mod-item { display: flex; align-items: center; gap: 10px; padding: 11px 18px; cursor: pointer; transition: all 0.2s; border-left: 3px solid transparent; font-size: 13px; color: #64748b; }
        .mod-item:hover { color: #cbd5e1; background: rgba(255,255,255,0.04); }
        .mod-item.active { color: #f1f5f9; background: rgba(59,130,246,0.08); }
        .ch-item { display: flex; align-items: center; gap: 8px; padding: 8px 16px 8px 48px; cursor: pointer; font-size: 12.5px; color: #475569; transition: all 0.2s; }
        .ch-item:hover { color: #94a3b8; background: rgba(255,255,255,0.03); }
        .ch-item.active { color: #60a5fa; }
        .chapters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; padding: 28px 32px; }
        .ch-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 18px; cursor: pointer; transition: all 0.2s; position: relative; }
        .ch-card:hover { background: rgba(255,255,255,0.07); transform: translateY(-2px); }
        .ch-card.done { border-color: rgba(16,185,129,0.3); }
        .progress-bar { height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; margin: 12px 0; }
        .progress-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg,#3b82f6,#60a5fa); transition: width 0.4s; }
      `}</style>

      <div className="ds-page">
        <ThreeBackground />
        {quizChapter && (
          <QuizModal chapter={quizChapter} mod={currentMod} onClose={() => setQuizChapter(null)} onComplete={(s) => markComplete(quizChapter.id, s)} />
        )}
        <header className="ds-header">
          <div style={{ flex: 1 }}>
            <h1 className="ds-title">📊 Data Science Course</h1>
            <div style={{ color: "#475569", fontSize: "12px", marginTop: "2px" }}>{completed.size}/{totalChapters} chapters complete · {progress}%</div>
            <div className="progress-bar" style={{ width: "200px" }}><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
          </div>
          {isMaster && (
            <div style={{ background: "rgba(251,146,60,0.15)", border: "1px solid rgba(251,146,60,0.3)", borderRadius: "8px", padding: "6px 14px", color: "#fb923c", fontSize: "13px", fontWeight: 700 }}>
              ⚙️ Master Mode
            </div>
          )}
          <input className="ds-search" placeholder="🔍 Search chapters..." value={search} onChange={e => setSearch(e.target.value)} />
        </header>

        <div className="ds-body">
          <aside className="ds-sidebar">
            {filteredModules.map(mod => (
              <div key={mod.id}>
                <div
                  className={`mod-item ${activeModule === mod.id ? "active" : ""}`}
                  style={{ borderLeftColor: activeModule === mod.id ? mod.color : "transparent" }}
                  onClick={() => { setActiveModule(mod.id); setActiveChapter(null); }}
                >
                  <span style={{ fontSize: "16px" }}>{mod.icon}</span>
                  <span style={{ fontWeight: activeModule === mod.id ? 600 : 400 }}>{mod.title}</span>
                  <span style={{ marginLeft: "auto", color: "#334155", fontSize: "11px" }}>{mod.chapters.filter(c => completed.has(c.id)).length}/{mod.chapters.length}</span>
                </div>
                {activeModule === mod.id && mod.chapters.map(ch => (
                  <div key={ch.id} className={`ch-item ${activeChapter === ch.id ? "active" : ""}`} onClick={() => setActiveChapter(ch.id)}>
                    <span>{completed.has(ch.id) ? "✅" : "○"}</span>
                    <span>{ch.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </aside>

          <main className="ds-content">
            {currentChapter ? (
              <ChapterView
                module={currentMod}
                chapter={currentChapter}
                onBack={() => setActiveChapter(null)}
                onQuiz={() => setQuizChapter(currentChapter)}
                isMaster={isMaster}
              />
            ) : (
              <div>
                <div style={{ padding: "28px 32px 8px", color: "#f1f5f9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                    <span style={{ fontSize: "28px" }}>{currentMod.icon}</span>
                    <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontSize: "24px", fontWeight: 700, margin: 0, color: currentMod.color }}>{currentMod.title}</h2>
                  </div>
                  <p style={{ color: "#475569", fontSize: "14px", margin: 0 }}>{currentMod.chapters.length} chapters · Click a chapter to begin</p>
                </div>
                <div className="chapters-grid">
                  {currentMod.chapters.map((ch, i) => (
                    <div key={ch.id} className={`ch-card ${completed.has(ch.id) ? "done" : ""}`} onClick={() => setActiveChapter(ch.id)}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                        <span style={{ color: currentMod.color, fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>CH {i + 1}</span>
                        {completed.has(ch.id) && <span style={{ color: "#10b981", fontSize: "14px" }}>✓</span>}
                      </div>
                      <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px", marginBottom: "8px" }}>{ch.title}</div>
                      <div style={{ color: "#475569", fontSize: "12px" }}>{ch.topics.slice(0, 2).join(" · ")}{ch.topics.length > 2 ? ` +${ch.topics.length - 2}` : ""}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {/* SEO Hidden Content */}
        <div style={{ position: "absolute", left: "-9999px", visibility: "hidden" }} aria-hidden="true">
          <h1>Data Science Course Online — Learn Python, ML, Deep Learning, NLP, MLOps</h1>
          <h2>Complete Data Science Curriculum by Seekho With Rua</h2>
          <p>Master data science from scratch with Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch, NLP with BERT, Data Engineering with Apache Spark, and MLOps with Docker and Kubernetes.</p>
        </div>
      </div>
    </>
  );
}