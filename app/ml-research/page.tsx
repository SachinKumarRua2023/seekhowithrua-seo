import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning for Research | Genomics Drug Discovery | Seekho With Rua",
  description:
    "Advanced Machine Learning for scientific research. Learn ML applications in genomics, drug discovery, climate science, and physics simulations. Research-focused ML course with Seekho With Rua.",

  keywords: [
    "machine learning research",
    "ML for genomics",
    "drug discovery ML",
    "scientific machine learning",
    "bioinformatics",
    "climate science ML",
    "physics simulations",
    "research methodology",
  ],

  alternates: {
    canonical: "https://seekhowithrua.com/ml-research",
  },

  openGraph: {
    title: "Machine Learning for Research | Seekho With Rua",
    description:
      "Advanced ML for scientific research: genomics, drug discovery, climate science, and physics simulations.",
    url: "https://seekhowithrua.com/ml-research",
    type: "website",
  },
};

export default function MLResearch() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        🧬 Machine Learning for Research
      </h1>

      <p className="mt-4 text-lg">
        Advanced ML techniques for scientific research applications. Learn how to apply 
        ML to genomics, drug discovery, climate science, physics simulations, and other 
        research domains with case studies.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        📚 Course Modules
      </h2>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li><strong>ML in Genomics:</strong> DNA sequencing, gene expression analysis</li>
        <li><strong>Drug Discovery:</strong> Molecular property prediction</li>
        <li><strong>Climate Science:</strong> Weather prediction, climate modeling</li>
        <li><strong>Physics Simulations:</strong> Surrogate modeling, data-driven physics</li>
        <li><strong>Research Methodology:</strong> Reproducibility, peer review</li>
        <li><strong>High-Performance Computing:</strong> Parallel ML, GPU computing</li>
        <li><strong>Scientific Visualization:</strong> Advanced plotting for research</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        💻 Python Implementation Example
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto text-sm">
{`# ML for Research - Genomics Example (Gene Expression Classification)
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt

# Simulated genomics dataset
# Features: gene expression levels for 1000 genes
# Target: disease subtype (0, 1, 2)
np.random.seed(42)
n_samples = 500
n_genes = 1000

# Generate synthetic gene expression data
X = np.random.randn(n_samples, n_genes)
# Create disease subtypes based on gene expression patterns
y = np.zeros(n_samples, dtype=int)
for i in range(n_samples):
    if X[i, :50].mean() > 0.5:
        y[i] = 1
    elif X[i, 50:100].mean() > 0.3:
        y[i] = 2

print(f"Dataset: {n_samples} samples, {n_genes} genes")
print(f"Classes: {np.bincount(y)}")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

# Preprocessing: Standardize
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Dimensionality Reduction for visualization
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_train_scaled)

# Train Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train_scaled, y_train)

# Cross-validation
cv_scores = cross_val_score(rf, X_train_scaled, y_train, cv=5)
print(f"\\nCross-validation accuracy: {cv_scores.mean():.4f}")

# Test performance
y_pred = rf.predict(X_test_scaled)
print(f"Test Accuracy: {rf.score(X_test_scaled, y_test):.4f}")

# Feature importance (top genes)
feature_importance = rf.feature_importances_
top_genes = np.argsort(feature_importance)[-20:][::-1]
print(f"\\nTop 20 important genes: {top_genes}")

# Visualization
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# 1. PCA visualization
colors = ['red', 'green', 'blue']
for i in range(3):
    mask = y_train == i
    axes[0].scatter(X_pca[mask, 0], X_pca[mask, 1], 
                     c=colors[i], label=f'Disease Type {i}', alpha=0.6)
axes[0].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.2%} variance)')
axes[0].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.2%} variance)')
axes[0].set_title('Gene Expression PCA')
axes[0].legend()
axes[0].grid(True)

# 2. Feature importance
axes[1].barh(range(20), feature_importance[top_genes])
axes[1].set_yticks(range(20))
axes[1].set_yticklabels([f'Gene {i}' for i in top_genes])
axes[1].set_xlabel('Importance')
axes[1].set_title('Top 20 Important Genes')

plt.tight_layout()
plt.show()`}
      </pre>

      <div className="mt-10 p-6 bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg">
        <h3 className="text-xl font-bold mb-4">🎯 Learning Outcomes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-purple-300">Genomics</h4>
            <p className="text-sm">Apply ML to DNA sequencing and gene expression analysis</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-pink-300">Drug Discovery</h4>
            <p className="text-sm">Predict molecular properties for drug development</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-blue-300">Climate Science</h4>
            <p className="text-sm">Build climate models and weather prediction systems</p>
          </div>
          <div className="bg-black/30 p-4 rounded">
            <h4 className="font-semibold text-green-300">Research Skills</h4>
            <p className="text-sm">Learn reproducibility and peer review methodologies</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a 
          href="https://app.seekhowithrua.com/signup"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
        >
          🚀 Enroll in ML for Research →
        </a>
      </div>
    </main>
  );
}
