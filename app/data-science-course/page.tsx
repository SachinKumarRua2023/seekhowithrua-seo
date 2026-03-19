// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/data-science-course/page.tsx
// ACTION: REPLACE existing page.tsx inside app/data-science-course/
// NOTE: This replaces the old large file with the clean template approach
// ============================================================

import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Data Science Course India | Python, ML, Deep Learning, MLOps | SeekhowithRua",
  description: "Master Data Science with Python, NumPy, Pandas, Scikit-learn, TensorFlow, NLP and MLOps. Best data science course India 2025 by Master Rua.",
  keywords: ["data science course india", "machine learning course hindi", "python data science", "deep learning course india", "mlops course india", "data science with AI india"],
  alternates: { canonical: "https://seekhowithrua.com/data-science-course" },
  openGraph: {
    title: "Data Science Course | SeekhowithRua",
    description: "Master Python, ML, Deep Learning and MLOps with Master Rua.",
    url: "https://seekhowithrua.com/data-science-course",
    type: "website",
  },
};

const COURSE = {
  slug: "data-science-course",
  title: "Data Science",
  description: "Master data science end-to-end — Python, NumPy, Pandas, statistics, ML, deep learning, NLP, data engineering and MLOps.",
  keywords: ["data science course india", "machine learning course hindi", "python data science", "deep learning india"],
  color: "#3b82f6",
  icon: "📊",
  modules: [
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
        { id: "m4c5", title: "Correlation & Regression", topics: ["Pearson correlation", "Spearman correlation", "Linear regression math", "Residual analysis"] },
        { id: "m4c6", title: "Linear Algebra", topics: ["Vectors & matrices", "Matrix operations", "Eigenvalues", "SVD intro"] },
        { id: "m4c7", title: "Calculus for DS", topics: ["Derivatives basics", "Chain rule", "Gradients", "Optimization intuition"] },
        { id: "m4c8", title: "Information Theory", topics: ["Entropy", "KL Divergence", "Mutual information", "Cross entropy"] },
        { id: "m4c9", title: "SciPy for Stats", topics: ["scipy.stats module", "Distribution fitting", "Statistical tests", "Curve fitting"] },
        { id: "m4c10", title: "Math Project", topics: ["Stats on real dataset", "Probability simulations", "Linear algebra in ML", "Full math report"] },
      ]
    },
    {
      id: "m5", title: "Machine Learning", icon: "🤖", color: "#ec4899",
      chapters: [
        { id: "m5c1", title: "ML Fundamentals", topics: ["Supervised vs unsupervised", "Training/test split", "Overfitting & underfitting", "Bias-variance tradeoff"] },
        { id: "m5c2", title: "Linear & Logistic Regression", topics: ["Simple linear regression", "Multiple regression", "Sigmoid function", "Decision boundary"] },
        { id: "m5c3", title: "Decision Trees & Random Forests", topics: ["Gini impurity", "Information gain", "Bagging", "Feature importance"] },
        { id: "m5c4", title: "SVM & KNN", topics: ["Hyperplane", "Kernel trick", "Distance metrics", "K selection"] },
        { id: "m5c5", title: "Clustering", topics: ["K-Means", "DBSCAN", "Hierarchical clustering", "Silhouette score"] },
        { id: "m5c6", title: "Ensemble Methods", topics: ["AdaBoost", "Gradient Boosting", "XGBoost", "Stacking"] },
        { id: "m5c7", title: "Model Evaluation", topics: ["Confusion matrix", "Precision & recall", "F1 score", "ROC-AUC"] },
        { id: "m5c8", title: "Feature Engineering", topics: ["Encoding techniques", "Scaling methods", "Feature creation", "Selection methods"] },
        { id: "m5c9", title: "Hyperparameter Tuning", topics: ["GridSearchCV", "RandomizedSearchCV", "Optuna", "Cross-validation"] },
        { id: "m5c10", title: "Scikit-learn Pipeline", topics: ["Pipeline API", "ColumnTransformer", "Model persistence", "Full workflow"] },
      ]
    },
    {
      id: "m6", title: "Deep Learning", icon: "🔮", color: "#f97316",
      chapters: [
        { id: "m6c1", title: "Neural Network Basics", topics: ["Perceptron", "Activation functions", "Forward pass", "Backpropagation"] },
        { id: "m6c2", title: "TensorFlow & Keras", topics: ["Sequential API", "Functional API", "Model compilation", "fit() & evaluate()"] },
        { id: "m6c3", title: "PyTorch Basics", topics: ["Tensor operations", "Autograd", "nn.Module", "Training loop"] },
        { id: "m6c4", title: "CNNs", topics: ["Convolution operation", "Pooling", "Famous architectures", "Transfer learning"] },
        { id: "m6c5", title: "RNNs & LSTMs", topics: ["Sequence modeling", "Vanishing gradient", "LSTM gates", "Bidirectional RNN"] },
        { id: "m6c6", title: "Transformers", topics: ["Attention mechanism", "Self-attention", "Encoder-decoder", "BERT & GPT intro"] },
        { id: "m6c7", title: "GANs", topics: ["Generator & discriminator", "Training GAN", "Mode collapse", "StyleGAN overview"] },
        { id: "m6c8", title: "DL Optimization", topics: ["Adam & SGD", "Learning rate scheduling", "Batch normalization", "Dropout"] },
        { id: "m6c9", title: "Computer Vision", topics: ["Image classification", "Object detection", "YOLO", "Semantic segmentation"] },
        { id: "m6c10", title: "DL Project", topics: ["Dataset pipeline", "Model checkpointing", "TensorBoard", "ONNX export"] },
      ]
    },
    {
      id: "m7", title: "NLP", icon: "💬", color: "#84cc16",
      chapters: [
        { id: "m7c1", title: "Text Preprocessing", topics: ["Tokenization", "Stemming & lemmatization", "Stop words", "Text normalization"] },
        { id: "m7c2", title: "Text Vectorization", topics: ["Bag of Words", "TF-IDF", "Word2Vec", "GloVe"] },
        { id: "m7c3", title: "Sentiment Analysis", topics: ["Lexicon-based", "ML-based", "VADER", "Fine-tuned BERT"] },
        { id: "m7c4", title: "Text Classification", topics: ["Naive Bayes for text", "SVM for text", "FastText", "BERT classification"] },
        { id: "m7c5", title: "Named Entity Recognition", topics: ["spaCy NER", "BiLSTM-CRF", "Hugging Face NER", "Custom NER training"] },
        { id: "m7c6", title: "Topic Modeling", topics: ["LDA", "NMF", "BERTopic", "Coherence score"] },
        { id: "m7c7", title: "Language Models", topics: ["N-gram models", "Neural LM", "GPT series", "Prompt engineering"] },
        { id: "m7c8", title: "RAG Systems", topics: ["Vector databases", "Embeddings", "Retrieval pipeline", "LangChain basics"] },
        { id: "m7c9", title: "Question Answering", topics: ["Extractive QA", "Generative QA", "RAG systems", "Evaluation"] },
        { id: "m7c10", title: "NLP Project", topics: ["End-to-end pipeline", "spaCy pipeline", "Hugging Face deploy", "API serving"] },
      ]
    },
    {
      id: "m8", title: "Data Engineering", icon: "⚙️", color: "#64748b",
      chapters: [
        { id: "m8c1", title: "SQL Foundations", topics: ["SELECT / WHERE / JOIN", "GROUP BY / HAVING", "Subqueries", "Window functions"] },
        { id: "m8c2", title: "Advanced SQL", topics: ["CTEs", "Stored procedures", "Indexes", "Query optimization"] },
        { id: "m8c3", title: "PostgreSQL & SQLAlchemy", topics: ["PostgreSQL setup", "SQLAlchemy ORM", "Migrations", "Connection pooling"] },
        { id: "m8c4", title: "ETL Pipelines", topics: ["Extract, Transform, Load", "pandas ETL", "Apache Airflow intro", "Prefect intro"] },
        { id: "m8c5", title: "Apache Spark", topics: ["RDD vs DataFrame", "PySpark basics", "Spark SQL", "MLlib intro"] },
        { id: "m8c6", title: "Cloud for Data", topics: ["AWS S3 & Athena", "GCP BigQuery", "Azure Data Factory", "Databricks intro"] },
        { id: "m8c7", title: "Data Quality", topics: ["Data profiling", "Great Expectations", "dbt intro", "Data lineage"] },
        { id: "m8c8", title: "Streaming Data", topics: ["Kafka basics", "Spark Streaming", "Flink intro", "Real-time dashboards"] },
        { id: "m8c9", title: "NoSQL Databases", topics: ["MongoDB basics", "Document model", "Aggregation pipeline", "Redis caching"] },
        { id: "m8c10", title: "Data Engineering Project", topics: ["Full pipeline build", "Orchestration", "Monitoring", "Documentation"] },
      ]
    },
    {
      id: "m9", title: "MLOps & Deployment", icon: "🚀", color: "#e11d48",
      chapters: [
        { id: "m9c1", title: "Model Serving", topics: ["Flask API", "FastAPI", "ONNX runtime", "TorchServe"] },
        { id: "m9c2", title: "Docker for ML", topics: ["Dockerfile", "docker-compose", "Container registry", "Multi-stage builds"] },
        { id: "m9c3", title: "MLflow", topics: ["Experiment tracking", "Model registry", "Projects", "Serving with MLflow"] },
        { id: "m9c4", title: "CI/CD for ML", topics: ["GitHub Actions", "DVC", "Model testing", "Automated retraining"] },
        { id: "m9c5", title: "Kubernetes for ML", topics: ["Pods & services", "Deployments", "KubeFlow", "Helm charts"] },
        { id: "m9c6", title: "Monitoring", topics: ["Data drift", "Model drift", "Evidently AI", "Prometheus + Grafana"] },
        { id: "m9c7", title: "Feature Stores", topics: ["Feast", "Hopsworks", "Online vs offline store", "Feature versioning"] },
        { id: "m9c8", title: "Model Explainability", topics: ["SHAP", "LIME", "Captum", "Grad-CAM"] },
        { id: "m9c9", title: "Responsible AI", topics: ["Bias detection", "Fairlearn", "Model cards", "GDPR compliance"] },
        { id: "m9c10", title: "Capstone Project", topics: ["End-to-end project", "Model training", "API deployment", "Dashboard"] },
      ]
    },
  ],
};

export default function DataSciencePage() {
  return <CoursePageTemplate course={COURSE} />;
}